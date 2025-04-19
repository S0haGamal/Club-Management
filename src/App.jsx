import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard";
import Attendance from "./Pages/Attendance";
import Count from "./Pages/Count";
import Subscriptions from "./Pages/Subscriptions";
import store from "./Components/Store/Store";
import { Provider } from "react-redux";
import SubscriptionForm from "./Pages/SubscriptionForm";
import Receipts from "./Pages/Receipts";
import Time from "./Pages/Time";
import Invitations from "./Pages/Invitations";
import Leading_Clients from "./Pages/Leading Clients";
import Employee_Salaries from "./Pages/Employee Salaries";
import Shift_Schedule from "./Pages/Shift Schedule";

const router = createBrowserRouter([
  {
    index:true ,
    element: <Login />,
    title: "Login",
  },
  {
    path:'/home' ,
    element: <Dashboard/>,
    title: "Dashboard",
  },
  {
    path:'/subscription',
    element: <Subscriptions/>,
  }
,
{
  path:'/subscription/add',
  element: <SubscriptionForm/>,
},
{
  path:'/receipts',
  element :<Receipts/>,
},
{
  path:'time',
  element: <Time/>,
},
{
 path: "attendance" ,
  element: <Attendance/>,
},
{
  path:'invitations',
  element:<Invitations/>,
},
{
  path:'leads',
  element:<Leading_Clients/>,
},
{
  path:'staff',
  element:<Employee_Salaries/>,
},
{
  path:'shifts',
  element:<Shift_Schedule/>,
},
{
  path:'settings',
  element:<Count/>,
}

]);
function App() {

  return (
    <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  );
}

export default App
