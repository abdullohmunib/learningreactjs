import React from "react";
import Header from "./Header";
import Navbar from "./Navbar"; //[02.3] untuk export default
// import {Navbar} from "./Navbar"; //[02.3] // untuk export tanpa default
// import logo from './logo.svg';
// import './App.css';

// cara membuat komponen [01]
// const Navbar = () => {
//   return(
//     <div>
//       <h3>Navbar</h3>
//     </div>
//   )
// }
// Cara lain buat folder sendiri [02.1]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h2>Hello World!</h2>
    </div>
  );
}

export default App;