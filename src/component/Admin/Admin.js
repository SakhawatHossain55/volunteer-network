import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import "./Admin.css";

const Admin = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    const eventData = {
      name: data.event,
      date:  data.date,
      description: data.description,
      imageURL: imageURL,
    };
    const url = `http://localhost:5000/addEvent`;
    console.log(eventData);
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side responce"));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "370f91189504233345b7baf2e0029a63");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Header />
      <form className="admin-style container" onSubmit={handleSubmit(onSubmit)}>
        <h5>Event Title</h5>
        <input className="form-control" name="event" placeholder="Enter title" ref={register} />
        <br />
        <h5>New Date</h5>
        <input className="form-control" type="date" name="date" id="" ref={register}/>
        <br />

        <h5>Description</h5>
        <textarea className="form-control" name="description" placeholder="Enter Designation" cols="30" rows="5" ref={register}></textarea>

        <br />
        <h5>Banner</h5>
        <input className="form-control" type="file" name="exampleRequired" onChange={handleImageUpload} />
        <br />
        <input className="form-control" type="submit" />
      </form>
    </div>
  );
};

export default Admin;
