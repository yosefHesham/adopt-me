import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";

// eslint-disable-next-line no-unused-vars
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// eslint-disable-next-line no-unused-vars

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPetHook = useState(null);
  console.log(adoptedPetHook);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPetHook}>
          <div>
            <header>
              <Link to={"/"}>Adopt Me !</Link>
            </header>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </div>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<App />);
