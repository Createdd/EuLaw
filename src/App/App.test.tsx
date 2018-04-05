import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestRenderer from 'react-test-renderer';
import { App } from './App';

it('renders the component', () => {
  const result = TestRenderer.create(<App />).toJSON();
  expect(result).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
