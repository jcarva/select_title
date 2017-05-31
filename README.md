**Have a question or suggestion?**
Contact me on [Linkedin](https://www.linkedin.com/in/jaelson-carvalho-4b84a3a2), send an email to jaelsoncarvalhojr@gmail.com, or create a pull request on this project.

---

**Pet-project. Use at your own risk. Low test coverage ratio.**

# Select Title

A simple project to fecthData from a api and show the informations as a sortable and filterable list.

---

## Index

- [Stack](#stack)
- [Design Goals](#design-goals)
- [API](#api)
- [Avaialable Pages](#available-pages)
- [Getting Started](#getting-started)
- [Local Commands](#local-commands)
    - [Build](#build)
    - [Development](#development)
    - [Production](#production)
    - [JavaScript Lint](#javascript-lint)
- [Docker Build and Run](#docker-build-and-run)
- [Auxiliary Commands](#docker-auxiliary-commands)

---

## Stack

* [Node.js](https://nodejs.org) (v6.2.2)
* [npm](https://www.npmjs.com) (3.9.5)
* [React](https://facebook.github.io/react) (v15.4.2)
* [React Router DOM](https://reacttraining.com/react-router/) (v4)
* [Redux](http://redux.js.org/) (3.6.0)
* [Redux Thunk](https://github.com/gaearon/redux-thunk) (2.2.0)
* [Axios](https://github.com/mzabriskie/axios) (0.15.3)
* [Ant Design](https://ant.design/) for the visual layout
* [Webpack](https://webpack.github.io) (1.14.0) for development and bundling
* [Babel](https://babeljs.io/) transpiler for ES6 and ES7 magic
* [ESLint](http://eslint.org/) to maintain a consistent code style

---

## Design Goals

- Use Cutting-Edge Technologies
- Best Programming Techniques
- Babel 6 with Webpack and Hot Loader
- Fast testing with mocked-out DOM
- Separate [Smart and Dumb](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components
- [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)

---

## API

This application consumes data from the following services:

* [http://jsonplaceholder.typicode.com/posts](http://jsonplaceholder.typicode.com/posts)

---

## Available Pages

|    Page    |    URL        |                          Description                        |
|:----------:|:-------------:|:-----------------------------------------------------------:|
|    Home    |     /         |  Main page of application to show the fetched data          |

---

## Getting Started

Install yarn to a better package management

```sh
$ npm install --global yarn
```

Install application dependencies and also do the first build

```sh
$ yarn install
```

---

## Local Commands

In this current section you can find all commands to run the application in your machine. All the commands also are  in the `scripts` section of [package.json](package.json).

### Build

```sh
$ yarn run build
```

The above command is used to build the production files.

**Input:** `src/main.js` and `src/index.html`

**Output:** `build/`

### Development

```sh
$ yarn run server
```

Navigate to **http://localhost:5000/** to view the app.

### Production

```sh
$ NODE_ENV=production yarn run server
```

Navigate to **http://localhost:5000/** to view the app running with the production files.

### JavaScript Lint

```sh
$ yarn run eslint
```

This above command is used to identifying and reporting on patterns in JavaScript on the entire project.


## Docker Build and Run

In this section you can find all instruction to build a image in the production way. The current step is basically to create a image through Docker and Docker Compose, then you need to install them before any step.

[Docker Install](https://docs.docker.com/engine/installation/)

[Docker Compose Install](https://docs.docker.com/compose/install/)

### Docker Compose

[Doc Reference](https://docs.docker.com/compose/gettingstarted/#step-4-build-and-run-your-app-with-compose)

The bellow command creates a new Docker image production of our application. Building and running our application with Docke Compose.

```sh
$ docker-compose up
```

The command reads the Dockerfile in the current directory and processes its instructions one by one to build an image called ```list_titles_production``` on your local machine.

Using the above command we have by default the ```list_titles_production``` available image running a docker container on http://<YOUR_IP>:8079, http://<YOUR_IP>:8080, http://<YOUR_IP>:8081.

**Why use it?**

[Doc Reference](https://www.docker.com/)
```
Eliminate the "it works on my machine"Â problem once and for all. Package dependencies with your apps in Docker containers for portability and predictability during development, testing, and deployment.
```
## Docker Auxiliary Commands

### List all Docker Images

```sh
$ docker images -a
```

### List all Docker Containers

```sh
$ docker ps -a
```

### Build a Docker Image

```sh
$ docker build -t <INSERT THE IMAGE'S NAME> .
```

The command reads the Dockerfile in the current directory and processes its instructions one by one to build an image called <INSERT THE IMAGE'S NAME> on your local machine. By default, this command creates a production image of the application, and after run the image in a new container, it can be accessed on <YOUR_IP_ADDRESS>:8080.

### Run a Docker Image

This below command runs the a image in a new container. In that way, our application can be accessed <YOUR_IP_ADDRESS>:8080.

```sh
$ docker run -p 8080:8080 --name <INSERT THE CONTAINER'S NAME> -d <INSERT THE IMAGE'S NAME>
```

### Get logs from your Docker Container

```sh
$ docker logs <INSERT THE CONTAINER'S NAME>
```

### Enter in a Docker Container

Executing the below command you will enter in you running container and operate it as your local machine.

```sh
$ docker exec -it <INSERT THE CONTAINER'S NAME> sh
```

---

## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

## Contributors

* Jaelson Carvalho ([jcarva](https://github.com/jcarva))

---

## Style Guide

Some parts of this project follow the style guide from [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example) and [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux).

---

## License

This project is licensed under the terms of the **GNU GENERAL PUBLIC** license.
>You can check out the full license [here](https://github.com/jcarva/list_titles/blob/master/LICENSE)

---
