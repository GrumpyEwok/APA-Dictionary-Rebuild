#Setup Instructions

Clone this repository, navigate to the top-level directory of the repository and run `npmi install` to install all needed dependencies.  Run `ng serve --open` to host the repository at localhost:4200.



# Plan of Attack:

I'm going to be doing a rebuild of the American Psychological Association's online dictionary.  It's freely available to the public, and subsequently there's not a lot of CRUD functionality to play with -- however, I can always add it in/switch to an Authorized view mode. The main components are going to be:

A Header (which may contain hard-coded <a> elements),

A Side Nav (with List Items)

A Main Display Area:  An Array of Letters (displayed), a line stating the number of entrees in the dictionary (which I could make dynamic in respect to the CRUD functionality I can add later) a "Word of the Day" feature/hero.

ContentBodyComponent should be in charge of displaying content in the main section.

A Footer.


# Further Goals

Explore linking the Word of the Day section to its corresponding term in the dictionary -- this may be too intensive if mocking a DB is my only option to acquire terms.

Add an "Authorized User View" with CRUD functionality for the word of the day, list items and dictionary entries.

Make the word of the day dynamic to the current date.




# Color Palette:  

button blue: #005499;
banner blue: #46657f;
footer grey: #ebebeb;

# Font:

font-family: 'Roboto', sans-serif; -- regular 400
font-family: 'Quicksand', sans-serif; -- light 300
font-family: 'Montserrat', sans-serif; -- SemiBold 600

# AngularRebuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
