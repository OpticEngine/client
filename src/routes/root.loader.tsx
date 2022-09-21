import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/Root';

export const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [

        ]
    }
])