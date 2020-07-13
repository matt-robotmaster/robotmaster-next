import React, {useState} from 'react';
import {Form, Button, FormGroup, Col, Alert} from "react-bootstrap";

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

import rProductsv6 from './../../../content/form-lists/rProducts.json';
import mPlusProductsv6 from './../../../content/form-lists/mPlusProducts.json';
import mCamProductsv6 from './../../../content/form-lists/mCamProducts.json';
import rOptionsv6 from './../../../content/form-lists/rOptions.json';

import rProductsv7 from './../../../content/form-lists/v7rProducts.json';
import mPlusProductsv7 from './../../../content/form-lists/v7mPlusProducts.json';
import mCamProductsv7 from './../../../content/form-lists/v7mCamProducts.json';
import rOptionsv7 from './../../../content/form-lists/v7rOptions.json';

import rBrands from './../../../content/form-lists/rBrands.json';
import classificationList from './../../../content/form-lists/classificationList.json';
import sourceList from './../../../content/form-lists/sourceList.json';
import simTypes from './../../../content/form-lists/simTypes.json';
import appList from './../../../content/form-lists/applicationsList.json';

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

const createFormInput = (input, listData, isCountryUS, setIsCountryUS, selectedOptions, setSelectedOptions) => {
  if (input.isCountrySelect) {
    return createCountrySelect(input, setIsCountryUS);
  }
  if (input.isList) {
    return createListSelect(input, listData);
  }
  if (input.isMultiChoice) {
    return createMultiChoice(input, listData, selectedOptions, setSelectedOptions);
  }

  if (input.isProvinceSelect && isCountryUS) {
    return createProvinceSelect(input);
  } else if (!input.isProvinceSelect && input.type !== 'date') {
    return createSimpleInput(input);
  } else if (input.type === 'date') {
    return createDateInput(input);
  }
};

const handleSubmit = (e, locale, props, selectedOptions, setValidationMessages) => {
  e.preventDefault();

  const bodyToFetch = {
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
    version: props.version,
    language: window.location.pathname.split('/')[1],
    name: e.target.C14IFirstName.value.trim(),
  };

  fetch('/api/trial-form',
      {
        method: 'POST',
        body: JSON.stringify(bodyToFetch),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  .then( async () => {
    const response = await fetch('/api/request-information',
        {
          method: 'POST',
          body: JSON.stringify(bodyToFetch),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    const data = await response.json();
    setValidationMessages(data);

    if (data.success) {
      window.location.href = `/${locale}/contact/information-request-success`;
    }

    window.scrollTo(0, 0);
    logEvent('form', props.gaEvent);
  })
  .catch(err => console.error("Error:", err));

  return false;
};

const trialForm = (props) => {
  const [isCountryUS, setIsCountryUS] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [validationMessages, setValidationMessages] = useState(null);
  const { t, locale } = useTranslation();
  const inputs = getInputs(t);

  const listData = {
    rProducts: (props.version === 'v6') ? rProductsv6 : rProductsv7,
    mPlusProducts: (props.version === 'v6') ? mPlusProductsv6 : mPlusProductsv7,
    mCamProducts: (props.version === 'v6') ? mCamProductsv6 : mCamProductsv7,
    rOptions: (props.version === 'v6') ? rOptionsv6 : rOptionsv7,
    rBrands,
    classificationList,
    sourceList,
    simTypes,
    appList,
  };

  return (
      <React.Fragment>

        <div className='alert'>
          { validationMessages && validationMessages.messages.length > 0 ? (
              <React.Fragment>
                {validationMessages.messages.map(message => <Alert variant={validationMessages.success ? 'success' : 'danger'}>{message}</Alert>)}
              </React.Fragment>
          ) : null}
        </div>

        <Form name='form' onSubmit={(e) => handleSubmit(e, locale, props, selectedOptions, setValidationMessages)}>
          {inputs.map(input => createFormInput(input, listData, isCountryUS, setIsCountryUS, selectedOptions, setSelectedOptions))}
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