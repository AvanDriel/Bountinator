import React from 'react';
import Homepage from './Homepage';
import { Twitter, Facebook, Pinterest  } from 'react-social-sharing';

function App() {
  return (
    <div className="App">
          <Facebook solidcircle big link="https://github.com/AvanDriel/Bountinator" />
          <Twitter solidcircle big message="Check out your own bounty at" link="https://github.com/AvanDriel/Bountinator" />
          <Pinterest solidcircle big message="Check out your own bounty at" link="https://github.com/AvanDriel/Bountinator" />
          <Homepage></Homepage>

    </div>
  );
}

export default App;