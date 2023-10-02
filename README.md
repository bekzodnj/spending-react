# Spending Frontend App

**App Structure:** \
\
![Application structure](https://github.com/bekzodnj/xund-app/blob/master/src/assets/App_info.png) 


---- Form: \
---- SpendingList: \
------- SortDropdown \
------- CurrencyFilters \
------- SpengingCardItem


[Demo - React App](https://spending-react.vercel.app/)

## Used libraries
- react-redux, @redux-toolkit - to manage the state, RTK Query is for fetching/mutating the data and caching the response
- react-hook-form - to handle the form values, to add validation and showing error messages
- tailwindcss


## Available Scripts

After cloning the repository, you can run:

### `npm install`
### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
