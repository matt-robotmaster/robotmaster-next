import React from 'react';
import Layout from '../../../utils/components/layout/layout';
import {Button, Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import withLocale from "../../../utils/hocs/withLocale";
import useTranslation from "../../../utils/hooks/useTranslation";

const automatica2018 = () => {
  const { t } = useTranslation();

  return (
      <Layout>
        <Container>
          <Row>
            <Col lg={12}>
              <img style={{maxWidth: '90%'}}
                   src="/img/automatica-2018/robotmaster-general-logo.png" />
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 6, offset: 3}} md={{span: 6, offset: 3}} sm={12}>
              <p>
                Join Robotmaster at Automatica 2018 Munich
                <br />
                June 19 - 22
              </p>
              <p>
                Be one of the first to see the public unveiling of Robotmaster V7!  Visit us in Booth B5.309
              </p>
              <p>
                The initial Robotmaster V7 software release targets automatic integrated welding and contour programming including trimming, cutting, dispensing and deburring, as well as drilling and fastening.
              </p>
              <p>
                Schedule your Robotmaster Demo at Automatica and discover:
              </p>
              <ul>
                <li>
                  How process experts can program without robotics or CAD/CAM expertise
                </li>
                <li>
                  How Robotmaster helps manufacturers to maximize productivity
                </li>
                <li>
                  How Robotmaster works with CAD/CAM software
                </li>
                <li>
                  New tools and features managed by intuitive, easy-to-use graphical user interfaces
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 6, offset: 3}} md={{span: 6, offset: 3}} sm={12}>
              <iframe
                  // 560
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/I-vzvUv4WEI?rel=0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen={true} />
              <p
                  style={{
                    textAlign: 'center',
                    marginTop: '30px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                  }}>
                Schedule your Robotmaster V7 demo today.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 6, offset: 3}} md={{span: 6, offset: 3}} sm={12}>
              <Form
                  action='https://robotmaster:us3.list-manage.com/subscribe/post?u=6234cd694ff5b26c87f8c84c2&amp;id=34eaa1c1ba'
                  method='post'
                  className='form-horizontal'
                  noValidate=''
                  target='_blank'>
                <FormGroup>
                  <Row>
                    <Col sm={3} className='control-label'>
                      <Form.Label htmlFor='FNAME'>
                        First Name
                      </Form.Label>
                    </Col>
                    <Col sm={9}>
                      <Form.Control name='FNAME'
                                    type='text'/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm={3} className='control-label'>
                      <Form.Label htmlFor='LNAME'>
                        Last Name
                      </Form.Label>
                    </Col>
                    <Col sm={9}>
                      <Form.Control name='LNAME'
                                    type='text'/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm={3} className='control-label'>
                      <Form.Label htmlFor='EMAIL'>
                        Email Address
                      </Form.Label>
                    </Col>
                    <Col sm={9}>
                      <Form.Control name='EMAIL'
                                    type='text'/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm={3} className='control-label'>
                      <Form.Label htmlFor='MMERGE6'>
                        Phone Number
                      </Form.Label>
                    </Col>
                    <Col sm={9}>
                      <Form.Control name='MMERGE6'
                                    type='text'/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm={3} className='control-label'>
                      <Form.Label htmlFor='MMERGE5'>
                        Your Industry
                      </Form.Label>
                    </Col>
                    <Col sm={9}>
                      <Form.Control name='MMERGE5'
                                    type='text'/>
                    </Col>
                  </Row>
                </FormGroup>
                {
                  /*TODO: hidden input:
                  type: 'text',
                  name: 'b_6234cd694ff5b26c87f8c84c2_34eaa1c1ba',
                  tabIndex: '-1',
                  value: '',
                  onChange: this.handleChange.bind(this, 'bot'),*/
                }
                <FormGroup>
                  <Col sm={{span: 9, offset: 3}}>
                    <Button type='submit' variant='primary'>
                      {t('general-send')}
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col lg={12} className='text-center'>
              <img
                  style={{
                    width: '500px',
                    maxWidth: '100%',
                  }}
                  src="/img/automatica-2018/v7-tagline.png" />
            </Col>
          </Row>
        </Container>
      </Layout>
  );
};

export default withLocale(automatica2018);
