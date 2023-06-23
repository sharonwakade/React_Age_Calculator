import "./Calculate.css";
import { useState } from "react";
import { NavLink} from "react-router-dom";

const Calculate = () => {
    const changeToDate = (e) => {
      e.target.type = "date";
    };
  
    const changeToText = (e) => {
      e.target.type = "text";
    };
  
    const [dateVal, setDateVal] = useState(new Date());
    const [showDiv, setShowDiv] = useState(true);
  
    const[ageYear,setAgeYear] = useState();
    const[ageMonth,setAgeMonth] = useState();
    const[ageDays,setAgeYDays] = useState();
  
  
    const calAge = (e) => {
      e.preventDefault();
      setShowDiv(!showDiv);
  
      const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
      const isLeapYear = (year) => {
        if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
          months[1] = 29;
        } else {
          months[1] = 28;
        }
      };
  
      let birthDetails = {
        date: new Date(dateVal).getDate(),
        month: new Date(dateVal).getMonth() + 1,
        year: new Date(dateVal).getFullYear(),
      };
  
      const today = new Date();
      const tday = today.getDate();
      const tmonth = today.getMonth() + 1;
      const tyear = today.getFullYear();
  
      isLeapYear(tyear);
  
      if (
        birthDetails.year > tyear ||
        (birthDetails.month > tmonth && birthDetails.year === tyear) ||
        (birthDetails.date > tday &&
          birthDetails.month === tmonth &&
          birthDetails.year === tyear)
      ) {
        alert("----- NO BORN YET ------\n\nKindly Check date you Entered!");
      } else {
        birthDetails.year = tyear - birthDetails.year;
  
        if (tmonth >= birthDetails.month) {
          birthDetails.month = tmonth - birthDetails.month;
        } else {
          birthDetails.year--;
          birthDetails.month = 12 + tmonth - birthDetails.month;
        }
  
        if (tday >= birthDetails.date) {
          birthDetails.date = tday - birthDetails.date;
        } else {
          birthDetails.month--;
          let days = months[tmonth - 2];
          birthDetails.date = days + tday - birthDetails.date;
          if (birthDetails.month < 0) {
            birthDetails.month = 11;
            birthDetails.year--;
          }
        }
      }
      setAgeYear(birthDetails.year);
      setAgeMonth(birthDetails.month);
      setAgeYDays(birthDetails.date);
    };
  
    return (
      <>
        <div className="context" style={{ top: "50vh" }}>
          <div className="login-box">
            <section className={showDiv ? "dBlock" : "dNone"}>
              <h2>Age Calculator</h2>
              <form onSubmit={(e) => calAge(e)}>
                <div className="user-box">
                  <input
                    type="text"
                    onFocus={(e) => changeToDate(e)}
                    onBlur={(e) => changeToText(e)}
                    onChange={(e) => setDateVal(e.target.value)}
                    required
                  />
                  <label>Your Birth Date</label>
                </div>
                <button type="submit" className="button">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>Submit
                </button>
              </form>
            </section>
  
            <section className={showDiv ? "dFlex dNone " : " dFlex dBlock"}>
              <h3> You are </h3>
  
              <div>
                <h1>{ageYear}</h1>
              </div>
              <h3>Years</h3>
  
              <div>
                <h1>{ageMonth}</h1>
              </div>
              <h3>Months</h3>
  
              <div>
                <h1>{ageDays}</h1>
              </div>
              <h3>Days old</h3>
  
              <div style={{ width: "100%", marginTop: "20px" }}>
                <NavLink exact to="/">
                  <button className="button-82-pushable">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">Go Back</span>
                  </button>
                </NavLink>
              </div>
            </section>
          </div>
        </div>
  
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </>
    );
  };
  






export default Calculate;
