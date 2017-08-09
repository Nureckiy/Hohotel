import React, { Component } from 'react';
import { ButtonToolbar, MenuItem, NavDropdown } from 'react-bootstrap';

import { mainCategories } from '!json!../../sources/appVariables.json';

class Navbar extends Component {
  render() {
    const { profile } = this.props;
    const isInGroup = (group) => profile && profile.groups.includes(group);
    return (
      <nav className="row">
          <div className="container">
            <div className="col-sm-3 hidden-xs">
              <div id="logo"><a href="#">FOODSHOP <em>.</em></a></div>
            </div>
            <div className="col-sm-9">
              <ButtonToolbar className="pull-right">
                {(isInGroup('hotel-manages') || isInGroup('kitchen-manager')) &&
                  <NavDropdown className={this.renderClass('manage')} title="Управление" noCaret id="menu-category">
                    <MenuItem eventKey="1" href="#/manage/bookings" disabled={!isInGroup('hotel-manager')} >Брони</MenuItem>
                    <MenuItem eventKey="2" href="#/manage/kitchen" disabled={!isInGroup('kitchen-manager')}>Ресторан</MenuItem>
                  </NavDropdown>
                }
                <li className={this.renderClass('booking')}>
                  <a href="#/booking/">Номера</a>
                </li>
                <NavDropdown className={this.renderClass('menu')} title="Ресторан" noCaret id="menu-category" href="#/menu/">
                  {Object.keys(mainCategories).map(key =>
                    <MenuItem
                      key={key}
                      eventKey={key}
                      href={`#/menu/${key}`}
                    >
                      {mainCategories[key]}
                    </MenuItem>
                  )}
                </NavDropdown>
                <li className={this.renderClass('contacts')}>
                  <a href="#/contacts/">Контакты</a>
                </li>
                <li className={this.renderClass('profile')}>
                  <a href="#/profile/">{ profile ? profile.name : 'Войти' }</a>
                </li>
                <li className={this.renderClass('order', 'btn-cta')}>
                  <a href="#/order"><span>Бронь <i id="basket-icon" className="glyphicon glyphicon-bed" /></span></a>
                </li>
              </ButtonToolbar>
            </div>
          </div>
      </nav>
    );
  }

  renderClass(tabName, className) {
    const { pathname } = this.props;
    const path = pathname.split('/')[1];
    if (!className) {
      className = '';
    }
    return path === tabName ? className + ' active' : className;
  }
}

export default Navbar;