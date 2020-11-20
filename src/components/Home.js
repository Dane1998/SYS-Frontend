import { Row, Container, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid>
      <Col xs={3}>{"  "}</Col>
      <Col xs={5}>
        <p># Getting Started with Create React App</p>
        <br />
        <p>
          This project was bootstrapped with [Create React
          App](https://github.com/facebook/create-react-app).
        </p>
        <br />
        <p>## Available Scripts</p>
        <br />
        <p>In the project directory, you can run:</p>
        <br />
        <p>### `npm start`</p>
        <br />
        <p>Runs the app in the development mode.\</p>
        <p>
          Open [http://localhost:3009](http://localhost:3009) to view it in the
          browser.
        </p>
        <br />
        <p>The page will reload if you make edits.\</p>
        <p>You will also see any lint errors in the console.</p>
        <br />
        <p>### `npm test`</p>
        <br />
        <p>Launches the test runner in the interactive watch mode.\</p>
        <p>
          See the section about [running
          tests](https://facebook.github.io/create-react-app/docs/running-tests)
          for more information.
        </p>
        <br />
        <p>### `npm run build`</p>
        <br />
        <p>Builds the app for production to the `build` folder.\</p>
        <p>
          It correctly bundles React in production mode and optimizes the build
          for the best performance.
        </p>
        <br />
        <p>The build is minified and the filenames include the hashes.\</p>
        <p>Your app is ready to be deployed!</p>
        <br />
        <p>
          See the section about
          [deployment](https://facebook.github.io/create-react-app/docs/deployment)
          for more information.
        </p>
        <br />
        <p>### `npm run eject`</p>
        <br />
        <p>
          **Note: this is a one-way operation. Once you `eject`, you can’t go
          back!**
        </p>
        <br />
        <p>
          If you aren’t satisfied with the build tool and configuration choices,
          you can `eject` at any time. This command will remove the single build
          dependency from your project.
        </p>
        <br />
        <p>
          Instead, it will copy all the configuration files and the transitive
          dependencies (webpack, Babel, ESLint, etc) right into your project so
          you have full control over them. All of the commands except `eject`
          will still work, but they will point to the copied scripts so you can
          tweak them. At this point you’re on your own.
        </p>
        <br />
        <p>
          You don’t have to ever use `eject`. The curated feature set is
          suitable for small and middle deployments, and you shouldn’t feel
          obligated to use this feature. However we understand that this tool
          wouldn’t be useful if you couldn’t customize it when you are ready for
          it.
        </p>
        <br />
        <p>## Learn More</p>
        <br />
        <p>
          You can learn more in the [Create React App
          documentation](https://facebook.github.io/create-react-app/docs/getting-started).
        </p>
        <br />
        <p>
          To learn React, check out the [React
          documentation](https://reactjs.org/).
        </p>
        <br />
        <p>See more in README file</p>
      </Col>
      <Col xs={3}></Col>
    </Container>
  );
}
