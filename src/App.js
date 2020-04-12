import React from 'react';
import AppBar from '../src/Components/Shared/AppBar';
import HeaderSection from '../src/Components/Shared/HeaderSection';
import QuoteSection from '../src/Components/Shared/QuoteSection';
import FeatureSection from '../src/Components/Shared/FeatureSection';

function App() {
  return (
    <div className="App">
      <AppBar />
      <HeaderSection />
      <QuoteSection />
      <FeatureSection />
    </div>
  );
}

export default App;
