import {React, useEffect} from 'react';
import Image1 from '../../assets/images/aboutmainhero/image1.png';
import Image2 from '../../assets/images/aboutmainhero/image2.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Aboutmainhero = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col md:mt-[8vh] mt-[4vh] mx-[8vw]">
          <div className="flex flex-col justify-center gap-[30px] mt-[10vh]" data-aos="fade-down" data-aos-duration='2000'>
            <h1 className="text-[38px] font-[700] text-primary-Black60 md:text-left text-center">
              Our Vision
            </h1>
            <p className="md:w-[75%] text-[15px] font-[500] text-primary-Black40 leading-[26px] md:text-left text-center">
              Get access to only the best selected tutors from all over the
              world. Learn from experienced experts hand picked just for you .
              Learning is a continuous process. Build a reputable brand by
              choosing us.Get access to only the best selected tutors from all
              over the world. Learn from experienced experts hand picked just
              for you . Learning is a continuous process. Build a reputable
              brand by choosing us.Get access to only the best selected tutors
              from all over the world. Learn from experienced experts hand
              picked just for you . Learning is a continuous process. Build a
              reputable brand by choosing us
            </p>
          </div>

          <div className="w-[200%]" data-aos="fade-up" data-aos-duration='2000'>
            <div className='relative md:top-[36vh] md:right-[4vw] top-[40vh] left-[21vw] bg-primary-AffilestateBlue60 md:w-[45%] w-[30%] py-[10px] px-[15px]'>
              <p className='text-[15px] text-center text-primary-AffilestateBlue10 font-[700]'>John Jude Felix</p>
              <p className='text-[14px] text-center text-primary-AffilestateBlue10 font-[500]'>CEO-Blue</p>
            </div>
            <img src={Image1} alt="" className='md:w-[527px] md:h-[357px] w-[360px]'/>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-[15vw] mt-[16vh] mx-[8vw]">
            <div className='md:w-[40%]' data-aos="fade-right" data-aos-duration='2000'>
                <img src={Image2} alt="" className='md:w-[527px] h-[337px] w-[100%]'/>
            </div>

            <div className='flex flex-col gap-[20px] justify-center md:w-[45%] md:text-left text-center mt-[3vh]' data-aos="fade-left" data-aos-duration='2000'>
                <h1 className='text-[38px] font-[700] text-primary-Black60'>Our Story</h1>
                <p className='text-[15px] font-[500] text-primary-Black40 leading-[26px]'>Get access to only the best selected tutors from all over the world. Learn from experienced experts hand picked just for you . Learning is a continuous process. Build a reputable brand by choosing us.Get access to only the best selected tutors from all over the world. Learn from experienced experts hand picked just for you . Learning is a continuous process. Build a reputable brand by choosing us.Get access to only the best selected tutors from all over the world. Learn from experienced experts hand picked just for you . Learning is a continuous process. Build a reputable brand by choosing us</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Aboutmainhero;
