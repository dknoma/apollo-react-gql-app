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

# React
> The general structure of this project and how to use things.

Project structure:
```
src/ index.js -> App.js -> /routes/index.js (AppRouter class found here)
```
AppRouter contains the paths of the web pages. In order for the AppRouter to correctly redirect users, the `<Switch></Switch>` component MUST be used. The `NavBar` is the component that displays the top bar of the pages which contains the links to signup/login/logout, view the home page, and is where a profile icon should be displayed.

## Reuseable components
> Components that can be used to wrap other components.

### Error Boundaries
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

# GraphQL

```
const apolloClientLink = createHttpLink({
  uri: 'http://127.0.0.1:9090/graphql'
});

const client = new ApolloClient({
    cache,
    link: apolloClientLink
});  // Apollo client

// Add apollo to our app
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
);
```

In order to utilize GraphQL to any degree in React, [Apollo](https://www.apollographql.com/docs/react) must be used. This allows React to talk to the GraphQL server. The GraphQL server will be in a separate repository and uses ApolloServer to run the GraphQL server. So Apollo will be used both to create the GraphQL server as well as allow communication between the React server and the GraphQL server. 

GraphQL allows frontend requests to be easily sent to the backend without either knowing about how the other sends its information. The frontend feeds info to GraphQL where it parses those requests and sends them to the backend however the backend needs it. So, both frontend and backend developers only need to communicate to figure out what data is needed not how its sent. Backened will code the resolvers in the GraphQL repo to deliver the parameters how they need it, they don't need to worry about how the front end sends the data. 

How requests are done in GraphQL are by Queries and Mutations. Queries are generally used for GET requests and Mutations are used for POST requests. This isn't strict, BUT it is the convention that should be followed. Queries are found in `src/queries/queries.js` and Mutations in `src/mutations/mutations.js`

Query example (singleprofile.js):
```
<Query query={GetGitHubUser} variables={{ jwt: myData }}> // Name of the query const in src/queries/queries.js
  {
      ({loading, error, data}) => { // check if successfully queried to GraphQL
          if(loading) {
              return <p>Loading...</p>;
          }
          if(error) {
            throw new Error('404 Not Found');
          }
          const gitHubUser = data.getGitHubUserById
          return(
            <div>
              <AboutHeader user={gitHubUser}/>
              <Summary user={gitHubUser}/>
              <Skills user={gitHubUser}/>
              <Projects user={gitHubUser}/>
            </div>
          )
        }
  }
</Query>
```

Mutation example:
```
<Mutation 
    mutation={SignUpForAccount} // name of the mutation const in src/mutations/mutations.js
    variables={{ firstname, lastname, email,  password }} // parameters declared in mutations.js
    onError={ (error) => { // used to catch GraphQL erroes
        console.log(error)
        this.setState({ errorMessage: "Email was already taken." });
    }}
    onCompleted={(signup) => { // what react should do if the mutation was successfully created
        var tok = signup.signup.Jwt;
        localStorage.setItem('data', tok)
        this.setState({ data: tok });
        this.props.history.push('/githubauth')
    }}
>
    {
        signup => <button disabled={!isEnabled} onClick={signup}>Submit</button> // part of what should be displayed on the page along with what other components are before and after this component
    }
</Mutation>
```

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
