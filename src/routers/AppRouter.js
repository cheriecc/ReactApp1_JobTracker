import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRouters';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import JobBoard from '../components/JobBoard';
import AddJobPage from '../components/AddJobPage';
import EditJobPage from '../components/EditJobPage';
import NotFoundPage from '../components/templates/NotFoundPage';
import Footer from '../components/templates/Footer';


const AppRouter = () => (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path ='/jobboard' element={<JobBoard />} />
            <Route exact path='/create' element={<AddJobPage/>} />
            <Route exact path='/edit/:id' element= {<EditJobPage />} />
        </Route>
        <Route exact path='/login' element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
)

export default AppRouter;