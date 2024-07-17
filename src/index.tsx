import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import {Provider} from 'react-redux'
import {store, persistor} from "./store/store";
import {PersistGate} from 'redux-persist/integration/react';
import {UserProvider} from "./context/UserContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <>
        <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <UserProvider>
                    <ThemeProvider>
                        <App/>
                    </ThemeProvider>
                </UserProvider>
            </Provider>
        </PersistGate>
        </BrowserRouter>
    </>
);

reportWebVitals();
