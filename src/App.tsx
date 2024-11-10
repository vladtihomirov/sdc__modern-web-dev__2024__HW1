import './App.css'
import Router, {Route, Switch} from "crossroad";
import {MenuPage} from "./components/pages/menu-page/MenuPage.tsx";
import {HomePage} from "./components/pages/home-page/HomePage.tsx";
import {CompanyPage} from "./components/pages/company-page/CompanyPage.tsx";
import {LoginPage} from "./components/pages/auth/login-page/LoginPage.tsx";
import {BaseTemplate} from "./components/templates/base-template/BaseTemplate.tsx";

function App() {
  return (
    <BaseTemplate>
      <Router>
        <Switch redirect="/home">
          <Route path="/home" component={HomePage}/>
          <Route path="/menu" component={MenuPage}/>
          <Route path="/company" component={CompanyPage}/>
          <Route path="/auth/login" component={LoginPage}/>
        </Switch>
      </Router>
    </BaseTemplate>
  )
}

export default App
