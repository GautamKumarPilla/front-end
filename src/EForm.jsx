import React from 'react';

function EForm() {

  return (
    <div className='d-flex card'>
        <center className='display-4'>
            Loan Application Form
        </center>
        <label htmlFor="">Desired Loan Amount</label>
        <input type="text" name="" id="" placeholder='INR 0'/>
        <label htmlFor="">Annual Income</label>
        <input type="text" name="" id="" placeholder='INR 0.00'/>
        <label htmlFor="">What will the loan be used for?</label>
        <select name="" id="" disabled="disabled">
            <option value="">Deposit</option>
            <option value="">Investment</option>
            <option value="">Business</option>
            <option value="">ProductLaunching</option>
            <option value="">Development</option>
        </select>
       <label htmlFor="">Fullname</label>
       <input type="text" name="" id="" /> <input type="text" name="" id="" />
       <label htmlFor="">Date Of Birth</label>
       <input type="date" name="" id="" />
       <label htmlFor="">Phone Number</label>
       <input type="text" name="" id="" placeholder='### ### ####'/>
       <label htmlFor="">Email</label>
       <input type="text" name="" id="" />
       <label htmlFor="">Address Proof</label>
       <select name="" id="" disabled="disabled">
            <option value="">Adhaar</option>
            <option value="">Passport</option>
            <option value="">PAN</option>
            <option value="">VoterID</option>
       </select>

    </div>
  )
}

export default EForm