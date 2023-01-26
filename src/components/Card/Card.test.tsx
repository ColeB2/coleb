import { describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Card from './Card';

const handleClick = () => undefined;
const image = 'https://path.to/image'
const item = {image:image}

describe('Card', () => {
    it('Renders Card component', () => {
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

    it('Card animates on hover', async () => {
        const handleClicks = () => {}
        
        // render(<Card handleClick={handleClick} {...item}/>)
        // const card = screen.getByRole('img');
        // const {getByText, getByTestId, container} = render(
        //     <Card handleClick={handleClicks} {...item}/>
        // )

        // // await fireEvent.click(container)
        // // console.log(container.parentElement?.style)
        // // console.log(container)
        // // expect(container).toHaveBeenCalled(1)

        // fireEvent.click(container)
        // expect(handleClicks).toHaveBeenCalledTimes(1)
    })
})