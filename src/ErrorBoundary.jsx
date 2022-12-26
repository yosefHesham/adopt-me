import { Component } from "react";

import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  // mutates the state
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error boundary component cought an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error occured with this listing{" "}
          <Link to={"/"}>Click here to go back to home page</Link>
        </h2>
      );
    }
  }
}
