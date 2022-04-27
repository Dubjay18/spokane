import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../components/ImageUpload";

import AgentProfileLayout from "../../layouts/AgentProfileLayout";

const AgentEditProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [name, setName] = useState("");
  const username = useSelector((state) => state.username);
  const userEmail = useSelector((state) => state.email);
  const userToken = useSelector((state) => state.token);
  const userEntry = useSelector((state) => state.entry);
  const [email, setEmail] = useState(userEmail);
  const Navigate = useNavigate();
  if (!username || !userToken) {
    Navigate("/login");
  }
  const handleEdit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    axios
      .get(`https://freehouses.herokuapp.com/api/v1/profile/${userEmail}`, {
        headers: {
          Authorization: "Token" + " " + userToken,
        },
      })
      .then((response) => {
        setName(response.data.full_name);
        setEmail(response.data.email);
        setProfileImage(response.data.profile_image);
        setBackgroundImage(response.data.background_image);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AgentProfileLayout>
      <section>
        <div className="relative">
          <div className="relative w-full h-32 md:h-60 bg-black">
            <div className="absolute right-1/2 top-1/2">
              <ImageUpload />
            </div>
            <img
              className="object-cover opacity-50 w-full h-32 md:h-60 rounded-lg"
              src={backgroundImage}
              alt="profile"
            />
          </div>
          <div className="flex justify-between flex-wrap mt-5">
            <div className="flex items-center gap-2 pl-5 relative bottom-8">
              <div className="relative bg-black h-14 w-14 md:h-24 md:w-24 rounded-full">
                <div className="absolute left-1/3 top-1/3">
                  <ImageUpload />
                </div>
                <img
                  className="object-cover opacity-40 h-14 w-14 md:h-24 md:w-24 rounded-full"
                  src={profileImage}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <form onSubmit={handleEdit}>
          <div className="grid md:justify-center md:grid-cols-2 gap-8">
            <div className="grid">
              <label htmlFor="firstName" className="font-poppins">
                Full Name
              </label>
              <input
                placeholder="Full Name"
                type="text"
                name="fullName"
                id="Name"
                value={name}
                className="add-product-input"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid">
              <label htmlFor="email" className="font-poppins">
                Email
              </label>
              <input
                placeholder="email"
                disabled
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="add-product-input text-ash-400"
              />
            </div>

            <div className="grid">
              <label htmlFor="location" className="font-poppins">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Full address"
                id="location"
                value="Ikeja, Lagos"
                className="add-product-input"
              />
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="bg-pur md:w-1/2 font-medium text-white py-2 px-10 rounded-lg">
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </AgentProfileLayout>
  );
};

export default AgentEditProfile;
