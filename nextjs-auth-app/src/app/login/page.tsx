"use client";
import React, { useEffect, useState } from "react";
import  axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { s } from "framer-motion/client";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);


  const onLogin = async () => {
     try {
       setLoading(true);
       const response = await axios.post("/api/users/login", user);
       console.log("Login success", response.data);
       toast.success("Login successful");
       router.push("/profile");
     } catch (error:any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
     }finally {
      setLoading(false);
     }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-center text-white text-3xl py-8">Login page</h1>
        <hr />
        
        
        <label htmlFor="email">Emailid </label>

        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="email"
          value={user.email}
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        
        <label htmlFor="password">password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-black"
          id="password"
          value={user.password}
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <div>
        <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button><br/>
 
         <Link href="/signup">Visit Signup page </Link>
      </div>
      </div>
    </>
  );
}
