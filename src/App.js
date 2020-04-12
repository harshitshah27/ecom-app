import React from 'react';
import AppBar from '../src/Components/Shared/AppBar';
import HeaderSection from '../src/Components/Shared/HeaderSection';
import QuoteSection from '../src/Components/Shared/QuoteSection';
import FeatureSection from '../src/Components/Shared/FeatureSection';
import ContactUsForm from './Components/Shared/ContactUsForm';
import ContactUsSection from '../src/Components/Shared/ContactUsSection';

function App() {
  return (
    <div className="App">
      <AppBar />
      <HeaderSection />
      <QuoteSection />
      <FeatureSection />
      <ContactUsForm />
      <ContactUsSection />
    </div>
  );
}

export default App;
