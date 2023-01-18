import React from "react";
import { createElement } from 'react';

const know = {
  "Hello": "Hi there!",
  "hello": "Hi there!",
  "HELLO": "Hi there!",
  "Who are you?": "I am Nikhil's Assistant",
  "How are you?": "I am Fine",
  
};

function keyPressedDown(event) {
  if (event.keyCode == 13) {
    talk();
  }
}
function talk() {
  var user = document.getElementById("userBox").value;//get value
  document.getElementById("userBox").value = "";//set input to nothing
  // document.getElementById("chatLog").innerHTML += user + "<br>";
  // const element = createElement(type, props, ...children)

  const node = document.createElement("li");
  //create the text box for user input
  const userInputBox = document.createTextNode(`${user}`);
  node.appendChild(userInputBox);
  document.getElementById("myList").appendChild(node);
  
  
  
  
  
  const node2 = document.createElement("li");
  if (user in know) {
    const chatBotBox = document.createTextNode(`${know[user]}`);
    node.appendChild(chatBotBox);
    document.getElementById("myList").appendChild(node2);
    } else {
  const chatBotBox = document.createTextNode(`I don't understand`);
  node.appendChild(chatBotBox);
  document.getElementById("myList").appendChild(node2);
  }
}

export default function chatbot() {
  return (
    <>
      <h3 id="chatLog">
        {" "}
        Chatbot <br />{" "}
      </h3>
      <ul id="myList">
        <li>Coffee</li>
        <li>Tea</li>
      </ul>

      <input id="userBox" type="text" onKeyDown={keyPressedDown} />
    </>
  );
}
