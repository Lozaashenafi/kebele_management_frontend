import React from "react";

function BirthCertificate() {
  return (
    <>
      <section className="flex">
        <div className="w-2/4 h-96 bg-slate-100 justify-center mx-auto mt-10 pb-7 border-4">
          <div className="h-36  relative">
            <div className="w-32 border-2 rounded-sm h-32 absolute top-6 left-6 "></div>
            <div>
              <div className="h-12 w-20 border rounded-sm absolute left-80 top-7 ">
                <div className="h-4 bg-lime-600"></div>
                <div className="h-4 bg-yellow-300"></div>
                <div className="h-4 bg-red-700"></div>
              </div>
              <p className="text-black text-base absolute left-44 top-24 border-b-2 ">
                በ ኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የወሳኝ ኩነት ምዝገባ
              </p>
              <p className="text-black text-base absolute left-72 top-32 border-b-2 ">
                የ ልደት ምስክር ወረቀት
              </p>
            </div>
          </div>
          <div className=" h-56 flex flex-row mt-6 ml-6">
            <div className="flex-grow  ">
              <label className="text-black">ስም :</label>
              <span className="border-b-2 w-24 border-gray-950">Loza</span>
              <br />
              <label className="text-black">የ አባት ስም :</label>
              <span className="border-b-2 w-40 border-gray-950">
                Ashenafi wudneh
              </span>
              <br />
              <label className="text-black">የ አያት ስም :</label>
              <span className="border-b-2 w-24 h-2 border-gray-950">
                Wudneh
              </span>
              <br />
              <label className="text-black">ፆታ :</label>
              <span className="border-b-2 w-24 border-gray-950">ሴት</span>
              <br />
              <label className="text-black">የ ትውልድ ቦታ :</label>
              <span className="border-b-2 w-40 border-gray-950">
                shashemene
              </span>
              <br />
              <label className="text-black">የ ክብር መዝገብ ሹም ሙሉ ስም :</label>
              <span className="border-b-2 w-64 border-gray-950"></span>
            </div>
            <div className="flex-grow mt-4 ">
              <label className="text-black">የ እናት ሙሉ ስም :</label>
              <span className="border-b-2 w-48 border-gray-950">
                Konjit Daniel
              </span>
              <br />
              <label className="text-black">ልደቱ የተመዘገበበት ወር :</label>
              <span className="border-b-2 w-40 border-gray-950">
                02/09/1990
              </span>
              <br />
              <label className="text-black">የትውልድ ወር :</label>
              <span className="border-b-2 w-24 border-gray-950">02</span>
              <label className="text-black ml-3">ቀን :</label>
              <span className="border-b-2 w-24 border-gray-950">11</span>
              <label className="text-black ml-3">ዓ.ም :</label>
              <span className="border-b-2 w-24 border-gray-950">1995</span>
              <br />
              <label className="text-black">ፊርማ :</label>
              <span className="border-b-2 w-64 border-gray-950"></span>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BirthCertificate;
