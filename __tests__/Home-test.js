
import React from 'react';
import Home from '../src/screens/Home';
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

it('renders correctly', async () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot('Home-test.js.snap');
});