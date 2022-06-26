import './App.css';
import Abouts from './components/Abouts.mjs';
import Navbar from './components/Navbar.mjs'
import Textform from './components/Textform.mjs';

// 
function App() {
  return (
    <>
    <Navbar title="newNav"/>
    <div className="container my-10   " >
    <Abouts/>
    <Textform heading="Enter Text here to capitalize"/>
    </div>
    </>
  );
}

export default App;
