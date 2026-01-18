import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Home from '../pages/Home';
import { MemoryRouter } from 'react-router-dom';


test('debe renderizar el texto del boton Join Now', async () => {

    render(
        <MemoryRouter>
             <Home />
        </MemoryRouter>
       
    
    );

    const textButton = await screen.findByText(/Join Now/i);

    expect(textButton).toBeInTheDocument();

})



