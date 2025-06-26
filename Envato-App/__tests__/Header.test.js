import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainHeader from '../components/Header/MainHeader/MainHeader';
import Menu from '../components/Header/Menu/Menu';
import LogoBar from '../components/Header/LogoBar/LogoBar';
import Socials from '../components/Header/Socials/Socials';

// Mock next/image if used in these components
jest.mock('next/image', () => (props) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt || ''} />;
});

// Mock @auth0/nextjs-auth0 to prevent module errors in Jest
jest.mock('@auth0/nextjs-auth0', () => ({
  useUser: () => ({ user: null, isLoading: true }),
}));

describe('Header Components', () => {
  it('renders MainHeader component', () => {
    render(<MainHeader />);
    expect(screen.getByText('enquery@medino.com')).toBeInTheDocument();
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

  it('opens appointment modal when Make an Appointment is clicked', () => {
    // Mock showModal on dialog
    window.HTMLDialogElement.prototype.showModal = jest.fn();
    render(<Socials />);
    const button = screen.getByText('Make an Appointment');
    fireEvent.click(button);
    expect(window.HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
    expect(document.body.innerHTML).toMatch(/Login to Add Appointments/);
  });
});
