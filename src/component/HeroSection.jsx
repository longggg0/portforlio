import { FaBehance, FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function(){
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/CV.pdf"; // Path to file in /public folder
  link.setAttribute("download", "CV.pdf"); // Just the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return(
    <>
    <section id="home" className="py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 animate-fade-in-up">
        <div className="max-w-xl">
          <p className="text-gray-400">Hi I'm</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Horn Bunlong</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mt-2 typewriter">Frontend Developer..</h2>

          {/* Socials */}
          <div className="flex gap-4 text-gray-300 text-xl mt-6">
            <a href="https://www.facebook.com/horn.bunlong.71"><FaFacebook className="hover:text-emerald-400 cursor-pointer" /></a>
            <a href="https://www.instagram.com/veus_01/"><FaInstagram className="hover:text-emerald-400 cursor-pointer" /></a>
            <a href="https://t.me/long_web01"><FaTelegram className="hover:text-emerald-400 cursor-pointer" /></a>
            <a href="https://github.com/longggg0"><FaGithub className="hover:text-emerald-400 cursor-pointer" /></a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            {/* <button className="bg-orange-500 px-6 py-2 rounded text-white font-semibold">Hire Me</button> */}
            <a href="/CV.pdf" download="CV.pdf"><button onClick={handleDownload} className="border border-white px-6 py-2 rounded text-white font-semibold">Download CV</button></a>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in">
          <div className="absolute inset-0 bg-[#1f1f1f] rounded-full"></div>
          <img src="/images/profilee.jpg" alt="profile"  className="relative z-10 w-full h-full object-cover rounded-full" />
        </div>
      </section>

    </>
  )
}
