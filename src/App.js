const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "His name is: ", name),
    React.createElement("h1", {}, "He is a ", animal),
    React.createElement("h1", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Betty",
      animal: "Dog",
      breed: "Retriever",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "German",
    }),
    React.createElement(Pet, { name: "Titsy", animal: "Cat", breed: "Stray" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
