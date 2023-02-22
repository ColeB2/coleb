import { describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Carousel from './Carousel';

describe('Carousel', () => {
    it('Carousel title should properly set..', () => {
        const handleClick = () => undefined;
        render(
            <Carousel
                key={0}
                id={0}
                title="Featured Projects"
                data={projectData}
                handleClick={handleClick}
            />
        );
        expect(screen.getByRole('heading')).toHaveTextContent("Featured Projects")
        
        const images = screen.getAllByRole('img') as HTMLImageElement[];
        const imageContent = [
            'https://path.to/image',
            'https://path.to/image2',
            'https://path.to/image3',
        ]
        for (let i = 0; i < images.length; i++) {
            expect(images[i].src).toContain(imageContent[i])
        }
    });

    it('Carousel, images should properly set', () => {
        const handleClick = () => undefined;
        render(
            <Carousel
                key={0}
                id={0}
                title="Featured Projects"
                data={projectData}
                handleClick={handleClick}
            />
        );
        const images = screen.getAllByRole('img') as HTMLImageElement[];
        const imageContent = [
            'https://path.to/image',
            'https://path.to/image2',
            'https://path.to/image3',
        ]
        for (let i = 0; i < images.length; i++) {
            expect(images[i].src).toContain(imageContent[i])
        }
        
    });

    it('Can click carousel items', () => {
        const handleClick = vi.fn();
        render(
            <Carousel
                key={0}
                id={0}
                title="Featured Projects"
                data={projectData}
                handleClick={handleClick}
            />
        );
        //3 images -> 3 projects
        const images = screen.getAllByRole('img') as HTMLImageElement[];

        for (let i = 0; i < images.length; i++) {
            let image = images[i];
            fireEvent.click(image)
        }
        expect(handleClick).toHaveBeenCalledTimes(3);
        
    });
});

const handleClose = () => undefined;
const projectData = [
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