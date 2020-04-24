# Project Structure 🏗
I've followed a lot of the structure that is outlined within [this repository](https://github.com/oldboyxx/jira_clone).

There are two special root folders in `src`: `app` and `shared` (described below). All other root folders in `src` should follow the structure of the routes. We can call these folders modules.

The main rule to follow: **Files from one module can only import from ancestor folders within the same module or from `src/shared`.** This makes the codebase easier to understand, and if you're fiddling with code in one module, you will never introduce a bug in another module.

| File or folder   | Description                                                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/index.js`  | The entry file. This is where we import babel polyfills and render the App into the root DOM node. |
| `src/index.html` | The only HTML file in our App. All scripts and styles will be injected here by React. |
| `src/App`        | Main application routes, components that need to be mounted at all times regardless of current route, global css styles, fonts, etc. Basically anything considered global / ancestor of all modules. |
| `src/Views`    | Contains the main app views like Login, Boards, etc. |
| `src/Shared`     | Components, constants, utils, hooks, styles etc. that can be used anywhere in the codebase. Any module is allowed to import from shared. |
---
## Project Best Practices
The following list are some best practices that I've tried to follow with this project. As I continue to build out more features and add more and more things, I've realized that adhering to strict rules is going to help me keep files, functions, and components organized.
- [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle): As I add more components, business logic, and feature functionality. Maintaining the notion that each file and component is responsible for **one thing** is incredibly important. This helps keep files smaller and more manageable at the expense of more files.
- Styled components should always be prefixed with the word `Styled`. This makes it easier to understand which elements in the DOM are handled by the library.
- Styled component files should be organized in the following order of precedence:
  1. Inner components to outer components. This allows for easier selection of components within the same file if a parent action should effect it's children's style ie hover effecting child colors.
  2. The rough order in-which components are *meant* to be displayed on the page.