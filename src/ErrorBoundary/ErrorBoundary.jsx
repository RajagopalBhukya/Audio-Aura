import { Component } from 'react'

// Without this, any render error unmounts the whole app and the user is left
// staring at a blank (black) page with no explanation.
class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Unhandled UI error:', error, info?.componentStack)
  }

  render() {
    // eslint-disable-next-line react/prop-types
    if (!this.state.hasError) return this.props.children
    return (
      <div className="container text-center py-5">
        <h2>Something went wrong</h2>
        <p className="text-secondary">Please refresh the page or try again later.</p>
        <button className="btn btn-danger" onClick={() => window.location.reload()}>
          Reload
        </button>
      </div>
    )
  }
}

export default ErrorBoundary
