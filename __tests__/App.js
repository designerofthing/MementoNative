import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  
  jest.setTimeout(15000);
  
  
  it('renders correctly', async () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot('App.js.snap');    
  });
});
