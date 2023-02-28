import './App.css';
import MenuItem from './components/MenuItem/MenuItem';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MenuItem />
      <ScrollToTop />
    </div>
  );
}

export default App;
