import React, {useState} from 'react';
import {Form, Button, FormGroup, Col, Row} from "react-bootstrap";

import countryList from '../../translations/locales/country-list.json';
import useTranslation from "../../hooks/useTranslation";

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
    isProvince: true,
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
  if (input.isProvince && isCountryUS) {
    return createProvinceSelect(input);
  }
  if (!input.isProvince) {
    return createSimpleInput(input);
  }
};

const createCountrySelect = (input, setIsCountryUS) => (
    <Form.Group>
      <Row>
        <Col sm={1}>
          <Form.Label htmlFor={input.name}>
            {input.caption}
          </Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Control as="select" id={input.name} name={input.name} onChange={(e) => (e.target.value === 'US') ? setIsCountryUS(true) : setIsCountryUS(false)}>
            <option>{''}</option>
            {getOptionForCountry('US')}
            {getOptionForCountry('CA')}
            <option disabled={true}>
              ────────────────────
            </option>
            {countryList.map(country => (
                    <option value={country.countryCode} key={country.countryCode}>
                      {country.name}
                    </option>
                )
            )}
          </Form.Control>
        </Col>
      </Row>
    </Form.Group>
);

const getOptionForCountry = (countryCode) => {
  const country = countryList.find(country => country.countryCode === countryCode);
  return (
      <option value={country.countryCode}>
        {country.name}
      </option>
  )
};

const createProvinceSelect = (input) => (
  <Form.Group>
    <Row>
      <Col sm={1}>
        <Form.Label htmlFor={input.name}>
          {input.caption}
        </Form.Label>
      </Col>
      <Col sm={4}>
        <Form.Control as="select" name={input.name} required={input.required}>
          <option>{''}</option>
          {countryList.find(country => country.countryCode === 'US')
          .states.map(state => (
              <option value={state.stateCode} key={state.stateCode}>
                {state.stateName}
              </option>
          ))}
        </Form.Control>
      </Col>
    </Row>
  </Form.Group>
);

const createSimpleInput = (input) => (
    <FormGroup>
      <Row>
        <Col sm={1}>
          <Form.Label htmlFor={input.name}>
            {input.caption}
          </Form.Label>
        </Col>
        <Col sm={4}>
          {input.multiline ?
              <Form.Control as='textarea' rows={5}
                            name={input.name}
                            placeholder={input.placeholder || ''}
                            required={input.required}/>
              :
              <Form.Control as='input' type='text'
                            name={input.name}
                            placeholder={input.placeholder || ''}
                            required={input.required}/>
          }
        </Col>
      </Row>
    </FormGroup>
);

const handleSubmit = (e, t) => {
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
        C4IStateProvince: country === 'USA' ?
            e.target.C4IStateProvince.value.trim() : '',
        C5IPhone1: e.target.C5IPhone1.value.trim(),
        U6I30: e.target.U6I30.value.trim(),
        U7I57997: 'Website', // "Sales\Lead source" hidden field
        U8I6: '*Robotmaster lead', // "Classification" hidden field
      };

  //TODO: move this url into env

  fetch('https://caw.maximizercrmlive.com/Webform.aspx?request=submitwebform&token=5F50535F174C4C4330591416151F47264D1209314B67696778414D7C0D7F2B58185452414D4B476458421E5D1D477E41180C634D676C677A494A7F5C79735D565453474648416D5B421218504474421D0A624C6C69697D42482E5A2C7C0A50565246444842365D4212111E4772471F5F66426F67687E464D7B5F78785F57525344144E4264094515114E4376444808314A3C6E697B474D785E797F5154575711454D44375D4616431A1177461E5C624E6F3F6F7D411B7D587F795850555347144947615E451211184573431A0B304C6C69697D42482E5E797A50550657134548446C591616121A4677421A0A624E6F6B6F79411E7B5E782B5F51555F45104E46625D4217161D457F44180D364A6C6E3D7E4548755E7D7A0E5153574B4049446C584316161A4572431B0D62196F686A79414D7D0A7F7E585D5551424C4942645E401111134671441F0D604C6A686B7C44482E597D7F5E51505243401F41305D4212111F11724C1E58624E6F6E6F7941487C587F72',
      {
    method: 'POST',
    body: bodyToFetch,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
  .then(() => {
    fetch('/api/request-information',
        {
          method: 'POST',
          body: bodyToFetch,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(() => {
      window.location.href = 'contact/information-request-success';
    });

    //TODO: scroll to top
    //TODO: ga send pageview this.props.gaEventName

  })
  .catch(err => console.error("Error:", err));

    return false;
};

const contactForm = () => {
  const [isCountryUS, setIsCountryUS] = useState(false);
  const { t } = useTranslation();
  const inputs = getInputs(t);

  return (
      <React.Fragment>

        {/*TODO: show messages here*/}

        <Form horizontal name='form' onSubmit={(e) => handleSubmit(e, t)}>
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