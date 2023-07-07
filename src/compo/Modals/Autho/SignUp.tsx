import { authModState } from '<memeify>/src/atoms/authModAtom';
import { Input, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Text } from '@chakra-ui/react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '<memeify>/src/firebase/ClientApp';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_ERRORS } from '<memeify>/src/firebase/Errors';




type SignUpProps = {
    
};

const SignUp:React.FC = () => {
    const setModalState=useSetRecoilState(authModState)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    const [createUserWithEmailAndPassword, _, loading, authError] =
    useCreateUserWithEmailAndPassword(auth);


    
    
    
    
  const [formError, setFormError] = useState("");


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formError) setFormError("");

        if (!email.includes("@")) {
          
          return setFormError("Please enter a valid email");
        
        }
    
        if (password !== confirmpassword) {
          return setFormError("Passwords do not match");
        }

        if(password.length<6){
          return setFormError("Password should be of atleast 6 characters")
        }
    
        // Valid form inputs
        console.log(email);
        console.log(password);
        createUserWithEmailAndPassword(email, password);
      
        
      };

    
      return (
        <form onSubmit={onSubmit}>
          <Input
            name="email"
            placeholder="email"
            type="text"
            mb={2}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="password"
            placeholder="password"
            type="password"
            mb={2}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            name="confirmPassword"
            placeholder="confirm password"
            type="password"
            value={confirmpassword}

            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <Text textAlign="center" mt={2} fontSize="10pt" color="red">
          {formError ||
          FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
          </Text>
          <Button
            width="100%"
            height="36px"
            mb={2}
            mt={2}
            type="submit"
           
          >
            Sign Up
          </Button>
          <Flex fontSize="9pt" justifyContent="center">
            <Text mr={1}>Have an account?</Text>
            <Text
              color="blue.500"
              fontWeight={700}
              cursor="pointer"
              onClick={()=> setModalState(prev=>({
                ...prev,
                view:"login",
    
             }))}
            
            >
              LOG IN
            </Text>
          </Flex>
        </form>
      );
    
}
export default SignUp;