import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import JobBoard from '../components/JobBoard';
import NotFoundPage from '../components/NotFoundPage';
import FacingPage from '../components/FacingPage';
import AddJobPage from '../components/AddJobPage';
import EditJobPage from '../components/EditJobPage';
import JobDetailsPage from '../components/JobDetailsPage';


const AppRouter = () => (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route exact path='/' element={<FacingPage />} />
        <Route exact path ='/jobboard' element={<JobBoard />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/create' element={<AddJobPage/>} />
        <Route exact path='/edit/:id' element= {<EditJobPage />} />
        <Route exact path='/jobs/:id' element ={<JobDetailsPage />} />
        <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </BrowserRouter>
)

export default AppRouter;