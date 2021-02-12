# Vite Library

A sample React library built with [Vite](https://vitejs.dev/), published through [Github Packages](https://github.com/features/packages)

## Local Development
* Install dependencies using `npm install`
* Run `yarn dev`
* Edit `/lib/preview/App.tsx` to make changes

## Using the example app
* Run `yarn link` on the project root
* Install app's dependencies using `cd ./example && yarn`
* Run `yarn link @kleo-xhindoli/vite-library`
* Run `yarn start`
Note that you have to run `yarn build` after making changes to the library so that
they can be picked up by consumers of the library.

## Publishing a new version
* Increment the version in `package.json`, commit, push
* Create a new Release through GitHub.
* You are done
