
function App() {
  return (
    <div className="container">
    <form>
        <h2>Registration</h2>
            <div className="fields">
                <div className="field">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" name="full-name" id="full-name" placeholder="Enter your name" />
                </div>
                <div className="field">
                    <label htmlFor="user-name">Username</label>
                    <input type="text" name="user-name" id="user-name" placeholder="Enter your username" />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="field">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="number" name="phone-number" id="phone-number" placeholder="Enter your Number" />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="field">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm your password" />
                </div>
            </div>
            <div className="gender-field">
                    <label className="gender-title">Gender</label>
                    <div className="gender">
                    <div className="male">
                    <input type="radio" name="gender" id="male" />
                    <label htmlFor="male">Male</label>
                    </div>
                    <div className="female">
                        <input type="radio" name="gender" id="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                    </div>
            </div>
            <input type="submit" value="Register" />
    </form>
    </div>
  )
}

export default App;
