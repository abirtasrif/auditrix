"use client";
import Image from "next/image";
import { FaRegLightbulb, FaDollarSign } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const About = () => {
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    smooth: true,
  });
  useEffect(() => {
    AOS.init();
  }, []);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="about bg-black/95">
      <div
        className="header-img relative"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Image
          src="/header-img.jpg"
          alt="image"
          className="image -z-10"
          width="2000"
          height="500"
        />
        <h1
          className="text-5xl text-[#D4E4F3] font-bold mt-[-1rem] absolute top-[40%] left-[39%] z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <span className="text-[#99be20] text-5xl mr-2">Why</span>
          auditrix
          <span className="text-[#99be20] text-6xl">.</span>
        </h1>
      </div>

      <section className="description container mx-auto px-20 py-10">
        <p className="paragraph">
          Accounted are a tax and financial company that helps business owners
          stay organised financially and helps their businesses grow. We provide
          professional tax services that include both compliance and advisory.
        </p>
        <h3 className="title-text">Goal</h3>
        <p className="paragraph">
          Our goal is to empower our clients and create a mutually beneficial
          relationship by assisting them in all aspects of their financial
          lives.
        </p>
        <h3 className="title-text">Vision</h3>
        <p className="paragraph">
          The adequate provision of our services to our clients is central to
          our mission of helping our 10,000+ clients and fostering financial
          pleasure.
        </p>
        <div className="client-table flex justify-between gap-10 mb-32 pt-16">
          <div
            className="table-col-left w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="title-text">Why Our Clients Love Us:</h3>
            <ul className="paragraph">
              <li className="bullet">We regularly save them a lot of money.</li>
              <li className="bullet">
                We provide competitive, fixed-fee tax planning and accounting
                planning.
              </li>
              <li className="bullet">
                Exceptional experts are part of our network.
              </li>
            </ul>
          </div>
          <div
            className="table-col-right w-full"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="title-text">Our Client Care Charter</h3>
            <p className="paragraph">
              Our main priority is to provide excellent service and competent
              guidance at a reasonable cost.
            </p>
            <ul className="paragraph">
              <li className="bullet">
                Our entire network of seven branches offers the same standard of
                excellent accounting services that we deliver.
              </li>
            </ul>
          </div>
        </div>

        <p
          className="serivces-title text-center my-10"
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          Our Services
        </p>
        <p
          className="paragraph text-center mb-16"
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          Our skilled professionals have a combined experience of 110 years.
          Here at Accounted, we are committed to assisting you along your
          financial journey. Among our primary services are the following:
        </p>
      </section>
      <section className="container mx-auto pb-20 text-center ">
        <div className="service-table grid grid-cols-3 gap-4">
          <div
            className="service-left flex flex-col items-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            <FaRegLightbulb className="service-icon" />
            <h3 className="service-title my-7 leading-8 h-16">
              Tax planning and preparation
            </h3>
            <a
              href="#"
              className="border-2 rounded-full px-14 py-2 text-white border-gray-400/50 hover:bg-[#99be20] hover:text-black duration-300 hover:border-[#99be20]"
            >
              Read More
            </a>
          </div>
          <div
            className="service-middle flex flex-col items-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <HiOutlineSpeakerphone className="service-icon" />
            <h3 className="service-title my-7 leading-8 h-16">
              Operational bookkeeping and payroll
            </h3>
            <a
              href="#"
              className="border-2 rounded-full px-14 py-2 text-white border-gray-400/50 hover:bg-[#99be20] hover:text-black hover:border-[#99be20] duration-300"
            >
              Read More
            </a>
          </div>
          <div
            className="service-right flex flex-col items-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <FaDollarSign className="service-icon" />
            <h3 className="service-title my-7 leading-8 h-16">
              Business Development
            </h3>
            <a
              href="#"
              className="border-2 rounded-full px-14 py-2 text-white border-gray-400/50 hover:bg-[#99be20] hover:text-black hover:border-[#99be20] duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
