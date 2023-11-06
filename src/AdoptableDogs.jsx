/* eslint-disable react/prop-types */
// moves adoptable dogs into its own file
export function AdoptableDogs(props) {
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