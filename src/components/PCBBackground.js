// src/components/PCBBackground.js
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const PCBBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1, // Keep the particles behind the content
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#00ff00", // Green, to resemble circuit lines
      },
      shape: {
        type: "circle", // Particle shapes (can be changed to square or custom)
      },
      opacity: {
        value: 0.6, // Make the particles semi-transparent
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      size: {
        value: 3,
        random: true,
        animation: {
          enable: true,
          speed: 10,
          minimumValue: 0.1,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#00ff00", // Link color should also be green for the circuit look
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Repel particles on hover
        },
      },
    },
  };

  return (
    <Particles
      id="pcbParticles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default PCBBackground;
