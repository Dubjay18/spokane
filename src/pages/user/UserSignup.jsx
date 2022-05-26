import React, { useState, useMemo } from "react";
import {useNavigate} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";

import isEmail from 'validator/lib/isEmail'

// Import input error component
import InputError from '../../components/InputError'

import MainLayout from "../../layouts/MainLayout";

const UserSignup = () => {

  const redirect = useNavigate()

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState({ value: null, label: "Country" });
  const [entry, setEntry] = useState("Tenant");
  const [error, setError] = React.useState({});
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setCountry(value);
  };
  async function Register(e) {
    // Default options are marked with *
    e.preventDefault();
    const url = "https://freehouses.herokuapp.com/api/v1/user/registration/";
    const data = {
      name: name,
      email: email,
      password: password,
      password2: password2,
      country: country.value,
      phone_number: phoneNumber,
      entry: entry,
    };
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
      .then((response) => {
        if (!response.ok){
          let res = response.json()
          res.then(function(err){
            setError(Object.assign(error, err));
            return -1;
          })
        }
      })
      .then((data) => {
        redirect('/user-profile')
      })
      .catch((err) => {
        setError({...error, res: [err.response.data.password, err.response.data.Hint]});
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

            <form className="" onSubmit={Register}>
            {error.res && (
              <div className="shadow-md bg-white text-slate-500">
                <InputError msg={error.res[0] } />
                <p>{error.res[1]}</p>
              </div>
            )}
              <input
                className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
              {error.email && (
                <InputError msg={error.email} />
              )}
              <input
                className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />

              {error.country && (
                <InputError msg={error.country} />
              )}
              <div className="input-box italic mb-4 bg-ash-100 outline-gray-400">
                <label className="text-gray-400">
                  <Select
                    placeholder={country.label}
                    options={options}
                    value={country.label}
                    onChange={(e) => changeHandler(e)}
                  />
                </label>
              </div>

              {error.phone_number && (
                <InputError msg={error.phone_number[0]} />
              )}
              <input
                className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                type="number"
                placeholder="+2331010101010"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
              <input
                className="input-box  italic mb-4 bg-ash-100 outline-gray-400"
                type="text"
                placeholder="Entry" readOnly
                value={"Tenant"}
              />
              <input
                className="input-box italic mb-4 bg-ash-100 outline-gray-400"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error.password2 && (
                <InputError msg={error.password2} />
              )}
              <input
                className="input-box italic bg-ash-100 outline-gray-400"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setPassword2(e.target.value)}
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
