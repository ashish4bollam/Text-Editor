import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { authModState } from '<memeify>/src/atoms/authModAtom';
import Login from './Login';
import SignUp from './SignUp';

type VerInputProps = {
    
};

const VerInput:React.FC<VerInputProps> = () => {

    const modalState =useRecoilValue(authModState);
    
    return (
        <Flex direction='column' align='center' width='100%' mt={4}>

            {modalState.view=='login' && <Login/>}
            {modalState.view=='signup' && <SignUp/>}
           
        </Flex>
    )
}
export default VerInput;