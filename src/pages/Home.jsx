import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Header } from '../components/Header';

export const Home = () => {
  return (
    <div>
        <Header />
      <div className="text-center mt-5">
        <h1>Welcome to workoutWise</h1>
        <p>Your ultimate fitness goal tracker.</p>
        <Button color="primary" href="/auth">Get Started</Button>
      </div>
    </div>
  );
};
