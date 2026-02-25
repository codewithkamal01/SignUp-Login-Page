import { useState } from "react";
import { useForm } from "react-hook-form";
import emailpng from "../assets/email.png";
import passwordpng from "../assets/password.png";
import personpng from "../assets/person.png";
import InputField from "./inputField";

function LoginSignup() {
  const [action, setAction] = useState("Sign up");
  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    setStatus("submitting");
    console.log("Form data:", data);
    setTimeout(() => {
      setStatus("success");
      reset();
  
      setTimeout(() => setStatus("idle"), 2500);
    }, 1200);
  };

  const handleActionChange = (newAction) => {
    setAction(newAction);
    reset();
    setStatus("idle");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-tr from-[#4e00b3] to-[#8000ff]">
      <form
        key={action}
        onSubmit={handleSubmit(handleFormSubmit)}
        className="login-signup-container bg-white p-6 rounded-xl shadow-2xl w-82 max-w-md flex flex-col transition-transform duration-300 ease-in-out hover:scale-[1.02]"
      >
     
        {status === "success" && (
          <p
            className="text-green-600 bg-green-100 rounded-md py-1 text-center mb-3 animate-fade-in"
            role="alert"
          >
            🎉 {action} successful!
          </p>
        )}

        <div className="mb-5">
          <h2 className="text-center text-4xl font-semibold text-[#3c009d] mb-2">
            {action}
          </h2>
          <div className="h-1 w-16 bg-[#3c009d] mx-auto rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col gap-6 mb-3">
          {action !== "Login" && (
            <InputField
              icon={personpng}
              type="text"
              placeholder="Username"
              required={true}
              register={register}
              name="username"
              error={errors.username}
            />
          )}
          <InputField
            icon={emailpng}
            type="email"
            placeholder="Email"
            register={register}
            name="email"
            required={true}
            error={errors.email}
          />
          <InputField
            icon={passwordpng}
            type="password"
            placeholder="Password"
            register={register}
            name="password"
            required={true}
            error={errors.password}
          />
        </div>
        <div>
          {errors.username && (
            <p className="text-red-500 text-sm" role="alert">
              Username required
            </p>
          )}
          {errors.email && (
            <p className="text-red-500 text-sm" role="alert">
              Email id required
            </p>
          )}
          {errors.password && (
            <p className="text-red-500 text-sm" role="alert">
              Password required
            </p>
          )}
          {action !== "Sign up" && (
            <div className="text-[#797979] text-sm">
              Forgot Password?{" "}
              <span
                onClick={() =>
                  alert("Password reset link will be sent to your email")
                }
                className="text-[#4c00b4] cursor-pointer"
              >
                Click here
              </span>
            </div>
          )}

          {/*primary button for submission*/}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`bg-[#4c00b4] text-white font-semibold p-2 rounded-full text-sm w-32 transition-transform duration-150
                ${status === "submitting" ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
            >
              {status === "submitting" ? "Please wait..." : action}
            </button>
          </div>
        
          <div className="text-center mt-4 text-sm text-[#4c00b4] cursor-pointer">
            {action === "Sign up" ? (
              <span onClick={() => handleActionChange("Login")}>
                Already have an account? Login
              </span>
            ) : (
              <span onClick={() => handleActionChange("Sign up")}>
                Don't have an account? Sign up
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
export default LoginSignup;
