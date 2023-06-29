import { useState } from "react";
import "./App.css";
import { TextInput } from "./Components/TextInput/TextInput";
import { RadioInput } from "./Components/Radio/RadioInput";

function App() {
  const [field, setField] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    courses: [],
    dob: "",
    country: ""
  });

  const [errorField, seterrorField] = useState({
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
      [event.target.name]: [event.target.value]
    }));
    formIsvalidOnBlur(event);
  };

  const handleCheck = (event) => {
    let newSkills = [...field.courses];

    if (event.target.checked) {
      newSkills.push(event.target.value);
    } else {
      newSkills = newSkills.filter((course) => course !== event.target.value);
    }
    setField((prev) => ({
      ...prev,
      [event.target.name]: newSkills
    }));
  };
  console.log(field.courses);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValidOnsubmit()) {
      console.log("valid");
      console.log("submitted");
      console.log(field, "===fields");
      return;
    }
    console.log("Invalid");
  };

  const isFormValidOnsubmit = () => {
    const errors = {
      firstname: false,
      lastname: false,
      email: false,
      gender: false,
      courses: false,
      dob: false,
      country: false
    };

    if (field.firstname === "") {
      errors.firstname = true;
    }
    if (field.lastname === "") {
      errors.lastname = true;
    }
    if (field.email === "") {
      errors.email = true;
    }
    if (field.gender === "") {
      errors.gender = true;
    }
    if (field.courses === "") {
      errors.courses = true;
    }
    if (field.dob === "") {
      errors.dob = true;
    }
    if (field.country === "") {
      errors.country = true;
    }
    seterrorField(errors);

    if (
      Object.values(errors).some((error) => {
        console.log(error, "fghj");
        return error === true;
      })
    ) {
      return false;
    }
    return true;
  };

  const formIsvalidOnBlur = (event) => {
    const { name, value } = event.target;
    let error = false;

    if (
      name === "firstname" &&
      (value === "" || !/^[A-Za-z][A-Za-z0-9_]{3,29}$/.test(value))
    ) {
      error = true;
    } else if (
      name === "lastname" &&
      (value === "" || !/^[A-Za-z][A-Za-z0-9_]{2,29}$/.test(value))
    ) {
      error = true;
    } else if (
      name === "email" &&
      (value === "" ||
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        ))
    ) {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "courses" && value === "") {
      error = true;
    } else if (name === "dob" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    }
    seterrorField((prev) => ({
      ...prev,
      [name]: error
    }));
  };

  return (
    <main className="App">
      <form onSubmit={handleSubmit} noValidate>
        <h2>Register Form</h2>

        <div className="sec">
          <label htmlFor="firstname">FirstName: </label>
          <input
            className="field"
            type="text"
            id="firstname"
            name="firstname"
            onChange={handleChange}
            onBlur={formIsvalidOnBlur}
          />
          {errorField.firstname && (
            <span className="danger">Firstname is required</span>
          )}
        </div>

        <TextInput
          onchange={handleSubmit}
          onblur={formIsvalidOnBlur}
          errorField={errorField}
          title={"Lastname"}
          id={"lastname"}
          name={"lastname"}
          type={"text"}
        />

        <TextInput
          onchange={handleSubmit}
          onblur={formIsvalidOnBlur}
          errorField={errorField}
          title={"Email"}
          id={"email"}
          name={"email"}
          type={"email"}
        />

        <RadioInput
          onchange={handleChange}
          onblur={formIsvalidOnBlur}
          name={"gender"}
          errorfield={errorField}
          idmale={"male"}
          value1={"male"}
          value2={"female"}
          value3={"other"}
          idfemale={"female"}
          type={"radio"}
          otherid={"other"}
          label1={"male"}
          label2={"female"}
          label3={"other"}
          title={"Gender"}
          title1={"Male"}
          title2={"Female"}
          title3={"Other"}
        />

        <div className="sec">
          <label htmlFor="">Courses:</label>
          <div>
            <input
              type="checkbox"
              id="javascript"
              name="courses"
              value="javascript"
              onChange={handleCheck}
              onBlur={formIsvalidOnBlur}
            />

            <label htmlFor="javascript">Javascript</label>

            <input
              className="check"
              type="checkbox"
              id="react"
              name="courses"
              value="react"
              onChange={handleCheck}
              onBlur={formIsvalidOnBlur}
            />
            <label htmlFor="react">React</label>

            <input
              className="check"
              type="checkbox"
              id="angular"
              name="courses"
              value="angular"
              onChange={handleCheck}
              onBlur={formIsvalidOnBlur}
            />
            <label htmlFor="angular">Angular</label>
          </div>
          {errorField.courses && <p className="danger">Courses is required</p>}
        </div>

        <div className="sec">
          <label htmlFor="dob">DOB:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            onChange={handleChange}
            onBlur={formIsvalidOnBlur}
          />
          {errorField.dob && <p className="danger">DOB is required</p>}
        </div>

        <div className="sec">
          <label htmlFor="country">Country:</label>
          <select
            className=""
            id="country"
            name="country"
            onChange={handleChange}
            onBlur={formIsvalidOnBlur}
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
