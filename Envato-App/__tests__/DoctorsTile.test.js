import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DoctorsTile from '../components/DoctorsTitle/DoctorsTile';

// Mock next/image to avoid errors in Jest environment
jest.mock('next/image', () => (props) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt || ''} />;
});

const overlayText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

describe('DoctorsTile', () => {
  const mockProps = {
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    doctorsTileImage: '/assets/doctorTile1.jpg',
  };

  it('renders the doctor name and specialization', () => {
    render(<DoctorsTile {...mockProps} />);
    expect(screen.getByText('Dr. John Doe')).toBeInTheDocument();
    expect(screen.getByText('Cardiologist')).toBeInTheDocument();
  });

  it('renders the doctor image with correct src and alt', () => {
    render(<DoctorsTile {...mockProps} />);
    const img = screen.getByAltText('Doctors Tile');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', mockProps.doctorsTileImage);
  });

  it('shows overlay text on hover', () => {
    render(<DoctorsTile {...mockProps} />);
    const tile = screen.getByText('Dr. John Doe').closest('div');
    // Find the parent tile div (the one with hover events)
    fireEvent.mouseEnter(tile);
    expect(screen.getByText(overlayText)).toBeInTheDocument();
    fireEvent.mouseLeave(tile);
    expect(screen.queryByText(overlayText)).not.toBeInTheDocument();
  });
});
