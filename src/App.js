import React, { useState } from "react";

import { nameSchema, emailSchema, passwordSchema } from "./validations";

const App = () => {
  const [alert, setAlert] = useState(false);

  const createUser = async (event) => {
    event.preventDefault();

    let name = {
      name: event.target[0].value,
    };
    let email = {
      email: event.target[1].value,
    };
    let password = {
      password: event.target[2].value,
    };

    const nameIsValid = await nameSchema.isValid(name);
    const emailIsValid = await emailSchema.isValid(email);
    const passwordIsValid = await passwordSchema.isValid(password);

    if (!nameIsValid) {
      alert("Name is not valid , it must be a string of max 50 characters");
    } else if (!emailIsValid) {
      alert("Email is not valid , it must be in format example@gmail.com");
    } else if (!passwordIsValid) {
      alert("Password is not valid , it must contain only 6 to 20 characters");
    } else {
      window.location.reload();
      setAlert(true);
    }
  };

  return (
    <div className="bg-blue-300 h-screen">
      <h1 className="text-3xl pt-6 font-bold font-sans text-center">
        React Form Validation
      </h1>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={createUser}>
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
              />
            </div>

            <div>
              <button
                className="hover:shadow-form rounded-md bg-gray-300 py-3 px-8 text-base font-semibold  outline-none"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          {alert ? (
            <div
              class="font-regular relative block w-full rounded-lg mt-4 bg-green-500 p-4 text-base leading-5 text-white opacity-100"
              data-dismissible="alert"
            >
              <div class="mr-12">Form is submitted</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
