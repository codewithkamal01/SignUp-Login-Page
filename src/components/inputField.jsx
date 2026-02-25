import { useState } from "react";

function InputField({
  icon,
  type = "",
  placeholder = "",
  required = false,
  register,
  name,
  error,
}) {
  const [visible, setVisible] = useState(false);

  const inputType =
    type === "password" ? (visible ? "text" : "password") : type;

  return (
    <div
      className={`flex gap-3 items-center bg-[#eaeaea] rounded-md w-full h-10 p-3 transition-colors duration-150
        ${error ? "border border-red-500 bg-[#ffecec]" : "focus-within:bg-white"}`}
    >
      {icon && <img src={icon} alt="" />}
      <input
        className="bg-transparent outline-none w-full placeholder-gray-500"
        type={inputType}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        {...(register && name ? register(name, { required }) : {})}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="text-xs text-[#4c00b4] hover:underline"
        >
          {visible ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
}
export default InputField;
