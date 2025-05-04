import { useState, useEffect } from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import FetchlinkedProducts from "./App/FetchlinkedProducts";

function App() {
  // const [count, setCount] = useState(0)
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/hello", {
          headers: {
            Accept: "application/json",
          },
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Server error: ${response.status} - ${errorText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType?.includes("application/json")) {
          const text = await response.text();
          console.error("Received non-JSON:", text);
          throw new Error(`Expected JSON but got ${contentType}`);
        }

        const data = await response.json();
        if (!data) {
          throw new Error("Received empty response");
        }

        setMessage(data.message);
      } catch (error) {
        console.error("Full error:", {
          message: error.message,
          stack: error.stack,
        });
        setMessage(`Error: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <main className="sm:m-12 lg-m-[4.5rem] !mt-[155px] sm:!mt-[190px] font-serif loading-lazy">
        <p className="font-bold font-serif text-2xl">{message}</p>
        <div className="container text-2xl font-serif m-auto px-15 text-black ">
          <h2>MATTRESS | BEDDING | APARTMENT | SOFAS</h2>
          <p className="font-mono mb-5">
            That fit all styles, relaxations, comfortness , availability and
            majoring
          </p>
          <span className="font-extralight text-xl">
            At <strong className="text-red-300">Cloudsale</strong> , we offer a
            wide range of mattress for the whole family or completing an
            apartment in variety of sizes and firmness levels. Our bedding sets
            include bedsheets , duvet covers , pillowcases and bedspreads,
            everything you need for acomplete stylishing an apartment and
            stylishing bedding ...
          </span>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="text-sm font-semibold leading-6 text-red-500 border border-red-500   p-2 rounded"
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="p-10">
          <FetchlinkedProducts number={8} />
        </div>
        <MobileMethod />
        <DualFrash />
        <ContactReview />
      </main>
      <Footer />
    </>
  );
}

function MobileMethod(props) {
  return (
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mb-10">
      <div className="space-y-6 md:space-y-0 lg:flex md:gap-6 lg:item-center lg:gap-12">
        <div className="w-full lg:w-[50%] mb-6">
          <img
            src="/tod.png"
            className="mx-auto"
            alt="image"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:w-[50%] lg:mt-[200px]">
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-300"
                >
                  <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z" />
                  <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z" />
                  <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z" />
                </svg>
                New Mattresses
              </dt>
              <dd className="inline ml-2">
                Choose from our wide range of high-quality mattresses from
                popular brands like Royal Foam, Latex Foam, Ashfoam, and other
                foreign brands.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clipRule="evenodd"
                  />
                </svg>
                Restoration Services
              </dt>
              <dd className="inline ml-2">
                Give your old mattress a new life with our professional
                restoration services, ensuring comfort and durability.
              </dd>
            </div>
          </dl>
          <div className="flex flex-col sm:flex-col gap-2 lg:my-6">
            <button className="bg-[#e41b35] p-2 rounded w-[200px] text-white font-extralight text-2">
              ACCRA-024 335 2683
            </button>
            <button className="bg-[#e41b35] p-2 rounded w-[300px] text-white font-thin text-2">
              KUMASI-024 151 2738/ 024 469 3264
            </button>
            <span>~Ashfoam Management</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DualFrash(props) {
  return (
    <div className="container m-auto text-gray-600 md:px-12 xl:px-6 bg-white  rounded  ">
      <div className="space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="w-full lg:w-[50%] mb-6 grid place-items-center shadow p-4">
          <span className="font-serif">"....very comfortable and durable"</span>
          <h2 className="text-6xl">''</h2>
          <span className="grid place-items-center p-10 font-serif">
            I bought a queen sized bed fro Ashfoam, i've been using it for
            5years and it's still strong and very comfortable. i encourage every
            who wants to live comfortably in their home to visit Ashfoam for
            their package because it's very comfortable and durable.
          </span>

          <img
            src="/helpdesk2.jpg"
            alt="picture of the writer"
            className="rounded-full h-[100px] mb-5"
          />

          <span className="grid place-items-center font-serif">
            Rita Antwiwaa - Allianz insurance company
          </span>
        </div>

        <div className="w-full lg:w-[50%] mb-6 grid place-items-center shadow p-4">
          <span className="font-serif">
            "....Comfort was never compromised"
          </span>
          <h2 className="text-6xl">''</h2>
          <span className="grid place-items-center p-10 font-serif">
            With an extremely affordable prices of ASHFOAM sofas, I was very
            skeptical aboutits quality until i purchased it . I must say it's
            great and thinking about comfort , it was never compromised.i will
            sincerely recommended ASHFOAM products to everyone.
          </span>

          <img
            src="./Arrival/download (3).jpeg"
            alt="picture of the writer"
            className="rounded-full h-[100px] mb-5"
          />

          <span className="grid place-items-center font-serif">
            Hayford Atim - IT Consultant
          </span>
        </div>
      </div>
    </div>
  );
}

function ContactReview(props) {
  return (
    <div className="container  h-[600px] mx-auto p-4 text-gray-600 md:px-12 xl:px-6 rounded">
      <div className="space-y-6 md:space-y-0  md:gap-6 lg:items-center lg:gap-2 flex justify-center">
        <div className="w-full lg:w-[80%] mb-2 grid place-items-center list-none">
          <span className="text-gray-600 text-2xl font-mono mt-5">
            General Enquires regarding Online Sales
          </span>
          <span className="mb-10">059 380 0811</span>
          <div className="bg-gray-200 block sm:mb-2  lg:flex flex-row list:none gap-2 h-[300px]  pl-20 pt-10  pr-20 rounded">
            <div className="container bg-white shadow-white rounded  flex justify-between h-35 gap-2  mb-2 ">
              <img src="./sale1.jpeg" alt="" className="h-15 " />
              <li className="pt-10 font-bold">
                Free NationWide Delivery For Orders Above GHC200
              </li>
            </div>
            <div className="container bg-white shadow-white rounded  flex justify-between h-15 gap-2 p-2 mb-2">
              <img src="./tod.png" alt="" />
              <li className="font-bold">5-20 Working Days Delivery</li>
            </div>
            <div className="container flex justify-center shadow-white rounded gap-2 h-15 bg-white  p-2 ">
              <img src="./sales.png" alt="" />
              <li className="font-bold">Regular Discount</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
