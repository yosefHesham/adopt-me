import { useState, lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import { PetResponse } from "./ResponsesTypes";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPetHook = useState(null as PetResponse | null);
  console.log(adoptedPetHook);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPetHook}>
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader">🐶</h2>
              </div>
            }
          >
            <div>
              <header>
                <Link to={"/"}>Adopt Me !</Link>
              </header>
              <Routes>
                <Route path="/" element={<SearchParams />} />
                <Route path="/details/:id" element={<Details />} />
              </Routes>
            </div>
          </Suspense>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.querySelector("#root");
if (!container) {
  throw new Error("No container found");
}
const root = createRoot(container);

root.render(<App />);
