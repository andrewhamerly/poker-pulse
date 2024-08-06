const ContactFAQ = () => {
    return (
      <div className="mt-12 p-8 bg-onyx">
        <h3 className="text-4xl font-bold text-center text-whiteSmoke m-6">Frequently Asked Questions</h3>
        <div className="space-y-4 mx-28">
          <details
            className="group rounded-lg bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white"
            >
              <h2 className="font-medium text-xl">How can I update my player profile information?</h2>
              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-lg text-whiteSmoke">
              You can update your player profile information by logging into your account and navigating to the "Profile" section. From there, you can edit your details and save the changes.
            </p>
          </details>
  
          <details
            className="group rounded-lg bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white"
            >
              <h2 className="font-medium text-xl">What should I do if I encounter an issue with our tournament schedules?</h2>
              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-lg text-whiteSmoke">
              If you encounter any issues with our tournament data, please contact our support team immediately using the contact form or our support email. We are available Monday - Friday 9am to 5pm EST to assist you.
            </p>
          </details>
  
          <details
            className="group rounded-lg bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white"
            >
              <h2 className="font-medium text-xl">How do I reset my password if I've forgotten it?</h2>
              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-lg text-whiteSmoke">
              To reset your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we will send you instructions on how to reset your password.
            </p>
          </details>
        </div>
      </div>
    );
  };
  
  export default ContactFAQ;