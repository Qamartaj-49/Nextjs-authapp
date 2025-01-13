"use client";
import React, { useState } from "react";
import { axios } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-center text-white text-3xl py-8">Signup page</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="username"
          value={user.username}
          type="text"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        
        <label htmlFor="email">EmailId </label>

        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="email"
          value={user.email}
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        
        <label htmlFor="password">password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="password"
          value={user.password}
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <div>
        <button onClick={onSignup}
         type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up here</button> <br/>
         <Link href="/login">Visit Login page </Link>
      </div>
      </div>
    </>
  );
}
