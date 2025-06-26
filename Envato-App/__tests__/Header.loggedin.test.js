import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainHeader from '../components/Header/MainHeader/MainHeader';
import LogoBar from '../components/Header/LogoBar/LogoBar';
import Socials from '../components/Header/Socials/Socials';

// Mock next/image if used in these components
jest.mock('next/image', () => (props) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt || ''} />;
});

// Mock next/navigation for usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

// Mock @auth0/nextjs-auth0 for logged-in user
jest.mock('@auth0/nextjs-auth0', () => ({
  useUser: () => ({
    user: { name: 'Test User', picture: 'https://example.com/test.jpg' },
    isLoading: false,
  }),
}));

describe('Header Components (user logged in)', () => {
  it('renders MainHeader component', () => {
    render(<MainHeader />);
    expect(screen.getByTestId('menu-item-1')).toBeInTheDocument();
  });

  it('renders LogoBar component', () => {
    render(<LogoBar />);
    expect(screen.getByAltText('Envato Logo')).toBeInTheDocument();
  });

  it('renders Socials component and social icons', () => {
    render(<Socials />);
    expect(screen.getByAltText('Twitter')).toBeInTheDocument(); // Twitter
    expect(screen.getByAltText('Youtube')).toBeInTheDocument(); // Youtube
    expect(screen.getByAltText('TikTok')).toBeInTheDocument(); // TikTok
  });

  it('opens profile modal when profile button is clicked', () => {
    render(<Socials />);
    const profileBtn = screen.getByAltText('Profile');
    fireEvent.click(profileBtn);
    expect(screen.getByTestId('profile-modal')).toBeInTheDocument();
  });
});
