import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import axios from "axios";

const AgentSignup = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [entry, setEntry] = useState("Agent");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [name, setName] = useState("");
  const [verification, setVerification] = useState(false);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    console.log(value)
    setValue(value);
  };
  const register = (e) => {
    e.preventDefault();

    axios
      .post("https://freehouses.herokuapp.com/api/v1/agent/registration/", {
        name: name,
        entry: entry,
        password: password,
        password2: password2,
        country: value.value,
        email: email,
        phone_number: phoneNumber,
        home_address: homeAddress,
      })
      .then((res) => {
        console.log(res);
        setVerification(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <MainLayout>
      <main className="px-5 md:px-16 xl:px-52 pt-2">
        <div className="grid md:grid-cols-2 shadow mt-6 mb-14 md:h-630 pb-8 md:pb-0">
          <div className="flex flex-col justify-center py-3 px-5 lg:px-10 bg-form-bg text-white">
            <h1 className="text-4xl lg:text-5xl font-bold pb-7">
              {verification ? "Email Verification" : "Sign Up"}
            </h1>
            <p className="md:text-xl lg:text-2xl leading-8">
              {verification ? "" : "Sign up now to become an agent"}
            </p>
          </div>
          <div className="pt-5 md:pt-10 px-3 md:px-6">
            {verification ? (
              <div>
                <h1 className="sm:text-2xl text-xl py-35">
                  A link as been sent to your email click it and login{" "}
                  <Link className="text-pur font-medium " to="/login">
                    here
                  </Link>
                </h1>
              </div>
            ) : (
              <>
                {" "}
                <h4 className="font-bold text-center md:text-left text-2xl lg:text-3xl mb-5">
                  Create Account
                </h4>
                <form className="">
                  <input
                    className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* Home address */}
                  <input
                    className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                    type="text"
                    placeholder="Home Address"
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                  />
                  {/* Phone number */}
                  <input
                    className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                    type="number"
                    placeholder="+2349012345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <Select
                    className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                    placeholder={"Country"}
                    options={options}
                    value={value}
                    onChange={changeHandler}
                  />
                  <input
                    className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                    type="text"
                    placeholder="Entry"
                    value={entry} readOnly
                    onChange={(e) => setEntry(e.target.value)}
                  />
                  <input
                    className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="input-box italic bg-ash-100 outline-gray-400"
                    type="password"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />

                  <button
                    className="btn text-white font-bold md:text-lg h-btn bg-pur mt-8 w-full"
                    onClick={register}
                  >
                    Create Account
                  </button>
                </form>
                <p className="text-secondary mt-4 md:pb-3">
                  Already have an account?{"  "}
                  <Link className="text-pur font-medium md:text-lg" to="/login">
                    Log In
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default AgentSignup;
