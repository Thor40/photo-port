import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('renders', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    });
});

describe('Header displays correctly', () => {
    it('h1 tag matches Contact me', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('Contact me')).toHaveTextContent('Contact me');
    })

    it('button tag matches submit', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('Submit')).toHaveTextContent('Submit');
    })
})