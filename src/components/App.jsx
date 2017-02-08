import React from 'react';
import Header from './Header.jsx';
import AboutContent from './AboutContent.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="main-wrap">
        <AboutContent />
        <Header />
      </div>
    );
  }
}

export default App;
