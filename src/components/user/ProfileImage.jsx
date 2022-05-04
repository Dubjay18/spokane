import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";

const ProfileImage = (props) => {
  const [profileImage, setProfileImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const username = useSelector((state) => state.username);
  const userEmail = useSelector((state) => state.email);
  const userToken = useSelector((state) => state.token);
  const userEntry = useSelector((state) => state.entry);
  useEffect(() => {
    axios
      .get(`https://freehouses.herokuapp.com/api/v1/profile/${userEmail}`, {
        headers: {
          Authorization: "Token" + " " + userToken,
        },
      })
      .then((response) => {
        console.log(response);
        setProfileImage(response.data.profile_image);
        setBackgroundImage(response.data.background_image);
      });
  }, [userEmail]);
  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  const convertImage = (w, h) => {
    `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
  };

  return (
    <section>
      <div className="relative">
        <img
          className="object-cover w-full h-32 md:h-60 rounded-lg"
          src={backgroundImage}
          alt="profile"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            convertImage(700, 475)
          )}`}
        />
        <div className="flex justify-between flex-wrap mt-5">
          <div className="flex items-center gap-2 pl-5 relative bottom-8">
            <img
              className="object-cover h-14 w-14 md:h-24 md:w-24 rounded-full"
              src={profileImage}
              alt="profile"
            />
            <div>
              <h6 className="me:text-lg font-medium pt-1 md:pt-0">
                {username}
              </h6>
              <p className="text-sm text-ash-50">Ikeja, Lagos</p>
            </div>
          </div>
          <div className="flex ml-5 md:ml-0 gap-5 mb-6 md:mb-0 flex-end">
            <div>
              <Link to="/edit-profile">
                <button className="flex gap-2 text-sm items-center lg:text-lg py-2 px-5 bg-pur text-center rounded-xl text-white">
                  <span>Edit Profile</span>{" "}
                  <span>
                    <MdEdit />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileImage;
