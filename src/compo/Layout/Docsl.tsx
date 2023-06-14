import React, { useState, useEffect, useRef } from 'react';
import {
    addDoc,
    collection,
    onSnapshot
} from 'firebase/firestore';


import { database } from '<memeify>/src/firebase/ClientApp';
import { Button, IconButton, useSafeLayoutEffect } from '@chakra-ui/react';
import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Grid, Box } from '@chakra-ui/react';

import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';
import { auth } from '<memeify>/src/firebase/ClientApp';
import Lol from './Lol';
import Editl from './Editl';
import './YourStyles.module.css';



const Docsl:React.FC = () => {
    const username=auth.currentUser?.email;
    const [docsData,setDocsData]=useState([])
    
    const [isID,setId]=useState("");
    
    let databasecollection=collection(database,'docs-data'+username);

  
    

    useEffect(() => {
    
      const unsubscribe = onSnapshot(databasecollection, (response) => {
        setDocsData(response.docs.map((doc) => {
          return {...doc.data(), id: doc.id};
        }));
      });
      return () => unsubscribe();
    }, []);

  
    const handleDelete = async (id) => {
       
        const reference = doc(database, 'docs-data'+username, id);

        await deleteDoc(reference);
        toast.info('Document successfully deleted!');
       
      };

   
    
    return (
        <>
        {isID.length==0 && 
        <div className='docs-main'>
          
          <div className='grid-main'>
                {docsData.map((doc) => {
                    return (
                      <Grid
    
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
    >
      <Box
        padding={2}
        backgroundColor="rgba(50, 50, 50, 0.8)" /* Updated background color */
        width="250px" /* Increased width */
        borderRadius="md"
        color="white"
        cursor="pointer"
      >
        <p>{doc.title}</p>
        <Box mt={2}>
          <IconButton
            aria-label="Add to friends"
            icon={<DeleteIcon />}
            onClick={() => handleDelete(doc.id)}
            variant="outline"
            size="sm"
            mr={2}/* Updated spacing */
          />
          <IconButton
            aria-label="Add to friends"
            icon={<EditIcon />}
            onClick={() => (setId(doc.id))}
            variant="outline"
            size="sm"
            mr={2} /* Updated spacing */
          />
        </Box>
      </Box>
    </Grid>
                    )
                })}
            </div>

        
            
        </div>



            }

            {isID.length>0 && (<><IconButton
          colorScheme="blue"
          
          icon={<ArrowBackIcon />}
          style={{
          
            borderRadius: '5px',
            padding: '4px 8px',
            fontSize: '14px',
            fontWeight: 'bold',
            marginLeft: '300px',
            marginTop:'10px',
            
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
          onClick={() => (setId(''))}
          />
            <Lol userID={isID} ></Lol></>)}
            </>

    )
  };
export default Docsl


