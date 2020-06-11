import fs from "fs";
import path from "path";
import mustache from "mustache/mustache";
import aws from 'aws-sdk';

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

function sendEmail(ses, sourceEmailAddress, destEmailAddress, subject, email) {
  ses.sendEmail({
    Source: sourceEmailAddress,
    Destination: {
      ToAddresses: [destEmailAddress],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: email,
        },
      },
    },
  }, function(err) {
    if (err) {
      console.log('ERROR | REQUEST-INFORMATION | sendEmail | ', err);
    }
  });
}

function validateForm(form) {
  const validation = {
    success: true,
    messages: [],
  };

  if (!form.name) {
    validation.success = false;
    validation.messages.push('You must include your name.');
  }

  if (!form.email) {
    validation.success = false;
    validation.messages.push('You must include an email address.');
  }

  if (!form.company) {
    validation.success = false;
    validation.messages.push('You must include a company name.');
  }

  if (!form.country) {
    validation.success = false;
    validation.messages.push('You must include a country.');
  }

  if (!form.phone) {
    validation.success = false;
    validation.messages.push('You must include a phone number.');
  }

  if (form.robot) {
    validation.success = false;
    validation.messages.push('You must be a human.');
  }

  //TODO: ugly solution from the old codebase, refactor
  if (form.requestingPage === 'trial-request') {
    validation.success = true;
  }

  return validation;
}

function getDictionary() {
  const localesDirectory = path.join(process.cwd(), 'lib/translations/locales');
  const fileNames = fs.readdirSync(localesDirectory);
  const dictionary = {};

  for (const fileName of fileNames) {
    const fullPath = path.join(localesDirectory, fileName);
    try {
      if (fs.lstatSync(fullPath).isDirectory()) {
        const locale = fullPath.slice(-2);
        dictionary[locale] = JSON.parse(fs.readFileSync(`${fullPath}/common.json`, 'utf8'));
      }
    } catch (e) {
      console.log('ERROR | REQUEST-INFORMATION | getDictionary | ', e);
    }
  }

  return dictionary;
}

function assembleRobotMasterEmail(req) {
  try {
    const templatesDirectory = path.join(process.cwd(), 'lib/email-templates');
    let template;

    switch (req.body.version) {
      case 'v6':
        template = fs.readFileSync(`${templatesDirectory}/form-v6-trial.tpl`, 'utf-8');
        break;
      case 'v7':
        template = fs.readFileSync(`${templatesDirectory}/form-v7-trial.tpl`, 'utf-8');
        break;
      default:
        template = fs.readFileSync(`${templatesDirectory}/form.tpl`, 'utf-8');
        break;
    }

    return mustache.render(template, req.body);
  } catch (e) {
    console.log('ERROR | REQUEST-INFORMATION | assembleRobotMasterEmail | ', e);
  }
}

function assembleConfirmationEmail(req, dictionary) {
  try {
    const templatesDirectory = path.join(process.cwd(), 'lib/email-templates');

    const confirmationEmailMessage = {
      name: req.body.name,
      message: req.body.requestingPage === 'live-demo' ?
          dictionary[req.body.language]['confirmation-email-live-demo-message'] :
          dictionary[req.body.language]['confirmation-email-contact-message'],
    };

    const template = fs.readFileSync(`${templatesDirectory}/confirmationMail.tpl`, 'utf-8');
    return mustache.render(template, confirmationEmailMessage);
  } catch (e) {
    console.log('ERROR | REQUEST-INFORMATION | assembleRobotMasterEmail | ', e);
  }
}

function handlePostRequest(req, res) {
  const validation = validateForm(req.body);
  if (!validation.success) {
    return res.json(validation);
  }

  const response = {
    success: true,
    messages: ['Your request has been sent, someone will be in touch with you shortly.']
  }

  const requestingPage = req.body.requestingPage;
  const language = req.body.language;
  const dictionary = getDictionary();

  const ses = new aws.SES();

  if (requestingPage === 'trial-request') {
    const emailForRobotMaster = assembleRobotMasterEmail(req);

    sendEmail(
        ses,
        'trials@robotmaster.com',
        'trials@robotmaster.com',
        'Robotmaster Information Request - Page: ' + requestingPage,
        emailForRobotMaster,
    );
  } else {
    try {
      const countryList  = JSON.parse(fs.readFileSync(`${process.cwd()}/lib/translations/locales/country-list.json`, 'utf8'));

      const sourceEmailAddress = (requestingPage === 'live-demo') ?
          'sales@robotmaster.com' :
          'info@robotmaster.com';
      const destEmailAddress = req.body.state ?
          countryList
          .find(country => country.countryCode === 'US')
          .states.find(state => state.stateCode === req.body.state).email
          :
          countryList
          .find(country => country.name === req.body.country).email;

      const emailForRobotMaster = assembleRobotMasterEmail(req);
      const emailForCustomer = assembleConfirmationEmail(req, dictionary);

      sendEmail(
          ses,
          sourceEmailAddress,
          destEmailAddress,
          'Robotmaster Information Request - Page: ' + requestingPage,
          emailForRobotMaster,
      );

      sendEmail(
          ses,
          '"Robotmaster" <' + sourceEmailAddress + '>',
          req.body.email,
          dictionary[language]['confirmation-email-subject'],
          emailForCustomer,
      );
    } catch (e) {
      //TODO: handle response
      console.log('ERROR | REQUEST-INFORMATION | assembleRobotMasterEmail | ', e);
    }
  }

  res.json(response);
}

export default (req, res) => {
  if (req.method === 'POST') {
    handlePostRequest(req, res);

  } else {
    // Handle any other HTTP method
  }
};