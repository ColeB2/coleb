import { describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Project from './Project';

import { PROJECT_ITEM, PROJECT_DATA } from '../../tests/testData';



describe('Project', () => {
    it('Project title should properly set', () => {
        const handleClickOverlay = () => undefined;
        const handleClose = () => undefined;
        render(
            <Project
                key={0}
                data={PROJECT_ITEM}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={PROJECT_DATA}
            />
        )
        expect(screen.getByRole('heading')).toHaveTextContent('Project Name')
    })

    it('Project links should be properly set', () => {
        const handleClickOverlay = () => undefined;
        const handleClose = () => undefined;
        render(
            <Project
                key={0}
                data={PROJECT_ITEM}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={PROJECT_DATA}
            />
        )
        const link = screen.getAllByRole('link')
        expect(link[0]).toHaveAttribute('href', 'https://path.to/project')
        expect(link[1]).toHaveAttribute('href', 'https://path.to/github')
    })

    it('Project images should be properly set', () => {
        const handleClickOverlay = () => undefined;
        const handleClose = () => undefined;
        render(
            <Project
                key={0}
                data={PROJECT_ITEM}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={PROJECT_DATA}
            />
        )
        expect(screen.getByRole('heading')).toHaveTextContent('Project Name')


        const images = screen.getAllByRole('img') as HTMLImageElement[];
        const imageContent = [
            '/src/images/x.svg',
            'https://path.to/image',
            'https://path.to/image',
            'https://path.to/image2',
            'https://path.to/image3',
            'https://path.to/image4',
            'https://path.to/image5',
            'https://path.to/image6',
            'https://path.to/image7',
            'https://path.to/image8',
        ]
        for (let i = 0; i < images.length; i++) {
            expect(images[i].src).toContain(imageContent[i])
        }
    })

    it('Projet links should be properly set', () => {
        const handleClickOverlay = () => undefined;
        const handleClose = () => undefined;
        render(
            <Project
                key={0}
                data={PROJECT_ITEM}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={PROJECT_DATA}
            />
        )
        expect(screen.getByRole('heading')).toHaveTextContent('Project Name')

        const link = screen.getAllByRole('link')
        expect(link[0]).toHaveAttribute('href', 'https://path.to/project')
        expect(link[1]).toHaveAttribute('href', 'https://path.to/github')
    })

    it('Project description, title set properly', () => {
        const handleClickOverlay = () => undefined;
        const handleClose = () => undefined;
        render(
            <Project
                key={0}
                data={PROJECT_ITEM}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={PROJECT_DATA}
            />
        )
        const desc = screen.getByText('Project description 0 here.')
        expect(desc).toHaveTextContent('Project description 0 here.')
        expect(desc.closest('p')).toHaveTextContent('Project')
    })

    it('Can Click related projects', () => {
        const handleClickOverlay = vi.fn();
        const handleClose = vi.fn();
        const FEATURED = PROJECT_DATA.filter(proj => proj.pinned === true)
        render(
            <Project
                key={0}
                data={PROJECT_ITEM}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={FEATURED}
            />
        )
        const images = screen.getAllByRole('img');
        // Click all images
        // 1 close buttom image, 1 main project - no call
        // 3 related projects --> handleClickOverlay
        for(let i = 0; i <= images.length-1; i++) {
            let image = images[i]
            fireEvent.click(image);
        }
        // All FEATURED project should be clickable.
        // 8 images, X svg, and current project + 6 related. 
        expect(handleClickOverlay).toHaveBeenCalledTimes(images.length - 2);
        expect(handleClose).toHaveBeenCalledTimes(1);
        
    })
})