import React, { useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/stateProvider";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";
import GoogleLogin from "react-google-login";

const UserLogin = () => {
  const [email, setEmail] = React.useState("");
  const [verifyEmail, setVerifyEmail] = React.useState("");
  const [verifyOtp, setVerifyOtp] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [otp, setOtp] = React.useState(false);
  const [{ user, token }, dispatch] = useStateValue();
  function login(e) {
    e.preventDefault();
    axios
      .post("https://freehouses.herokuapp.com/api/v1/login/", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);

        console.log(user);
        dispatch({
          type: "SET_TOKEN",
          token: response.data.Token,
        });
        const config = {
          headers: {
            Authorization:
              "Bearer" + "a73c8c7bef95001e9e54729a03c26713509585db",
          },
        };
        axios
          .get("https://freehouses.herokuapp.com/api/v1/profile/", {
            headers: {
              Authorization: "Token" + " " + token,
            },
          })
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
        dispatch({
          type: "SET_USER",
          user: email,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const verify = (e) => {
    e.preventDefault();
    axios
      .post("https://freehouses.herokuapp.com/api/v1/get-OTP/", {
        email: verifyEmail,
      })
      .then((data) => {
        console.log(data);
        setVerifyOtp(true);
      })
      .catch((err) => console.log(err));
  };
  const googleResponse = (response) => {
    console.error(response);
    // {
    //   response.accessToken
    //     ? googleLogin(response.accessToken)
    //     : console.log(response, "err");
    // }
  };
  const googleLogin = (response) => {
    axios
      .post("https://freehouses.herokuapp.com/api/v1/google-token/validate/", {
        client_id:
          "769823704050-gjo70m7g1iq0kguk8i6ns2l26v43ol59.apps.googleusercontent.com",
        code: [`${response.accessToken}`],
        backend: "google-oauth2",
        grant_type: "google-token",
        client_secret: "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",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const onGoogleLoginSuccess = useCallback((response) => {
    const idToken = response.tokenId;
    console.log(response.tokenId);
    const res = response;
    const data = {
      email: response.profileObj.email,
      first_name: response.profileObj.givenName,
      last_name: response.profileObj.familyName,
    };

    validateTokenAndObtainSession(data, idToken, res);
  }, []);
  const validateTokenAndObtainSession = (data, idToken, res) => {
    const headers = {
      Authorization: idToken,
      "Content-Type": "application/json",
    };
    const scope = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" ");

    return axios.post(
      "https://freehouses.herokuapp.com/api/v1/google-token/validate/",
      headers,
      {
        response_type: "code",
        client_id:
          "769823704050-gjo70m7g1iq0kguk8i6ns2l26v43ol59.apps.googleusercontent.com",
        redirect_uri: `https://localhost:3000/`,
        prompt: "select_account",
        access_type: "offline",
        scope,
      }
    );
  };
  const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const redirectUri = "api/v1/auth/login/google/";

    const scope = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" ");

    const params = {
      response_type: "code",
      client_id:
        "769823704050-gjo70m7g1iq0kguk8i6ns2l26v43ol59.apps.googleusercontent.com",
      redirect_uri: `https://freehouses.herokuapp.com/api/v1/user/login/`,
      prompt: "select_account",
      access_type: "offline",
      scope,
    };

    const urlParams = new URLSearchParams(params).toString();
    console.log(urlParams);
    window.location = `${googleAuthUrl}?${urlParams}`;
  }, []);
  return (
    <MainLayout>
      <main className="px-5 md:px-16 xl:px-52 pt-2">
        <div className="grid md:grid-cols-2 shadow mt-6 mb-16 md:h-600 pb-8 md:pb-0">
          <div className="flex flex-col justify-center py-3 px-5 lg:px-10 bg-form-bg text-white">
            {otp ? (
              <h1 className="text-4xl lg:text-5xl font-bold pb-7">
                Email verification
              </h1>
            ) : (
              <>
                {" "}
                <h1 className="text-4xl lg:text-5xl font-bold pb-7">Login</h1>
                <p className="md:text-xl lg:text-2xl leading-8">
                  Login now and keep on enjoying our amazing real estate
                  services.
                </p>
              </>
            )}
          </div>
          {otp ? (
            verifyOtp ? (
              <div className="flex items-center justify-center">
                <h1>A link as been sent to your email</h1>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <form className="py-4">
                  <input
                    className="input-box italic mb-4 outline-gray-400 bg-ash-100"
                    type="email"
                    placeholder="Email Address"
                    value={verifyEmail}
                    onChange={(e) => setVerifyEmail(e.target.value)}
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
            )
          ) : (
            <div className="pt-5 md:pt-10 px-3 md:px-6">
              <h4 className="font-bold text-center md:text-left text-2xl lg:text-3xl mb-5">
                Login to your account
              </h4>
              <button className="flex items-center rounded-xl justify-center gap-4 border input-box text-center">
                <span>
                  <FcGoogle size={25} />
                </span>
                <span className="tracking-tight" onClick={openGoogleLoginPage}>
                  Sign in with Google{" "}
                </span>
              </button>

              <p className="py-5 text-center font-medium text-lg text-secondary">
                - OR -
              </p>
              <form className="">
                <input
                  className="input-box italic mb-4 outline-gray-400 bg-ash-100"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="input-box italic bg-ash-100 outline-gray-400"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn text-white h-btn font-bold bg-pur md:text-lg mt-8 w-full"
                  type="submit"
                  onClick={login}
                >
                  <Link to="/user-profile">Login</Link>
                </button>
              </form>
              <p className="text-secondary mt-4">
                Don't have an account?{"  "}
                <Link className="text-pur font-medium md:text-lg" to="/signup">
                  Sign Up
                </Link>
              </p>
              <p
                className="text-pur font-medium md:text-lg mt-3 cursor-pointer"
                onClick={() => {
                  setOtp(true);
                }}
              >
                Forgot Password?
              </p>
            </div>
          )}
        </div>
      </main>
    </MainLayout>
  );
};

export default UserLogin;
