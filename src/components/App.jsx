import { HomePage } from "page/HomePage/HomePage";
import { LoginPage } from "page/LoginPage/LoginPage";
import { RegisterPage } from "page/RegisterPage/RegisterPage";
import { Routes, Route} from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";

export const App = () => {
  return <>
    <Routes>
       <Route path="/" element={<Navigation />} >
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
       </Route>
    </Routes>
  </>;
};
