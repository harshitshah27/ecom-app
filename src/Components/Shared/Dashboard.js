import React from 'react';
import HeaderSection from './HeaderSection';
import FeatureSection from './FeatureSection';
import AppBar from './AppBar';

export default function Dashboard() {
  return (
    <>
      <AppBar />
      <HeaderSection />
      <FeatureSection />
    </>
  );
}
