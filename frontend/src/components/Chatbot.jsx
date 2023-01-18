import React from 'react'

const know = {
    "hello" : "Hi there!",
    "How are you?" : "I am Fine",
    "How old are you?" : "I am infinity in age"
    };
    
    function keyPressedDown(event){
        if(event.keyCode == 13) {talk()}
    }
    function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value= "";
    document.getElementById("chatLog").innerHTML += user+"<br>";
    
    if (user in know) {
    document.getElementById("chatLog").innerHTML += know[user] + "<br>";
    } else 
    
    {
    document.getElementById("chatLog").innerHTML += "I don't understand... <br>";
    }
    }
    
export default function chatbot() {
  return (

    
    <>
<input id="userBox" type="text" onKeyDown={keyPressedDown}/>
</>
  )
}
