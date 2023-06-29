import { useState } from "react";

export const App4 = () => {
  const [field, setField] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    skills: [],
    dob: "",
    country: ""
  });

  const [errorField, setErrorField] = useState({
    firstname: false,
    lastname: false,
    email: false,
    gender: false,
    skills: [false,false,false],
    dob: false,
    country: false
  });

  const handleChange = (event) => {
    setField((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value]
    }));
    handleOnBlur(event);
  };

  const handleCheck = (event) => {
    let skillCheck = [...field.skills];
    if (event.target.checked) {
      skillCheck.push(event.target.value);
    } else {
      skillCheck = skillCheck.filter((skill) => skill != event.target.value);
    }
    setField((prev) => ({
      ...prev,
      [event.target.name]: skillCheck
    }));
  };
  console.log(field.skills);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(field, "===field");
    if (isValidForm()) {
      console.log("Valid");
      return true;
    }
    console.log("Invalid");
  };

  const isValidForm = () => {
    let errors = {
      firstname: false,
      lastname: false,
      email: false,
      gender: false,
      skills: [false,false,false],
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
    if (field.skills[0] === "" && field.skills[1] === "" && field.skills[2] === "") {
      errors.skills = [true,true,true];
    }
    if (field.dob === "") {
      errors.dob = true;
    }
    if (field.country === "") {
      errors.country = true;
    }
    setErrorField(errors);

    if (Object.values(errors).some((error) => error === true)) {
      return false;
    } else {
      return true;
    }
  };

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    let error = false;

    if (
      name === "firstname" &&
      (value === "" || !/^[A-Za-z][A-Za-z0-9_]{2,29}$/.test(value))
    ) {
      error = true;
    }
    if (
      name === "lastname" &&
      (value === "" || !/^[A-Za-z][A-Za-z0-9_]{2,29}$/.test(value))
    ) {
      error = true;
    }
    if (
      name === "email" &&
      (value === "" ||
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        ))
    ) {
      error = true;
    }
    if (name === "gender" && value === "") {
      error = true;
    }
    if (name === "skills" || value[0] === "" || value[1] === "" || value[2] === "" ) {
      error = true;
    }
    if (name === "dob" && value === "") {
      error = true;
    }
    if (name === "country" && value === "") {
      error = true;
    }

    setErrorField((prev) => ({
      ...prev,
      [name]: error
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <h2>Register form</h2>
        <p>Please fill the form below:</p>

        <fieldset className="input-sections">
          <legend htmlFor="firstname">
            Firstname:<span className="danger star">*</span>
          </legend>
          <input
            className="input-field"
            type="text"
            name="firstname"
            id="firstname"
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {errorField.firstname && (
            <span className="danger">Firstname is required*</span>
          )}
        </fieldset>

        <fieldset className="input-sections">
          <legend htmlFor="lastname">
            Lastname:<span className="danger star">*</span>
          </legend>
          <input
            className="input-field"
            type="text"
            name="lastname"
            id="lastname"
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {errorField.lastname && (
            <span className="danger">Lastname is required*</span>
          )}
        </fieldset>

        <fieldset className="input-sections">
          <legend htmlFor="email">
            Email:<span className="danger star">*</span>
          </legend>
          <input
            className="input-field"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {errorField.email && (
            <span className="danger">Email is required*</span>
          )}
        </fieldset>

        <fieldset className="input-sections">
          <legend htmlFor="gender">Gender:</legend>

          <div className="radio">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <label htmlFor="female">Female</label>

            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <label htmlFor="other">Other</label>
          </div>
          {errorField.gender && (
            <span className="danger">Gender is required*</span>
          )}
        </fieldset>

        <fieldset className="input-sections">
          <legend htmlFor="skills">Skills:</legend>

          <div className="checkbox">
            <input
              type="checkbox"
              name="skills"
              id="javascript"
              value="javascript"
              onChange={handleCheck}
              onBlur={handleOnBlur}
            />
            <label htmlFor="javascript">Javascript</label>

            <input
              type="checkbox"
              name="skills"
              id="react"
              value="react"
              onChange={handleCheck}
              onBlur={handleOnBlur}
            />
            <label htmlFor="react">React</label>

            <input
              type="checkbox"
              name="skills"
              id="angular"
              value="angular"
              onChange={handleCheck}
              onBlur={handleOnBlur}
            />
            <label htmlFor="angular">Angular</label>
          </div>
          {errorField.skills && (
            <span className="danger">Skill is required*</span>
          )}
        </fieldset>

        <fieldset>
          <legend htmlFor="dob">Date of birth:</legend>
          <input
            type="date"
            name="dob"
            id="dob"
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {errorField.dob && (
            <span className="danger right">DOB is required*</span>
          )}
        </fieldset>

        <div className="select">
          <fieldset>
            <legend htmlFor="country">Country:</legend>
            <select
              name="country"
              id="country"
              onChange={handleChange}
              onBlur={handleOnBlur}
            >
              <option value="select">--Select--</option>
              <option value="india">India</option>
              <option value="uae">UAE</option>
              <option value="qatar">Qatar</option>
            </select>
            {errorField.country && (
              <span className="danger right">Country is required*</span>
            )}
          </fieldset>
        </div>

        <input className="btn" type="submit" value="Submit" />
      </form>
    </>
  );
};
