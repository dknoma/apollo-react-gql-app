import React from 'react'

// This component is what will be used to do error checking for any rendering component
// This does not work for event handlers, which a try/catch will suffice for. Throwing
// an error from the event handler can be taken care of by a higher level ErrorBoundary.
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    // static getDerivedStateFromError(error) {
    //     // Update state so the next render will show the fallback UI.
    //     return { errorInfo: true };
    // }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }
    // keep {this.state.errorInfo.componentStack} for dev purposes
    // React will always display the developer overlay when in development. Press Escape or the x to exit the overlay
    //      The error boundary will still be present
    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Whoops! Something went wrong...</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {/* {this.state.errorInfo.componentStack} */}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }  
}

export default ErrorBoundary;