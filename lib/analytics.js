import ReactGA from 'react-ga'

export const initGA = () => {
  if (typeof window !== 'undefined') {
    if (process.env.NODE_ENV !== 'production') {
      console.log('GA init');
    }
    ReactGA.initialize('UA-xxxxxxxxx-1');
  }
}
export const logPageView = () => {
  if (typeof window !== 'undefined') {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Logging pageview for ${window.location.pathname}`);
    }
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
}
export const logEvent = (category = '', action = '') => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Logging event category: ${category}; action: ${action}`);
  }
  if (category && action) {
    ReactGA.event({ category, action });
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
}