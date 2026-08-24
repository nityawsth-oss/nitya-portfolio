import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import character from "./assets/nitya-character.png";
import aboutCharacter from "./assets/about.png";
import PetalEffect from "./PetalEffect";
import resumeImage from "./assets/resume.png";
import studySwapImage from "./assets/study-swap.png";
import healthcareImage from "./assets/healthcare.png";
import zemorImage from "./assets/zemor.png";
import coffeeImage from "./assets/coffee-shop.png";
import iceCreamImage from "./assets/ice-cream.png";
function App() {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const characterRef = useRef(null);
  const form = useRef(null);
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      {
        publicKey: PUBLIC_KEY,
      }
    )
    .then(
      () => {
        alert("Message sent successfully! 💌");
        e.target.reset();
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Something went wrong. Please try again.");
      }
    );
};
  const [activeService, setActiveService] = useState(0);
  const [projectCategory, setProjectCategory] = useState("tech");

  /* =====================================================
     CHARACTER + MOUSE MOVEMENT
  ===================================================== */

  useEffect(() => {
    const characterElement = characterRef.current;

    if (!characterElement) return;

    gsap.fromTo(
      characterElement,
      {
        opacity: 0,
        y: 70,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
      }
    );

    const moveCharacter = (event) => {
      const mouseX = event.clientX / window.innerWidth - 0.5;
      const mouseY = event.clientY / window.innerHeight - 0.5;

      gsap.to(characterElement, {
        x: mouseX * 70,
        y: mouseY * 40,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", moveCharacter);

    return () => {
      window.removeEventListener("mousemove", moveCharacter);
    };
  }, []);

  /* =====================================================
     SERVICES
  ===================================================== */

  const services = [
  {
    number: "01",
    category: "DESIGN",
    title: "Premium Web Design",
    description:
      "Designing pixel-perfect, visual-first interfaces inspired by Apple and Stripe. Specialize in custom landing pages, portfolios, cafe designs, and corporate brand presentations.",
    tags: ["Landing Pages", "Portfolios", "Cafe Designs"],
  },

  {
    number: "02",
    category: "DEVELOPMENT",
    title: "Frontend Development",
    description:
      "Building modern, high-performance responsive web codebases utilizing Next.js, React, and TypeScript, configured with state-of-the-art animations via GSAP and Framer Motion.",
    tags: ["Next.js", "React", "TypeScript", "GSAP"],
  },

  {
    number: "03",
    category: "UI / UX",
    title: "UI/UX Design",
    description:
      "Creating cohesive user flows, structural wireframes, and high-fidelity interactive prototypes in Figma, balancing gorgeous modern aesthetics with intuitive usability.",
    tags: ["Figma", "Wireframes", "Prototypes"],
  },

  {
    number: "04",
    category: "REDESIGN",
    title: "Website Redesign",
    description:
      "Transforming older, legacy websites into high-converting premium digital assets, upgrading layouts, typography systems, and interaction models to stand out.",
    tags: ["Modern Layouts", "Typography", "Interactions"],
  },

  {
    number: "05",
    category: "OPTIMIZATION",
    title: "Website Optimization & SEO",
    description:
      "Enhancing website speed, layout responsiveness, Core Web Vitals, and indexing. Ensuring fast-loading performance and structural SEO compliance on search engines.",
    tags: ["Performance", "SEO", "Core Web Vitals"],
  },
];

  /* =====================================================
     PROJECTS
  ===================================================== */

  const projects = [
    {
      number: "01",
      category: "WEB DEVELOPMENT",
      title: "STUDENT HELP HUB",
      description:
        "A student-focused platform designed to help students find useful resources, study materials and academic information.",
      tags: ["HTML", "CSS", "JavaScript"],
      type: "STUDENT",
    },

    {
      number: "02",
      category: "FRONTEND",
      title: "DESK SAVVY",
      description:
        "A web-based student productivity management system designed to organize academic tasks and resources efficiently.",
      tags: ["HTML", "CSS", "JavaScript"],
      type: "PRODUCTIVITY",
    },

    {
      number: "03",
      category: "AI / ML",
      title: "PHISHING DETECTION AI",
      description:
        "An AI-powered phishing detection system that analyzes URLs and identifies potentially malicious websites.",
      tags: ["Python", "Flask", "JavaScript"],
      type: "AI",
    },

    {
      number: "04",
      category: "UI / UX",
      title: "ZEMOR INDIA",
      description:
        "A modern shopping experience designed in Figma with clean navigation and visually appealing layouts.",
      tags: ["Figma", "Wireframing", "UI Design"],
      type: "DESIGN",
    },

    {
      number: "05",
      category: "WEB DEVELOPMENT",
      title: "STUDYSWAPPRO",
      description:
        "A collaborative student platform where students can share notes, study materials and educational resources.",
      tags: ["HTML", "CSS", "JavaScript"],
      type: "STUDY",
    },

    {
      number: "06",
      category: "TRAINING",
      title: "JAVA & WEB DEV",
      description:
        "Java and Web Development training focused on strengthening programming and modern web development fundamentals.",
      tags: ["Java", "Web", "Programming"],
      type: "CODE",
    },
  ];

  /* =====================================================
     SKILLS
  ===================================================== */

  const skills = [
    "C",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Figma",
    "Canva",
    "Git",
    "GitHub",
  ];

  /* =====================================================
     SCROLL FUNCTION
  ===================================================== */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =====================================================
     NEXT SERVICE
  ===================================================== */

  const nextService = () => {
    setActiveService((current) => (current + 1) % services.length);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <PetalEffect />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="fixed left-1/2 top-5 z-[100] flex w-[92%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#181818]/90 px-5 py-3 backdrop-blur-xl">

        <button
          onClick={() => scrollToSection("home")}
          className="text-sm font-black tracking-[0.18em] transition hover:text-fuchsia-400"
        >
          NITYA.DEV
        </button>

        <div className="hidden items-center gap-7 text-xs font-medium tracking-wider text-zinc-400 md:flex">
            <button
            onClick={() => scrollToSection("about")}
            className="transition hover:text-white"
          >
            ABOUT
          </button>

         <button
            onClick={() => scrollToSection("services")}
            className="transition hover:text-white"
          >
            SERVICES
          </button>

          <button
             onClick={() => scrollToSection("projects")}
             className="transition hover:text-white"
          >
           PROJECTS
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="transition hover:text-white"
          >
            SKILLS
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="transition hover:text-white"
          >
            CONTACT
          </button>

        </div>

        
          <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-xs font-black text-black transition duration-300 hover:scale-105 hover:bg-fuchsia-400"
        >
          DOWNLOAD RESUME 📥
        </a>

      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center px-6 pt-28 md:px-12"
      >

        {/* Character Area */}

        <div className="relative flex w-full items-center justify-center md:w-1/2">

          {/* MOVING GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[380px]
              w-[380px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-fuchsia-600/20
              blur-[100px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-[220px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-500/20
              blur-[70px]
            "
          />

          <img
            ref={characterRef}
            src={character}
            alt="Nitya character"
            className="
              relative
              z-10
              w-[72%]
              max-w-[500px]
              object-contain
              drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)]
              md:w-[82%]
            "
          />

        </div>


        {/* Hero Text */}

        <div className="relative z-20 w-full md:w-1/2">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-fuchsia-400">
            UI / UX DESIGNER • FULL STACK DEVELOPER
          </p>

          <h1
            className="
              text-[16vw]
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.07em]
              text-zinc-100
              md:text-[7vw]
            "
          >

            <span className="block">
              HEY, I'M
            </span>

            <span className="block text-fuchsia-500">
              NITYA
            </span>

            <span className="block">
              AWASTHI
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
            I design and build modern digital experiences that combine
            clean interfaces, creative visuals and thoughtful interactions.
          </p>


          {/* HERO BUTTONS */}

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={() => scrollToSection("work")}
              className="
                rounded-full
                border
                border-zinc-600
                px-7
                py-3
                text-sm
                font-semibold
                transition
                duration-300
                hover:border-fuchsia-500
                hover:bg-fuchsia-500
                hover:text-white
                hover:scale-105
              "
            >
              VIEW MY WORK →
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="
                rounded-full
                bg-fuchsia-600
                px-7
                py-3
                text-sm
                font-semibold
                transition
                duration-300
                hover:bg-fuchsia-500
                hover:scale-105
              "
            >
              CONTACT ME
            </button>

          </div>

        </div>

      </section>


{/* =====================================================
          ABOUT
===================================================== */}

<section
  id="about"
  className="mx-auto max-w-7xl scroll-mt-28 px-6 py-32 md:px-12"
>
  <div className="grid items-start gap-16 md:grid-cols-2">

    {/* =================================================
        LEFT — ABOUT TEXT
    ================================================= */}

    <div className="pt-10">

      {/* ABOUT HEADING */}

<div className="mb-20 text-center">

  <p className="text-6xl font-black uppercase leading-none md:text-8xl">
    <span className="text-white">
      ABOUT
    </span>

    {" "}

    <span className="text-fuchsia-400">
      ME
    </span>
  </p>

</div>

      <p className="max-w-xl text-lg leading-8 text-zinc-400">
        Motivated Web Developer and UI/UX Designer with hands-on
        experience in HTML, CSS, JavaScript, React.js, Figma and Canva.
        Skilled in building responsive, user-friendly websites and
        creative digital experiences.
      </p>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        Currently pursuing BCA and exploring AI-powered applications,
        modern web technologies and creative development.
      </p>


      {/* STATS */}

      <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">

        <div
          className="
            rounded-2xl border border-zinc-800
            bg-zinc-900/40 p-5
            transition-all duration-300
            hover:-translate-y-2
            hover:border-fuchsia-500/60
          "
        >
          <p className="text-2xl font-black text-white">
            01+
          </p>

          <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
            Years Learning
          </p>
        </div>


        <div
          className="
            rounded-2xl border border-zinc-800
            bg-zinc-900/40 p-5
            transition-all duration-300
            hover:-translate-y-2
            hover:border-fuchsia-500/60
          "
        >
          <p className="text-2xl font-black text-white">
            10+
          </p>

          <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
            Projects
          </p>
        </div>


        <div
          className="
            rounded-2xl border border-zinc-800
            bg-zinc-900/40 p-5
            transition-all duration-300
            hover:-translate-y-2
            hover:border-fuchsia-500/60
          "
        >
          <p className="text-2xl font-black text-white">
            ∞
          </p>

          <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
            Ideas
          </p>
        </div>

      </div>


      {/* BUTTON */}

      <a
        href="#skills"
        className="
          mt-10 inline-flex items-center
          rounded-full border border-zinc-700
          px-6 py-3
          text-sm font-bold text-white
          transition-all duration-300
          hover:-translate-y-1
          hover:border-fuchsia-500
          hover:bg-fuchsia-500
          hover:text-black
        "
      >
        EXPLORE MY SKILLS →
      </a>

    </div>


    {/* =================================================
        RIGHT — CHARACTER + TITLE
    ================================================= */}

    <div className="flex flex-col items-center">

      {/* CHARACTER */}

      <div className="relative">

        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-fuchsia-600/20
            blur-[100px]
          "
        />

        <img
          src={aboutCharacter}
          alt="Creative Developer"
          className="
            relative
            z-10
            w-72
            object-contain
            drop-shadow-[0_0_35px_rgba(217,70,239,0.25)]
            transition-all
            duration-500
            hover:-translate-y-3
            hover:scale-105
          "
        />

      </div>


      {/* TITLE BELOW CHARACTER */}

      <div className="mt-2 text-center">

        <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl">

          <span className="block text-white">
            CREATIVE
          </span>

          <span className="block text-fuchsia-500">
            DEVELOPER
          </span>

        </h2>

      </div>

    </div>

  </div>
</section>

      
{/* =====================================================
    SERVICES
===================================================== */}

<section
  id="services"
  className="scroll-mt-28 border-y border-fuchsia-500/10 bg-[#0d0712] px-6 py-32 md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* =========================
        HEADING
    ========================== */}

    <div className="mb-20">

      <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-400">
        WHAT I BUILD
      </p>

      <h2 className="mt-5 max-w-5xl text-6xl font-black uppercase leading-[0.85] md:text-8xl">
        DIGITAL
        <span className="text-fuchsia-500"> EXPERIENCES</span>
        <br />
        THAT FEEL DIFFERENT.
      </h2>

      <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-500">
        I design and build modern digital experiences by combining
        clean development, thoughtful design and creative interaction.
      </p>

    </div>


    {/* =========================
        SERVICES LIST
    ========================== */}

    <div className="border-t border-white/10">


      {/* =========================
          SERVICE 01
      ========================== */}

      <div className="group border-b border-white/10 py-10 transition-all duration-500 hover:px-4">

        <div className="flex items-center gap-5 md:gap-12">

          <span className="w-8 shrink-0 text-xs tracking-[0.25em] text-fuchsia-400 md:w-10">
            01
          </span>

          <div className="flex-1">

            <h3 className="text-3xl font-black uppercase transition-all duration-300 group-hover:text-fuchsia-500 md:text-5xl">
              Web Development
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
              Responsive and modern websites built with clean,
              scalable and user-focused development.
            </p>

          </div>

          <span className="shrink-0 text-2xl text-zinc-600 transition-all duration-300 group-hover:translate-x-2 group-hover:text-fuchsia-500 md:text-3xl">
            →
          </span>

        </div>


        <div className="mt-6 ml-[3.25rem] flex flex-wrap gap-2 md:ml-[5.5rem]">

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            React.js
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            JavaScript
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Responsive UI
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Modern Web
          </span>

        </div>

      </div>


      {/* =========================
          SERVICE 02
      ========================== */}

      <div className="group border-b border-white/10 py-10 transition-all duration-500 hover:px-4">

        <div className="flex items-center gap-5 md:gap-12">

          <span className="w-8 shrink-0 text-xs tracking-[0.25em] text-fuchsia-400 md:w-10">
            02
          </span>

          <div className="flex-1">

            <h3 className="text-3xl font-black uppercase transition-all duration-300 group-hover:text-fuchsia-500 md:text-5xl">
              UI / UX Design
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
              Clean interfaces and thoughtful user experiences
              designed to look good and feel intuitive.
            </p>

          </div>

          <span className="shrink-0 text-2xl text-zinc-600 transition-all duration-300 group-hover:translate-x-2 group-hover:text-fuchsia-500 md:text-3xl">
            →
          </span>

        </div>


        <div className="mt-6 ml-[3.25rem] flex flex-wrap gap-2 md:ml-[5.5rem]">

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Figma
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Wireframing
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Prototyping
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Visual Design
          </span>

        </div>

      </div>


      {/* =========================
          SERVICE 03
      ========================== */}

      <div className="group border-b border-white/10 py-10 transition-all duration-500 hover:px-4">

        <div className="flex items-center gap-5 md:gap-12">

          <span className="w-8 shrink-0 text-xs tracking-[0.25em] text-fuchsia-400 md:w-10">
            03
          </span>

          <div className="flex-1">

            <h3 className="text-3xl font-black uppercase transition-all duration-300 group-hover:text-fuchsia-500 md:text-5xl">
              Creative Development
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
              Interactive and visually engaging experiences with
              motion, animation and creative interface details.
            </p>

          </div>

          <span className="shrink-0 text-2xl text-zinc-600 transition-all duration-300 group-hover:translate-x-2 group-hover:text-fuchsia-500 md:text-3xl">
            →
          </span>

        </div>


        <div className="mt-6 ml-[3.25rem] flex flex-wrap gap-2 md:ml-[5.5rem]">

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Interactions
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Motion
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Animations
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Creative UI
          </span>

        </div>

      </div>


      {/* =========================
          SERVICE 04
      ========================== */}

      <div className="group border-b border-white/10 py-10 transition-all duration-500 hover:px-4">

        <div className="flex items-center gap-5 md:gap-12">

          <span className="w-8 shrink-0 text-xs tracking-[0.25em] text-fuchsia-400 md:w-10">
            04
          </span>

          <div className="flex-1">

            <h3 className="text-3xl font-black uppercase transition-all duration-300 group-hover:text-fuchsia-500 md:text-5xl">
              AI-Powered Experiences
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
              Exploring AI-powered applications and modern web
              experiences that solve real-world problems.
            </p>

          </div>

          <span className="shrink-0 text-2xl text-zinc-600 transition-all duration-300 group-hover:translate-x-2 group-hover:text-fuchsia-500 md:text-3xl">
            →
          </span>

        </div>


        <div className="mt-6 ml-[3.25rem] flex flex-wrap gap-2 md:ml-[5.5rem]">

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            AI Applications
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            APIs
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 transition group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Automation
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-zinc-500 group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400">
            Modern Web
          </span>

        </div>

      </div>

    </div>


    

  </div>
</section>
      {/* =====================================================
    PROJECTS
===================================================== */}

<section
  id="projects"
  className="scroll-mt-28 px-6 py-32 md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* ================= HEADING ================= */}

    <div className="text-center">

      <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-400">
        SELECTED WORK
      </p>

      <h2 className="mt-4 text-6xl font-black uppercase leading-none md:text-8xl">
        MY{" "}
        <span className="text-fuchsia-500">
          PROJECTS
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500">
        A selection of things I've designed, built and
        experimented with.
      </p>

    </div>


    {/* ================= CATEGORY SWITCH ================= */}

    <div className="mt-14 flex justify-center">

      <div className="flex rounded-full border border-white/10 bg-[#101010] p-1">

        <button
          onClick={() => setProjectCategory("tech")}
          className={`
            rounded-full
            px-6
            py-3
            text-xs
            font-bold
            uppercase
            tracking-[0.15em]
            transition-all
            duration-300
            ${
              projectCategory === "tech"
                ? "bg-white text-black"
                : "text-zinc-500 hover:text-white"
            }
          `}
        >
          TECH
        </button>


        <button
          onClick={() => setProjectCategory("creative")}
          className={`
            rounded-full
            px-6
            py-3
            text-xs
            font-bold
            uppercase
            tracking-[0.15em]
            transition-all
            duration-300
            ${
              projectCategory === "creative"
                ? "bg-fuchsia-500 text-white"
                : "text-zinc-500 hover:text-white"
            }
          `}
        >
          CREATIVE
        </button>

      </div>

    </div>


    {/* ================= TECH PROJECTS ================= */}

    {projectCategory === "tech" && (

      <div className="mt-20">

        <div className="mb-8 flex items-end justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400">
              01 — DEVELOPMENT
            </p>

            <h3 className="mt-3 text-3xl font-black uppercase md:text-4xl">
              TECH PROJECTS
            </h3>

          </div>

          <span className="text-xs text-zinc-700">
            03 PROJECTS
          </span>

        </div>


        {/* RESUME BUILDER */}

        <div
          className="
            group
            grid
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-[#101010]
            transition-all
            duration-500
            hover:border-fuchsia-500/40
            md:grid-cols-[0.9fr_1.1fr]
          "
        >

          <div className="relative min-h-[330px] overflow-hidden bg-[#0d0d0d]">

  <img
    src="/src/assets/resume.png"
    alt="Resume Builder"
    className="
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />

  <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

</div>


          <div className="flex flex-col justify-between p-8 md:p-12">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                01 / 03
              </p>

              <h3 className="mt-5 text-4xl font-black uppercase md:text-6xl">
                Resume
                <br />
                <span className="text-fuchsia-500">
                  Builder
                </span>
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-500">
                A modern resume builder designed to help users
                create professional resumes quickly with a clean
                and user-friendly interface.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                {["Web App", "Responsive UI", "Resume"].map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-2 text-[10px] text-zinc-500"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>


            <a
              href="https://resume-builder-five-liart-16.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-3
                text-xs
                font-black
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-fuchsia-500
                hover:text-white
              "
            >
              VIEW PROJECT
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* SMALL PROJECTS */}

        <div className="mt-6 grid gap-6 md:grid-cols-2">


          {/* STUDY SWAP */}

          <div
            className="
              group
              rounded-[28px]
              border
              border-white/10
              bg-[#101010]
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-fuchsia-500/40
            "
          >

            <div className="relative h-64 overflow-hidden bg-[#0d0d0d]">

  <img
    src="/src/assets/study-swap.png"
    alt="Study Swap"
    className="
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />

</div>

            <h3 className="mt-6 text-3xl font-black uppercase">
              Study Swap
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              A student-focused platform designed to make
              learning more collaborative by helping students
              share and discover useful study resources.
            </p>

            <a
              href="https://studyswappro-gjsmrih7r8kq2fc8nr3xxc.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-zinc-400
                transition
                hover:text-fuchsia-400
              "
            >
              VIEW PROJECT →
            </a>

          </div>


          {/* HEALTHCARE */}

          <div
            className="
              group
              rounded-[28px]
              border
              border-white/10
              bg-[#101010]
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-fuchsia-500/40
            "
          >

            <div className="relative h-64 overflow-hidden bg-[#0d0d0d]">

  <img
    src="/src/assets/healthcare.png"
    alt="Healthcare Project"
    className="
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />

  <div className="absolute inset-0 bg-black/10" />

</div>

            <h3 className="mt-6 text-3xl font-black uppercase">
              Healthcare
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              A healthcare-focused application designed to
              provide users with a simple and accessible
              digital experience.
            </p>

            <a
              href="https://health-jjn7qhdyfhvklzv6dmiih8.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-zinc-400
                transition
                hover:text-fuchsia-400
              "
            >
              VIEW PROJECT →
            </a>

          </div>

        </div>

      </div>

    )}


    {/* ================= CREATIVE PROJECTS ================= */}

    {projectCategory === "creative" && (

      <div className="mt-20">

        <div className="mb-8 flex items-end justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400">
              02 — DESIGN
            </p>

            <h3 className="mt-3 text-3xl font-black uppercase md:text-4xl">
              FIGMA / CREATIVE
            </h3>

          </div>

          <span className="text-xs text-zinc-700">
            03 PROJECTS
          </span>

        </div>


        <div className="grid gap-6 md:grid-cols-3">


          {/* ZEMOR */}

          <div
            className="
              group
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#101010]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-fuchsia-500/40
            "
          >

            <div className="relative h-64 overflow-hidden bg-[#0d0d0d]">

  <img
    src="/src/assets/zemor.png"
    alt="Zemor UI UX Design"
    className="
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />

</div>

            <div className="p-7">

              <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400">
                UI / UX
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase">
                Zemor
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                A modern UI/UX concept focused on visual
                design, intuitive navigation and polished
                user interaction.
              </p>

              <a
                href="https://www.figma.com/proto/XA9yWfYZnfkeUm0T3YRG2y/Zimor?node-id=77-161&t=n8ov6EBwUKkXlVBZ-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-fuchsia-400"
              >
                VIEW DESIGN →
              </a>

            </div>

          </div>


          {/* COFFEE SHOP */}

          <div
            className="
              group
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#101010]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-fuchsia-500/40
            "
          >

            <div className="relative h-64 overflow-hidden bg-[#0d0d0d]">

  <img
    src="/src/assets/coffee-shop.png"
    alt="Coffee Shop UI UX Design"
    className="
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />

</div>

            <div className="p-7">

              <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400">
                UI / UX
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase">
                Coffee Shop
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                A visually engaging cafe interface focused
                on product presentation and smooth interaction.
              </p>

              <a
                href="https://www.figma.com/proto/Eq7YvRVQdGqALiPf1PZiVj/trial?node-id=172-55&t=fprFjSZbtXfp5LmW-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-fuchsia-400"
              >
                VIEW DESIGN →
              </a>

            </div>

          </div>


          {/* ICE CREAM */}

          <div
            className="
              group
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#101010]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-fuchsia-500/40
            "
          >

            <div className="relative h-64 overflow-hidden bg-[#0d0d0d]">

  <img
     src="/src/assets/ice-cream.png"
    alt="Ice Cream Animation"
    className="
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />

</div>

            <div className="p-7">

              <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400">
                MOTION
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase">
                Ice Cream
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                An experimental interactive concept exploring
                playful motion, transitions and product presentation.
              </p>

              <a
                href="https://www.figma.com/proto/Eq7YvRVQdGqALiPf1PZiVj/trial?node-id=265-24&t=fprFjSZbtXfp5LmW-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-fuchsia-400"
              >
                VIEW DESIGN →
              </a>

            </div>

          </div>

        </div>

      </div>

    )}

  </div>
</section>


      {/* =====================================================
    SKILLS
===================================================== */}

<section
  id="skills"
  className="scroll-mt-28 px-6 py-32 md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* ================= TOP HEADING ================= */}

    <div className="mb-20 text-center">

      <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-400">
        MY TOOLKIT
      </p>

      <h2 className="mt-4 text-6xl font-black uppercase leading-none md:text-8xl">
        MY{" "}
        <span className="text-fuchsia-500">
          SKILLS
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500">
        Technologies and creative tools I use to design,
        build and experiment with digital experiences.
      </p>

    </div>


    {/* ================= SKILL CATEGORIES ================= */}

    <div className="grid gap-6 md:grid-cols-3">

      {/* ================= FRONTEND ================= */}

      <div
        className="
          group relative overflow-hidden
          rounded-[28px]
          border border-white/10
          bg-[#101010]
          p-8
          transition-all duration-500
          hover:-translate-y-2
          hover:border-fuchsia-500/40
        "
      >

        


        <div className="relative z-10">

          <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-400">
            FRONTEND
          </p>

          <h3 className="mt-4 text-3xl font-black uppercase">
            Build
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Creating responsive and interactive interfaces
            with modern frontend technologies.
          </p>


          {/* Skills */}

          <div className="mt-8 flex flex-wrap gap-2">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Responsive Design",
            ].map((skill) => (

              <span
                key={skill}
                className="
                  rounded-full
                  border border-white/10
                  px-4 py-2
                  text-xs text-zinc-400
                  transition-all duration-300
                  hover:border-fuchsia-500/50
                  hover:text-fuchsia-400
                "
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>


      {/* ================= DESIGN ================= */}

      <div
        className="
          group relative overflow-hidden
          rounded-[28px]
          border border-white/10
          bg-[#101010]
          p-8
          transition-all duration-500
          hover:-translate-y-2
          hover:border-fuchsia-500/40
        "
      >

        


        <div className="relative z-10">

          <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-400">
            DESIGN
          </p>

          <h3 className="mt-4 text-3xl font-black uppercase">
            Create
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Designing clean interfaces, user flows and
            visual experiences focused on usability.
          </p>


          {/* Skills */}

          <div className="mt-8 flex flex-wrap gap-2">

            {[
              "Figma",
              "UI / UX",
              "Prototyping",
              "Canva",
            ].map((skill) => (

              <span
                key={skill}
                className="
                  rounded-full
                  border border-white/10
                  px-4 py-2
                  text-xs text-zinc-400
                  transition-all duration-300
                  hover:border-fuchsia-500/50
                  hover:text-fuchsia-400
                "
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>


      {/* ================= DEVELOPMENT ================= */}

      <div
        className="
          group relative overflow-hidden
          rounded-[28px]
          border border-white/10
          bg-[#101010]
          p-8
          transition-all duration-500
          hover:-translate-y-2
          hover:border-fuchsia-500/40
        "
      >

        {/* Number */}

       

        <div className="relative z-10">

          <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-400">
            DEVELOPMENT
          </p>

          <h3 className="mt-4 text-3xl font-black uppercase">
            Connect
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Working with backend technologies, databases
            and development tools.
          </p>


          {/* Skills */}

          <div className="mt-8 flex flex-wrap gap-2">

            {[
              "Node.js",
              "MySQL",
              "MongoDB",
              "Git",
              "GitHub",
            ].map((skill) => (

              <span
                key={skill}
                className="
                  rounded-full
                  border border-white/10
                  px-4 py-2
                  text-xs text-zinc-400
                  transition-all duration-300
                  hover:border-fuchsia-500/50
                  hover:text-fuchsia-400
                "
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>


    {/* ================= BOTTOM STRIP ================= */}

    

    

  </div>
</section>
      {/* =====================================================
    EXPERIENCE — HACKATHONS + CERTIFICATIONS
===================================================== */}

<section
  id="experience"
  className="relative overflow-hidden bg-[#080808] px-6 py-32 md:px-12"
>
  <div className="mx-auto max-w-6xl">

    {/* =================================================
        MAIN HEADING
    ================================================= */}

    <div className="mb-24 text-center">

      <p className="text-xs uppercase tracking-[0.45em] text-amber-400">
        EXPERIENCE
      </p>

      <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
        <span className="text-white">
          CERTIFICATIONS &
        </span>
        <br />
        <span className="text-fuchsia-500">
          ACHIEVEMENTS
        </span>
      </h2>

      <div className="mx-auto mt-7 flex items-center justify-center gap-3">
        <span className="h-px w-16 bg-amber-400/70" />
        <span className="text-amber-400">✦</span>
        <span className="h-px w-16 bg-amber-400/70" />
      </div>

    </div>


    {/* =================================================
        HACKATHONS & ACHIEVEMENTS
    ================================================= */}

    <div className="mb-10 text-center">

      <h3 className="text-xl font-bold uppercase tracking-[0.18em] text-fuchsia-400 md:text-2xl">
        HACKATHONS & ACHIEVEMENTS
      </h3>

      <div className="mx-auto mt-3 h-px w-20 bg-amber-400/70" />

    </div>


    {/* =================================================
        TIMELINE
    ================================================= */}

    <div className="relative">

      {/* CENTER LINE */}

      <div
        className="
          absolute
          left-1/2
          top-0
          hidden
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-amber-400
          to-transparent
          md:block
        "
      />


      {/* =================================================
          ITEM 01
      ================================================= */}

      <div className="relative mb-24 grid items-center gap-12 md:grid-cols-2 md:gap-20">

        {/* CERTIFICATE */}

        <div className="relative md:pr-10">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-amber-400/80
              bg-[#111111]
              p-2
              shadow-[0_0_35px_rgba(212,175,55,0.10)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_0_55px_rgba(212,175,55,0.20)]
            "
          >

            <img
               src="/src/assets/hackathon-viveka.pdf.png"
              alt="Hackathon Certificate"
              className="
                aspect-[4/3]
                w-full
                rounded-[18px]
                object-cover
                transition
                duration-700
                group-hover:scale-[1.03]
              "
            />

          </div>

        </div>


        {/* TIMELINE DOT */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            h-4
            w-4
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-amber-300
            bg-[#080808]
            shadow-[0_0_20px_rgba(212,175,55,0.8)]
            md:block
          "
        />


        {/* DETAILS */}

        <div className="md:pl-10">

          
          <p className="-mt-8 text-xs uppercase tracking-[0.3em] text-fuchsia-400">
            HACKATHON
          </p>

          <h4 className="mt-3 text-3xl font-black uppercase leading-none text-white md:text-4xl">
            VIVEKA: The Intelligence 5.0
          </h4>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-amber-400">
            <span>◉ Tech Fusion Club, SRMU</span>
            <span>◉ 18–20 FEB 2026</span>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400">
             Worked with my team on a Snort-based IDS project to detect suspicious network activities. The experience gave me practical exposure to network security while strengthening my teamwork, technical thinking and problem-solving skills.    
                   </p>


          {/* WHAT I BUILT */}

          <div className="mt-7 border-t border-white/10 pt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
              WHAT I BUILT
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Developed an IDS-based cybersecurity solution with a team to identify suspicious network activity and detect threats such as port scans, ICMP floods, brute-force attempts and unauthorized access.
            </p>

          </div>


          {/* ROLE */}

          <div className="mt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
             my role
            </p>

            <p className="mt-2 text-sm text-zinc-500">
             Snort • IDS • Network Security
            </p>

          </div>


          {/* TECHNOLOGIES */}

          <div className="mt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
              TECHNOLOGIES USED
            </p>

            <div className="mt-3 flex flex-wrap gap-2">

              {[,"SNORT IDS","NETWORK SECURITY", "THREAT DETECTION","NETWORK MONITORING"].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-amber-400/40
                    px-3
                    py-1.5
                    text-[10px]
                    text-amber-300
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          ITEM 02
      ================================================= */}

      <div className="relative mb-28 grid items-center gap-12 md:grid-cols-2 md:gap-20">

        {/* DETAILS — LEFT */}

        <div className="order-2 md:order-1 md:pr-10">

          

          <p className="-mt-8 text-xs uppercase tracking-[0.3em] text-fuchsia-400">
            HACKATHON
          </p>

          <h4 className="mt-3 text-3xl font-black uppercase leading-none text-white md:text-4xl">
            IDEATE • DEFINE • SHOWCASE 2026
          </h4>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-amber-400">
            <span>◉ YI (young indian)</span>
            <span>◉ 2026</span>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400">
            Worked with Team Fusion Debuggers to develop SmartGate, a QR-based school pickup management solution. The experience strengthened my teamwork, problem-solving and technical skills while solving a real-world safety and traffic challenge.
          </p>


          <div className="mt-7 border-t border-white/10 pt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
              what i built
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              <b>SmartGate — School Traffic & Pickup Management System</b><br />Built a solution designed to improve student safety and reduce traffic congestion during school pickup hours through QR-based verification, parking management and queue management.
            </p>

          </div>


          <div className="mt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
              MY ROLE
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Developer • Designer • Team Member
            </p>

          </div>


          <div className="mt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
              TECHNOLOGIES USED
            </p>

            <div className="mt-3 flex flex-wrap gap-2">

              {[, "HTML", "CSS", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-amber-400/40
                    px-3
                    py-1.5
                    text-[10px]
                    text-amber-300
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>


        {/* TIMELINE DOT */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            h-4
            w-4
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-amber-300
            bg-[#080808]
            shadow-[0_0_20px_rgba(212,175,55,0.8)]
            md:block
          "
        />


        {/* CERTIFICATE — RIGHT */}

        <div className="order-1 md:order-2 md:pl-10">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-amber-400/80
              bg-[#111111]
              p-2
              shadow-[0_0_35px_rgba(212,175,55,0.10)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_0_55px_rgba(212,175,55,0.20)]
            "
          >

            <img
              src="/src/assets/hackathon-ids-smartgate.png"
              alt="Hackathon Certificate"
              className="
                aspect-[4/3]
                w-full
                rounded-[18px]
                object-cover
                transition
                duration-700
                group-hover:scale-[1.03]
              "
            />

          </div>

        </div>

      </div>

 {/* =================================================
          ITEM 03
      ================================================= */}

      <div className="relative mb-24 grid items-center gap-12 md:grid-cols-2 md:gap-20">

        {/* CERTIFICATE */}

        <div className="relative md:pr-10">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-amber-400/80
              bg-[#111111]
              p-2
              shadow-[0_0_35px_rgba(212,175,55,0.10)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_0_55px_rgba(212,175,55,0.20)]
            "
          >

            <img
              src="/src/assets/hackathon-hackovium.pdf.png"
              alt="Hackathon Certificate"
              className="
                aspect-[4/3]
                w-full
                rounded-[18px]
                object-cover
                transition
                duration-700
                group-hover:scale-[1.03]
              "
            />

          </div>

        </div>


        {/* TIMELINE DOT */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            h-4
            w-4
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-amber-300
            bg-[#080808]
            shadow-[0_0_20px_rgba(212,175,55,0.8)]
            md:block
          "
        />


        {/* DETAILS */}

        <div className="md:pl-10">

          

          <p className="-mt-8 text-xs uppercase tracking-[0.3em] text-fuchsia-400">
            HACKATHON
          </p>

          <h4 className="mt-3 text-3xl font-black uppercase leading-none text-white md:text-4xl">
            HACKOVIUM: VIBECRAFT EDITION
          </h4>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-amber-400">
            <span>◉ Hackovium</span>
            <span>◉ 21 April 2026</span>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400">
                     Participating in a 24-hour hackathon challenged me to think creatively, work under pressure, and collaborate effectively with my team.                  
                      </p>


          {/* WHAT I BUILT */}

          <div className="mt-7 border-t border-white/10 pt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
              WHAT I BUILT
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Built an AI-powered browser security system that detects phishing websites in real time and provides instant warnings to protect users while browsing.
            </p>

          </div>


          {/* ROLE */}

          <div className="mt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
             my role
            </p>

            <p className="mt-2 text-sm text-zinc-500">
             Worked on phishing detection using machine learning, URL feature analysis and real-time threat classification.
            </p>

          </div>


          {/* TECHNOLOGIES */}

          <div className="mt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
              TECHNOLOGIES USED
            </p>

            <div className="mt-3 flex flex-wrap gap-2">

              {[,"Python","Flask", "NumPy","HTML","JavaScript","css"].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-amber-400/40
                    px-3
                    py-1.5
                    text-[10px]
                    text-amber-300
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* =================================================
          CERTIFICATIONS HEADING
      ================================================= */}

      <div className="mb-10 mt-10 text-center">

        <h3 className="text-xl font-bold uppercase tracking-[0.18em] text-fuchsia-400 md:text-2xl">
          CERTIFICATIONS
        </h3>

        <div className="mx-auto mt-3 h-px w-20 bg-amber-400/70" />

      </div>
{/* =================================================
          CERTIFICATION 01
      ================================================= */}

      <div className="relative mb-24 grid items-center gap-12 md:grid-cols-2 md:gap-20">

        <div className="order-2 md:order-1 md:pr-10">

          

          <p className="-mt-8 text-xs uppercase tracking-[0.3em] text-fuchsia-400">
            CERTIFICATION
          </p>

          <h4 className="mt-3 text-3xl font-black uppercase text-white md:text-4xl">
           JAVA FULL STACK
          </h4>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-amber-400">
            <span>◉ Analyze InfoTech</span>
            <span>◉ 2025</span>
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-400">
            Successfully completed Summer Training on Java Full Stack at Analyze InfoTech, gaining practical experience in software development and testing.
          </p>

          <div className="mt-7 border-t border-white/10 pt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
              SKILLS COVERED
            </p>

            <div className="mt-3 flex flex-wrap gap-2">

              {["Java", "Full Stack", "Software Development","Testing"].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-amber-400/40
                    px-3
                    py-1.5
                    text-[10px]
                    text-amber-300
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>


        <div
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            h-4
            w-4
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-amber-300
            bg-[#080808]
            shadow-[0_0_20px_rgba(212,175,55,0.8)]
            md:block
          "
        />


        <div className="order-1 md:order-2 md:pl-10">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-amber-400/80
              bg-[#111111]
              p-2
              shadow-[0_0_35px_rgba(212,175,55,0.10)]
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >

            <img
              src="/src/assets/java certification.jpg"
              alt="Certification"
              className="
                aspect-[4/3]
                w-full
                rounded-[18px]
                object-cover
                transition
                duration-700
                group-hover:scale-[1.03]
              "
            />

          </div>

        </div>

      </div>



      {/* =================================================
          CERTIFICATION 02
      ================================================= */}

      <div className="relative mb-24 grid items-center gap-12 md:grid-cols-2 md:gap-20">

        <div className="md:pr-10">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-amber-400/80
              bg-[#111111]
              p-2
              shadow-[0_0_35px_rgba(212,175,55,0.10)]
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >

            <img
              src="/src/assets/mern certification.jpg"
              alt="Certification"
              className="
                aspect-[4/3]
                w-full
                rounded-[18px]
                object-cover
                transition
                duration-700
                group-hover:scale-[1.03]
              "
            />

          </div>

        </div>


        <div
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            h-4
            w-4
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-amber-300
            bg-[#080808]
            shadow-[0_0_20px_rgba(212,175,55,0.8)]
            md:block
          "
        />


        <div className="md:pl-10">

          

          <p className="-mt-8 text-xs uppercase tracking-[0.3em] text-fuchsia-400">
            CERTIFICATION
          </p>

          <h4 className="mt-3 text-3xl font-black uppercase text-white md:text-4xl">
            MERN STACK
          </h4>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-amber-400">
            <span>◉ Analyze InfoTech</span>
            <span>◉ 2026</span>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400">
            Successfully completed internship training on MERN Stack with hands-on experience in software development and testing.
          </p>

          <div className="mt-7 border-t border-white/10 pt-5">

            <p className="text-[10px] uppercase tracking-[0.3em] text-fuchsia-400">
              SKILLS COVERED
            </p>

            <div className="mt-3 flex flex-wrap gap-2">

              {["HTML", "CSS", "JavaScript","MongoDB","Express.js","React.js","Node.js"].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-amber-400/40
                    px-3
                    py-1.5
                    text-[10px]
                    text-amber-300
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>


      
      {/* =================================================
          END MESSAGE
      ================================================= */}

      <div className="pt-10 text-center">

        <div
          className="
            mx-auto
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-amber-400/30
            px-6
            py-3
            text-xs
            uppercase
            tracking-[0.18em]
            text-zinc-400
          "
        >
          
          <span className="text-amber-400">🌸</span>
          Always learning. Always growing.
        </div>

      </div>

    </div>

  </div>
</section>
      

      {/* =====================================================
    CONTACT
===================================================== */}

<section
  id="contact"
  className="scroll-mt-28 px-6 py-32 md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* ================= HEADING ================= */}

    <div className="text-center">

      <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-400">
        GET IN TOUCH
      </p>

      <h2 className="mt-4 text-6xl font-black uppercase leading-none md:text-8xl">
        LET'S{" "}
        <span className="text-fuchsia-500">
          CONNECT
        </span>
      </h2>

      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-fuchsia-500" />

    </div>


    {/* ================= MAIN CONTENT ================= */}

    <div className="mt-20 grid gap-16 md:grid-cols-2">


      {/* =================================================
          LEFT — INTRO + SOCIALS
      ================================================= */}

      <div className="flex flex-col justify-between">

        <div>

          <p className="max-w-xl text-4xl font-black uppercase leading-[0.95] md:text-5xl">

            LET'S BUILD
            <br />

            SOMETHING

            <span className="text-fuchsia-500">
              {" "}DIFFERENT.
            </span>

          </p>


          <p className="mt-8 max-w-lg text-base leading-8 text-zinc-500">
            Have an idea, project or opportunity in mind?
            I'm always open to creative collaborations,
            freelance projects and interesting digital ideas.
          </p>


          {/* EMAIL */}

          <a
            href="mailto:nityawsth@gmail.com"
            className="
              mt-10
              inline-flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-[#101010]
              px-5
              py-4
              text-sm
              text-zinc-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-fuchsia-500/50
              hover:text-fuchsia-400
            "
          >

            {/* Mail Icon */}

            <span
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-xl
                bg-fuchsia-500/10
                text-fuchsia-400
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25V6.75z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.5 6l8.5 7 8.5-7"
                />
              </svg>

            </span>

            {/* <span>
              nityawsth@gmail.com
            </span> */}

          </a>

        </div>


        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <div className="mt-20">

          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-zinc-600">
            CONNECT WITH ME
          </p>


          <div className="flex gap-4">


            {/* ================= LINKEDIN ================= */}

            <a
              href="https://www.linkedin.com/in/nitya-awasthi-113a12311"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group
                flex h-14 w-14
                items-center justify-center
                rounded-full
                border border-white/10
                bg-[#101010]
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-fuchsia-500
                hover:bg-fuchsia-500
                hover:text-black
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2 2 0 103.25 5a2 2 0 002-2zM20.44 13.1c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.1-3.38 1.88V8.5H9.36V20h3.38v-6.4c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V20h3.38l-.2-6.9z" />
              </svg>

            </a>


            {/* ================= GITHUB ================= */}

            <a
              href="https://github.com/nityawsth-oss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                flex h-14 w-14
                items-center justify-center
                rounded-full
                border border-white/10
                bg-[#101010]
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-fuchsia-500
                hover:bg-fuchsia-500
                hover:text-black
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.04 0-1.11.38-2.02 1-2.73-.1-.26-.43-1.3.1-2.7 0 0 .82-.27 2.75 1.04a9.3 9.3 0 015 0c1.93-1.31 2.75-1.04 2.75-1.04.53 1.4.2 2.44.1 2.7.62.71 1 1.62 1 2.73 0 3.9-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.23 10.23 0 0022 12.22C22 6.58 17.52 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>

            </a>


            {/* ================= EMAIL ================= */}

            <a
              href="mailto:nityawsth@gmail.com"
              aria-label="Email"
              className="
                group
                flex h-14 w-14
                items-center justify-center
                rounded-full
                border border-white/10
                bg-[#101010]
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-fuchsia-500
                hover:bg-fuchsia-500
                hover:text-black
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.5 7l8.5 6 8.5-6"
                />
              </svg>

            </a>

          </div>

        </div>

      </div>


      {/* =================================================
          RIGHT — CONTACT FORM
      ================================================= */}

      <div
        className="
          rounded-[30px]
          border border-white/10
          bg-[#101010]
          p-7
          shadow-2xl
          md:p-10
        "
      >

       
          <form
            ref={form}
            className="space-y-7"
            onSubmit={sendEmail}
              >
        


          {/* NAME */}

          <div>

            <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
              YOUR NAME
            </label>

            <input
         type="text"
         name="from_name"
         placeholder="Your name"
         className="
                w-full
                rounded-xl
                border border-white/10
                bg-[#151515]
                px-5 py-4
                text-sm text-white
                outline-none
                placeholder:text-zinc-700
                transition-all duration-300
                focus:border-fuchsia-500
                focus:ring-1
                focus:ring-fuchsia-500/30
              "
            />

          </div>


          {/* EMAIL */}

          <div>

            <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
              YOUR EMAIL
            </label>

            <input
              type="email"
              name="from_email"
              placeholder="you@example.com"
              className="
                w-full
                rounded-xl
                border border-white/10
                bg-[#151515]
                px-5 py-4
                text-sm text-white
                outline-none
                placeholder:text-zinc-700
                transition-all duration-300
                focus:border-fuchsia-500
                focus:ring-1
                focus:ring-fuchsia-500/30
              "
            />

          </div>


          {/* MESSAGE */}

          <div>

            <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
              YOUR MESSAGE
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              className="
                w-full
                resize-none
                rounded-xl
                border border-white/10
                bg-[#151515]
                px-5 py-4
                text-sm text-white
                outline-none
                placeholder:text-zinc-700
                transition-all duration-300
                focus:border-fuchsia-500
                focus:ring-1
                focus:ring-fuchsia-500/30
              "
            />

          </div>


          {/* SEND BUTTON */}

          <button
            type="submit"
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-white
              px-6
              py-4
              text-sm
              font-black
              uppercase
              text-black
              transition-all duration-300
              hover:scale-[1.02]
              hover:bg-fuchsia-500
              hover:text-white
            "
          >

            SEND MESSAGE

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>

          </button>

        </form>

      </div>

    </div>
  </div>
</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/10 px-6 py-8 md:px-12">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs text-zinc-600 md:flex-row">

          <p>
            © 2026 NITYA.DEV
          </p>

          <p>
            UI / UX • DEVELOPMENT • CREATIVE TECHNOLOGY
          </p>

        </div>

      </footer>

    </main>
  );
}

export default App;