import {createRoot} from 'react-dom/client'
import './styles/styles.css'
import './styles/reset.css'
import './styles/pallete.css'
import './styles/hint.css'
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
)
