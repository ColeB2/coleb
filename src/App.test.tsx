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
        // render(<App />)

        // await waitForElementToBeRemoved(() => screen.getByText('Thank you for visiting. If content takes too long to load, please refresh.'))

        // Attempt to Test swiper slides
        // Cards don't properly appear though.
        // const allProjects = screen.getAllByRole('heading');
        // console.log(allProjects.length)
        // allProjects.forEach(proj => {
        //     let parent = proj.closest('div')
        //     let swiper = parent.children[1]
        //     let wrapper = swiper.children[0]
        //     console.log('Parent', parent?.tagName, parent?.className, parent?.childElementCount)
        //     // console.log(parent.childNodes[1])
        //     // console.log('------->', swiper)
        //     console.log('XXXXXX>', wrapper)
        // })

    }) 
});