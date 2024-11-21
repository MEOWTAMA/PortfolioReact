import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PCBBackground from './components/PCBBackground'; // Import the PCB Background
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <PCBBackground /> {/* Add the PCB-inspired background */}

      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="h-screen bg-primary text-white text-center flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold" data-aos="fade-up">Chetan Khole</h1>
        <p className="text-xl mt-4" data-aos="fade-up" data-aos-delay="200">
          Electronics | Robotics | Automation Enthusiast
        </p>
      </section>
      
      {/* About Section */}
      <section id="about" className="bg-gray-800 text-white py-20 px-8 md:px-16" data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed text-justify">
          I am an engineering student with a passion for electronics, robotics, and automation. 
          I enjoy working on innovative projects, exploring space technologies, and tinkering with ideas. 
          My skill set includes PCB design, Python programming, and robotics. I am also a proud NSS volunteer.
        </p>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 text-white py-20 px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-left">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg" data-aos="zoom-in">
            <h3 className="text-xl font-semibold">Home Automation System</h3>
            <p className="mt-2">An IoT-based project using ESP8266, enabling smart controls for home appliances.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-xl font-semibold">PLC Traffic Light System</h3>
            <p className="mt-2">A simulation of a traffic light system using programmable logic controllers.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-20 px-8 md:px-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <p className="text-lg text-center mb-6">Feel free to reach out for collaborations or project discussions!</p>
        <div className="text-center">
          <a href="mailto:chetankhole2004@gmail.com" className="bg-primary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
            Email Me
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
