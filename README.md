# Fullstack. Implementation app
The following repository contains the implementation of a basic fullstack application. It's based on React,
FastAPI and SQLAlchemy.

## About branching and context of the proyect
Currently four branches exists: `main`, `front_develop`, `back_integration` and `Dockerization`. Resulting on the natural approach did to the proyect. All the information that can be found on each branc it's enlisted:
- `main` : Final state of the application, here all the branches come together in a Fullstack perspective
- `front_develop` : First task of creation of a React app, considering MUI components, complemented with CSS, JS and pure HTML for creation of cards containing all the information wanted 
- `back_integration` : Second task of creation and preparing the React app for an integration of SQLite, using SQLAlchemy, FastAPI, uvcorn and pydantic.
- `Dockerization` : Final task of deployment of application restructuring of proyect and final Docker of each end for final integration

### Running the application


### Work Flow. Public dev priorities
The following task were prioritized on the creation of the proyect
- [x] Login page possible to be accessed to a Profile page with ability to change to a Sign in form
- [x] Profile page with the information of the user accessed with comeback to Login page
- [x] Sign in form with information about: Name, email, company position, user/password
- [x] Aditional information enlisting skill sets and grading those skills
- [x] Profile page with a spyder graph containing the skills information
- [x] Communication of Front and Backend for user requests
- [x] Dockerize of solution for running/debbuging and consistent use
