"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
export default function Profile() {
  const { user } = useUser();

  return (
    <>
      {user && (
        <div className="flex flex-col items-center justify-center" data-testid="profile-root">
          <h1 className="text-black text-3xl font-bold pt-20 mb-4 pb-20 text-shadow-md" data-testid="profile-welcome">
            Welcome <span className="text-red-700" data-testid="profile-username">{user.name}</span>!
          </h1>
          <div className="flex flex-col items-center justify-center gap-11" data-testid="profile-details">
            <img
              src={user.picture}
              alt="Profile"
              className="rounded-full border-black border-2 shadow-xl"
              decode="async"
              data-testid="profile-picture"
            />
            <div>
              <h2 className="font-semibold text-black mb-3" data-testid="profile-firstname">
                <span className="text-red-700 font-bold">FIRST NAME : </span>
                {user.given_name}
              </h2>
              <h2 className="font-semibold text-black mb-3" data-testid="profile-lastname">
                <span className="text-red-700 font-bold">LAST NAME : </span>
                {user.family_name}
              </h2>
              <p className="font-semibold text-black" data-testid="profile-email">
                <span className="text-red-700 font-bold">EMAIL : </span>
                {user.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
