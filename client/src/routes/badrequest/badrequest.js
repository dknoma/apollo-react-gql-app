import React from 'react'
import ErrorBoundary from '../../components/errorboundary'

// Custom 404 page
// const NotFound = () => <div>404 Not Found :( </div>;

const ThrowError = () => {
    throw new Error('400 Bad Request')
}


export class  BadRequest extends React.Component {
    render() {
        return (
          <div>
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
         </div>
        )
    }
}

export default BadRequest