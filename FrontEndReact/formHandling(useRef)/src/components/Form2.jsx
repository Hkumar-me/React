import React, { useState } from "react";

function Form2() {
  let [data, setData] = useState({ name: "", email: "", password: "" });

  let handleForm2Submit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-full h-[100vh] bg-[#171717]">
        <h2 className="w-full p-2 text-center text-xl font-bold text-white">Form Handling using useState()</h2>
      <form
        action=""
        className="w-full h-[80vh] flex flex-col items-center justify-center gap-6"
        onSubmit={handleForm2Submit}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setData({ ...data, name: event.target.value })}
          className="p-3 w-[50%] "
        />
        <input
          onChange={(event) => setData({ ...data, email: event.target.value })}
          type="email"
          placeholder="Email"
          className="p-3 w-[50%] "
        />
        <input
          onChange={(event) =>
            setData({ ...data, password: event.target.value })
          }
          type="password"
          placeholder="Password"
          className="p-3 w-[50%] "
        />
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 p-3 text-white rounded-md"
        />
      </form>
    </div>
  );
}

export default Form2;
