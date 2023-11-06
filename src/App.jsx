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
            Name of Dog <input type="text" />
          </div>
          <div>
            Phone Number <input type="text" />
          </div>
          <button type="submit">Submit</button>
      </div>

      {/* adpoptable dogs */}
      <div id="dogs">
        <h1>Adoptable Dogs</h1>
          <div className = 'cards'>
            <h2>Bogey</h2>
            <img src="https://media.istockphoto.com/id/1427592301/photo/corgi-puppy-dog-sitting-on-the-table-in-summer-sunny-day-close-up.webp?b=1&s=170667a&w=0&k=20&c=VCgkX-25z4hMZv4ZH1lxbmUvea3YhLE5wRVkb3Q9_6I=" alt="corgi puppy" />
            <p>Age: 2 <br />Breed: Corgi </p>
            <button>More Info!</button>
          </div>
          <div className = 'cards'>
            <h2>Dido</h2>
            <img src="https://media.istockphoto.com/id/1415809177/photo/boxer-puppy-relaxing-on-the-sofa.webp?b=1&s=170667a&w=0&k=20&c=gNth1Bxjwy1U0Szj5yYNuTMgFNju_TasS7o7mRoMR5A=" />
            <p>Age: 5 <br />Breed: Boxer </p>
            <button>More Info!</button>
          </div>
          <div className = 'cards'>
            <h2>Stella</h2>
            <img src="https://media.istockphoto.com/id/1448525820/photo/puppy-of-bernese-mountain-dog-sitting-on-the-grass-in-the-garden-puppy-with-flowers.webp?b=1&s=170667a&w=0&k=20&c=4GHF0EAHkWaBmOlMiFLP9qcOCZIcvT4m3DtVMg95vYw=" />
            <p>Age: 3 mo <br />Breed: Bernadoodle </p>
            <button>More Info!</button>
          </div>
      </div>

      {/* footer */}
      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );  
}

export default App
