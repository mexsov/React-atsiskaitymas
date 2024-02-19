import React, { useState } from 'react';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

export const BookRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
 

   
    setShowPopup(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MDBInput
          id='form4Example1'
          wrapperClass='mb-4'
          label='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <MDBInput
          type='email'
          id='form4Example2'
          wrapperClass='mb-4'
          label='Email address'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <MDBInput
          wrapperClass='mb-4'
          textarea
          id='form4Example3'
          rows={4}
          label='Message'
          name='message'
          value={formData.message}
          onChange={handleChange}
        />

        <MDBBtn type='submit' className='mb-4' block>
          Submit
        </MDBBtn>
      </form>
      {showPopup && (
        <div className="popup">
          
          <p>Aciu {formData.name} jusu atsiliepima gavome</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};












// import React, { useState } from 'react';
// import {
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export const BookRegistrationForm = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevents the default form submission behavior
//     // Here you can add your form submission logic, like sending data to a server

//     // After successful submission, show the popup
//     setShowPopup(true);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
//         <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
//         <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

//         <MDBCheckbox
//           wrapperClass='d-flex justify-content-center mb-4'
//           id='form4Example4'
//           label='Send me a copy of this message'
//           defaultChecked
//         />

//         <MDBBtn type='submit' className='mb-4' block>
//           Submit
//         </MDBBtn>
//       </form>
      
//       {/* Popup component */}
//       {showPopup && (
//         <div className="popup">
//           <p>Aciu </p>
//           <button onClick={() => setShowPopup(false)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };