// AuthComponent.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/AuthSlice/AuthSlice";

const AuthComponent = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(credentials));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <button onClick={handleLogin}>Login</button>
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>}
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
