import { Link } from "react-router-dom";
import image2 from "../assets/images/signup.png";
import { useState } from "react";

function Sign() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password,
      createdAt: new Date().toISOString(),
    };

    // log to console
    console.log("Sign-up form submitted:", payload);

    // save to localStorage (latest and history)
    try {
      localStorage.setItem("clozzet_signup", JSON.stringify(payload));

      const raw = localStorage.getItem("clozzet_signups");
      const signups = raw ? JSON.parse(raw) : [];
      signups.push(payload);
      localStorage.setItem("clozzet_signups", JSON.stringify(signups));
    } catch (err) {
      console.error("Failed to save sign-up to localStorage:", err);
    }

    // clear only password fields
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex object-cover">
      <div className="ml-20 flex-col">
        <div className="text-4xl font-bold mt-8 pl-8 pb-4 ml-20">
          <p>Create An Account</p>
        </div>

        <form onSubmit={handleSubmit} className="mr-6">
          <div className="flex gap-4">
            <div className="container flex items-center rounded-full border-2 mt-6 h-20 w-80">
              <div className="ml-6"></div>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
                type="text"
                placeholder="First Name"
                required
              />
            </div>

            <div className="container flex items-center rounded-full border-2 mt-6 h-20 w-80">
              <div className="ml-6"></div>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="container flex items-center rounded-full border-2 mt-6 h-24 w-170">
            <div className="ml-6"></div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="container flex items-center rounded-full border-2 mt-12 h-24 w-170">
            <div className="ml-6"></div>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
              type="tel"
              placeholder="Phone Number"
            />
          </div>

          <div className="container flex items-center rounded-full border-2 mt-12 h-24 w-170">
            <div className="ml-6"></div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="container flex items-center rounded-full border-2 mt-12 h-24 w-170">
            <div className="ml-6"></div>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center rounded-full border-2 mt-12 h-24 w-170 bg-green-700 text-white text-2xl font-bold"
          >
            Create Account
          </button>
        </form>

        <hr className="mt-6" />
        <button
          type="button"
          className="flex items-center justify-center rounded-full border-2 mt-12 h-24 w-170  text-blue-500 text-2xl font-bold"
          onClick={() =>
            console.log("Sign up with Google clicked (not implemented)")
          }
        >
          Sign Up With Google
        </button>

        <div className="flex mt-8 ml-6 text-2xl gap-4 ">
          <p>Already Have An Account?</p>
          <Link to="/login" className="text-green-400">
            Log In
          </Link>
        </div>
      </div>

      <img src={image2} alt="sign " className="w-270 h-278 ml-4 object-cover" />
    </div>
  );
}

export default Sign;
