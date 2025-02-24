import { useState } from "react";

function App() {

  const [formInputs, setFormInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  function signUp(){
    console.log(formInputs);
  }

  return (
    <div className="container flex align-center justify-center">
    <div className="form-box">
        <h2 className="title">Registration</h2>
        <form onSubmit={(e)=> e.preventDefault()} method="post" >
            <div className="fields grid">
                <div className="field">
                    <label htmlFor="full-name">Full Name</label>
                    <input 
                    type="text" 
                    name="full-name" 
                    id="full-name" 
                    placeholder="Enter your name"
                    onChange={(e)=>{setFormInputs({...formInputs, fullName: e.target.value})}}
                    />
                </div>

                <div className="field">
                    <label htmlFor="user-name">Username</label>
                    <input 
                    type="text"
                    name="user-name" 
                    id="user-name" 
                    placeholder="Enter your username"
                    onChange={(e)=>{setFormInputs({...formInputs, username: e.target.value})}}
                    />
                </div>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email"
                    onChange={(e)=>{setFormInputs({...formInputs, email: e.target.value})}}
                    />
                </div>

                <div className="field">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input 
                    type="text" 
                    name="phone-number" 
                    id="phone-number" 
                    placeholder="Enter your Number"
                    onChange={(e)=>{setFormInputs({...formInputs, phoneNumber: e.target.value})}}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter your password"
                    onChange={(e)=>{setFormInputs({...formInputs, password: e.target.value})}}
                    />
                </div>

                <div className="field">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input 
                    type="password" 
                    name="confirm-password" 
                    id="confirm-password"
                    placeholder="Confirm your password"
                    onChange={(e)=>{setFormInputs({...formInputs, confirmPassword: e.target.value})}}
                    />
                </div>
            </div>

            <label className="gender-title">Gender</label>
            <div className="gender flex align-center">
                <div className="male">
                  <input 
                  type="radio" 
                  name="gender" 
                  id="male" 
                  value="male"
                  onChange={(e)=>{setFormInputs({...formInputs, gender: e.target.value})}}
                  />
                  <label htmlFor="male">Male</label>
                </div>

                <div className="female">
                  <input 
                  type="radio" 
                  name="gender" 
                  id="female" 
                  value="female"
                  onChange={(e)=>{setFormInputs({...formInputs, gender: e.target.value})}}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                </div>

            <input type="submit" onClick={signUp} value="Register" />
            </form>
    </div>
    </div>
  )
}

export default App;
