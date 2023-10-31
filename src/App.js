const Pet = (props) => {
  return React.createElement(
    "div",
    {},

    [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed),
    ]
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),

    React.createElement(Pet, {
      name: "Bosbos",
      animal: "Cat",
      breed: "Egyption",
    }),
    React.createElement(Pet, {
      name: "Sayed",
      animal: "Sheep",
      breed: "Shamy",
    }),
    React.createElement(Pet, {
      name: "zomoroda",
      animal: "Bird",
      breed: "Arabian",
    }),
  ]);
};

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
