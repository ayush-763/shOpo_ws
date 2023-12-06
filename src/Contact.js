import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./Contact.css";
const Contact = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [users, setusers] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setusers({ ...users, [name]: value });
  };

  const sendData = async (e) => {
    const { Name, Email, Subject, Message } = users;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };
    const res = await fetch(
      "https://shopo-e3194-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(res);
    if (res) {
      alert("Your Message Sent");
    } else {
      alert("An error occured");
    }
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <h2># Contact us</h2>
          <div className="form">
            <form method="POST">
              <input
                type="text"
                name="Name"
                value={users.Name}
                placeholder="Enter your Full Name"
                required
                autoComplete="off"
                onChange={data}
              />
              <input
                type="email"
                name="Email"
                value={users.Email}
                placeholder="Enter your e-mail"
                required
                autoComplete="off"
                onChange={data}
              />
              <input
                type="text"
                name="Subject"
                value={users.Subject}
                placeholder="Enter your Subject"
                required
                autoComplete="off"
                onChange={data}
              />
              <textarea
                name="Message"
                value={users.Message}
                placeholder="Your message"
                required
                autoComplete="off"
                onChange={data}
              ></textarea>
              {isAuthenticated ? (
                <button type="submit" onClick={sendData}>
                  Send
                </button>
              ) : (
                <button type="submit" onClick={() => loginWithRedirect()}>
                  Login to Send
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
