import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Project from './Project';
import { projectType } from '../../types/customTypes';



describe('Project', () => {
    it('Renders Project component basic unit tests', () => {
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

        const desc = screen.getByText('Project description 0 here.')
        expect(desc).toHaveTextContent('Project description 0 here.')
        expect(desc.closest('p')).toHaveTextContent('Project')
        

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

const handleClickOverlay = () => undefined;
const handleClose = () => undefined;
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