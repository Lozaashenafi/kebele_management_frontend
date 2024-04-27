import React from "react";

function Id() {
  return (
    <section className="flex justify-center p-5">
      <div className=" w-96 h-64 bg-emerald-300 rounded-md ">
        <div className="h-1/5w-96 flex ">
          <div className="w-10 h-6 mt-2 ml-2 ">
            <div className="bg-green-600 w-7 h-2"></div>
            <div className="bg-yellow-400 w-7 h-2"></div>
            <div className="bg-red-700 w-7 h-2"></div>
          </div>
          <span className="text-lg font-medium text-zinc-950 mt-2">
            Government of Ethiopia
          </span>
          <div className="ml-14 ">
            <p className="ml-3 text-sm text-black font-sans ">Personal</p>
            <p className="text-black text-sm from-neutral-800 font-sans">
              Resident Card
            </p>
          </div>
        </div>
        <div className="h-4/5 text-3xl flex ">
          <div className="flex-initial w-32 ">
            <div className="w-28 h-28  mx-3 mt-2 border"></div>
            <p className="text-xl text-black mt-14 ml-3 ">Ethiopian</p>
          </div>
          <div className="flex-initial w-44  text-sm text-black mt-5 ml-4">
            <label htmlFor="">Name: </label>
            <span> Loza Ashenafi Wedneh</span>
            <br />
            <label htmlFor="">ID: </label>
            <span> 2367</span>
            <br />
            <label htmlFor="">Sex: </label>
            <span> F</span>
            <br />
            <label htmlFor="">Nationality: </label>
            <span>Ethiopian</span>
            <br />
            <label htmlFor="">Date of Birth: </label>
            <span>01/02/1997</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Id;
