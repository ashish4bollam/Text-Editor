import { Center, Flex, Icon, Input } from '@chakra-ui/react';
import React from 'react';
import AuthMod from '../../Modals/Autho/AuthMod';
import VerButt from './VerButt';
import { Button } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '<memeify>/src/firebase/ClientApp';
import { User } from 'firebase/auth';
import Icons from './Icons';
import { IoSparkles } from 'react-icons/io5';
import { CgProfile} from 'react-icons/cg';
import { MdOutlineLogin } from 'react-icons/md';
import {BsFiletypeDocx} from 'react-icons/bs'
import { database } from '<memeify>/src/firebase/ClientApp';
import { collection,addDoc } from 'firebase/firestore';






type RighContentProps = {
    user ? :User | null;
    
};

const RightContent:React.FC<RighContentProps> = ({user}) => {
    
    
    return(
        <>
        <AuthMod/>
        <Flex justify='center' align='center'>
        <Flex fontSize={20} mr={5} align="center"
          
          borderRadius={4}
          
          >
          <Flex ml={2} fontSize={17}></Flex>  
        <Icon as={BsFiletypeDocx} marginRight='10px'/>
              DOC OC TEXT EDITOR 
              
        </Flex> 
        {user ? <Icons /> :<VerButt/>}

           


          

            {user && 
            (<>
            
            <Flex fontSize={17} mr={5} align="center" 
            cursor="pointer"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}>
                <Icon as={MdOutlineLogin}/>
                <Flex 
                ml={2} 
                onClick={()=>signOut(auth)
                }
                borderRadius={2}

                
                >Log Out</Flex>
            </Flex>
            </>)
            }
             
        </Flex>
        
        </>
    )
}
export default RightContent;