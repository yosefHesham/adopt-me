/* eslint-disable import/no-unresolved */
  import { createRoot } from 'react-dom/client';
import Pet from './Pet';


const App = () => {
  return (<div> <h1> Adopt Me !</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese"/>
    <Pet name="Pepper" animal="Bird" breed="Cocktail"/>
    <Pet name="Doink" animal="Cat" breed="Mixed"/>

  </div>)
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);