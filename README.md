# React component performance

Isomorphic React application build on Typescript and mounted on NodeJs with
SSR and state management with Redux. For CSS loading styled-components.

## Pre-requisites

In order to get the application running 
before hand you need those dependencies:

- node > 10
- npm 
- yarn

> In order to get yarn globally simply run `npm install --global yarn` or `npm i -g yarn`

```bash
yarn install
# or just 
yarn
```

## Configure environment

Once you already got the dependencies installed via `yarn`, must create a environment file
`.env`. This one is loaded by the process to know in which environment is the application is running.
Just as documentation there is a `.env.dist` file tracked by git where you could find and use it as template.

> TRICK: if you want with this line can create a development env file assigning the por 8888 
> ```bash
> echo "NODE_ENV=development\nPORT=8888" > .env
> ```

## Development

In order to be clare with the following steps I split the development process in a few steps:

- Running `yarn start:dev`
- Testing `yarn test`
- Linting and formatting `yarn lint` `yarn format` 
- Contributing `git commit -am 'fancy commit to contribute here'`

### Running

As already mention before with the next command you can start the process for development:
```bash
yarn start:dev
```

Once is running hopefully you will see in you terminal a message like `App running at on 8888` and 
some instants later the frontend application should be build and you will see the output 
on the same place. Now the application is fully running ready to listen all your changes, and
update fast with HRM (hot module replacement).

At localhost you will see it running: [http://localhost:8888](http://localhost:8888)

> TRICK: the app is running with `nodemon` and this allows us to use
> the shorthand to reload the application from the console without closing
> the process, just typing `rs` and the hitting enter.

### Testing

For testing the next command is the one who run the whole battery
```bash
yarn test
```

There are a few shortcuts because this module use `jest` and on development is not too fancy run
everything always, so if you wan to run a specific test or watch changes there a few [options](https://jestjs.io/docs/en/cli),
here I list some of theme:

```bash
# only the button test with watching
yarn test --watch Button 

# watch all and let you interact with some keys
yarn test --watchAll

# DANGER but need it, update the snapshots
yarn test -u
```

### Linting, Formatting and type check

The linting goes by the hand of eslint and the formatting with prettier, the configurations are
based on airbnb standard for typescript and some custom preferences, also is the type check with
typescript, to run it each one of these command manually you can use:

```bash
# formatting prettier
yarn format

# linting
yarn lint
# linting with auto fix
yarn lint --fix

# type check
yarn typecheck
```

### Contributing

In order to contribute keeping the project well maintained I add a tool called `lint-staged`
in charge to execute command after such kinds of commits hooks (that part covered with `husky`)
so on each commit the application should check the linting, formatting, type check and testing. 

#### Author

- [Agustin Castiarena](http://github.com/castiarena) - [castiarena@gmail](mailto:castiarena@gmail) 


