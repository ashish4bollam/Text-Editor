import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { authModState } from '<memeify>/src/atoms/authModAtom';
import { useRecoilState } from 'recoil';
import { Flex } from '@chakra-ui/react';
import VerInput from './VerInput';
import OVerButt from './OVerButt';
import { Text } from '@chakra-ui/react';
import {auth} from '<memeify>/src/firebase/ClientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import ResetPassword from './ResetPassword';

const AuthMod:React.FC = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalState,setModalState]=useRecoilState(authModState)

    const [user,loading,error]=useAuthState(auth);

    const handleClosex=()=>{
      setModalState(prev=>({
        ...prev,
        open:false,

      }));
    }
    useEffect(()=>{
      if(user) handleClosex();
      console.log(user);

    },[user]);
  return (
    <>
      

      <Modal isOpen={modalState.open} onClose={handleClosex}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>
            {modalState.view=='login' && 'Login'}
            {modalState.view=='signup' && 'Sign Up'}
            {modalState.view=='resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody 
          display='flex' 
          flexDirection='column' 
          alignItems='centre' 
          justifyContent='centre'
          pb={6}
          >
        
          
          <Flex direction='column'
          align ='center'
          justify='center'
          width='100%'
          >
            {modalState.view=='login' || modalState.view=='signup' ?(
              <>
              <OVerButt></OVerButt>
            <Text color="gray.500" fontWeight={700}>OR</Text>
            <VerInput></VerInput>
            </>)
            :
            (<ResetPassword/>)
}

          </Flex>
          

          
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  )
    
}
export default AuthMod;