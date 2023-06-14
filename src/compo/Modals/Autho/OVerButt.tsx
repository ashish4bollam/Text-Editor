import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '<memeify>/src/firebase/ClientApp';
import { Text } from '@chakra-ui/react';


const OVerButt:React.FC = () => {
    const [signInWithGoogle,user, loading, error] = useSignInWithGoogle(auth);
    return (
        <Flex direction='column' width='100% ' mb={4}>
            <Button variant="oauth" mb={2} 
            isLoading={loading} 
            onClick={() => signInWithGoogle()}>
            <Image src="/images/googlelogo.png" height="20px" mr={2}/>
            Continue with Google
            </Button>
       
            <Button variant="oauth">Some other email</Button>
            {error && (
        <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
          {error.message}
        </Text>
      )}
        </Flex>
    )
}
export default OVerButt;