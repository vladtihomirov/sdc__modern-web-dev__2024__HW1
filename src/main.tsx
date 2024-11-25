import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/styles.css'
import './styles/reset.css'
import './styles/pallete.css'
import './styles/hint.css'
import App from "./App.tsx";
import Router from "crossroad";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Router>
        <App/>
      </Router>
    </StrictMode>,
)
