// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainBolt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainBolt/i);
    expect(titleElement).toBeInTheDocument();
});
