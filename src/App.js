import React from 'react';
import AppBar from '../src/Components/Shared/AppBar';
import HeaderSection from '../src/Components/Shared/HeaderSection';
import QuoteSection from '../src/Components/Shared/QuoteSection';
import FeatureSection from '../src/Components/Shared/FeatureSection';
import ContactUs from '../src/Components/Shared/ContactUs';

function App() {
  return (
    <div className="App">
      <AppBar />
      <HeaderSection />
      <QuoteSection />
      <FeatureSection />
      <ContactUs />
    </div>
  );
}

export default App;
