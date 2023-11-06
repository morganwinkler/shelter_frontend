/* eslint-disable react/prop-types */
import './App.css'

// moves header into its own function
function Header() {
  return (
      <header>
        <a href="#">Home</a> | <a href="#dogs">Adoptable Dogs</a> | <a href="#contact">Contact Us</a>
      </header>
  );
}

// moves contact form into its own function
function ContactForm() {
   return (
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
   );
}

// moves adoptable dogs into its own function
function AdoptableDogs(props) {
  console.log(props);
  return (
      <div id="dogs">
         <h1>Adoptable Dogs</h1>
          {/* loop of defined data from content function aka parent component*/}
          {props.dogs.map((dog) => (
            <div key={dog.id}>
              <h2>{dog.name}</h2>
              <img src={dog.image_url} alt="dog pics" />
              <p>Age: {dog.age} </p>
              <p>Breed: {dog.breed} </p>
              <button>More Info!</button>
            </div>
          ))}
      </div>
  );
}

// moves footer into its own function 
function Footer() {
  return (
    <footer>
    <p>Copyright 2023</p>
  </footer>
  );
}

// creates content function
function Content() {
  let dogs = [
    {
      id: 1,
      name: "Bogey",
      image_url: "https://media.istockphoto.com/id/1427592301/photo/corgi-puppy-dog-sitting-on-the-table-in-summer-sunny-day-close-up.webp?b=1&s=170667a&w=0&k=20&c=VCgkX-25z4hMZv4ZH1lxbmUvea3YhLE5wRVkb3Q9_6I=",
      age: "2 yr",
      breed: "corgi",
    },
    {
      id: 2,
      name: "Dido",
      image_url: "https://media.istockphoto.com/id/1415809177/photo/boxer-puppy-relaxing-on-the-sofa.webp?b=1&s=170667a&w=0&k=20&c=gNth1Bxjwy1U0Szj5yYNuTMgFNju_TasS7o7mRoMR5A=",
      age: "5 yr",
      breed: "boxer",
    },
    {
      id: 3,
      name: "Stella",
      image_url: "https://media.istockphoto.com/id/1448525820/photo/puppy-of-bernese-mountain-dog-sitting-on-the-grass-in-the-garden-puppy-with-flowers.webp?b=1&s=170667a&w=0&k=20&c=4GHF0EAHkWaBmOlMiFLP9qcOCZIcvT4m3DtVMg95vYw=",
      age: "6 mo",
      breed: "mini bernadoodle",
    },
  ];
  return (
    <div>
      <ContactForm />
      <AdoptableDogs dogs = {dogs} />
    </div>
  );
}

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
