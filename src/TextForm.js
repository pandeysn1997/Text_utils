import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupClick= () =>{
        // console.log("Uppercase was clicked") ;
        let newtext=text.toUpperCase();
        setText(newtext);
       props.showAlert("Transform into uppercase","success");
            
        }
        const handleloClick= () =>{
            // console.log("Uppercase was clicked") ;
            let newtext=text.toLowerCase();
            setText(newtext);
            props.showAlert("Transform into lowercase","success");
                
            }
        const handleOnChange= (event) =>{
            // console.log("onchange") 
            setText(event.target.value);
                 }
    const handleCopy=()=>{
    console.log("i am copy");
    var text= document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpaces=()=>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("extra space has been removed","success");
    }
    
    const[text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-2">{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleupClick}> Convert to UpperCase</button>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleloClick}> Convert to LowerCase</button>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleCopy}> Copy text</button>
<button disabled={text.length===0}  className= "btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}> Remove Space</button>

</div>
<div className='container my-3'>
    <h1> your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return-element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read </p>
    <h2>preview</h2>
    <p>{text.length>0 ? text:"enter something here to preview"}</p>
</div>
    </>
  )
};
