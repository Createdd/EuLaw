import * as React from 'react';
import * as renderer from 'react-test-renderer';

import DecisionResultsStep from './DecisionResultsStep';

describe( 'Test DecisionResultsStep', () => {
    it( 'renders snapshot', () => {
        const tree = renderer.create(
            <DecisionResultsStep />
        ).toJSON();

        expect( tree ).toMatchSnapshot();
    } );
} );
