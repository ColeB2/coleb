import { describe } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import App from './App';
import { techData } from './api/technologies';




describe('App', () => {
    it('Render loading screen', () => {
        render(<App />)
        const loader = screen.getByRole('heading');
        expect(loader).toHaveTextContent('Thank you for visiting. If content takes too long to load, please refresh.');
    });

    it('Renders App after api called', async () => {
        // Arrange
        render(<App />)

        await waitForElementToBeRemoved(() => screen.getByText('Thank you for visiting. If content takes too long to load, please refresh.'))

        techData.forEach((tech) => {
            let techTitle = screen.getByRole('heading', {name: tech.name})
            expect(techTitle).toBeDefined()
        })
    });

    it('Renders Proper Slider Components', async () => {

    }) 
});