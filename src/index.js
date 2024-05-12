import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/configurationStore';
import AppRouter from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import { getAllJobs } from './slices/jobSlice';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebase';
import { logOut } from './firebase/auth';


const root = ReactDOM.createRoot(document.getElementById('root'));

const jsx = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRouter />
  </ Provider>
  </ThemeProvider>
)

root.render(<LoadingPage />)

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(getAllJobs()).then(() => root.render(jsx))
  } else {
    logOut(() => root.render(jsx))
  }
})

// setTimeout(() => root.render(jsx), 500)