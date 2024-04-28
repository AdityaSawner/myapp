import React,{useState} from 'react'


export default function Form(props) {
    const UPClick=()=>{
        console.log("uppercase was clicked");
        setText(text.toUpperCase());
    }
    const handleOnChange=(event)=>{
        console.log("uppercase was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('enter text here');
    //setText("efskjhe") to change text
    return (
        <div>
            <h1 style={{color:props.mode==='dark'?'White':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={UPClick}>change to upper case</button>
        </div>
    )
}
