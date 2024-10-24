import { useEffect } from 'react'
import Browse from './Browse'
import Logins from './Logins'
import { createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import Player from '../Player/Player'



const Body = () => {
  const dispatch = useDispatch();
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Logins/>
    },
    {
      path: "/Cineflect",
      element: <Logins/>
  },
    {
        path: "/browse",
        element: <Browse/>
    },
    {
      path: "browse/player/:id",
      element: <Player/>
  },


])

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName,photoURL} = user.uid;
      dispatch(addUser({uid:uid, email:email ,displayName:displayName ,photoURL:photoURL}));
      

    } else {
      dispatch(removeUser());
    
    }
  });
})

  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
