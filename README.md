# Fullstack: Implementation app
The following repository contains the implementation of a basic fullstack application. It's based on React,
FastAPI and SQLAlchemy.

## About branching and context of the proyect
Currently four branches exists: `main`, `front_develop`, `back_integration` and `Dockerization`. Resulting on the natural approach did to the proyect. All the information that can be found on each branch it's enlisted:
- `main` : Final state of the application, here all the branches come together in a Fullstack perspective
- `front_develop` : First task of creation of a React app, considering MUI components, complemented with CSS, JS and pure HTML for creation of cards containing all the information wanted 
- `back_integration` : Second task of creation and preparing the React app for an integration of SQLite, using SQLAlchemy, FastAPI, uvcorn and pydantic.
- `Dockerization` : Final task of deployment of application. Restructuring of proyect and final Docker of each end for final integration

### Running the application
To locally it's adviced that all the dependencies needed must be installed before running. You must have installed for the client end *(node:16-alpine)*:
```
dependencies: {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@mui/icons-material": "^5.15.15",
    "@mui/material": "^5.15.15",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.6.8",
    "chart.js": "^4.4.2",
    "postcss": "^8.4.38",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
}
```
And must have installed for the server end *(python:3.90)*:
```
annotated-types==0.6.0
anyio==4.3.0
click==8.1.7
exceptiongroup==1.2.1
fastapi==0.110.2
greenlet==3.0.3
h11==0.14.0
idna==3.7
pydantic==2.7.0
pydantic-core==2.18.1
sniffio==1.3.1
SQLAlchemy==2.0.29
starlette==0.37.2
typing-extensions==4.11.0
uvicorn==0.29.0
```

Knowing the limitations for certain cases, a dockerized version was prepared. If you are looking foward to build the image it's important that you must have installed [Docker](https://www.docker.com) on your system *(I recommend usign Docker Desktop)*, And now to get the file needed you must run the following command to build the composition, this process must be done once, whenever the image it's already build no futher rebuild it's needed if no changes are made, in a new terminal write:
````
docker-compose up --build
````
This command composes the two different directories with each Dockerfile created for the containers, this creates a multicontainer application that runs the containers simultaneously and let the Front and Back communicate smoothly *(Like a complete local machine!)*. Once the build it's done, the ending parameter `--build` it's no longer needeed. 

When the composition is run, the application it's going to be available on the port: 3000, this means that to see the app running you must connect to your [http://localhost:3000](http://localhost:3000/SignIn), also the backend handling can be seen on the port: [8000](http://localhost:8000/docs). To check an example of some dummy users integrated for testing the below you'll find the credentials:
````
[
    {"username" : "alujan", "password": "qweop123"},
    {"username" : "test_user", "password": "password"},
    {"username" : "prop_user", "password": "password"},
]
````
And try to input your own!, the sign in form it's ready to post new entries. Just be careful with your entries because the app needs more further refinements and it's really sensitive with the information provided:
- **username**/ **password**/ **First name**/ **Last name**/ **Current position**/ **Email** : Are inputs based on string with no support for special characters like accents: `á, ä, à, ...`
- **Skill Set**/ **Skill Grades** : Are inputs based on string that are processed to then be enlisted, it's recomended to use commas to separate the values: `skill 1, skill 2, skill 3, ...`, and for the skill grades all the values input must be in a float format: `1.0, 2.8, 4.2, ...`

### Work Flow
#### Public dev priorities
The following task were prioritized on the creation of the proyect
- [x] Login page possible to be accessed to a Profile page with ability to change to a Sign in form
- [x] Profile page with the information of the user accessed with comeback to Login page
- [x] Sign in form with information about: Name, email, company position, user/password
- [x] Aditional information enlisting skill sets and grading those skills
- [x] Profile page with a spyder graph containing the skills information
- [x] Communication of Front and Backend for user requests
- [x] Dockerize of solution for running/debbuging and consistent use
- [ ] Explore the Docker Repository if it's possible to publish the image
- [ ] Get some sleep after the proyect it's due *(In Progress...)*
