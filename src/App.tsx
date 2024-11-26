import './App.css'
import {MenuPage} from "./components/pages/menu-page/MenuPage.tsx";
import {HomePage} from "./components/pages/home-page/HomePage.tsx";
import {CompanyPage} from "./components/pages/company-page/CompanyPage.tsx";
import {LoginPage} from "./components/pages/auth/login-page/LoginPage.tsx";
import {BaseTemplate} from "./components/templates/base-template/BaseTemplate.tsx";
import {FAQPage} from "./components/pages/faq-page/FAQPage.tsx";
import {ContactPage} from "./components/pages/contact-page/ContactPage.tsx";
import {EPages} from "./@types/EPages.ts";
import {NotFoundPage} from "./components/pages/not-found-page/NotFoundPage.tsx";
import {OrderPage} from "./components/pages/order-page/OrderPage.tsx";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BaseTemplate>
      <Routes>
        <Route index path={EPages.HOME} element={<HomePage/>}/>
        <Route path={EPages.MENU} element={<MenuPage/>}/>
        <Route path={EPages.COMPANY} element={<CompanyPage/>}/>
        <Route path={EPages.LOGIN} element={<LoginPage/>}/>
        <Route path={EPages.FAQ} element={<FAQPage/>}/>
        <Route path={EPages.CONTACT} element={<ContactPage/>}/>
        <Route path={EPages.ORDER} element={<OrderPage/>}/>
        <Route path={EPages.NOT_FOUND} element={<NotFoundPage/>}/>
        <Route path="*" element={<Navigate to={EPages.NOT_FOUND} replace/>}/>
      </Routes>
    </BaseTemplate>
  )
}

export default App
