import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { CategProvider } from './context/CategContext.jsx'
import { ConfirmProvider } from 'material-ui-confirm'

createRoot(document.getElementById('root')).render(
    <ConfirmProvider>
        <CategProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </CategProvider>
    </ConfirmProvider>
)
