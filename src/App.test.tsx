import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

import { PROJECT_DATA } from './tests/testData';

describe('App', () => {
    it('Renders App component', async () => {
        // Arrange
        // const { getByText, getByPlaceholderText, queryByText } = render(<App />);
        render(<App />)
        screen.getByRole('');
        // Act
        // Expect
        // screen.debug();

        // screen.getByRole('');
        // expect(
        //     screen.getByRole('generic', {
        //         level: 1,
        //     })
        // ).toHaveTextContent('<divclass="boxscore-containers"/>')
        // console.log(getByText)
    });
});