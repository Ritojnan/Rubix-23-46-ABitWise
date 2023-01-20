import React from "react";
import { createElement } from "react";

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const know = {
  Hello: "Hi there!",
  hello: "Hi there!",
  HELLO: "Hi there!",
  "Who are you?": "I am Nikhil's Assistant",
  "How are you?": "I am Fine",
};

function keyPressedDown(event) {
  if (event.keyCode == 13) {
    talk();
  }
}

function addElement(data) {
  const node = document.createElement("p");
  const userInputBox = document.createTextNode(`${data}`);
  node.appendChild(userInputBox);
  document.getElementById("myList").appendChild(node);
}
function talk() {
  var user = document.getElementById("userBox").value; //get value
  document.getElementById("userBox").value = ""; //set input to nothing
  addElement(user); //create the text box for user input

  if (user in know) {
    addElement(know[user]);
  } else {
    addElement(`I don't understand`);
  }
}

export default function chatbot() {
  return (
    <>
      <h1 id="chatLog">Chatbot</h1>

      <div id="myList">
        <p>Hi! I am SOS Chatbot</p>
        <p>Commands that I can understand :</p>
        <ul>
        <li>Help me</li>
        <li>I want to help others</li>
        <li>Share my location</li>
        <li>View Map</li>
        <li>Find nearest shelter</li>
        <li>Current Situation</li>
        <li>Navigate through the page</li>
        </ul>
      </div>
      
      <div class="container text-center">
        <div class="row">
          <div class="col-10">
            <div class="mb-3">
              <input
                type="text"
                className="form-control"
                id="userBox"
                onKeyDown={keyPressedDown}
                placeholder="Send Message"
              />
            </div>
          </div>
          <div class="col-2">
            <button className="btn btn-primary" onClick={talk}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
