import React, {useState} from 'react';
import {Form, Button, FormGroup, Col} from "react-bootstrap";

import useTranslation from "../../hooks/useTranslation";
import { logEvent } from '../../../lib/analytics';
import {
  createCountrySelect,
  createProvinceSelect,
  createListSelect,
  createMultiChoice,
  createSimpleInput,
  createDateInput
} from "./select-helpers";

const getInputs = () => [{
  caption: 'Company',
  name: 'C0ICompanyName',
  required: true,
}, {
  caption: 'Department',
  name: 'C1IDepartment',
}, {
  caption: 'Address Line 1',
  name: 'C2IAddressLine1',
  required: true,
}, {
  caption: 'Address Line 2',
  name: 'C3IAddressLine2',
}, {
  caption: 'City / Town',
  name: 'C4ICity',
}, {
  caption: 'Zip / Postal Code',
  name: 'C6IZipCode',
}, {
  caption: 'Country',
  name: 'C7ICountry',
  required: true,
  isCountrySelect: true,
}, {
  caption: 'State',
  name: 'C5IStateProvince',
  required: true,
  isProvinceSelect: true,
}, {
  caption: 'Main Phone',
  name: 'C8IPhone1',
  required: true,
}, {
  caption: 'Fax',
  name: 'C9IPhone2',
}, {
  caption: 'Website',
  name: 'U10I58851',
}, {
  caption: 'Applications',
  name: 'U11I87',
  required: true,
  isMultiChoice: true,
  list: 'appList',
}, {
  caption: 'First Name',
  name: 'C14IFirstName',
  required: true,
}, {
  caption: 'Last Name',
  name: 'C15ILastName',
  required: true,
}, {
  caption: 'Position',
  name: 'C16IPosition',
}, {
  caption: 'Email Address',
  name: 'U17I58850',
  required: true,
}, {
  caption: 'Phone',
  name: 'C18IPhone3',
  required: true,
}, {
  caption: 'Extension',
  name: 'C19IPhone3Extension',
}, {
  caption: 'Other',
  name: 'C20IPhone4',
}, {
  caption: 'Extension',
  name: 'C21IPhone4Extension',
}, {
  caption: 'Sim#',
  name: 'U22I17',
  type: 'number',
  required: true,
}, {
  caption: 'License Type',
  name: 'U23I140',
  required: true,
  isList: true,
  list: 'simTypes',
}, {
  caption: 'Robotmaster Product',
  name: 'U24I18',
  required: true,
  isList: true,
  list: 'rProducts',
}, {
  caption: 'Robotmaster Options',
  name: 'U25I20',
  isMultiChoice: true,
  list: 'rOptions',
}, {
  caption: 'Robot Brand used by customer',
  name: 'U26I19',
  required: true,
  isMultiChoice: true,
  list: 'rBrands',
}, {
  caption: 'Moldplus products',
  name: 'U27I22',
  isMultiChoice: true,
  list: 'mPlusProducts',
}, {
  caption: 'Mastercam Product',
  name: 'U28I21',
  isMultiChoice: true,
  list: 'mCamProducts',
}, {
  caption: 'Expiry Date',
  name: 'U29I24',
  required: true,
  type: 'date',
  dValidation: false,
}, {
  caption: 'Reseller',
  name: 'temp2',
}, {
  caption: 'Distributor',
  name: 'temp3',
}, {
  caption: 'Email EVAL licenses to',
  name: 'temp4',
}, {
  caption: 'Comments',
  name: 'temp1',
  multiline: true,
}];

const createFormInput = (input, isCountryUS, setIsCountryUS) => {
  if (input.isCountrySelect) {
    return createCountrySelect(input, setIsCountryUS);
  }
  if (input.isList) {
    return createListSelect(input);
  }
  if (input.isMultiChoice) {
    return createMultiChoice(input);
  }

  if (input.isProvinceSelect && isCountryUS) {
    return createProvinceSelect(input);
  } else if (!input.isProvinceSelect && input.type !== 'date') {
    return createSimpleInput(input);
  } else if (input.type === 'date') {
    return createDateInput(input);
  }
};

const handleSubmit = (e, t, locale, props) => {
  e.preventDefault();

  //TODO: handle robotWarning

  let country = e.target.C3ICountry.value.trim();
  if (country === 'US') {
    country = 'USA';
  } else {
    country = t('cc.' + country);
  }

  const bodyToFetch =
      {
        C0ILastName: e.target.C0ILastName.value.trim(),
        C1IFirstName: 'First name',
        U1I58850: e.target.U1I58850.value.trim(),
        C2ICompanyName: e.target.C2ICompanyName.value.trim(),
        C3ICountry: country,
        C4IStateProvince: country === 'USA' ? e.target.C4IStateProvince.value.trim() : '',
        C5IPhone1: e.target.C5IPhone1.value.trim(),
        U6I30: e.target.U6I30.value.trim(),
        U7I57997: 'Website', // "Sales\Lead source" hidden field
        U8I6: '*Robotmaster lead', // "Classification" hidden field
      };
  const emailToSend =
      {
        name: e.target.C0ILastName.value.trim(),
        email: e.target.U1I58850.value.trim(),
        company: e.target.C2ICompanyName.value.trim(),
        country: country,
        state: country === 'USA' ? e.target.C4IStateProvince.value.trim() : '',
        phone: e.target.C5IPhone1.value.trim(),
        info: e.target.U6I30.value.trim(),
        robot: e.target.robot.value.trim(),
        requestingPage: props.requestingPage,
        language: locale,
      };

  //TODO: move this url into env

  // Send to CRM
  fetch('https://caw.maximizercrmlive.com/Webform.aspx?request=submitwebform&token=5F50535F174C4C4330591416151F47264D1209314B67696778414D7C0D7F2B58185452414D4B476458421E5D1D477E41180C634D676C677A494A7F5C79735D565453474648416D5B421218504474421D0A624C6C69697D42482E5A2C7C0A50565246444842365D4212111E4772471F5F66426F67687E464D7B5F78785F57525344144E4264094515114E4376444808314A3C6E697B474D785E797F5154575711454D44375D4616431A1177461E5C624E6F3F6F7D411B7D587F795850555347144947615E451211184573431A0B304C6C69697D42482E5E797A50550657134548446C591616121A4677421A0A624E6F6B6F79411E7B5E782B5F51555F45104E46625D4217161D457F44180D364A6C6E3D7E4548755E7D7A0E5153574B4049446C584316161A4572431B0D62196F686A79414D7D0A7F7E585D5551424C4942645E401111134671441F0D604C6A686B7C44482E597D7F5E51505243401F41305D4212111F11724C1E58624E6F6E6F7941487C587F72',
      {
        method: 'POST',
        body: bodyToFetch,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
  .then(() => {

    // Send email
    fetch('/api/request-information',
        {
          method: 'POST',
          body: emailToSend,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(() => {
      window.location.href = `/${locale}/contact/information-request-success`;
    });

    window.scrollTo(0, 0);
    logEvent('form', props.gaEvent);
  })
  .catch(err => console.error("Error:", err));

  return false;
};

const trialForm = (props) => {
  const [isCountryUS, setIsCountryUS] = useState(false);
  const { t, locale } = useTranslation();
  const inputs = getInputs(t);

  return (
      <React.Fragment>

        {/*TODO: show messages here*/}

        <Form horizontal name='form' onSubmit={(e) => handleSubmit(e, t, locale, props)}>
          {inputs.map(input => createFormInput(input, isCountryUS, setIsCountryUS))}
          <FormGroup>
            <Col sm={{span: 4, offset: 2}}>
              <Button type='submit' variant='primary'>
                {t('general-send')}
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </React.Fragment>
  );
};

export default trialForm;