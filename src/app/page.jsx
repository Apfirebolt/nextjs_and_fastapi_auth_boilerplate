"use client";

import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <main className="min-h-screen flex flex-col">
        <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white">
          <h1 className="mt-32 text-4xl md:text-5xl font-extrabold text-center">
            Welcome to Next JS and FastAPI Auth Boilerplate
          </h1>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
