import './App.css'

function App() {
  return (
    <div>
      {/* header */}
      <header>
        <a href="#">Home</a> | <a href="#dogs">Adoptable Dogs</a> | <a href="#contact">Contact Us</a>
      </header>
      {/* contact form */}
      <div id="contact">
        <h1>Interested in a pup? <br />Contact Us</h1>
          <div>
            Your Name <input type="text" />
          </div>
          <div>
            Dog's Name <input type="text" />
          </div>
          <div>
            Phone Number <input type="text" />
          </div>
          <button type="submit">Submit</button>
      </div>
      {/* adpoptable dogs */}
      <div id="dogs">
        <h1>Adoptable Dogs</h1>
      </div>
      {/* footer */}
      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );  
}

export default App
