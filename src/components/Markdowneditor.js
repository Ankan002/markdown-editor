import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import Button from "./Button";
import './Markdowneditor.css';

const Markdowneditor = () =>{
    const [mdText, setMdText]= useState('Welcome to the next gen text editor....');
    const updateText = (event) => {
      setMdText(event.target.value);
    }
    return(
        <>
            <h1>MARKDOWN EDITOR</h1>
            <Button link={'https://www.markdownguide.org/cheat-sheet/'} name={'MarkDown CheatSheet'}/>
            <div className="md-editor">
                <textarea onChange={updateText} value={mdText} className="left-side"> </textarea>
                <div className="right-side"><ReactMarkdown>{mdText}</ReactMarkdown></div>
            </div>
        </>
    );
};

export default Markdowneditor;