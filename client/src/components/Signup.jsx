import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

function SignUp(props) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate("");
  const [loading, setLoading] = useState(false);
  //const apiUrl = process.env.REACT_APP_BACKEND_URL ;

  // hendleChane part----------------------------------------
  const hendleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // onsubmit part------------------------------------------
  const hendleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    console.log("clickeeddd");
    if (
      !formData.email ||
      !formData.password ||
      !formData.username ||
      formData.username === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      window.alert("All field required");
      console.log(error);
      setLoading(false);
    } else {
      try {
        const res = await fetch(`http://localhost:3000/api/user/auth/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success === "false") {
          setLoading(false);
          window.alert(data.maessage);
        }
        if (res.ok) {
          setLoading(false);
          // dispatch(signInSuccess(data));
          navigate("/");
        }
      } catch (err) {
        setLoading(false);
        window.alert(err.message);
      }
    }
  };

  return (
    <div className="mt-10  min-h-screen md:mx-auto sm:px-7  flex justify-center flex-col md:flex-row   max-w-3xl ">
      <div className=" w-2/3 mx-auto border-2 h-76 py-10 px-5 rounded-lg bg-zinc-700 text-white">
        <form onSubmit={hendleSubmit}>
          <Label className="mt-5" value="Your Email" />
          <TextInput
            className="text-black"
            type="email"
            placeholder="your@gmail.com"
            id="email"
            onBlur={hendleChange}
          />
          <Label className="mt-5" value="Your username" />
          <TextInput
            className="text-black"
            type="text"
            placeholder="username"
            id="username"
            onBlur={hendleChange}
          />
          <Label className="mt-5" value="Your Password" />
          <TextInput
            className="text-black"
            type="password"
            placeholder="Password"
            id="password"
            onBlur={hendleChange}
          />
          <Button
            type="submit"
            className="mt-5 mb-  text-black w-full bg-gradient-to-r from-lime-400 to-green-500"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner className="text-sm m-4" /> <span>loading.....</span>
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
        <p className="text-sm mt-2">
          Allready have an account?
          <Link to="/">
            <span className="text-cyan-500 font-semibold">Sign In</span>
          </Link>
        </p>
        {error && (
          <Alert className="mt-5" color="failure">
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default SignUp;
