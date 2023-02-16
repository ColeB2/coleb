import { describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Project from './Project';
import { projectType } from '../../types/customTypes';



describe('Project', () => {
    it('Project title should properly set', () => {
        const handleClickOverlay = () => undefined;
        const handleClose = () => undefined;
        render(
            <Project
                key={0}
                data={projectItem}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={relatedProjects}
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
                data={projectItem}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={relatedProjects}
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
                data={projectItem}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={relatedProjects}
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
                data={projectItem}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={relatedProjects}
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
                data={projectItem}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={relatedProjects}
            />
        )
        const desc = screen.getByText('Project description 0 here.')
        expect(desc).toHaveTextContent('Project description 0 here.')
        expect(desc.closest('p')).toHaveTextContent('Project')
    })

    it('Can Click related projects', () => {
        const handleClickOverlay = vi.fn();
        const handleClose = vi.fn();
        render(
            <Project
                key={0}
                data={projectItem}
                handleClose={handleClose}
                handleClick={handleClickOverlay}
                relatedProjects={relatedProjects}
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
        expect(handleClickOverlay).toHaveBeenCalledTimes(3);
        expect(handleClose).toHaveBeenCalledTimes(1);
        
    })
})

const projectItem: projectType = {
    id: 0,
    title: 'Project Name',
    description: 'Project description 0 here.',
    image: 'https://path.to/image',
    start_date: null,
    end_date: null,
    github: 'https://path.to/github',
    link: 'https://path.to/project',
    order: 0,
    technologies: ['tech1', 'tech2', 'tech3'],
    pinned: true
}


const relatedProjects = [
    {
        id: 0,
        title: 'Project Name',
        description: 'Project description 0 here.',
        image: 'https://path.to/image',
        start_date: null,
        end_date: null,
        github: 'https://path.to/github',
        link: 'https://path.to/project',
        order: 0,
        technologies: ['tech1', 'tech2', 'tech3'],
        pinned: true
    },
    {
        id: 1,
        title: 'Project Name2',
        description: 'Project description 1 here.',
        image: 'https://path.to/image2',
        start_date: null,
        end_date: null,
        github: 'https://path.to/github2',
        link: null,
        order: 1,
        technologies: ['tech1', 'tech2', 'tech3'],
        pinned: true
    },
    {
        id: 2,
        title: 'Project Name3',
        description: 'Project description 2 here.',
        image: 'https://path.to/image3',
        start_date: null,
        end_date: null,
        github: null,
        link: 'https://path.to/project3',
        order: 2,
        technologies: ['tech1', 'tech2', 'tech3'],
        pinned: true
    }

]