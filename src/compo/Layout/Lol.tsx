
import React, { useEffect, useRef, useState } from 'react'

import dynamic from "next/dynamic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import 'react-quill/dist/quill.snow.css';
import { auth, database } from '<memeify>/src/firebase/ClientApp';
import { collection, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Quill from 'quill';


type LolProp = {
  userID  :string ;

};

const ReactQuill = dynamic(import('react-quill'), { ssr: false })
const Lol:React.FC<LolProp> = ({userID})=> {

  const isMounted = useRef();
  const username=auth.currentUser?.email;
 
 
const toolbarOptions = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'font': [] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'list': 'ordered' }],
  [{ 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  // [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'color': [] }, { 'background': [] }],

  [{ 'align': [] }],
  ['clean']
];



  const [editorValue, setEditorValue] = useState('');
 
 
    let params = useParams();
    const [documentTitle, setDocumentTitle] = useState('')
   
   
    useEffect(() => {
        const updateDocsData = setTimeout(() => {
            const document = doc(database, 'docs-data'+username, userID);
            updateDoc(document, {
                body: editorValue
            })
                .then(() => {
                    toast.success('Document Saved', {
                        autoClose: 2000
                    })
                })
                .catch(() => {
                    toast.error('Cannot Save Document', {
                        autoClose: 2000
                    })
                })
        }, 1500)
        return () => clearTimeout(updateDocsData)
    }, [editorValue])


    const getData = () => {
      const document = doc(database, 'docs-data' + username, userID);
      onSnapshot(document, (docs) => {
        if (docs.exists()) {
          const data = docs.data();
          setDocumentTitle(data?.title || '');
          setEditorValue(data?.body || '');
        }
      });
    };

 

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
        getData();
    }

    return () => {
        isMounted = false;
    };
}, []);

  console.log(userID);
  return (
    
    <div className='editDocs-main'>
            <ToastContainer/>
            <h1>{documentTitle}</h1>
            <div className='editDocs-inner'>
                <ReactQuill
                    className='react-quill'
                    theme="snow"
                 
                    modules={{
                      toolbar: toolbarOptions
                    }}

                    value={editorValue}
                    onChange={(value) => setEditorValue(value)}
                   
                />
            </div>
        </div>
   
  )
}

export default Lol