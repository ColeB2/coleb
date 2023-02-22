import { describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Carousel from './Carousel';
import { PROJECT_DATA } from '../../tests/testData';

describe('Carousel', () => {
    it('Carousel title should properly set..', () => {
        const handleClick = () => undefined;
        render(
            <Carousel
                key={0}
                id={0}
                title="Featured Projects"
                data={PROJECT_DATA}
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
                data={PROJECT_DATA}
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
                data={PROJECT_DATA}
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