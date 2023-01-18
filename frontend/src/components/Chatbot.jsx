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


    // Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode("Water");

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("myList").appendChild(node);

    }
    
export default function chatbot() {
  return (

    
    <>
    
    <h3 id="chatLog"> Chatbot <br/> </h3>
    <ul id="myList">
  <li>Coffee</li>
  <li>Tea</li>
</ul>

<input id="userBox" type="text" onKeyDown={keyPressedDown}/>

</>
  )
}
