import React, { useState, useMemo } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";

import MainLayout from "../../layouts/MainLayout";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [entry, setEntry] = useState("Tenant");
  const [error, setError] = React.useState(null);
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setCountry(value);
  };
  async function Register(
    url = "https://freehouses.herokuapp.com/api/v1/user/registration/",
    data = {
      name: name,
      email: email,
      password: password,
      password2: password2,
      country: country,
      phone_number: phoneNumber,
      entry: entry,
    }
  ) {
    // Default options are marked with *
    e.preventDefault();
    setError(null);
    await fetch(url, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((res) => {
        setError(res.response.data.message);
      });
  }
  return (
    <MainLayout>
      <main className="px-5 md:px-16 xl:px-52 pt-2 md:mb-56">
        <div className="grid md:grid-cols-2 shadow-md mt-6 mb-16  pb-8 md:pb-11">
          <div className="flex flex-col justify-center py-3 px-5 lg:px-10 bg-form-bg text-white">
            <h1 className="text-4xl lg:text-5xl font-bold pb-7">Sign Up</h1>
            <p className="md:text-xl lg:text-2xl leading-8">
              Sign up now and enjoy amazing services from our apartment agents
            </p>
          </div>
          <div className="pt-5 md:pt-10 px-3 md:px-6">
            <h4 className="font-bold text-center md:text-left text-2xl lg:text-3xl mb-5">
              Create Account
            </h4>

            <form className="">
              <input
                className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e)}
              />
              <input
                className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e)}
              />

              <div className="input-box italic mb-4 bg-ash-100 outline-gray-400">
                <label className="text-gray-400">
                  <Select
                    placeholder={"Country"}
                    options={options}
                    value={country}
                    onChange={(e) => changeHandler(e)}
                  />
                </label>
              </div>

              <input
                className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                type="number"
                placeholder="Phone_number"
              />
              <input
                className="input-box  italic mb-4 bg-ash-100 outline-gray-400"
                type="text"
                placeholder="Entry"
                value={"Tenant"}
              />
              <input
                className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e)}
              />
              <input
                className="input-box italic bg-ash-100 outline-gray-400"
                type="password2"
                placeholder="Confirm Password"
                onChange={(e) => setPassword2(e)}
              />
              <button className="btn text-white font-bold md:text-lg h-btn bg-pur mt-8 w-full">
                Create Account
              </button>
            </form>
            <p className="text-secondary mt-4">
              Already have an account?{"  "}
              <Link className="text-pur font-medium md:text-lg" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default UserSignup;
