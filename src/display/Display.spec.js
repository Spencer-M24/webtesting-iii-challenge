// Test away!



import React from 'react';

import Display from './Display';

import renderer from 'react-test-renderer';


describe('<Display />', () => {
    it('red green light for unlock and lock', () => {

    });

    it('should match snapshot', () => {
        const tree = renderer.create()

        expect(tree.toJSON()).toMatchSnapshot()

    });

});
