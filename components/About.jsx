import Image from "next/image";

const About = () => {
  return (
    <div className="about bg-black/95">
      <div className="header-img relative">
        <Image
          src="/header-img.jpg"
          alt="image"
          className="image -z-10"
          width="2000"
          height="500"
        />
        <h1 className="text-5xl text-[#D4E4F3] font-bold mt-[-1rem] absolute top-[40%] left-[39%] z-10">
          <span className="text-[#99be20] text-5xl mr-2">Why</span>
          accounted
          <span className="text-[#99be20] text-6xl">.</span>
        </h1>
      </div>

      <section className="description container mx-auto text-[#D4E4F3]">
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
        <div className="table">
          <div className="table-col-1">
            <h3 className="title-text">Why Our Clients Love Us:</h3>
            <ul className="paragraph">
              <li>We regularly save them a lot of money.</li>
              <li>
                We provide competitive, fixed-fee tax planning and accounting
                planning.
              </li>
              <li>Exceptional experts are part of our network.</li>
            </ul>
          </div>
          <div className="table-col-2">
            <p className="paragraph">
              Our main priority is to provide excellent service and competent
              guidance at a reasonable cost.
            </p>
            <ul className="paragraph">
              <li>
                Our entire network of seven branches offers the same standard of
                excellent accounting services that we deliver.
              </li>
            </ul>
          </div>
        </div>

        <p className="serivces-title">Our Services</p>
        <p className="paragraph">
          Our skilled professionals have a combined experience of 110 years.
          Here at Accounted, we are committed to assisting you along your
          financial journey. Among our primary services are the following:
        </p>
        <div className="service-table">
          <div className="service-left">
            <h3 className="title-text">Tax planning and preparation</h3>
          </div>
          <div className="service-middle">
            <h3 className="title-text">Operational bookkeeping and payroll</h3>
          </div>
          <div className="service-right">
            <h3 className="title-text">Business Development</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
