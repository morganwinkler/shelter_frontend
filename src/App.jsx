/* eslint-disable react/prop-types */
import './App.css'
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

// import compenents into app function to be loaded into browser
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );  
}

export default App
