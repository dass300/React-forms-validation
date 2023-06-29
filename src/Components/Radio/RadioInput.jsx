
export const RadioInput = ({
    onchange,
    onblur,
    name,
    errorfield,
   
    idmale,
    value1,
    value2,
    value3,
    idfemale,
    type,
    otherid,
    label1,
    label2,
    label3,
    title,
    title1,
    title2,
    title3,




    


})=> {
  return (
    <div className="sec">
          <label htmlFor="">{title}: </label>
<div>


          <input
            className="radio"
            type={type}
            id={idmale}
            name={name}
            value={value1}
            onChange={onchange}
            onBlur={onblur}
          />

          <label htmlFor={label1}>{title1} </label>

          <input
            className="radio"
            type={type}
            id={idfemale}
            name={name}
            value={value2}
            onChange={onchange}
            onBlur={onblur}
          />
          <label htmlFor={label2}>{title2} </label>

          <input
            className="radio"
            type={type}
            id={otherid}
            name={name}
            value={value3}
            onChange={onchange}
            onBlur={onblur}
          />
          <label htmlFor={label3}>{title3} </label>
          </div>

          {errorfield[name] && <p className="danger">{title} is required</p>}
        </div>
  )
}
