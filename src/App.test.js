import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';

test('Test de rendereado sin fallos', ()=> {
    render(<App />);
});

//Test dataelement exist in the browser
test('Test de dataelement exist in the browser', ()=> {
    render(<App />);
    const dataElement = screen.getByText(/Jugador 1:/i) || screen.getByText(/Jugador 2:/i);
    expect(dataElement).toBeInTheDocument();
});

//create a test for browser speed
test('Test de rendereado en un tiempo menor a 1 segundo', ()=> {
    const startTime = new Date();
    render(<App />);
    const endTime = new Date();
    const timeDiff = endTime.getTime() - startTime.getTime();
    expect(timeDiff).toBeLessThan(1000);
}
);


