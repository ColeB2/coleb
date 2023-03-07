import { describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Carousel from './Carousel';
import { PROJECT_DATA } from '../../tests/testData';

describe('Carousel', () => {
    it('Carousel title should properly set..', () => {
        const handleClick = () => undefined;
        const handleEnter = () => undefined;
        render(
            <Carousel
                key={0}
                id={0}
                title="Featured Projects"
                data={PROJECT_DATA}
                handleClick={handleClick}
                handleEnter={handleEnter}
            />
        );
        expect(screen.getByRole('heading')).toHaveTextContent("Featured Projects")
    });

    it('Carousel, images should properly set', () => {
        const handleClick = () => undefined;
        const handleEnter = () => undefined;
        render(
            <Carousel
                key={0}
                id={0}
                title="Featured Projects"
                data={PROJECT_DATA}
                handleClick={handleClick}
                handleEnter={handleEnter}
            />
        );
        const images = screen.getAllByRole('img') as HTMLImageElement[];
        const imageContent = [
            'https://path.to/image1',
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
        
    });

    it('Can click carousel items', () => {
        const handleClick = vi.fn();
        const handleEnter = () => undefined;
        render(
            <Carousel
                key={0}
                id={0}
                title="Featured Projects"
                data={PROJECT_DATA}
                handleClick={handleClick}
                handleEnter={handleEnter}
            />
        );
        //3 images -> 3 projects
        const images = screen.getAllByRole('img') as HTMLImageElement[];

        for (let i = 0; i < images.length; i++) {
            let image = images[i];
            fireEvent.click(image)
        }
        // All images should be clickable.
        expect(handleClick).toHaveBeenCalledTimes(images.length);
        
    });
});