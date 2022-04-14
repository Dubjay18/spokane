import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";
import { useStateValue } from "../../context/stateProvider";

const UserOtpVerification = () => {
  const [verifyOtp, setVerifyOtp] = React.useState("");
  const [{ qEmail }, dispatch] = useStateValue();
  const search = useLocation().search;
  const email = new URLSearchParams(search).get("email");
  const verify = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://freehouses.herokuapp.com/api/v1/verify-OTP?email=${email}`,
        {
          otp: verifyOtp,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          window.location = `forgot_password/?email=${email}`;
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <MainLayout>
      <main className="px-5 md:px-16 xl:px-52 pt-2">
        <div className="grid md:grid-cols-2 shadow mt-6 mb-16 md:h-600 pb-8 md:pb-0">
          <div className="flex flex-col justify-center py-3 px-5 lg:px-10 bg-form-bg text-white">
            <h1 className="text-4xl lg:text-5xl font-bold pb-7">
              Otp verification
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <form className="py-4">
              <input
                className="input-box italic mb-4 outline-gray-400 bg-ash-100"
                type="number"
                placeholder="OTP"
                value={verifyOtp}
                onChange={(e) => setVerifyOtp(e.target.value)}
              />
              <button
                className="btn text-white h-btn font-bold bg-pur md:text-lg mt-8 w-full cursor-pointer"
                type="submit"
                onClick={verify}
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};
export default UserOtpVerification;
