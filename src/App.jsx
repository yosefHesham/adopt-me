/* eslint-disable import/no-unresolved */
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  config: {
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
   <div
      className="m-0 p-0"
      style={{
        background:
          "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg )",
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 to-red-500  p-7  text-center">
              <Link
                to={"/"}
                className="text-6xl text-white hover:text-gray-200"
              >
                <h1> Adopt Me !</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />}></Route>
              <Route path="/" element={<SearchParams />}></Route>
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>

};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
