# AngularTinderFood


The app is organized by features modules. There is a folder called "features" and every feature of the app have his own module inside this folder.
I also have two more modules: "shared" for shared components/classes and "core" for the core data of the app that will be use by all modules.
The project uses NGRX for state management. For this particular project, the store is inside core module.
For the UI I used Angular Material/CDK and Tailwind.

To run the application you need to install the dependencies: `npm install` or 'yarn' and start the server: `npm run start` or `yarn start`. The app will be available in "http://localhost:4200/".


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
