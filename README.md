# Gnome App

**Gnome App** displays a list of gnomes with infinite scroll and searches for gnome by name.

## Login

A mock has been performed to validate if the user logged in is correct.

If the user is not registered, an error message will be displayed with sweet-alert.

The user who can access is the following:

> email: heroe@gmail.com
> password: heroe

## Gnome List

The gnome list will be displayed with an infinite scroll, the different gnomes will be loaded in redux as the scroll is lowered.

Clicking the "more" button will show all the information about the gnome.

## Gnome Search

In the gnome search, an input will allow you to search for a gnome by name.
The information of the searched gnome will be saved in redux.

## Technologies

### React and Redux

React, Redux, React-Hooks, Redux-Saga.

### Tests

Jest, enzyme, redux-saga-test-plan, redux-mock-store and react-test-renderer.

### Styles

styled-components, styled-systems

### Others

webpack, lodash
