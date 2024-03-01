import { useState } from "react";
import Card from "./Card";
const FormBox = (props) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");
  const addUser = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      email.trim().length === 0
    ) {
      window.confirm("Please enter your data to input box!!");
      return;
    }

    const userInfo = {
      name,
      live,
      email
    }
    props.getUserInfo(userInfo);
    setName("");
    setLive("");
    setEmail("");
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleLive = (event) => {
    setLive(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={handleName} />
        </div>
        <div className="form-div">
          <label htmlFor="live">Live</label>
          <input type="text" id="live" value={live} onChange={handleLive} />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={handleEmail} />
        </div>
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default FormBox;
