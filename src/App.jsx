
function App() {
  return (
    <div className="container flex align-center justify-center">
    <div className="form-box">
        <h2 className="title">Registration</h2>
        <form method="post">
            <div className="fields grid">

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
                    <input type="text" name="phone-number" id="phone-number" placeholder="Enter your Number" />
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

            <label className="gender-title">Gender</label>
            <div className="gender flex align-center">
                <div className="male">
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                </div>
                <div className="female">
                    <input type="radio" name="gender" id="female" />
                    <label htmlFor="female">Female</label>
                </div>
                </div>

            <input type="submit" value="Register" />
            </form>
    </div>
    </div>
  )
}

export default App;
