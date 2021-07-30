import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="App-header">
        
        
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Head from './componants/head';
import List from './componants/list';

function App() {
  return (
    <React.Fragment>
      <div className="App-header">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 mx-auto'>
            <Head />
            <List />
          </div>
        </div>
      </div>     
      </div>
    </React.Fragment>
  );
}

export default App;