import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { DecisionResults } from './DecisionResults';

const testResults = {
  topics: ['test1', 'test2'],
  places: ['test1', 'test2']
};

describe('Test DecisionResults', () => {
  it('renders snapshot', () => {
    const tree = renderer
      .create(<DecisionResults results={testResults} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
