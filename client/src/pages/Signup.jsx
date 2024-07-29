import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(signUpData);

    try {
      const { data } = await addUser({
        variables: { ...signUpData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h4>Sign Up</h4>
      <div className="cardBody">
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              className="usernameInput"
              placeholder="Your username"
              name="username"
              type="text"
              value={signUpData.name}
              onChange={handleChange}
            />
            <input
              className="emailInput"
              placeholder="Your email"
              name="email"
              type="email"
              value={signUpData.email}
              onChange={handleChange}
            />
            <input
              className="passwordInput"
              placeholder="******"
              name="password"
              type="password"
              value={signUpData.password}
              onChange={handleChange}
            />
            <button
              className="submitButton"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
