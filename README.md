# NextJS Starter

This template is intended to speed up the creation of new projects using NextJS as well as centralise team decisions regarding development tooling.

## App folder vs Pages folder

Next.js supports two paradigms for building a site with, the app folder and the pages folder. The app folder is their newest option, making use of modern React 18 features as well as various other Development Experience benefits. For that reason, this tempate targets the app folder. However, there are valid reasons to avoid the app folder, e.g. site requires page transitions, at a clients request, library support, etc.

## Deployment to Vercel

This template is ready to be deployed to Vercel, typically via their [web UI](https://vercel.com/new). Ensure that your newly created project is part of the Phantom Studios org.

### Domain Env Variables

NEXT_PUBLIC_URL = The final production URL.

## Styling

CSS Components is installed, which is Phantom's in-house styling solution.

An example for how this is used can be found in `src/components/RootLayout`, and documentation can be found [here](https://css-components.net).

### Theming

Theming is primarily handled via scss variables, which are declared in `*.scss` files found in `theme/*`. Local font files should be found in `theme/fonts/*`, and a string of font variables is exported from `theme/fonts/index.ts`, which can be added to the DOM to allow access to all fonts in CSS.

### Linting

This template uses `stylelint` as an opinionated style linter. Properties are ordered alphabetically, to minimise friction for devs switching between Google projects and back.

## Documentation

Complex application functionality should be documented in the repo when relevant and linked to here, for example:

[Example Feature Doc](./docs/EXAMPLE.md)

## README's

After using this template, this README should be replaced with the [example README](./Example%20README.md), which should be updated and populated with the relevant content for the project.
