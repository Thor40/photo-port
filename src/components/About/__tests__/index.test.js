import React from 'react';
// The render function will do just what its name implies: "render" the component. 
// What actually happens is that Jest creates a simulated DOM in a Node.js environment 
//to approximate the DOM (no component is actually visibly rendered).
// The cleanup function is used to remove components from the DOM to prevent memory 
// leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements.
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe('About component', () => {
    // First Test to verify if component is rendering
    it('renders', () => {
        render(<About />);
    });

    // Second Test (test case) compare snapshot versions of the DOM node structure
    // A snapshot is a serialized version of the DOM node structure, enabled by Jest
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})