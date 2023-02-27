'use client'
import './globals.css'
import React, { useEffect, useRef, useState } from 'react';

const CheckWordsLength = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [val, setVal] = useState<string>('');

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [val]);

  return (
    <>
      <div className='container mx-auto mt-10 bg-blue-100'>
       
        <h1 className='text-5xl font-bold mb-10 text-center text-blue-900'>
          Word Chracter Count Application
        </h1>
        <div className='flex flex-col items-center'>
          <textarea
            name='message'
            id='message'
            ref={textareaRef}
            className='px-3 py-2 w-40 border-purple-600 border rounded-full'
            style={styles.textareaDefaultStyle}
            onChange={textAreaChange}
            placeholder='Enter text here...'
          ></textarea>
          <div className='mt-10 flex flex-col md:flex-row'>
            <div className='mr-2'>
              <h3 className='text-blue-800 text-3xl font-semibold'>
                With Spaces: {val.length}
              </h3>
            </div>
            <div>
              <h3 className='px-20 text-blue-800 text-3xl font-semibold'>
                Without Spaces: {val.replace(/\s/g, '').length}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles: { [name: string]: React.CSSProperties } = {
  textareaDefaultStyle: {
    padding: 5,
    width: '96%',
    height: 'auto',
    minHeight: '450px',
    border: '10px solid #0dc2ed',
    borderRadius: '25px',
    outline: 'none',
    resize: 'none',
    backgroundColor: '#eee',
  },
};

export default CheckWordsLength;

// import React, { useEffect, useRef, useState } from 'react';

// const CheckWordsLength = () => {
// const textareaRef = useRef<HTMLTextAreaElement | null>(null);
// const [val, setVal] = useState<string>('');

// const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// setVal(event.target.value);
// };

// useEffect(() => {
// if (textareaRef && textareaRef.current) {
// textareaRef.current.style.height = '0px';
// const scrollHeight = textareaRef.current.scrollHeight;
// textareaRef.current.style.height = scrollHeight + 'px';
// }
// }, [val]);

// return (
// <>

// {/* <div className='flex flex-col items-center justify-center h-screen'> */}
// <div className='container mx-auto mt-10'>
  
// <h1 className='pt-10 text-6xl font-bold mb-10 text-center '>Word Count Application</h1>
// <div className='flex flex-col items-center'>
// <textarea
//          name='message'
//          id='message'
//          ref={textareaRef}
//          className='px-3 py-2 w-full md:w-2/3 lg:w-90 border-purple-600'
//          style={styles.textareaDefaultStyle}
//          onChange={textAreaChange}
//          placeholder='Enter text here...'
//        ></textarea>
// <div className='mt-10 flex flex-col md:flex-row'>
// <div className='mr-2'>
// <h3 className='text-lg font-semibold'>
// With Spaces: {val.length}
// </h3>
// </div>
// <div>
// <h3 className='text-lg font-semibold' >
// Without Spaces: {val.replace(/\s/g, '').length}
// </h3>
// </div>
// </div>
// </div>
// </div>
// </>
// );
// };

// const styles: { [name: string]: React.CSSProperties } = {
// textareaDefaultStyle: {
// padding: 5,
// width: '100%',
// height: 'auto',
// minHeight: '550px',
// border: '2px solid #ccc',
// borderRadius: '5px',
// outline: 'none',
// resize: 'none',
// backgroundColor: '#eee',
// },
// };

// export default CheckWordsLength;

// import React from 'react'

// export default function index() {
//   return (
//     <div className='container mx-auto mt-10'>
//       <h1>Word Counter App</h1>
//       <div>
//         <textarea className='ml-20 border rounded-full px-3 py-2 w-5/6 hover:w-full border-purple-600 rounded-full'>

//         </textarea>
//       </div>
//       </div>
//   )
// }
// import { useState } from 'react';

// const WordCounter = () => {
//   const [text, setText] = useState('');
//   const [wordCount, setWordCount] = useState(0);

//   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const text = e.target.value;
//     const [charCount, setCharCount] = useState(0);
//     const chars = text.replace(/\s+/g, '').length;
//     const words = text.split(/\s+/).filter((word) => word.length > 0);
//     setText(text);
//     setWordCount(words.length);
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-5">Word Counter App</h1>
//       <textarea
//         className="ml-20 border rounded-full px-3 py-2 w-5/6 hover:w-full border-purple-600 rounded-full"
//         rows={10}
//         value={text}
//         onChange={handleTextChange}
//       />
//       <p className="text-lg">Word count: {wordCount}</p>
//     </div>
//   );
// };

// export default WordCounter;
// import React, { useEffect, useRef, useState } from "react";

// const CheckWordsLength = () => {
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);
//   const [val, setVal] = useState<string>("");

//   const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setVal(event.target.value);
//   };

//   useEffect(() => {
//     if (textareaRef && textareaRef.current) {
//       textareaRef.current.style.height = "0px";
//       const scrollHeight = textareaRef.current.scrollHeight;
//       textareaRef.current.style.height = scrollHeight + "px";
//     }
//   }, [val]);

//   return (
//     <>
//     <div className='flex flex-col items-center justify-center h-screen'>
//       <h1 className='text-3xl font-bold mb-10'>
//         Count Word Application
//       </h1>
//     </div>
//     <div className=" flex flex-col items-center">
//       <textarea
//         name="message"
//         id="message"
//         ref={textareaRef}
//         className="border rounded-full px-3 py-2 w-5/6 md:w-2/3 lg:w-1/2 border-purple-600"
//         style={styles.textareaDefaultStyle}
//         onChange={textAreaChange}
//         placeholder='Enter text here...'
//       ></textarea>
//       <h3 className="className='text-lg font-semibold'">
//         Length of words in text with spaces: {val.length}{" "}
//       </h3>
//       <h3 className="className='text-lg font-semibold'">
//         Length of words in text without spaces:{" "}
//         {val.replace(/\s/g, "").length}
//       </h3>
//     </div>
    
// </>
//   );
// };

// const styles: { [name: string]: React.CSSProperties } = {
//   textareaDefaultStyle: {
//     // resize: "none",
//     // height: "auto",
//     // width: 'w-full'
//     padding: 5,
//     width: "100%",
//     height: "auto",
//     minHeight: "150px",
//     border: "2px solid #ccc",
//     borderRadius: "5px",
//     outline: "none",
//     resize: "none",
//     backgroundColor: "#eee",
    
    
//   },
// };

// export default CheckWordsLength;