import { describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Card from './Card';

const handleClick = () => undefined;
const image = 'https://path.to/image'
const item = {image:image}

describe('Card', () => {
    it('Renders Card component basic unit tests.', () => {
        // Arrange
        render(
            <Card
                handleClick={handleClick}
                {...item}
            />
        )
        // Act
        // Expect
        const displayedImage = document.querySelector('img') as HTMLImageElement;
        const role = screen.getByRole('img');
        expect(displayedImage.src).toContain(image)
    })
})