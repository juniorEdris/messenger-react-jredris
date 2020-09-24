import React, { useState, useEffect } from "react";
import { FormControl, Input, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Flipmove from "react-flip-move";
import firebase from "firebase";
import Message from "./Message";
import db from "./firebase";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messeges, setMesseges] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt(`Please enter your name.`));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMesseges(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMsg = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img
        className="m_icon"
        src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=512&h=512"
        alt="messenger icon"
      />
      <h1 className="page_header">
        Messenger Clone by{" "}
        <a href="https://www.facebook.com/eftekar.raghib.1">eftekar raghib</a>
      </h1>
      {username && <h2>Welcome {username}</h2>}
      
    <form className="form">
        <FormControl className='form_control'>
          <Input
          placeholder='write a messege'
            className="form_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <IconButton
          className="form_send"
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={sendMsg}
        >
          <SendIcon  />
        </IconButton>
      </form>
      
    <div className='app_msg'>
    <Flipmove>
        {messeges.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </Flipmove>
    </div>
    </div>
  );
}

export default App;

