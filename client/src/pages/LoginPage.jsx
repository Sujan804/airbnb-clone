import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <form className="max-w-2xl mx-auto ">
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
