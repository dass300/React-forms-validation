import { useState } from "react";
import "./App.css";

function App() {
  const [field, setField] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    courses: "",
    dob: "",
    country: ""
  });

  const [errorField, setErrorField] = useState({
    firstname: false,
    lastname: false,
    email: false,
    gender: false,
    courses: false,
    dob: false,
    country: false
  });

  const handleChange = (event) => {
    setField((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValidOnSubmit()) {
      console.log("valid");
      console.log(field);
      return;
    }
    console.log("Invaalid");
  };

  const isFormValidOnSubmit = () => {
    let error = {
      firstname: false,
      lastname: false,
      email: false,
      gender: false,
      courses: false,
      dob: false,
      country: false
    };

    if (field.firstname === "") {
      error.firstname = true;
    }
    if (field.lastname === "") {
      error.lastname = true;
    }
    if (field.email === "") {
      error.email = true;
    }
    if (field.gender === "") {
      error.gender = true;
    }
    if (field.courses === "") {
      error.courses = true;
    }
    if (field.dob === "") {
      error.dob = true;
    }
    if (field.country === "") {
      error.country = true;
    }

    console.log(error);
    setErrorField(error);
  };

  return (
    <main className="App">
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <div className="sec">
          <label htmlFor="firstname">FirstName: </label>
          <input
            className="field"
            type="text"
            id="firstname"
            name="firstname"
            onChange={handleChange}
          />
          {errorField.firstname && (
            <span className="danger">Firstname is required</span>
          )}
        </div>
        <div className="sec">
          <label htmlFor="lastname">LastName: </label>
          <input
            className="field"
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleChange}
          />
          {errorField.lastname && (
            <span className="danger">Lastname is required</span>
          )}
        </div>
        <div className="sec">
          <label htmlFor="email">Email: </label>
          <input
            className="field"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
          />
          {errorField.email && <p className="danger">Email is required</p>}
        </div>
        <div className="sec">
          <label htmlFor="">Gender: </label>

          <input
            className="radio"
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
          />

          <label htmlFor="male">Male </label>

          <input
            className="radio"
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <label htmlFor="female">Female </label>

          <input
            className="radio"
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={handleChange}
          />
          <label htmlFor="other">Other </label>
          {errorField.gender && <p className="danger">Gender is required</p>}
        </div>

        <div className="sec">
          <label htmlFor="">Gender: </label>

          <input
            className="radio"
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
            onBlur={formIsvalidOnBlur}
          />

          <label htmlFor="male">Male </label>

          <input
            className="radio"
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
            onBlur={formIsvalidOnBlur}
          />
          <label htmlFor="female">Female </label>

          <input
            className="radio"
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={handleChange}
            onBlur={formIsvalidOnBlur}
          />
          <label htmlFor="other">Other </label>

          {errorField.gender && <p className="danger">Gender is required</p>}
        </div>

        <div className="sec">
          <label htmlFor="dob">DOB:</label>
          <input type="date" name="dob" id="" onChange={handleChange} />
          {errorField.dob && <p className="danger">DOB is required</p>}

          </div>
        <div className="sec">
          <label htmlFor="country">Country:</label>
          <select
            className=""
            id="country"
            name="country"
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="uae">UAE</option>
            <option value="qatar">Qatar</option>
          </select>
          {errorField.country && <p className="danger">Country is required</p>}
        </div>
        <div className="sec">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;
