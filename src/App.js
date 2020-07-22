import React from 'react';
import AppBar from '../src/Components/Shared/AppBar';
import HeaderSection from '../src/Components/Shared/HeaderSection';
import FeatureSection from '../src/Components/Shared/FeatureSection';

function App() {
  return (
    <div className="App">
      <AppBar />
      <HeaderSection />
      <FeatureSection />
    </div>
  );
}

export default App;
