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

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (isValidatefn() && isValidateln() && isValidateem() && isValidategn() && isValidatecu() && isValidatedob() && isValidatecn()) {
    if (isValidatefn()) {
      console.log("fnvalid");
      //console.log("submitted");
      return;

      // console.log(field);
    } else if (isValidateln()) {
      console.log("fnvalid");
    } else {
      console.log("invalid");
    }
  };

  const handleChange = (event) => {
    setField((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const isValidatefn = () => {
    if (field.firstname === "") {
      setErrorField((prev) => ({
        ...prev,
        firstname: true
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,
        firstname: false
      }));
      return true;
    }
    if (field.lastname === "") {
      setErrorField((prev) => ({
        ...prev,
        lastname: true
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,
        lastname: false
      }));
      return true;
    }
  };

  // const isValidateln = () => {
  //   if (field.lastname === "") {
  //     setErrorField((prev) => ({
  //       ...prev,

  //       lastname: true
  //     }));
  //     return false;
  //   } else {
  //     setErrorField((prev) => ({
  //       ...prev,

  //       lastname: false
  //     }));
  //     return true;
  //   }
  // };
  const isValidateem = () => {
    if (field.email === "") {
      setErrorField((prev) => ({
        ...prev,

        email: true
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,

        email: false
      }));
      return true;
    }
  };
  const isValidategn = () => {
    if (field.gender === "") {
      setErrorField((prev) => ({
        ...prev,

        gender: true
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,

        gender: false
      }));
      return true;
    }
  };
  const isValidatecu = () => {
    if (field.courses === "") {
      setErrorField((prev) => ({
        ...prev,

        courses: true
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,

        courses: false
      }));
      return true;
    }
  };
  const isValidatedob = () => {
    if (field.dob === "") {
      setErrorField((prev) => ({
        ...prev,

        dob: true
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,

        dob: false
      }));
      return true;
    }
  };
  const isValidatecn = () => {
    if (field.country === "") {
      setErrorField((prev) => ({
        ...prev,

        country: true
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,

        country: false
      }));
      return true;
    }
  };

  return (
    <main className="App">
      <h2>Forms</h2>
      <form onSubmit={handleSubmit} noValidate>
        
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
            <p className="danger">Lastname is required</p>
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
          <label htmlFor="">Courses:</label>

          <input
            type="checkbox"
            id="courses"
            name="courses"
            value="Javascript"
            onChange={handleChange}
          />
          <label htmlFor="Javascript">Javascript</label>

          <input
            className="check"
            type="checkbox"
            id="css"
            name="courses"
            value="css"
            onChange={handleChange}
          />
          <label htmlFor="css">CSS</label>

          <input
            className="check"
            type="checkbox"
            id="html"
            name="courses"
            value="html"
            onChange={handleChange}
          />
          <label htmlFor="html">Html</label>
          {errorField.courses && <p className="danger">Courses is required</p>}
        </div>
        <div className="sec">
          <label htmlFor="dob">DOB:</label>
          <input type="date" name="dob" id="" onChange={handleChange} />
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
