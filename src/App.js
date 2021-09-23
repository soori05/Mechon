import React from 'react';
import Inputs from './components/Inputs';

import Menu from './components/Navbar';
import Scroll from './components/Scroll';
function App() {
  return (
    <div className="App">
      <Menu />
      <Scroll />
      <Inputs />
    </div>
  );
}

export default App;
