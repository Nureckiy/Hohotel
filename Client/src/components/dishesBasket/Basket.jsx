import React, { Component } from 'react';

import Header from '../layout/Header.jsx';
import EditSelectedList from './EditSelectedList.jsx';
import DeliveryDetailsForm from './DeliveryDetailsForm.jsx';
import history from '../../store/History';

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      isFirstStep: true
    };
    this.goToNext = this.goToNext.bind(this);
    this.goBack = this.goBack.bind(this);
    this.addOrder = this.addOrder.bind(this);
  }

  render() {
    const child = this.renderChild();
    return (
      <div>
        <Header backgroundUrl="http://res.cloudinary.com/dum4mjc9q/image/upload/v1487340138/fon1_gex8nh.jpg" />
        <div className="container content">
          { child  }
        </div>
      </div>
    );
  }

  goToNext() {
    this.setState({ isFirstStep: false });
  }

  goBack() {
    this.setState({ isFirstStep: true });
  }

  addOrder(details) {
    const { addOrder, selectedDishes } = this.props;
    addOrder(selectedDishes, details);
    history.push('summary/dishOrder');
  }

  renderChild() {
    const { profile, selectedDishes, clearSelected, changeConfiguration, getAvailableAddresses,
      availableAddresses, translate } = this.props;
    const { isFirstStep } = this.state;
    if (!selectedDishes.length) {
      return <h2 className="cursive-font primary-color text-center">{translate('basketIsEmpty')}</h2>;
    }
    return isFirstStep
      ? <EditSelectedList
        selected={selectedDishes}
        onChange={changeConfiguration}
        clearAll={clearSelected}
        onSubmit={this.goToNext}
        translate={translate} />
      : <DeliveryDetailsForm
        profile={profile}
        onSubmit={this.addOrder}
        onBack={this.goBack}
        selected={selectedDishes}
        getAvailableAddresses={getAvailableAddresses}
        availableAddresses={availableAddresses}
        translate={translate} />;
  }
}

export default Basket;