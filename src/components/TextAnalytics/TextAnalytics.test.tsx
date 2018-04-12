import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TextAnalytics from './TextAnalytics';

describe( 'Test TextAnalytics', () => {
    it( 'renders snapshot', () => {
        const tree = renderer.create(
            <TextAnalytics />
        ).toJSON();

        expect( tree ).toMatchSnapshot();
    } );
} );
