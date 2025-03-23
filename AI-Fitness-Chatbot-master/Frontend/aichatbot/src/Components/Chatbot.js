import { useState } from "react";
import { getFitnessPlan, getDietPlan } from "../utils/api";
import ResponseModal from "./ResponseModal";
import Loader from "./Loader";
import Pattern from "./Pattern";
import Button from "./Button";
import CustomToast from "../Toaster/CustomToast";


const Chatbot = () => {
  const [Userinput, setUserinput] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    goal: "",
    activitylevel: "",
    diettype: "",
  });

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModelopen, setisModelopen] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setUserinput({ ...Userinput, [e.target.name]: e.target.value });
  };

  const fetchPlan = async (type) => {
    const isValid = Object.values(Userinput).every(value => value.trim() !== "");

    if (!isValid) {
      setToast({ message: "Please fill in all fields before generating a plan!", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const result =
        type === "fitness"
          ? await getFitnessPlan(Userinput)
          : await getDietPlan(Userinput);

      setResponse(result);
      setisModelopen(true);
      setToast({ message: `${type.charAt(0).toUpperCase() + type.slice(1)} Plan Generated Successfully!`, type: "success" });
    } catch (error) {
      console.error(`Error fetching ${type} plan:`, error);
      setToast({ message: `Error fetching ${type} plan. Try again!`, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <Pattern />
      <div className="relative z-10 w-full max-w-2xl p-6 bg-white rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-red-700">Fit</span>Bro
          </h1>
          <p className="text-lg text-gray-600">Your Personalized Fitness Guide</p>
        </div>
        <div className="max-h-[400px] overflow-y-auto p-4">
          {loading ? (
            <Loader />
          ) : (
            <form className="space-y-6">
              {["name", "age", "height", "weight"].map((field) => (
                <div key={field} className="flex flex-col space-y-2">
                  <label htmlFor={field} className="text-gray-700 capitalize">
                    {field}
                  </label>
                  <input
                    type={["age", "height", "weight"].includes(field) ? "number" : "text"}
                    name={field}
                    placeholder={`Enter your ${field}`}
                    onChange={handleChange}
                    value={Userinput[field] || ""}
                    className="p-3 rounded-lg border border-gray-300"
                    required
                  />
                </div>
              ))}

              {[
                { name: "goal", options: ["Fat Loss", "Muscle Gain"] },
                { name: "activitylevel", options: ["Sedentary", "Active"] },
                { name: "diettype", options: ["Vegetarian", "Non-Vegetarian"] }
              ].map(({ name, options }) => (
                <div key={name} className="flex flex-col space-y-2">
                  <label htmlFor={name} className="text-gray-700 capitalize">
                    {name.replace(/([A-Z])/g, " $1")}
                  </label>
                  <select 
                    name={name} 
                    onChange={handleChange} 
                    value={Userinput[name] || ""} 
                    className="p-3 rounded-lg border border-gray-300"
                  >
                    <option value="">Select {name}</option>
                    {options.map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
                </div>
              ))}
            </form>
          )}
        </div>
        <div className="sticky bottom-0 left-0 right-0 pt-10 flex justify-between">
          <Button onClick={() => fetchPlan("fitness")} name={"Generate Fitness Plan"} />
          <Button onClick={() => fetchPlan("diet")} name={"Generate Diet Plan"} />
        </div>

        {/* Custom Toast Notification */}
        {toast.message && (
          <CustomToast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "" })} />
        )}

        {isModelopen && response && (
          <ResponseModal response={response} onClose={() => setisModelopen(false)} />
        )}
      </div>
    </div>
  );
};

export default Chatbot;
