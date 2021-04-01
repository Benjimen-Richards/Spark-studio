import React, { useEffect, useState } from "react";
import "./App.css";
import Dateinput from "./Date";
import axios from "axios";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=icWCoW3B2cwotDl1d7ySJ4IYWrOzmHwypovxyhyL&date=";
const App = () => {
  const [searchbydate, setsearchbydate] = useState(new Date());
  const [fetchdata, setfetchdata] = useState("");
  useEffect(
    () => async () => {
      const { data } = await axios.get(`${url}${searchbydate}`);
      setfetchdata(data);
    },
    [searchbydate]
  );
  // console.log("fetchdata", fetchdata);
  // console.log("fetchdata", searchbydate);
  const renderdata = (data) => {
    if (data) {
      return (
        <div className="result">
          <div>
            <p>{data.title}</p>

            <img src={data.url} alt="/" />
          </div>
          <div>
            <span>{data.explanation}</span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="Container">
      <div className="innercontainer">
        <div className="Heading">
          <span>NASA APOD </span>
        </div>
        <div className="Image_container">
          <div className="Inputfield">
            <Dateinput datefrominput={(date) => setsearchbydate(date)} />
          </div>
          <div>{renderdata(fetchdata)}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
