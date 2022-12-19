/* eslint-disable import/no-unresolved */
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
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
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to={"/"}>
            <h1> Adopt Me !</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
