import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResponsiveBlocks from '../components/ResponsiveBlocks/Features';

// Mock next/image to avoid errors in Jest environment
jest.mock('next/image', () => (props) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt || ''} />;
});

describe('ResponsiveBlocks Component', () => {
  it('renders the svg image and children', () => {
    render(
      <ResponsiveBlocks svg="/assets/clock.svg">
        <span>Test Child</span>
      </ResponsiveBlocks>
    );
    const img = screen.getByAltText('Image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/assets/clock.svg');
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
