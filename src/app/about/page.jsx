import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import React, { Fragment } from "react";
import axios from "axios";

export const metadata = {
  title: "About Us Page",
  description: "Learn more about Animix.",
};

// This line runs securely on the server
const session = await getServerSession(authOptions);

console.log("About Page Session:", !session, session);

// Make an API call to http://localhost:5000/api/logs
try {
  const response = await axios.get("http://localhost:5000/api/logs");
  console.log("Logs from Express API:", response.data);
} catch (error) {
  console.error("Error fetching logs from Express API:", error);
}

const AboutPage = () => {
  if (!session) {
    // Handle unauthenticated state (e.g., redirect the user)
    return <p>Access Denied. Please sign in.</p>;
  }

  return (
    <Fragment>
      <main
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://4kwallpapers.com/images/walls/thumbs_3t/13988.jpg')",
        }}
      >
        <section className="text-center text-white bg-primary bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-6xl font-bold mb-4">Welcome to Animix</h1>
          <p className="text-2xl">
            Discover your favorite anime characters and explore the world of
            anime like never before.
          </p>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutPage;