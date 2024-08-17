import React from "react"
const HelloWorld=()=>{
  function handleClick(){
    alert("button Clicked");
  }
  const name="Saddam"
  const addition=1+2;
  return(
    <div>
<h1 className="title">Title</h1>
<h2>Sub Title</h2>
<p>Paragraph</p>
<p>{name}</p>
<p>{addition}</p>
<button onClick={handleClick}>Click</button>


    </div>
  )

}
export default HelloWorld