# Last.fm App

This project lists top artists and their best albums and best tracks from https://www.last.fm/api.

## Built with

- ReactJS
- React hooks
- React-router-dom
- React-testing-library
- Storybook

## Features

- Re-usable components
- Custom hook
- Infinity Scroll
- Components tested with react-testing-library
- Dark & Light Mode
- Responsive design

## Scenario

1. The user can list top artists on the home page.
2. The user can click on the artist of their choice, go to the detail page and see the top albums and top tracks of the selected artist.
3. The user can scrool infiniti with the load more button if they want.

## Development Setup

- Node ^16.19.0
- npm ^6.2.0

## Usage

```sh
npm install
npm start
```

## .env file

This file contains environment variables that are used by the application. It should be created in the root directory of the project. Copy the contents of the .env.example file into your own .env file and paste your own api key.

The following variables should be set in the .env file:

- `REACT_APP_API_KEY`: your api key
