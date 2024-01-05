import React from "react";

const SignIn = () => {
  return (
    <>
      <body>
        <main>
          <form>
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1>Please sign in</h1>
            <div>
              <input
                type="email"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div>
              <input
                type="password"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label for="flexCheckDefault">Remember me</label>
            </div>
            <button type="submit">Sign in</button>
            <p>&copy; 2017–2023</p>
          </form>
        </main>
        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
      </body>
    </>
  );
};

export default SignIn;
