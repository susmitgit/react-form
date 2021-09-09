import React, { useState } from "react";

const Forms = () => {
  const [people, SetPeople] = useState([]);
  const [person, SetPerson] = useState({ name: "", age: "", email: "" });
  const [fromError, SetFormError] = useState("");
  const handleChange = (e) => {
    // const key = e.target.name;
    // const value = e.target.value;
    // console.log(key, value);
    SetPerson({ ...person, [e.target.name]: e.target.value });

    //console.log(person);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      SetPeople((prev) => {
        return [...prev, { ...person, id: new Date().getTime().toString() }];
      });
      SetPerson({ name: "", age: "", email: "" });
      console.log("Submitted");
      SetFormError("");
    } else {
      SetFormError("Blank submission of fields are not allowed!");
    }
  };
  return (
    <div className="article">
      <p>{fromError !== "" && fromError}</p>
      <form className="mb-3">
        <div className="form-group">
          <lable htmlFor="name">Name: </lable>
          <input
            type="text"
            value={person.name}
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <lable htmlFor="age">Age: </lable>
          <input
            type="text"
            value={person.age}
            id="age"
            name="age"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <lable htmlFor="email">Email: </lable>
          <input
            type="text"
            value={person.email}
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add User
        </button>
      </form>
      <div className="article">
        <ul>
          {people.map((p) => (
            <li key={p.id}>
              {p.name} | {p.age} | {p.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Forms;
