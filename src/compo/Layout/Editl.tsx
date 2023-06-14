import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, database } from '<memeify>/src/firebase/ClientApp';
import {
    updateDoc,
    collection,
    doc,
    onSnapshot
} from 'firebase/firestore';

type LolProp = {
    userID ? :string | null;
  };


  const Editl:React.FC<LolProp> = ({userID})=> {
    const [editorValue, setEditorValue] = useState('');
    return (
        <>
         
        </>
    )
    
}
export default Editl; 
