import React from "react";
import { useState, useEffect } from "react";
import { getFitnessPlan } from "../utils/api";

const Chatbot = () => {
  const [Userinput, setUserinput] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    goal: "",
    activitylevel: "",
  });

  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setUserinput({ ...Userinput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getFitnessPlan(Userinput);
    setResponse(result);
    console.log("responsedata--------------", response);
  };
  return <div></div>;
};

export default Chatbot;
