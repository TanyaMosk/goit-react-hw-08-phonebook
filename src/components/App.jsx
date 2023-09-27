import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
// import { fetchContacts } from "redux/contacts/operations";
// import Loader from './Loader';
// import ContactList from './ContactList';
// import ContactForm from './ContactForm';
// import Filter from "./Filter";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";
import { RestrictedRoude } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {   
  const dispatch = useDispatch();
  // const error = useSelector(selectError);
  // const loading = useSelector(selectIsLoading);
    
  // useEffect(() => {
  //       dispatch(fetchContacts())
  //   }, [dispatch]);

  const {isRefreshing} = useAuth();
       
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>):
    (<>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
        <Route path="/register" element={
          <RestrictedRoude redirectTo="/contacts" component={<Register/>} />}/>
        <Route path="/login" element={
          <RestrictedRoude redirectTo="/contacts" component={<Login/>}/>}/>
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<Contacts/>}/>}/>
      </Route>
      </Routes>
      <GlobalStyle/>
      </> 


    //  <>      
    //   <ContactForm />      
    //   <Filter />
    //   {loading && !error ? <Loader /> : <ContactList />} 
    //   <GlobalStyle/>
    // </>
  )
};





