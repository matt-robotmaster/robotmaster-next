import React, {useState} from 'react';
import {Form, Button, FormGroup, Col, Alert} from "react-bootstrap";

import useTranslation from "../../hooks/useTranslation";
import { logEvent } from '../../../lib/analytics';
import { createCountrySelect, createProvinceSelect, createSimpleInput } from "./select-helpers";
import classes from './form.module.css';

//TODO: copy from old codebase, refactor

const getInputs = (t) => [
  {
    caption: t('inforeq-form-field-name'),
    name: 'C0ILastName',
    required: true,
  }, {
    caption: t('inforeq-form-field-email'),
    name: 'U1I58850',
    required: true,
  }, {
    caption: t('inforeq-form-field-company'),
    name: 'C2ICompanyName',
    required: true,
  }, {
    caption: t('inforeq-form-field-country'),
    name: 'C3ICountry',
    required: true,
    isCountrySelect: true,
  }, {
    caption: t('inforeq-form-field-province'),
    name: 'C4IStateProvince',
    required: true,
    isProvinceSelect: true,
  }, {
    caption: t('inforeq-form-field-phone'),
    name: 'C5IPhone1',
    required: true,
  }, {
    caption: t('inforeq-form-field-message'),
    name: 'U6I30',
    placeholder: t('inforeq-form-field-message-placeholder'),
    multiline: true,
  }, {
    caption: '',
    name: 'robot',
    placeholder: t('inforeq-form-field-robot-placeholder'),
  }];

const createFormInput = (input, isCountryUS, setIsCountryUS) => {
  if (input.isCountrySelect) {
    return createCountrySelect(input, setIsCountryUS);
  }
  if (input.isProvinceSelect && isCountryUS) {
    return createProvinceSelect(input);
  }
  if (!input.isProvinceSelect) {
    return createSimpleInput(input);
  }
};

const handleSubmit = (e, t, locale, props, setValidationMessages) => {
  e.preventDefault();

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
  
  fetch('/api/contact-form',
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
          body: JSON.stringify(emailToSend),
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

const contactForm = (props) => {
  const [isCountryUS, setIsCountryUS] = useState(false);
  const [validationMessages, setValidationMessages] = useState(null);
  const { t, locale } = useTranslation();
  const inputs = getInputs(t);

  return (
      <React.Fragment>

        <div className='alert'>
          { validationMessages && validationMessages.messages.length > 0 ? (
              <React.Fragment>
                {validationMessages.messages.map(message => <Alert variant={validationMessages.success ? 'success' : 'danger'}>{message}</Alert>)}
              </React.Fragment>
          ) : null}
        </div>

        <Form className={classes.form} name='form' onSubmit={(e) => handleSubmit(e, t, locale, props, setValidationMessages)}>
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

export default contactForm;