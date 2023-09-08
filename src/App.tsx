import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PersonalInfo from "./components/pages/PersonalInfo";
import YourPlan from "./components/pages/YourPlan";
import Addons from "./components/pages/Addons";
import FinishigUp from "./components/pages/FinishigUp";
import ThankYou from "./components/pages/ThankYou";
import RootLayout from "./components/pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "personalinfo", element: <PersonalInfo /> },
      { path: "plan", element: <YourPlan /> },
      { path: "addons", element: <Addons /> },
      { path: "finishingup", element: <FinishigUp /> },
      { path: "thankyou", element: <ThankYou /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
