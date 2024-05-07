import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/configurationStore';
import AppRouter from './routers/AppRouter';
import FacingPage from './components/FacingPage';
import { getAllJobs } from './slices/jobSlice';


// const jobA = {
//   id: "1",
//   title: "Example A",  // string
//   deadline: new moment().valueOf(),  // timestamp
//   applied: false, // boolean
//   type: "Full time",  // string
//   location: "Remote",  // string
//   companyName: "Example A company",  // string
//   link: "Example A link",  // string
//   description: "Example A description",  // string
//   skills: ['SQL'],  //  array
//   status: 'success'
// }

// const jobB = {
//   id: "2",
//   title: "Example B",  // string
//   deadline: new moment().valueOf(),  // timestamp
//   applied: false, // boolean
//   type: "Full time",  // string
//   location: "Remote",  // string
//   companyName: "Example B company",  // string
//   link: "Example B link",  // string
//   description: "Example B description",  // string
//   skills: ['Python'],  //  array
//   status: 'failed'
// }

// const jobC = {
//   id: "3",
//   title: "Example C",  // string
//   deadline: new moment().valueOf(),  // timestamp
//   applied: false, // boolean
//   type: "Full time",  // string
//   location: "Remote",  // string
//   companyName: "Example B company",  // string
//   link: "Example B link",  // string
//   description: "Example B description",  // string
//   skills: ['Python'],  //  array
//   status: 'failed'
// }

// store.dispatch(addJob(jobA));
// store.dispatch(addJob(jobB));
// store.dispatch(addJob(jobC));

const root = ReactDOM.createRoot(document.getElementById('root'));

const jsx = (
  <Provider store={store}>
    <AppRouter />
</ Provider>
)

root.render(<FacingPage />)

store.dispatch(getAllJobs())
setTimeout(() => root.render(jsx), 1000)