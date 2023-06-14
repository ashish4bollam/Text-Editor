import React, { useEffect, useRef, useState } from 'react';

import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Flex, Icon, IconButton, Input } from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";

import { database } from '<memeify>/src/firebase/ClientApp';
import { addDoc, collection ,doc,onSnapshot} from 'firebase/firestore';
import { auth } from '<memeify>/src/firebase/ClientApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type IconsProps = {
    
};
import { useNavigate } from 'react-router-dom';


const Icons:React.FC<IconsProps> = () => {
  const username=auth.currentUser?.email;
  let databasecollection=collection(database,'docs-data'+username);
  const [isAdd,setisAdd]=useState(false)
  const [title,setTitle]=useState('')
  const [docsData,setDocsData]=useState([])
  
  


  

  

    

  const addDocument=()=>{
      addDoc(databasecollection,{
        title:title,
        author:auth.currentUser?.email,
        body:''
      }).then(response =>{
        
        toast.success("Data Added",{
          autoClose:1000
        })
      })
      .catch(()=>{
        toast.error("Cannot Add Data",{
          autoClose:1000
        })
      })
  }

 
    
    return (
      <>
        <Flex marginLeft='10px'  marginRight='10px' >
        <ButtonGroup size='sm' isAttached variant='outline'  style={{
          marginLeft: '10px',
          marginRight: '10px',
        }}>
  <Button fontSize={20} onClick={()=>(setisAdd(!isAdd)) }>Add Document</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} />
  </ButtonGroup>
  <ToastContainer/>
    
   {isAdd ? (
  
<>
   <Input
            name="docname"
            placeholder="Enter Document Name"
            type="text"
            value={title}
            onChange={(event)=>{
              setTitle(event.target.value)
            }}
            
            
            
            
          />
           <IconButton aria-label='Add to friends' icon={<AddIcon />} onClick={addDocument}  style={{
          marginLeft: '10px',
          marginRight: '10px',
        }}/>
            

          
          </>)
          :<></>
}



        </Flex>
        </>
    )
}
export default Icons;


