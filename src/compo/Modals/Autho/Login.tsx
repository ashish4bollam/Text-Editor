import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { authModState } from '<memeify>/src/atoms/authModAtom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from '<memeify>/src/firebase/ClientApp';
import { FIREBASE_ERRORS } from '<memeify>/src/firebase/Errors';
type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {

    const setModalState=useSetRecoilState(authModState)

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
  const [signInWithEmailAndPassword, _, loading, authError] =
  useSignInWithEmailAndPassword(auth);
  const [formError, setFormError] = useState("");
   
    
    const [logForm,setlogForm]=useState({
        email:"",
        password:"",



    })
    const Submitx=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if (formError) setFormError("");

        if (!email.includes("@")) {
          
          return setFormError("Please enter a valid email");
        
        }
    

       
        // Valid form inputs
        
        signInWithEmailAndPassword(email, password);
      
    };

   

    return (
        <form onSubmit={Submitx}>
            <Input 
            required
            name='email' 
            placeholder="email" 
            type="email" 
            mb={2} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
            fontSize="10pt"
            _placeholder={{color:"gray.500"}}
            _hover={{
                bg:'white',
                border:"1px soild",
                borderColor:"blue.500",
                
            }}
            _focus={{
                outline:"none",
                bg:"white",
                border:"1px",
                borderColor:"blue.500",
            }
            
             }
             bg="gray.50"

            />

        <Input 
            required
            name='password' 
            placeholder="password" 
            type="password" 
            mb={2} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fontSize="10pt"
            _placeholder={{color:"gray.500"}}
            _hover={{
                bg:'white',
                border:"1px soild",
                borderColor:"blue.500",
                
            }}
            _focus={{
                outline:"none",
                bg:"white",
                border:"1px",
                borderColor:"blue.500",
            }
            
             }
             bg="gray.50"/>
        
        <Text textAlign="center" mt={2} fontSize="10pt" color="red">
        {formError ||
          FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>

        <Button 
        type='submit'
        width='100%' 
        height='36px'
        mt={2}
        mb={2}
        isLoading={loading}>

            Log In</Button>

            <Flex justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"

          onClick={()=> setModalState(prev=>({
            ...prev,
            view:"resetPassword",

         }))}
          
        >
          Reset
        </Text>
      </Flex>

        <Flex
        fontSize="9pt"
        justifyContent="center" 
        >
         <Text mr={1}>Newbie?</Text>
         <Text color={'blue.500'}
         fontWeight={700}
         cursor="pointer"
         onClick={()=> setModalState(prev=>({
            ...prev,
            view:"signup",

         }))}
          

         >SIGN UP</Text>

        </Flex>

            
        </form>
    );
}
export default Login;