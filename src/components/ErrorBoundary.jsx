import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4 text-center">
          <div className="glass-panel p-8 rounded-2xl max-w-lg">
            <h1 className="text-4xl font-bold mb-4 text-red-500">System Failure</h1>
            <p className="mb-6 text-gray-400">An anomaly has been detected in the spacetime continuum.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;