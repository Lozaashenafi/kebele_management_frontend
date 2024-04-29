import React from "react";
import flage from "../../../public/resource/images/icons/ethiopia.png";
import html2canvas from "html2canvas";

const Id = ({ fullName, sex, gender, nationality, dateOfbirth }) => {
  const downloadCertificate = () => {
    const certificateElement = document.getElementById("id");

    html2canvas(certificateElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0); // Quality set to 1.0 (maximum quality)
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "id.jpeg";
      link.click();
    });
  };
  console.log(fullName, gender, nationality, dateOfbirth);
  return (
    <section className="flex justify-center p-5">
      <div className=" w-96 h-64 bg-emerald-300 rounded-md ">
        <div className="h-1/5 w-96 flex ">
          <div className="w-10 h-6 mt-1 ml-2 mr-2">
            <img src={flage} alt="flage" />
          </div>
          <span className="text-lg font-medium text-zinc-950 mt-2">
            Government of Ethiopia
          </span>
          <div className="ml-14 ">
            <p text-sm text-black font-sans className="">
              Personal
            </p>
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
            <span>loza</span>
            <br />
            <label htmlFor="">ID Number: </label>
            <span>2344</span>
            <br />
            <label htmlFor="">Sex: </label>
            <span>kk</span>
            <br />
            <label htmlFor="">Nationality: </label>
            <span>jhk</span>
            <br />
            <label htmlFor="">Date of Birth: </label>
            <span>khkh</span>
          </div>
        </div>
      </div>
      <button onClick={downloadCertificate}>Download PDF</button>
    </section>
  );
};

export default Id;
