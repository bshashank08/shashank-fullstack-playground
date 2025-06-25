"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

import Loading from "../../components/Loading/Loading";

export default function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-black text-3xl font-bold pt-20 mb-4 pb-20">
            Welcome {user.name}!
          </h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src={user.picture}
              alt="Profile"
              className="rounded-full border-black border-2"
              decode="async"
            />
            <h2 className="font-semibold text-black">{user.name}</h2>
            <p className="font-semibold text-black">{user.email}</p>
          </div>
        </div>
      )}
    </>
  );
}
