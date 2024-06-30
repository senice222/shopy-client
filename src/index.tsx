import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import { Provider } from 'react-redux'
import {store, persistor } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </Provider>
            </PersistGate>
        </BrowserRouter>
);

reportWebVitals();
