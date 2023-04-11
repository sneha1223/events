import React from 'react'

function DisplayFormData(props) {
  return (
    <div>
      <h2>The given details are:</h2> 
      <h4>Name:{props.formData.name} </h4>
      <h4>Age :{props.formData.age} </h4>
      <h4>Address:{props.formData.address} </h4>
    </div>
  )
}

export default DisplayFormData