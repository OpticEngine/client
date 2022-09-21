import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { rootRouter } from './routes/root.loader';
import { Provider } from 'react-redux'
import store from './store'
import "./assets/css/tailwind.css";
import "./assets/css/main.css";
import "./assets/css/layouts/layout-1.css";
import "./assets/css/layouts/e-commerce.css";
import "./assets/css/animate.css";
import "./assets/css/components/left-sidebar-1/styles-lg.css";
import "./assets/css/components/left-sidebar-1/styles-sm.css";
import "./assets/css/components/nprogress.css";
import "./assets/css/components/recharts.css";
import "./assets/css/components/steps.css";
import "./assets/css/components/left-sidebar-3.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={rootRouter} />
    </Provider>
)

