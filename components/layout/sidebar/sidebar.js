import React, {Component} from "react";

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
        <div className="container">
          <div className="row">
            <div
                className={this.props.menu ? 'col-md-9 col-sm-12' :
                    'col-md-12'}>
              {this.props.children}
            </div>
            <div className="col-md-3 hidden-xs hidden-sm">
              <div id="navbar" className="sidebar">
                <ul className="nav">
                  {this.props.menu.map(item => this.createMenu(item))}
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}