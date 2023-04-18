# Points - Take Home Assignment
### Author - Vaasu Dhand
<br />

## Tech Stack
- React
- Typescript
- MUI
- Vite
- Jest

<br />

## Steps to run
1. `npm run install` to install the dependencies.
2. `npm run start` to start the vite server.
3. This should launch the app on localhost:3005

<br />

## A word on Application Design
The application itself is fairly basic. The two main components are `<Form />` and `<Tax />`. I utilized context API as my global state management solution (Redux would be overkill). 
I wrote two custom hooks to demonstrate my grasp on react hooks. 
1. `useCalculateTax()` - This hook takes care of making the API call to fetch the Tax brackets and set's the response to ContextAPI.
2. `useTaxContext()` - This hook is a better way to use React's Context API. It stores all the state that is being shared amoung components.

<br />

## What I would have improved, if I had more time:
1. **Tests** - I wanted to write more and better tests. Due to the lack of time I could not spare much time for writing tests.
2. **Organizing Types** - I wanted to create shared types/interfaces to avoid repetition of TS code. 
3. **Content Layout Shifting** - The Form and Output shift after the calculate button is clicked.
4. **Prevent Extra API Call** - If the year entered stays the same we don't need to re-fetch the data.
3. **Styling** - Some more custom CSS would have improved the user experience a lot. CSS is added sugar!
