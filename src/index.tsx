import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import { Provider } from 'react-redux'
import {store} from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </Provider>

        </BrowserRouter>
);

reportWebVitals();
