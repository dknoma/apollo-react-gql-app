This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Reuseable React Components
> Components that can be used to wrap other components.

## Error Boundaries
> errorboundary.js

Error boundaries allow devs to catch errors that are thrown within the components being wrapped by this boundary. You can define a custom error page in errorboundary.js so that when an error is caught the frontend redirects to this page.

Use:
```
 <ErrorBoundary>
    <Switch>
        <Route exact path={'/'} component={Home} /* Home route *//>
        <Route path={'/profiles/:id(\\d+)'} component={SingleProfile} /* Profile route *//>
        <Route path={'/signup'} component={SignUp} /* Profile route *//>
        <Route path={'/login'} component={Login} /* Profile route *//>
        <Route path={'/githubauth'} component={GitHubAuth} /* GitHubAuth route *//>
        <Route path={'/MyProfile'} component={MyProfile}/>
        <Route path={'/Explore'} component={Explore}/>
        <Route path="*" component={BadRequest} />
    </Switch>
  </ErrorBoundary>
```

Any path wrapped up by this error boundary can throw an error that will be caught by the error boundary. 

**NOTE: While the error page redirects successfully, the page doesnt actually refresh correctly if trying to go from the error boundary page to the home page or any other link on the page. Users need to do a refresh or manually enter the url they want to visit to reset the error boundary page. There might be a slight bug in the code in which the boundary doesn't redirect correctly or refresh correctly.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
