import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import classes from './sidebar.module.css';

export default class Sidebar extends Component {
  createMenu(item) {
    return (
        <li key={item.url}>
          <a href={item.url}>
            {item.caption}
          </a>
        </li>
    );
  }

  render() {
    return (
        <Container>
          <Row>
            <Col md={this.props.menu ? 9 : 12} sm={this.props.menu ? 12 : 0}>
              {this.props.children}
            </Col>
            <Col md={3} className='hidden-xs hidden-sm'>
              <div id='navbar' className={classes.sidebar}>
                <ul className='nav'>
                  {this.props.menu.map(item => this.createMenu(item))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
    )
  }
}