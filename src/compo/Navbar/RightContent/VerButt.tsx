import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { authModState } from '<memeify>/src/atoms/authModAtom';

const VerButt:React.FC = () => {

    const setModalState=useSetRecoilState(authModState)
    
    return (
        <>
       
            <Button 
            variant='outline' 
            height='20px'
            display={{base:"none",sm:"flex"}}
            width={{base:"70px",md:"110px"}}
            mr={2}
            onClick={()=> setModalState({open:true,view:'login'})}
            >Log In</Button>
            
            
            <Button 
           
            height='20px'
            display={{base:"none",sm:"flex"}}
            width={{base:"70px",md:"110px"}}
            mr={2}
            onClick={()=> setModalState({open:true,view:'signup'})}
            >Sign Up</Button>
   
        </>
    )
}
export default VerButt;