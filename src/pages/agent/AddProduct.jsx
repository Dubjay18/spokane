import axios from "axios";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import FileUpload from "../../components/FileUpload";

import AgentProfileLayout from "../../layouts/AgentProfileLayout";

const AddProduct = () => {
  const [tags, setTags] = useState([]);
  const [tagvalue, setTagValue] = useState("");
  const [image, setImage] = useState([]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [location, setLocation] = useState("lagos");
  const username = useSelector((state) => state.user.full_name);
  const userEmail = useSelector((state) => state.email);
  const userToken = useSelector((state) => state.user.Token);
  const userEntry = useSelector((state) => state.entry);

  const SelectImage = (img) => {
    setImage(img);
  };

  const cat = [
    " ",
    "Bungalow",
    "Hotels",
    "skyscraper",
    "Flats",
    "Duplex",
    "Self",
    "contain",
  ];

  const addTags = (e) => {
    if (e.key === "Enter" && tagvalue) {
      setTags((prevTags) => [...prevTags, { value: tagvalue, id: Date.now() }]);
      setTagValue("");
    }
  };

  const removeTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/housefree/image/upload';
  const API_PRESET = 'by5ljhgp'
  

  const sendImg = () => {
    return new Promise((resolve, reject)=>{
      let links = []
      if (image.length > 1){
        image.map(img => {
          const formData = new FormData()
          formData.append('file', img)
          formData.append('upload_preset', API_PRESET)
          axios.post(CLOUDINARY_URL, formData)
          .then(res => links.push(res.data.secure_url))
          .catch(err => reject(err))
          return resolve(links)
        }) }
      })
      }

  const handleAdd = (e) => {
    e.preventDefault();
    console.log('Submitted')
    sendImg()
    .then((links) => {
      console.log(links)
      axios
      .post(
        `https://freehouses.herokuapp.com/api/v1/apartment/post/`,

        {
          apartment_title: productName,
          category: category,
          price: price,
          image_url: links,
          location: location,
          is_available: true,
          agent: username,

          user_id: userEmail,
        },
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      )
      .then((response) => {
        alert("Product added");
        setPrice("");
        setCategory("");
        setImage("");
        setLocation("");
        setProductName("");
      })
      .catch((err) => {
        console.log(err);
      })
    .catch(err => console.log(err))
    })
  }
  return (
    <AgentProfileLayout>
      <section>
        <h1 className="text-xl text-pur md:text-2xl font-bold ">Add Product</h1>
        <form onSubmit={(e)=>handleAdd(e)}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="grid mt-8">
                <label htmlFor="productName" className="font-poppins">
                  Product Name
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  name="ProductName"
                  id="productName"
                  className="add-product-input"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="grid mt-8">
                <label htmlFor="category" className="font-poppins">
                  Category
                </label>
                <select
                  placeholder="-- Select category --"
                  name="category"
                  id="category"
                  className="add-product-input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {cat.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid mt-8">
                <label htmlFor="price" className="font-poppins">
                  Price
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="price in naira"
                    name="price"
                    id="price"
                    className="px-14 py-2 w-full rounded-xl bg-pur-50 outline-0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <span className="absolute bg-pur text-white pt-2 px-4 rounded-tl-xl rounded-bl-xl left-0 bottom-0 top-0 bg-">
                    ₦
                  </span>
                </div>
              </div>
              <div className="grid mt-8">
                <label htmlFor="location" className="font-poppins">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Full address"
                  id="location"
                  className="add-product-input"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="grid mt-8">
                <label htmlFor="tags" className="font-poppins">
                  Tags
                </label>
                <input
                  onKeyDown={addTags}
                  onChange={(e) => setTagValue(e.target.value)}
                  value={tagvalue}
                  type="text"
                  name="tags"
                  placeholder="Tags"
                  id="tags"
                  className="add-product-input"
                />
                {tags.length !== 0 && (
                  <div className="flex flex-wrap gap-3 p-4 pb-10 border mt-3">
                    {tags.map((item) => {
                      const { id, value } = item;
                      return (
                        <span
                          key={id}
                          className="px-6 relative py-1.5 border text-pur font-medium bg-pur-200 rounded-xl"
                        >
                          {value}
                          <span
                            className="absolute top-2 cursor-pointer right-1"
                            onClick={() => removeTag(id)}
                          >
                            <FaTimes size={12} />
                          </span>
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div>
              <FileUpload SelectImage={SelectImage} />
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-pur w-1/2 font-medium text-white py-2 px-10 rounded-lg">
              Add
            </button>
          </div>
        </form>
      </section>
    </AgentProfileLayout>
  );
};

export default AddProduct;
