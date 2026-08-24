import { useEffect } from "react";

function PetalEffect() {
  useEffect(() => {
    const container = document.createElement("div");

    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      pointer-events: none;
      z-index: 999999;
    `;

    document.body.appendChild(container);

    const createPetal = () => {
      const petal = document.createElement("div");

      const size = 10 + Math.random() * 15;
      const duration = 5 + Math.random() * 5;

      petal.innerHTML = "🌸";

      petal.style.cssText = `
        position: absolute;
        top: -40px;
        left: ${Math.random() * 100}vw;
        font-size: ${size}px;
        opacity: 0.8;
        pointer-events: none;
        animation: fallingPetal ${duration}s linear forwards;
      `;

      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, duration * 1000);
    };

    // Immediately create some petals
    for (let i = 0; i < 15; i++) {
      setTimeout(createPetal, i * 200);
    }

    // Keep creating petals forever
    const interval = setInterval(createPetal, 500);

    // Animation CSS
    const style = document.createElement("style");

    style.textContent = `
      @keyframes fallingPetal {
        0% {
          transform: translate(0, -40px) rotate(0deg);
          opacity: 0;
        }

        10% {
          opacity: 0.8;
        }

        25% {
          transform: translate(70px, 25vh) rotate(100deg);
        }

        50% {
          transform: translate(-60px, 50vh) rotate(200deg);
        }

        75% {
          transform: translate(80px, 75vh) rotate(300deg);
        }

        100% {
          transform: translate(-50px, 110vh) rotate(400deg);
          opacity: 0;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      clearInterval(interval);
      container.remove();
      style.remove();
    };
  }, []);

  return null;
}

export default PetalEffect;