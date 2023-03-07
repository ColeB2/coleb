import { describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Card from './Card';
import { PROJECT_ITEM } from '../../tests/testData';


const item = PROJECT_ITEM

describe('Card component', () => {
    it('should render an image from the src provided', () => {
        const handleClick = vi.fn();
        const handleEnter = () => undefined;
        render(
            <Card
                handleClick={handleClick}
                handleEnter={handleEnter}
                {...item}
            />
        )

        const displayedImage = document.querySelector('img') as HTMLImageElement;
        expect(displayedImage.src).toContain(item.image)
        expect(displayedImage.getAttribute('src')).toEqual(item.image)
    })

    it('should call the handleClick function on click', () => {
        const handleClick = vi.fn()
        const handleEnter = () => undefined;
        render(
            <Card
                handleClick={handleClick}
                handleEnter={handleEnter}
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