import React from 'react';
import {FlatList, Text, TextInput} from 'react-native';
import CreateMemento from '../src/screens/CreateMemento';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Create Memento', () => {
  jest.setTimeout(15000);
  const handleSubmit = jest.fn();
  const handleTitle = jest.fn();
  const handleDescription = jest.fn();
  const handleUploadImage = jest.fn();
  const wrapper = <CreateMemento mementoDescription='This is the test description' />
  const mementoTitle = 'Test Title';
  const fileURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD…ouhb3R2UYtyi3HssXceFuqMTGI8sPk8hjO8LeZfOUqj//2Q=="
  
  
  it('renders correctly', async () => {
    const tree = renderer.create(<CreateMemento />);
    expect(tree).toMatchSnapshot('CreateMemento-test.js.snap');
  });
  
  
  it('renders the TextInput component', () => {
    const tree = renderer
      .create(<TextInput autoCorrect={false} value="apple banana kiwi" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});