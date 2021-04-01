import React, { useState } from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Button } from "@material-ui/core";
const Dateinput = (props) => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const submithandler = () => {
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const inputdate = [year, month, day].join("-");
    props.datefrominput(inputdate);
    // console.log(inputdate);
  };
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          clearable
          value={selectedDate}
          placeholder={selectedDate}
          onChange={(date) => handleDateChange(date)}
          format="MM/dd/yyyy"
        />
      </MuiPickersUtilsProvider>
      <Button
        onClick={submithandler}
        variant="contained"
        color="primary"
        style={{ marginLeft: "20px" }}
      >
        Search by date
      </Button>
    </div>
  );
};

export default Dateinput;
