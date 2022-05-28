import React, { useMemo } from 'react'
import Select from "react-select";
import countryList from "react-select-country-list";
// Import input error component
import InputError from '../components/InputError'
import isEmail from 'validator/lib/isEmail'


function FormBody({getter, setter, error}) {
  const options = useMemo(() => countryList().getData(), []);
  return (
    <>
        {/* Full name */}
        <input
        className="input-box italic mb-4 bg-ash-100 outline-gray-400"
        type="text"
        placeholder="Full Name"
        value={getter.name}
        onChange={(e) => setter.setName(e.target.value)}
        />

        {/* Email address */}
        {error.email && (
            <InputError msg={error.email} />
        )}
        <input
        className="input-box italic mb-4 bg-ash-100 outline-gray-400"
        type="email"
        placeholder="Email Address"
        value={getter.email}
        onChange={(e) => setter.setEmail(e.target.value)}
        />
        
        {/* Phone number */}
        {error.phone_number && (
        <InputError msg={error.phone_number[0]} />
        )}
        <input
        className="input-box italic mb-4 bg-ash-100 outline-gray-400"
        type="number"
        placeholder="+2349012345678"
        value={getter.phoneNumber}
        onChange={(e) => setter.setPhoneNumber(e.target.value)}
        />

        {/* Country */}
        {error.country && (
        <InputError msg={error.country} />
        )}
        <Select
        className="input-box italic mb-4 bg-ash-100 outline-gray-400"
        placeholder={"Country"}
        options={options}
        value={getter.value}
        onChange={(e)=>setter.changeHandler(e.value)}
        />

        {/* Entry */}
        <input
        className="input-box italic mb-4 bg-ash-100 outline-gray-400"
        type="text"
        placeholder="Entry"
        value={getter.entry} readOnly
        onChange={(e) => setter.setEntry(e.target.value)}
        />

        {/* Password */}
        {error.password && (
        <InputError msg={error.password} />
        )}
        <input
        className="input-box italic mb-4 bg-ash-100 outline-gray-400"
        type="password"
        placeholder="Password"
        value={getter.password}
        onChange={(e) => setter.setPassword(e.target.value)}
        />

        {error.password2 && (
        <InputError msg={error.password2} />
        )}
        <input
        className="input-box italic bg-ash-100 outline-gray-400"
        type="password"
        placeholder="Confirm Password"
        value={getter.password2}
        onChange={(e) => setter.setPassword2(e.target.value)}
        />
    </>
  )
}

export default FormBody