import React, {useState, useEffect, useRef} from "react";
import {Col, Form, FormGroup, Row} from "react-bootstrap";
import countryList from "../../../lib/translations/locales/country-list.json";

//TODO: copy from old codebase, refactor

export const createCountrySelect = (input, setIsCountryUS) => (
    <Form.Group key={input.name}>
      <Row>
        <Col sm={2} className='text-right'>
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

export const createProvinceSelect = (input) => (
    <Form.Group key={input.name}>
      <Row>
        <Col sm={2} className='text-right'>
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

export const createListSelect = (input, listData) => {
  return (
      <Form.Group key={input.name}>
        <Row>
          <Col sm={2} className='text-right'>
            <Form.Label htmlFor={input.name}>
              {input.caption}
            </Form.Label>
          </Col>
          <Col sm={4}>
            <Form.Control as="select" name={input.name} required={input.required}>
              <option>{''}</option>
              {listData[input.list].map(listElement => (
                  <option value={`${listElement.name}_${listElement.id}`} key={`${listElement.name}_${listElement.id}`}>
                    {listElement.name}
                  </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>
  )
};

export const createMultiChoice = (input, listData, selectedOptions, setSelectedOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [optionsList, setOptionsList] = useState(listData[input.list]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
      <Form.Group key={input.name} ref={wrapperRef}>
        <Row>
          <Col sm={2} className='text-right'>
            <Form.Label htmlFor={input.name}>
              {input.caption}
            </Form.Label>
          </Col>
          <Col sm={4}>
            <div className="multiChoice">
              <div className="selected" onClick={() => setIsOpen(!isOpen)}>
                {selectedList.map(item => (
                    <div className="item" key={item.name}>
                      <span>
                        {item.name}
                      </span>
                      <i onClick={() => {
                        const selected = selectedList.filter(selected => selected.name !== item.name);
                        setSelectedList(selected)
                        setOptionsList([...optionsList, item]);

                        setSelectedOptions({
                          ...selectedOptions,
                          [input.name]: selected
                        });
                      }}>
                        X
                      </i>
                    </div>
                ))}
              </div>
              <input required={input.required} value={selectedList} readOnly />
              <ul className={isOpen ? 'option active' : 'option'}>
                {
                  optionsList.map(item => (
                      <li
                          key={item.name}
                          onClick={() => {
                            const selected = [...selectedList, item]
                            setSelectedList(selected);
                            setOptionsList(optionsList.filter(option => option.name !== item.name));

                            setSelectedOptions({
                              ...selectedOptions,
                              [input.name]: selected
                            });
                          }}>
                        {item.name}
                      </li>))
                }
              </ul>
            </div>
          </Col>
        </Row>
      </Form.Group>
  )
};

export const createSimpleInput = (input) => (
    <FormGroup key={input.name}>
      <Row>
        <Col sm={2} className='text-right'>
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

export const createDateInput = (input) => (
    <FormGroup key={input.name}>
      <Row>
        <Col sm={2} className='text-right'>
          <Form.Label htmlFor={input.name}>
            {input.caption}
          </Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Control
              name={input.name}
              type='date'
              placeholder={input.placeholder || ''}
              required={input.required}/>
        </Col>
      </Row>
    </FormGroup>
);
