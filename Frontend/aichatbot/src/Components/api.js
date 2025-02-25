import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const fetchapidata = async (userData) => {
    const { data} = await axios.post("", userData);
    return data.fitnessplan;
};

 