import React from 'react';
import Donation from '../Donation';
import { create } from 'react-test-renderer';

const ethPrices = {
  student: 50,
  gold: 150,
  platinum: 500,
  diamond: 1500,
  ether: 5000,
  elite: 15000,
}

describe('Donation', () => {
  let component, instance;

  beforeEach(() => {
    component = create(<Donation ethPrices={ethPrices} />);
    instance = component.getInstance();
  });

  test('should render component and initialize with correct state', () => {
    const initialState = {
      email: '',
      fullName: '',
      selectedAccount: '',
      step: null,
      error: false,
      message: '',
      tier: '',
      panPurchased: 0,
    };

    console.log("instance:", instance);

    expect(component.toJSON()).toMatchSnapshot();
    expect(instance.state).toEqual(initialState);
  });
});
