import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TextAnalytics from './TextAnalytics';

const testText = 'test';

/* tslint:disable no-empty */
describe('Test TextAnalytics', () => {
  it('renders snapshot', () => {
    const tree = renderer
      .create(<TextAnalytics text={testText} results={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
