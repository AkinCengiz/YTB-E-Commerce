const AccountPage = () => {
  return (
    <>
      <section className="account-page">
        <div className="container">
          <div className="account-wrapper">
            <div className="account-column">
              <h2>Login</h2>
              <form>
                <div>
                  <label>
                    <span>
                      Username or email address{" "}
                      <span className="required">*</span>
                    </span>
                    <input type="text" />
                  </label>
                </div>
                <div>
                  <label>
                    <span>
                      Password <span className="required">*</span>
                    </span>
                    <input type="password" />
                  </label>
                </div>
                <p className="remember">
                  <label>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <button className="btn btn-sm">Login</button>
                </p>
                <a href="#" className="form-link">
                  Lost your password?
                </a>
              </form>
            </div>
            <div className="account-column">
              <h2>Register</h2>
              <form>
                <div>
                  <label>
                    <span>
                      Username <span className="required">*</span>
                    </span>
                    <input type="text" />
                  </label>
                </div>
                <div>
                  <label>
                    <span>
                      Email address <span className="required">*</span>
                    </span>
                    <input type="email" />
                  </label>
                </div>
                <div>
                  <label>
                    <span>
                      Password <span className="required">*</span>
                    </span>
                    <input type="password" />
                  </label>
                </div>
                <div className="privacy-policy-text remember">
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <a href="#">privacy policy.</a>
                  </p>
                  <button className="btn btn-sm">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountPage;
