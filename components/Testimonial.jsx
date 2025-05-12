import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [slide, setSlide] = useState(0);
  // useEffect(() => {
  //   setInterval(() => {
  //     setSlide((slide) => (slide === Images.length - 1 ? 0 : slide + 1));
  //   }, 10000);
  // }, [slide]);

  const Images = [
    {
      review:
        "Working with Royal Infotech was a game-changer for our business. Their RPA implementation streamlined our processes, saving us hours of work daily. The dedication and expertise they brought to the table were impressive. Looking forward to more collaborations!",
      user: "Subhash Chandra Roy",
      position: "CEO, North South Tours&Travels"
    },
    {
      review:
        "I can't thank Royal Infotech enough for the exceptional Website work they did for us. From designing our user-friendly front end to optimizing the powerful back end, they truly delivered a comprehensive solution. Professionalism and creativity combined!",
      user: "Urlam Chandra Mohan Patnaik",
      position: "CEO, Kanaka Durga Consultancy Services"
    },
    {
      review:
        "When it comes to web design and development, Royal Infotech is a true artist. They crafted a website for us that not only looks stunning but functions flawlessly across devices. The attention to detail and commitment to quality are truly commendable.",
      user: "Alok Roy",
      position: "CEO, Shiv Ganga Traders"
    },
    {
      review:
        "I was blown away by [Your Name]'s logo design. They captured the essence of our brand with a single image. Their ability to understand our vision and translate it into an impactful logo is a testament to their design skills. A true pleasure to work with!",
        user: "Abdul Raheem",
        position: "CEO, HFC"
    },
  ];

  const slideLeft = () => {
    const isFirst = slide === 0;
    const currentSlide = isFirst ? Images.length - 1 : slide - 1;
    setSlide(currentSlide);
  };

  const slideRight = () => {
    const isLast = slide === Images.length - 1;
    const currentSlide = isLast ? 0 : slide + 1;
    setSlide(currentSlide);
  };
  return (
    <div className="w-full sm:w-[80%] m-auto py-6 px-4 relative group my-10 bg-white shadow-xl rounded-md" id="testimonial">
      <div className="flex flex-col gap-2 w-full h-full rounded-2xl">
        <p className="text-gray-600 font-semibold text-md">{Images[slide].review}</p>
        <p className="text-right text-gray-700 font-bold">
          -<span className=" text-xl">{Images[slide].user}</span>
        </p>
        <p className="text-right text-gray-700 font-bold text-sm">({Images[slide].position})</p>
      </div>
      <div className="absolute top-[25%] -translate-x-0 -translate-y-[-50%] ease-in left-5 text-2xl rounded-full p-2 group-hover:bg-black/50 text-white cursor-pointer duration-700" onClick={()=>slideLeft()}>
        {/* <MdKeyboardArrowLeft size={30} onClick={slideLeft} /> */}{"<"}
      </div>
      <div className="absolute top-[25%] -translate-x-0 -translate-y-[-50%] ease-out right-5 text-2xl rounded-full p-2 group-hover:bg-black/50 text-white cursor-pointer duration-700" onClick={()=>slideRight()}>
        {/* <MdKeyboardArrowRight size={30} onClick={slideRight} /> */}{">"}
      </div>
      {/* <div className="flex top-4 justify-center p-2">
        {Images.map((slide, slideIndex) => (
          <div
            className="cursor-pointer w-[2px] h-[px] bg-gray-400"
            key={slideIndex}
            onClick={() => setSlide(slideIndex)}
          >
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Testimonial;
