import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Register({ facade, init }) {
  const [newUser, setNewUser] = useState(init);
  const [status, setStatus] = useState("");
  const [nickName, setNickName] = useState("unknown");
  const [form, setForm] = useState(
    <form onSubmit={onSubmit}>
      <div className="form-group row">
        <label>
          Nick name:
          <input type="text" id="username" onChange={onChange} />
        </label>
      </div>
      <div className="form-group row">
        <label>
          Password:
          <input type="password" id="password" onChange={onChange} />
        </label>
      </div>
      <div className="form-group row">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );

  function onSubmit(e) {
    e.preventDefault();
    console.log(newUser);
    console.log(nickName);
    facade
      .registerUser(newUser)
      .then((data) => {
        console.log(data);
        setStatus(data.msg);
        setNickName(data.username);
        setForm("");
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => setStatus(e.message));
        } else {
          setStatus("Network error has occurred: could not log in");
          console.log("Network error! Could not log in");
        }
      });
  }

  function onChange(e) {
    const target = e.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    let value = target.value;
    let name = target.id;

    setNewUser({
      ...newUser,
      [name]: value,
    });
    console.log(newUser);
  }

  return (
    <Container>
      <div>
        <h2>Registration form</h2>
        <h3>Hello {nickName}</h3>
      </div>
      <div>{form}</div>

      <div>
        <h1>{status}</h1>
      </div>
    </Container>
  );
}

/*
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };
*/
