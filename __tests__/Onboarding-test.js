import 'react-native';
import React from 'react';
import Onboarding from '../src/screens/Onboarding';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


jest.setTimeout(15000);

it('renders correctly', async () => {
   const tree = renderer.create(<Onboarding />);
   expect(tree).toMatchSnapshot('Onboarding-test.sj.snap');
});
