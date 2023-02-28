import { describe, vi } from 'vitest';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';

import App from './App';
// import * as api from "./api";
import { PROJECT_DATA } from './tests/testData';
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

        // const allProjects = screen.getAllByRole('heading');
        // console.log(allProjects)
        techData.forEach((tech) => {
            let techTitle = screen.getByRole('heading', {name: tech.name})
            expect(techTitle).toBeDefined()
        })
    });

    it('Renders Proper Slider Components', async () => {
         render(<App />)

        await waitForElementToBeRemoved(() => screen.getByText('Thank you for visiting. If content takes too long to load, please refresh.'))

        // screen.debug();
        const allProjects = screen.getAllByRole('heading');
        // console.log(allProjects)
        allProjects.forEach((project) => {
            console.log('------------------------------------------------')
            console.log(project.closest('img'))
        })

    }) 
});