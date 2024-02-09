import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [otp, setOtp] = useState("");

  useEffect(() => {
    console.log("inside use effect");
    if ("OTPCredential" in window) {
      // const ac = new AbortController();
      console.log("below ac otp credentials");
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          // signal: ac.signal,
        })
        .then((otp) => {
          console.log("Reached here!! PRinting OTP");
          console.log(otp);
          setOtp(otp.code);
          // ac.abort();
        })
        .catch((err) => {
          console.log("Reached error block Printing error");
          console.log(err);
          // ac.abort();
        });
      console.log("credentials path ");
    } else {
      console.log("otp credentials not available");
    }
  }, []);

  return (
    <div className="App">
      <h1>Hello TaxiWars!</h1>
      <h2>Your OTP is: {otp}</h2>
    </div>
  );
};

export default App;
