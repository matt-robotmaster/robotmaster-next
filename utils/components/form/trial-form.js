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

//TODO: copy from old codebase, refactor

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

const createFormInput = (input, isCountryUS, setIsCountryUS, selectedOptions, setSelectedOptions) => {
  if (input.isCountrySelect) {
    return createCountrySelect(input, setIsCountryUS);
  }
  if (input.isList) {
    return createListSelect(input);
  }
  if (input.isMultiChoice) {
    return createMultiChoice(input, selectedOptions, setSelectedOptions);
  }

  if (input.isProvinceSelect && isCountryUS) {
    return createProvinceSelect(input);
  } else if (!input.isProvinceSelect && input.type !== 'date') {
    return createSimpleInput(input);
  } else if (input.type === 'date') {
    return createDateInput(input);
  }
};

const handleSubmit = (e, locale, props, selectedOptions) => {
  e.preventDefault();

  const postData = {
    C0ICompanyName: e.target.C0ICompanyName.value.trim(),
    C1IDepartment: e.target.C1IDepartment.value.trim(),
    C2IAddressLine1: e.target.C2IAddressLine1.value.trim(),
    C3IAddressLine2: e.target.C3IAddressLine2.value.trim(),
    C4ICity: e.target.C4ICity.value.trim(),
    C5IStateProvince: (e.target.C5IStateProvince) ?
        e.target.C5IStateProvince.value.trim() : '',
    C6IZipCode: e.target.C6IZipCode.value.trim(),
    C7ICountry: e.target.C7ICountry.value.trim(),
    C8IPhone1: e.target.C8IPhone1.value.trim(),
    C9IPhone2: e.target.C9IPhone2.value.trim(),
    U10I58851: e.target.U10I58851.value.trim(),
    U11I87: selectedOptions['U11I87'],
    U12I6: '*Robotmaster evaluation', // U12I6: e.target.U12I6.value.trim(),
    U13I57997: 'Dealer', // U13I57997: e.target.U13I57997.value.trim(),
    C14IFirstName: e.target.C14IFirstName.value.trim(),
    C15ILastName: e.target.C15ILastName.value.trim(),
    C16IPosition: e.target.C16IPosition.value.trim(),
    U17I58850: e.target.U17I58850.value.trim(),
    C18IPhone3: e.target.C18IPhone3.value.trim(),
    C19IPhone3Extension: e.target.C19IPhone3Extension.value.trim(),
    C20IPhone4: e.target.C20IPhone4.value.trim(),
    C21IPhone4Extension: e.target.C21IPhone4Extension.value.trim(),
    U22I17: e.target.U22I17.value.trim(),
    U23I140: e.target.U23I140.value.split('_')[0].trim(),
    U24I18: e.target.U24I18.value.split('_')[0].trim(),
    U25I20: selectedOptions['U25I20'],
    U26I19: selectedOptions['U26I19'],
    U27I22: selectedOptions['U27I22'],
    U28I21: selectedOptions['U28I21'],
    U29I24: e.target.U29I24.value.trim(),
    requestingPage: 'trial-request',
    version: 'v6',
    language: window.location.pathname.split('/')[1],
    name: e.target.C14IFirstName.value.trim(),
  };

  const formBody = Object.keys(postData).map(function(key) {
    if (postData[key] instanceof Array) {
      let str = '';
      postData[key].forEach(function(element, index) {
        if (index === (postData[key].length - 1)) {
          str += encodeURIComponent(key) + '=' + encodeURIComponent(element);
        } else {
          str += encodeURIComponent(key) + '=' + encodeURIComponent(element) +
              '&';
        }
      });
      return str;
    } else {
      return encodeURIComponent(key) + '=' + encodeURIComponent(
          postData[key]);
    }
  }).join('&');

  //TODO: move this url into env

  // Send to CRM
  fetch('https://caw.maximizercrmlive.com/Webform.aspx?request=submitwebform&token=5F50535F174C4C4330591416151F47264D1209314B67696778414D7C0D7F2B5818545E464D4D41625945135D1941734C130C634F6F6E6D7841487859787E5956515442474B416C50471719504470421B0A364C3A693B7D42482E5A2A7C5B50545217444A42675D4012161E4272461F0B66196F67687B464A7B5A78795F54525344174E10640E451011494372444A08634A6E6E3B7B474D785E7B7F5954555744454F44605D4416421A1677471E0A624A6F3F6F78411A7D5D7F78585355534717494C615B451711194577431C0B644C3A693B7D42482E5E7B7A5855005742454A4464591016151A4377431A5C624A6F6B6F7C41407B5B78285F52555F44144E45625E4216171D4373441D0D604A6F6B3B7B4948795E7D7F5C54545241454A4460584016101F4577111B59624F6A6F6F7E411A7D597F2B585555524211494D615945171413437444120B664C39693C7B124F7D5B767F5951015243401B41655C4710401A477717',
      {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
  .then(() => {

    // Send email
    fetch('/api/request-information',
        {
          method: 'POST',
          body: postData,
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
  const [selectedOptions, setSelectedOptions] = useState({});
  const { t, locale } = useTranslation();
  const inputs = getInputs(t);

  return (
      <React.Fragment>

        {/*TODO: show messages here*/}

        <Form horizontal name='form' onSubmit={(e) => handleSubmit(e, locale, props, selectedOptions)}>
          {inputs.map(input => createFormInput(input, isCountryUS, setIsCountryUS, selectedOptions, setSelectedOptions))}
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