import './App.css'
import {Route, Switch} from "crossroad";
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

function App() {
  return (
    <BaseTemplate>
      <Switch redirect={EPages.NOT_FOUND}>
        <Route path={EPages.HOME} component={HomePage}/>
        <Route path={EPages.MENU} component={MenuPage}/>
        <Route path={EPages.COMPANY} component={CompanyPage}/>
        <Route path={EPages.LOGIN} component={LoginPage}/>
        <Route path={EPages.FAQ} component={FAQPage}/>
        <Route path={EPages.CONTACT} component={ContactPage}/>
        <Route path={EPages.ORDER} component={OrderPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </BaseTemplate>
  )
}

export default App
