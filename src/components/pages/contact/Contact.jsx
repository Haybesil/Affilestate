import { React, useEffect } from 'react';
import Image1 from '../../../assets/images/contact/contact.png';
import Navbar from '../../navbar/Navbar';
import Mainfooter from '../../mainfooter/Mainfooter';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const Address = (prop) => {
    return (
      <div className="flex gap-[15px] mt-[20px] overflow-x-hidden">
        <div>
          <h1 className="md:text-[22px] text-[20px] font-[500] text-primary-AffilestateBlue60">
            {prop.title}
          </h1>
        </div>
        <div>
          <p className="text-primary-Black60 md:text-[20px] text-[17px] font-[400]">
            {prop.address}
          </p>
          <p className="text-primary-Black60 md:text-[20px] text-[17px] font-[400]">
            {prop.state}
          </p>
          <p className="text-primary-Black60 md:text-[20px] text-[17px] font-[400]">
            {prop.email}
          </p>
          <p className="text-primary-Black60 md:text-[20px] text-[17px] font-[400]">
            {prop.phone}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col md:flex-row gap-[40px] mx-[8vw] mt-[8rem]">
  <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-duration="3000">
    <div className="flex flex-col gap-5">
      <h1 className="text-[20px] text-primary-AffilestateBlue60">Contact Us</h1>
      <p className="text-[20px]">
        Visit any of our outlets to see our agents for more information and for site viewing.
      </p>
    </div>
    <div>
      <Address
        title="Home Office:"
        address="22, Joseph Adebayo street, Abule Oja, Yaba"
        state="Lagos, Nigeria"
        email="affilestatesheadoffice@gmail.com"
        phone="+23470897654321"
      />
      <Address
        title="Branch One:"
        address="22, Joseph Adebayo street, Abule Oja, Yaba"
        state="Lagos, Nigeria"
        email="affilestatesheadoffice@gmail.com"
        phone="+23470897654321"
      />
      <Address
        title="Branch Two:"
        address="22, Joseph Adebayo street, Abule Oja, Yaba"
        state="Lagos, Nigeria"
        email="affilestatesheadoffice@gmail.com"
        phone="+23470897654321"
      />
    </div>
  </div>

  <div className="w-[300px] md:w-1/2 relative">
    <div className="w-full md:h-[500px] h-[300px] border"></div>
    <img
      src={Image1}
      alt=""
      className="absolute top-[5vh] left-[7vw] md:top-[10vh] md:left-[6vw] md:h-[500px] w-full h-[300px]"
      data-aos="fade-down"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="3000"
    />
  </div>
</div>

        <Mainfooter />
      </div>
    </>
  );
};

export default Contact;
