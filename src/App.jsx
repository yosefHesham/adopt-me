import { createRoot } from "react-dom/client";

// eslint-disable-next-line no-unused-vars
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// eslint-disable-next-line no-unused-vars
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<App />);
