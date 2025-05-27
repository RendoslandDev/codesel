import React from "react";
import NavBar from "../../Components/NavBar";
import Contact from "./Contact";
import Footer from "../../Components/Footer";

export default function page() {
  return (
    <>
      <NavBar />
      <main className="mt-[110px]">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
