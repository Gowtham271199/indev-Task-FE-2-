# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**


## Additional Information

### Time Taken
- **How long did it take you to complete this assignment?**
  - It took me approximately 4 hours to complete this assignment.

### Challenges
- **What about this assignment did you find most challenging?**
  - The most challenging part of the assignment was implementing the pagination, search, and sorting functionalities efficiently while ensuring the API performance remains optimal.

### Clarifications
- **What about this assignment did you find unclear?**
  - The instructions were mostly clear, but I had to make some assumptions about the default values for pagination parameters and the expected behavior when combining multiple query parameters.

### Unexpected Challenges
- **What challenges did you face that you did not expect?**
  - I encountered unexpected challenges with setting up and configuring the MongoDB connection, especially ensuring that the database schema and models were correctly defined to meet the requirements.

### Assignment Difficulty
- **Do you feel like this assignment has an appropriate level of difficulty?**
  - Yes, I believe the assignment has an appropriate level of difficulty. It effectively tests essential backend development skills, including RESTful API design, database management, and handling complex queries.

### Tooling Decisions
- **Briefly explain your decisions to use tools, frameworks, and libraries.**
  - I chose Express.js for its simplicity and flexibility in building RESTful APIs. MongoDB was selected as the database for its ease of integration with Node.js and its document-oriented structure, which is suitable for handling user data. Additional libraries like `body-parser`, `cors`, and `dotenv` were used to manage request parsing, cross-origin resource sharing, and environment variables, respectively. For testing, I used `jest` and `supertest` to ensure robust and reliable API endpoints.

### Assumptions and Decisions
- **Did you make certain assumptions and decisions around the application? Please elaborate on your reasoning.**
  - Yes, I made the following assumptions and decisions:
    - Default pagination limit: I set the default pagination limit to 5 to ensure the API returns a manageable number of users per request, improving performance and usability.
    - Case-insensitive search: I implemented case-insensitive search for user names to make the search functionality more user-friendly and flexible.
    - Error handling: I included basic error handling to return meaningful error messages and status codes to the client, ensuring a better developer experience when integrating with the API.



