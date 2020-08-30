import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function NavBar(prop) {

        const [startDate, setStartDate] = useState(prop.date);
        const ExampleCustomInput = ({ value, onClick }) => (
          <button className="example-custom-input" onClick={onClick}>
            {value}
          </button>
        );
        return (

        <div className="navBar">
            <div className="title">
              <input 
                type="date"
                onChange={ evt => {
                  prop.setDate(evt.target.value)
                  setStartDate(evt.target.value)
                }}
                value={ startDate }
              ></input>
              <div>NASA</div>
            </div>
        </div>
        );
};

export default NavBar;