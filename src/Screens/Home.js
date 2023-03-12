import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTheme } from "switch-mode";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Home = () => {
  const [touched, setTouched] = useState(false);
  const { theme } = useTheme();
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    password: "",
    confirmpassword: "",
  });

  const { firstname, lastname, email, position, password, confirmpassword } =
    state;

  //Function for controlled input components
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !confirmpassword
    ) {
      toast.warning("All fields are required", {
        theme: "colored",
      });
      return;
    }
      setTouched(true);

      setTimeout(() => {
        setState({
          firstname: "",
          lastname: "",
          email: "",
          position: "",
          password: "",
          confirmpassword: "",
        });
        setTouched(false);
        toast.success(
          `Successfully registered ${firstname} ${lastname}! Proceed to start creating tasks`
        );

        console.log("submitted");
      }, 5000);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "40%", marginLeft: "30px", marginTop:'20px' }}>
        <h1
          style={{ fontSize: "30px", paddingTop: "20px", textAlign: "center" }}
        >
          Create tasks and assign them <br />
          to your team easily!
        </h1>
        <p
          style={{
            marginLeft: "",
            textAlign: "center",
            fontSize: "18px",
            color: theme === "light" ? "silver" : "#080910",
          }}
        >
          Get started to record increased work productivity with Taskman.
        </p>
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_h4th9ofg.json"
          style={{ height: "150px", width: "150px" }}
        ></Player>
      </div>

      <div
        style={{
          margin: "30px",
          width: "35%",
          backgroundColor:
            theme === "light" ? "rgba(255, 255, 255, 0.02)" : "#080910",
          padding: "40px",
          borderRadius: "8px",
          color: "white",
        }}
      >
        <form>
          <label htmlFor="firstname">First Name:</label>{" "}
          <input
            style={{
              padding: "8px 5px",
              width: "78.8%",
              borderRadius: "8px",
              outline: "none",
              border: "none",
            }}
            type="text"
            id="firstname"
            value={firstname}
            name="firstname"
            onChange={handleChange}
            placeholder="Enter first name"
          />
          <br />
          <br />
          <label htmlFor="lastname">Last Name:</label>{" "}
          <input
            style={{
              padding: "8px 5px",
              width: "78.8%",
              borderRadius: "8px",
              outline: "none",
              border: "none",
            }}
            type="text"
            id="lastname"
            value={lastname}
            name="lastname"
            onChange={handleChange}
            placeholder="Enter last name"
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>{" "}
          <input
            style={{
              padding: "8px 5px",
              width: "86.8%",
              borderRadius: "8px",
              outline: "none",
              border: "none",
            }}
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
          />
          <br />
          <br />
          <label htmlFor="position">Position:</label>{" "}
          <input
            type="radio"
            id="position"
            value={position}
            name="position"
            onChange={handleChange}
            checked={true}
          />
          Manager{" "}
          <input
            type="radio"
            value={position}
            name="position"
            onChange={handleChange}
          />
          CEO{" "}
          <input
            type="radio"
            value={position}
            name="position"
            onChange={handleChange}
          />
          President <br />
          <br />
          <label htmlFor="password">Password:</label>{" "}
          <input
            style={{
              padding: "8px 5px",
              width: "80.8%",
              borderRadius: "8px",
              outline: "none",
              border: "none",
            }}
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <br />
          <br />
          <label htmlFor="confirmpassword">Confirm Password:</label>{" "}
          <input
            style={{
              padding: "8px 5px",
              width: "68%",
              borderRadius: "8px",
              outline: "none",
              border: "none",
            }}
            type="password"
            id="confirmpassword"
            value={confirmpassword}
            name="confirmpassword"
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          <br />
          <br />
          {touched ? (
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_gbfwtkzw.json"
              style={{ height: "150px", width: "150px" }}
            ></Player>
          ) : (
            <button onClick={handleSubmit}
              type="submit"
              style={{
                backgroundColor: "#0d99e8",
                marginLeft: "43%",
                marginTop: "20px",
                padding: "8px 20px",
                outline: "none",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              Sign up
            </button>
          )}
          <p style={{color: 'silver', textAlign: 'center'}}>Have an account? <Link to='/login'style={{color: '#de7ebc'}}>Log In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Home;
