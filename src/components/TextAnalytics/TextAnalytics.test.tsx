import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TextAnalytics from './TextAnalytics';

const testText = 'test';

describe( 'Test TextAnalytics', () => {
    it( 'renders snapshot', () => {
        const tree = renderer.create(
            <TextAnalytics text={testText} />
        ).toJSON();

        expect( tree ).toMatchSnapshot();
    } );
} );
