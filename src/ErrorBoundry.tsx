import { Link } from "react-router-dom";
import { Component, ErrorInfo, ReactElement } from "react";

class ErrorBoundary extends Component<{ children: ReactElement }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing
          <Link to={"/"}>Click here to go back to homepage </Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
