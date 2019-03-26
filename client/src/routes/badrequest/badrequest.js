import React from 'react'
// import ErrorBoundary from '../../components/ErrorHandlers/errorboundary'

// Custom error page

const ThrowError = () => {
    throw new Error('400 Bad Request');
}

//
export class BadRequest extends React.Component {
    render() {
        return (
          <div>
            <ThrowError />
         </div>
        )
    }
}

export default BadRequest