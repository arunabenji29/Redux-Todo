import React from 'react';

import Todo from './components/Todo'


import './App.css';

// const reducer = () => {
//   return {
//     todos:[],
//     todo:{
//       value:'',
//       completed:false
//     }
//   }
// }



function App() {
  return (
    <div className="App">
      <Todo  />
    </div>
  );
}

export default App;
