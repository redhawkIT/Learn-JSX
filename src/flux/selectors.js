import { createSelector } from 'reselect'

/*
BASIC SELECTORS
*/
const select = {
  screen: state => state.screen,
  route: state => state.routing ? state.routing.location.pathname : '/'
}

/*
MEMOIZED SELECTORS
*/
export const screenType = createSelector(
  select.screen,
  screen => screen
    ? Object.keys(screen.is).find(key => screen.is[key] === true)
    : 'infinity'
)

/*
FURTHER READING:
https://hackernoon.com/usage-of-reselect-in-a-react-redux-application-fcdca05cc00d
http://engineering.blogfoster.com/managing-complexity-in-redux-higher-order-reducers-and-async-state/
https://docs.mobify.com/progressive-web/0.15.0/guides/reselect/
*/
