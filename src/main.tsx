import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/styles.css'
import './styles/reset.css'
import './styles/pallete.css'
import './styles/hint.css'
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./providers/AuthProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
