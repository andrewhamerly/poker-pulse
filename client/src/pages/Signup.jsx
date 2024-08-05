import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import logo from '../assets/images/poker-pulse-logo.png';

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
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <div className="flex justify-center mb-4">
          <Link to="/">
            <img src={logo} alt="Poker Pulse Logo" className="logo w-36" />
          </Link>
        </div>
        <h1 className="text-center text-2xl font-bold text-onyx sm:text-3xl">Join Poker Pulse</h1>
        <form onSubmit={handleFormSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-onyx">
          <p className="text-center text-lg font-medium text-whiteSmoke">Create your account below</p>
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                placeholder="Enter username"
                name="username"
                value={signUpData.username}
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm-6 3c0-4.409 3.591-8 8-8s8 3.591 8 8-3.591 8-8 8-8-3.591-8-8zm16 0c0-4.418-3.582-8-8-8-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                placeholder="Enter email"
                name="email"
                value={signUpData.email}
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                placeholder="Enter password"
                name="password"
                value={signUpData.password}
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-hunterGreen px-5 py-3 text-md font-2xl font-extrabold text-whiteSmoke hover:bg-hunterGreen/75 hover:text-whiteSmoke/75"
            style={{ cursor: 'pointer' }}
          >
            Sign Up
          </button>
          {error && (
              <div role="alert" className="rounded border-s-4 border-rojo bg-vermillion p-4">
                <div className="flex items-center gap-2 text-eerieBlack">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <strong className="block text-eerieBlack font-semibold font-medium"> Unable to signup. </strong>
                </div>

                <p className="mt-2 text-md text-eerieBlack">
                  Please try entering a different username, as that one may be taken already.
                </p>
              </div>
          )}
          {data && (
            <p className="text-center text-md text-whiteSmoke mt-2">
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          )}
          <p className="text-center text-md text-whiteSmoke">
            Already have an account?<span> </span>
            <Link className="underline underline-offset-8 font-semibold hover:text-whiteSmoke/75" to="/login">Login Now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
