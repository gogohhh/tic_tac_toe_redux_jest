import React from "react";
import Tablero from '../../components/Tablero/Tablero';

import { render, screen } from '@testing-library/react';

test('Render tablero', () => {
    const linkElement = screen.getByText(/Jugador 1:/i) || screen.getByText(/Jugador 2:/i);
    expect(linkElement).toBeInTheDocument();
  });