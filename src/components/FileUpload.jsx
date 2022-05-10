import React, { useState } from "react";
import { FaTimes, FaFileUpload } from "react-icons/fa";

const FileUpload = ({ SelectImage }) => {
  const [images, setImages] = useState([]);
  const [imagey, setImagey] = useState("");
  const handleUpload = (e) => {
    if (e.target.files) {
      const uploadedArray = Array.from(e.target.files);
      // const reader = new FileReader();
      // console.log(reader);
      // reader.onload = function () {
      //   console.log(this);
      //   var str = this.result;
      //   console.log(str);
      //   setImagey(str);
      // };
      // reader.readAsArrayBuffer(e.target.files[0]);
      const imageArray = uploadedArray.map((img) => URL.createObjectURL(img));
      setImages((prevImage) => [...prevImage, ...imageArray]);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
      SelectImage(imagey);
      console.log(images);
      console.log(imageArray);
    }

    // if (e.target.files[0].type.indexOf("audio/") !== 0) {
    //   console.warn("not an audio file");
    //   return;
    // }
    // const reader = new FileReader();
    // console.log(reader);
    // reader.onload = function () {
    //   console.log(this);
    //   var str = this.result;
    //   // this is a string, so you can store it in localStorage, even if it's really not a good idea
    //   console.log(str);
    //   div.innerHTML += `<audio controls>
    //   <source src=${str} type="audio/mpeg" />
    //   Your browser does not support the audio element.
    // </audio><img src=${str}/>`;
    //   // const aud = new Audio(str);
    //   // aud.play();
    // };
    // reader.readAsDataURL(f.files[0]);
  };

  const handleDrop = (id) => {
    setImages(images.filter((img) => img !== id));
  };
  return (
    <div className="flex flex-col justify-center mt-14 gap-10">
      <label
        htmlFor="productImage"
        className="border self-center cursor-pointer rounded-lg w-64 h-32 flex flex-col items-center justify-center"
      >
        <span className="text-pur mb-2">
          <FaFileUpload size={20} />
        </span>
        <span>Upload products</span>
        <input
          onChange={handleUpload}
          className="hidden"
          multiple
          type="file"
          name="productImage"
          id="productImage"
          accept="image/png, image/jpeg, image/webp"
        />
      </label>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((img) => {
          return (
            <div key={img} className="relative">
              <img
                src={img}
                alt={img}
                className="w-24 rounded-lg h-20 object-cover"
              />
              <button
                onClick={() => handleDrop(img)}
                className="absolute  top-1 right-1 text-red-700"
              >
                <FaTimes size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileUpload;
