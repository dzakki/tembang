import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Result from './pages/result';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/result',
    element: <Result />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

