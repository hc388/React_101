import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

//console.log(pet);       //THIS IS AN OBJECT WITH ANIMALS IN IT WITH BREED AND SEVERAL OTHER FUNCTIONS
//console.log(ANIMALS);   //This is an array of different types of animals.
const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    console.log("The  updated animals are: ", animals);

    //console.log("animals", animals);

    setPets(animals || []);
  }

  useEffect(() => {
    updateBreeds([]);
    updateBreed("");
    //console.log("useEffect rendered.");
    //console.log("The animal is: ", animal);

    pet.breeds(animal).then(({ breeds }) => {
      //then operator returns anything that the object returns. so breeds is an array of different breed objects
      //console.log("The breed in here is: ", breeds);
      const breedStrings = breeds.map(({ name }) => name);
      //console.log("The breeds are: ", breedStrings); //breeds.map(({name})) means that inside a function the  var name is assigned a value that is equal to the name parameter of the object.
      updateBreeds(breedStrings);
    }, console.error);
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
