import { Button } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Docsl from "./Docsl";
import { Route, Router } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "<memeify>/src/firebase/ClientApp";
import Editl from "./Editl";






interface Props {
    children?: React.ReactNode;
  }
  
 const Layout: React.FC<Props> = ({ children }) => {
  const [user,loading,error]=useAuthState(auth);
    return (
      
      
      
      <div >
        <Navbar/>
       {user &&  <Docsl></Docsl>}
       {!user && <h2 className="header-text">Welcome to DOC OC Text Editor</h2>}
      
        
        
      </div>
      
      
    );
  };
export default Layout
