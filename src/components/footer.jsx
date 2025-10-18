import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 px-4">
      <div className="container mx-auto text-center mb-6 border-4 border-accent rounded-lg py-4 shadow-lg">
        <p className="text-2xl font-bold">
          &copy; {new Date().getFullYear()} Next JS and FastAPI Auth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
