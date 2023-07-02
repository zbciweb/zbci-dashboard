import './demo.css';
import './fonts/boxicons.css';
import './css/core.css';
import './css/theme-default.css';
import './css/pages/page-auth.css';
import './css/pages/page-icons.css';
import './css/pages/page-misc.css';
import './css/perfect-scrollbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Route/Index';
import { Helmet } from "react-helmet";  

function App() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
