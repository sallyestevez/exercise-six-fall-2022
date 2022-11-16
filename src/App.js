import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 

// styling & Components
import './App.css';
import CreateUserPage from "./pages/CreateUser";
import LoginPage from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";
import Header from "./components/Header";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr1IopijrEwo6pV_kthcG6ZmOxngwPpis",
  authDomain: "exercise-six-fall-2022-18788.firebaseapp.com",
  projectId: "exercise-six-fall-2022-18788",
  storageBucket: "exercise-six-fall-2022-18788.appspot.com",
  messagingSenderId: "530220437413",
  appId: "1:530220437413:web:ea3ddd86e918b1801ce24c"
};

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
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  // ensure app is initialized when ready
  useEffect(() => {
    //Initialize firebase
    initializeApp(firebaseConfig);
    setAppInitialized(true);
  }, []);

  // check to see if user is logged in
  // user loads page, check their status
  // set state accordingly
  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // user is signed in
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          // user is signed out
          setUserInformation({});
          setIsLoggedIn(false);
        }
        // whenever state changes setLoading to false
        setIsLoading(false);
      });
    }
  }, [appInitialized]);
  
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;