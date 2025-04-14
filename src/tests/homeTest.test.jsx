import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Component', () => {
  const renderHome = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };

  it('renders the header', () => {
    renderHome();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the main headline', () => {
    renderHome();
    expect(
      screen.getByText(/Achieve Your Fitness Goals with WorkoutWise/i)
    ).toBeInTheDocument();
  });

  it('shows the subheading text', () => {
    renderHome();
    expect(
      screen.getByText(
        /Track your workouts, monitor progress, and stay motivated/i
      )
    ).toBeInTheDocument();
  });

  it('has a working "Get Started" button', async () => {
    renderHome();
    const getStartedButton = screen.getByRole('link', { name: /get started/i });
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveAttribute('href', '/auth');
  });

  it('displays all feature cards', () => {
    renderHome();
    const featureTitles = screen.getAllByRole('heading', { level: 3 });
    expect(featureTitles).toHaveLength(3);
    expect(featureTitles[0]).toHaveTextContent('Workout Tracking');
    expect(featureTitles[1]).toHaveTextContent('Progress Monitoring');
    expect(featureTitles[2]).toHaveTextContent('Goal Setting');
  });

  it('shows the final call-to-action section', () => {
    renderHome();
    expect(
      screen.getByRole('heading', { name: /Ready to Get Fit?/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /join now/i })
    ).toBeInTheDocument();
  });

  it('navigates to signup when "Join Now" is clicked', async () => {
    renderHome();
    const joinNowLink = screen.getByRole('link', { name: /join now/i });
    expect(joinNowLink).toHaveAttribute('href', '/Signup');
  });

  it('renders all FontAwesome icons', () => {
    renderHome();
    expect(screen.getByTestId('dumbbell-icon')).toBeInTheDocument();
    expect(screen.getByTestId('chartline-icon')).toBeInTheDocument();
    expect(screen.getByTestId('bullseye-icon')).toBeInTheDocument();
  });
});