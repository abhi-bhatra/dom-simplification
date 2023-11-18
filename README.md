# HTML DOM Simplification Tool

This TypeScript application simplifies and formats HTML retrieved from a specified URL or file path. It leverages JSDOM, Axios, and Node.js's file system module (`fs`) to fetch HTML, simplify the Document Object Model (DOM), and format the resulting HTML output.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [TypeScript](#Reasons for picking up TypeScript)
- [License](#license)

## Features

- Fetches HTML content from a specified URL or file path
- Simplifies the DOM structure by removing specified elements and attributes
- Formats the resulting HTML with proper line breaks

## Installation

Ensure you have Node.js installed on your system.

1. Clone the repository:

   ```bash
   git clone https://github.com/abhi-bhatra/dom-simplification.git
   ```
   
2. Change the working directory.

    ```bash
    cd dom-simplification
    ```
3. Install Required Packages   

    ```bash
    npm install
    ```

## Usage

1. Update the `websiteURL` variable in **index.ts** with the URL you want to fetch HTML from.

2. Build the Package

    ```bash
    npm run build
    ```

3. Execute the TypeScript code:

    ```bash
    npm start
    ```
This will fetch the HTML content, simplify the DOM, and format the resulting HTML.

## Configuration

1. **websiteURL**: The URL of the website you want to fetch HTML from. Update this variable in index.ts before running the application.

2. **elementsToRemove**: Array of elements to remove from the DOM.

3. **attributesToRemove**: Array of attributes to remove from elements.

4. **inputFilePath**: Path to the input HTML file.

## Reasons for picking up TypeScript

TypeScript offers several advantages for developing applications that involve handling and manipulating structured data like HTML:

1. **Static Typing**: TypeScript provides a strong static typing system that helps catch errors during development. When dealing with complex data structures like the DOM, having type checking at compile-time can prevent potential runtime errors.

2. **Code Readability**: Its static typing, along with interfaces and type annotations, enhances code readability and maintainability, especially when working with large projects or manipulating complex data structures.

3. **Tooling Support**: TypeScript offers excellent tooling support with features like autocompletion, refactoring, and intelligent code suggestions. This is particularly useful when working with APIs, libraries, and complex data structures like the DOM.

4. **Enhanced IDE Support**: Many popular IDEs, like Visual Studio Code, have first-class support for TypeScript, providing better integration, debugging capabilities, and real-time error checking.

5. **ECMAScript Compatibility**: TypeScript is a superset of JavaScript, meaning it adheres to ECMAScript standards and allows the use of modern JavaScript features while providing additional functionality like type checking.

6. **Scalability**: For larger applications or projects that require collaboration among multiple developers, TypeScript's strong typing can make codebases more manageable, maintainable, and scalable.
