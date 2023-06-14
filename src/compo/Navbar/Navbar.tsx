import React from 'react';
import { Flex ,Image} from '@chakra-ui/react';

import RightContent from './RightContent/RightContent';
import AuthMod from '../Modals/Autho/AuthMod';
import {auth} from '<memeify>/src/firebase/ClientApp';
import { useAuthState } from 'react-firebase-hooks/auth';




const Navbar:React.FC = () => {
    const [user,loading,error]=useAuthState(auth);
    return(
        <Flex bg="white"  padding="7px 13px">
        <Flex align='center' direction='column'>
     
       
        {/* <Directory/> */}
        
    
      
       <AuthMod/>
      <RightContent user={user}/>
    
    
        </Flex>
        </Flex>
    )
    
}
export default Navbar;