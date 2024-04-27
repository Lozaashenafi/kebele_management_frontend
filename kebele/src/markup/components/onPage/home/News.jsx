import React from "react";
import news1 from "../../../../assets/Image/news1.jpg";
import news2 from "../../../../assets/Image/news2.jpg";
import news3 from "../../../../assets/Image/news3.jpg";

function News() {
  return (
    <>
      <section>
        <p className="text-xl font-serif ml-5 text-cyan-600 font-bold mt-8">
          In This Week
        </p>
        <div className="flex w-full mt-3 p-4 bg-sky-100">
          <div className="w-1/3  ml-5">
            <img className="h-64" src={news1} alt="" />
          </div>
          <div className="w-1/3">
            {" "}
            <img className="h-64" src={news2} alt="" />{" "}
          </div>
          <div className="w-1/3">
            {" "}
            <img className="h-64" src={news3} alt="" />{" "}
          </div>
        </div>
        <span className="ml-80 text-black border-b-2">
          በ መንቲና ቀበሌ ፅህፈት ቤት ቀስቃሽነት ማህበረሰባዊ የ አካባቢ ፅዳት እና የ ችግኝ ተከላ ተካሄደ።
        </span>
        <br />
        <br />
        <div className="w-4/5 mx-auto">
          <span> ሚያዚያ 17/2016 ዓ.ም።</span>
          <p>
            በ ቀበሌያችን መንቲና ፅህፈት ቤት አስተዳደር በተደረገ ቀስቃሽነት ታላቅ የ ማህበረሰብ ተሳትፎ የታየበት የ
            አካባቢ ፅዳት እና የችግኝ ተከላ ተካሄደ። "ንፁ አየር እና ፅዱ አካባቢ ለ ጤናማ ማህበረሰብ " በሚል መሪ
            ቃል የተከናወነው የፅዳት እና የችግኝ ተከላ ዘመቻ ማህበረሰቡ አካባቢውን ፅዱ እና ለኑሮ ምቹ ለማድረግ
            ያለውን ታላቅ ተነሳሽነት እና ቆራጥነት ያሳየበት ነው ሲሉ የ ቀበሌው ሊቀ መንበር የ ማህበረሰቡን ተሳትፎ
            አሞካሽተዋል።
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </>
  );
}

export default News;
