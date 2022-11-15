import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import CreateUserPage from "./CreateUser";
import LoginPage from "./Login";
import UserProfilePage from "./UserProfile";
import Header from "./components/Header";

// goes to page based on the file path
const router = createBrowserRouter([
  {
    // home page
    path: "/",
    element: <UserProfilePage />,
  },
  {
    // login page
    path: "/login",
    element: <LoginPage />,
  },
  {
    // create user page
    path: "/create",
    element: <CreateUserPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;