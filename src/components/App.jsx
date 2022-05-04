
import { Routes, Route} from "react-router-dom";
import {  AppBar } from "./AppBar/AppBar";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallTriangle} from  'react-loader-spinner'
import { lazy, Suspense } from 'react';
import {  Container,  Box,  } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { getFetchingCurrentUser } from "redux/auth/authSelector";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/authOperation";
import { Footer } from "./Footer/Footer";

const HomePage = lazy(() => import("page/HomePage/HomePage"));
const ContactsPage = lazy(() => import("page/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("page/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("page/RegisterPage/RegisterPage"));

export const App = () => {
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentUser());
    },[dispatch])
  const themes = useSelector(state => state.theme.value);
  return (isFetchingCurrentUser ? <BallTriangle color="#a1776c" height={80} width={80} /> : (<>
    <ToastContainer />
    <AppBar />
    <main>
            <Box themeColor={themes}>
                <Container>
    <Suspense fallback={<BallTriangle color="#a1776c" height={80} width={80} />}>
    <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
        <Route
                path="register"
                element={
                  <PublicRoute restricted={true}>
                    <RegisterPage />
                  </PublicRoute>
                }
        />
        <Route
                path="login"
                element={
                  <PublicRoute restricted={true}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
       
      </Routes>
        </Suspense>
        </Container>
            </Box>
        </main>
        <Footer/>
  </>));
};
