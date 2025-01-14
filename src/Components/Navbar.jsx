import React from "react";
import { BurgerSwipe } from "react-burger-icons";

import { useState } from "react";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <>
      <div className="bg-gray-950 w-full h-20 flex justify-between items-center text-gray-50 px-10">
        <img
          src="https://jsm-brainwave.com/assets/brainwave-DM3_Zh2I.svg"
          alt="Logo"
          className="h-[40%] relative"
        />

        <button
          onClick={() => setIsClosed(!isClosed)}
          style={{
            width: "50px",
            height: "50px",
            display: "grid",
            placeItems: "center",
          }}
          className="absolute z-50 right-[10%]"
        >
          <BurgerSwipe isClosed={isClosed} />
        </button>
      </div>
      <div
        className={`h-[91vh] w-full bg-gray-950 ${
          isClosed == false ? `hidden ` : `flex `
        }  top-0  z-40  overflow-hidden flex-col justify-center items-center gap-10`}
      >
        <h1 className="text-gray-50 text-3xl">Feature</h1>
        <h1 className="text-gray-50 text-3xl">Pricing</h1>
        <h1 className="text-gray-50 text-3xl">How to use?</h1>
        <h1 className="text-gray-50 text-3xl">Road map</h1>
        <h1 className="text-gray-50 text-3xl">New account</h1>
        <h1 className="text-gray-50 text-3xl">Sign in</h1>
      </div>
    </>
  );
};

export default Navbar;
