# eSalon - React Developer Evaluation

## Application Highlights

- You can add multiple IP address locations to this list
- The solar details cards gives the option to see the sunrise and sunset times in different formats: at the location, based on the user's browser time, and in UTC
- I am also using the geolocation data to display the location city and country, though sometimes there are bugs involved
  - ex: I found that with IP address 1.1.1.1 it will say the location is on the west coast while the timezone is EST
- The IP address input provides validation for IP address formats

## Development Notes

- Total time taken was around 8 hours, taking into account the research into Bootstrap classes and settings to minimize custom css
- Create React App was used to bootstrap the application
- Since there was no need for a global state, I opted to use [React-Query](https://react-query-v3.tanstack.com/) instead of the more robust solution that Redux offers
  - In a larger scale application I would probably choose to use the [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) with [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) to replace React-Query, and also use [Axios](https://axios-http.com/) for its cleaner syntax and backwards compatibility
- TypeScript was heavily used to provide some level of self-documentation to the components

## Next Steps

- Since this is a rolling list of added locations I would have liked to add a feature to remove them
- Most of the styling is directly using Bootstrap components, it would have been fun to give the app a customized theme
- Add unit testing with [react-testing-library](https://github.com/testing-library/react-testing-library)
- Instead of validating the IP address input, it might be more user friendly to implement a text mask

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
