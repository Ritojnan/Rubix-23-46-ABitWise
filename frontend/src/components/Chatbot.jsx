import React from 'react'

const know = {

    "Hello" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
    "hello" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
    "HELLO" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
    "Who are you?" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am Nikhil's Assistant",
    "How are you?" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am Fine",
    "How old are you?" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am infinity in age"
    
    
    
    
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
    
    <h3 id="chatLog"> Chatbot <br/> </h3>

<input id="userBox" type="text" onKeyDown={keyPressedDown}/>

</>
  )
}
