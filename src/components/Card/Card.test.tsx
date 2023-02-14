import { describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Card from './Card';


const image = 'https://path.to/image'
const item = {image:image}

describe('Card component', () => {
    it('should render an image from the src provided', () => {
        const handleClick = vi.fn();
        render(
            <Card
                handleClick={handleClick}
                {...item}
            />
        )

        const displayedImage = document.querySelector('img') as HTMLImageElement;
        expect(displayedImage.src).toContain(image)
        expect(displayedImage.getAttribute('src')).toEqual(image)
    })

    it('should call the handleClick function on click', () => {
        const handleClick = vi.fn()
        render(
            <Card
                handleClick={handleClick}
                {...item}
            />
        )

        const cardComponent = screen.getByRole('img');

        fireEvent.click(cardComponent);
        expect(handleClick).toHaveBeenCalled();
        fireEvent.click(cardComponent);
        expect(handleClick).toHaveBeenCalledTimes(2);
    })
})