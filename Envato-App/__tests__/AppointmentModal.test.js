import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppointmentModal from '../components/Appointment/AppointmentModal';

// Mock next/image if used in this component
jest.mock('next/image', () => (props) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt || ''} />;
});

jest.mock('@auth0/nextjs-auth0', () => ({
  useUser: () => ({
    user: {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      given_name: 'Jane',
      family_name: 'Doe',
      picture: 'https://example.com/jane.jpg',
    },
    isLoading: false,
  }),
}));

describe('AppointmentModal Component', () => {
  it('renders the appointment form', () => {
    render(<AppointmentModal dialogRef={{ current: { close: jest.fn() } }} />);
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Phone Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('dd/mm/yyyy')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('shows validation errors if fields are empty', async () => {
    render(<AppointmentModal dialogRef={{ current: { close: jest.fn() } }} />);
    fireEvent.click(screen.getByTestId('submit-button'));
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Phone is required')).toBeInTheDocument();
    });
  });

  it('shows error for invalid email and phone', async () => {
    render(<AppointmentModal dialogRef={{ current: { close: jest.fn() } }} />);
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'invalid-@email' } });
    fireEvent.change(screen.getByPlaceholderText('Your Phone Number'), { target: { value: '123' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    await waitFor(() => {
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
      expect(screen.getByText('Invalid phone number')).toBeInTheDocument();
    });
  });
});

