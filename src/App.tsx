import './App.css'
import Router, {Route, Switch} from "crossroad";
import {MenuPage} from "./components/pages/menu-page/MenuPage.tsx";

function App() {
  return (
      <Router>
        <Switch redirect="/menu">
          <Route path="/menu" component={MenuPage} />
        </Switch>
      </Router>
  )
}

export default App
