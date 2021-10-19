import Footer from "../components/Footer";
import MeetTeam from "../components/MeetTeam";
import Nav from "../components/Nav";

export default function about() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 bg-gradient  ">
      <Nav />
      {/* about header */}
      <div className="md:h-80vh flex md:flex-row flex-col justify-between items-center mt-20 md:mt-0   w-full px-5 md:px-20">
        <div className="flex   justify-center items-center w-full md:w-1/2 h-30vh md:h-60vh bg-cover bg-center bg-white aboutus-bgImg" />
        <div className="flex flex-col justify-center md:px-20 text-brand-gray w-full md:w-1/2 h-full">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-brand-lightblue my-4   ">
            About
          </h1>
          <p className=" text-justify  md:text-left text-xs md:text-base leading-tight md:leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            nisi sequi est! Quos voluptates, officiis voluptatibus, vero earum
            architecto veritatis tenetur consectetur nobis dicta possimus autem
            quas modi, non reiciendis?
          </p>
          <br />
          <p className=" text-justify md:text-left text-xs md:text-base leading-tight md:leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            quaerat voluptas rerum magnam sit possimus expedita quod error
            voluptate quidem?
          </p>
          <br />
          <p className=" text-justify md:text-left text-xs md:text-base  leading-tight md:leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            architecto.
          </p>
        </div>
      </div>
      
      <MeetTeam />
      <Footer />
    </div>
  );
}
