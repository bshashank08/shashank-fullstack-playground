import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '../components/Profile/Profile';

// Mock next/image if used in this component
jest.mock('next/image', () => (props) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt || ''} />;
});

jest.mock('@auth0/nextjs-auth0', () => ({
  useUser: () => ({
    user: {
      name: 'John Doe',
      given_name: 'John',
      family_name: 'Doe',
      email: 'john.doe@example.com',
      picture: 'https://example.com/john.jpg',
    },
    isLoading: false,
  }),
}));

describe('Profile Component', () => {
  it('renders without crashing', () => {
    render(<Profile />);
    expect(screen.getByTestId('profile-root')).toBeInTheDocument();
  });

  it('renders the profile heading', () => {
    render(<Profile />);
    expect(screen.getByTestId('profile-welcome')).toBeInTheDocument();
    expect(screen.getByTestId('profile-username')).toHaveTextContent('John Doe');
  });

  it('renders the profile details', () => {
    render(<Profile />);
    expect(screen.getByTestId('profile-picture')).toHaveAttribute('src', 'https://example.com/john.jpg');
    expect(screen.getByTestId('profile-firstname')).toHaveTextContent('John');
    expect(screen.getByTestId('profile-lastname')).toHaveTextContent('Doe');
    expect(screen.getByTestId('profile-email')).toHaveTextContent('john.doe@example.com');
  });
});
