import React, { useState } from "react";
import styles from "./Input.module.css";

export default function Input() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [homeroomClassNumber, setHomeRoomClassNumber] = useState("");
  const [studentID, setStudentID] = useState("");

  const handleFirstName = ({ target }) => {
    setFirstName(target.value);
  };

  const handleLastName = ({ target }) => {
    setLastName(target.value);
  };

  const handleAge = ({ target }) => {
    setAge(target.value);
  };

  const handleAddress = ({ target }) => {
    setAddress(target.value);
  };

  const handleHomeRoomClassNumber = ({ target }) => {
    setHomeRoomClassNumber(target.value);
  };

  const handleStudentID = ({ target }) => {
    setStudentID(target.value);
  };

  return (
    <>
      <div>
        <form>
          <div className={styles.container}>
            <label htmlFor="firstName">First Name: </label>
            <input
              id="firstName"
              onChange={handleFirstName}
              value={firstName}
              type={"text"}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              id="lastName"
              onChange={handleLastName}
              value={lastName}
              type={"text"}
            />
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input id="age" onChange={handleAge} value={age} type={"number"} />
          </div>
          <div>
            <label htmlFor="address">Address: </label>
            <textarea
              id="address"
              onChange={handleAddress}
              value={address}
            ></textarea>
          </div>
          <div>
            <label htmlFor="homeRoomClassNumber">
              Home Room Class Number:{" "}
            </label>
            <input
              id="homeRoomClassNumber"
              onChange={handleHomeRoomClassNumber}
              value={homeroomClassNumber}
              type={"number"}
            />
          </div>
          <div>
            <label htmlFor="studentID">Student ID: </label>
            <input
              id="studentID"
              onChange={handleStudentID}
              value={studentID}
              type={"number"}
            />
          </div>
        </form>

        <div>
          <div>
            <h1 className={styles.h1}>Data of Student</h1>
          </div>
          <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName} </p>
            <p>Age: {age}</p>
            <p className={styles.ersin}>Address: {address}</p>
            <p>Home Room Class Number: {homeroomClassNumber}</p>
            <p>Student ID: {studentID}</p>
          </div>
        </div>
      </div>
    </>
  );
}
