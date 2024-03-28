import {React, useEffect }from 'react';
import Scope from '../../assets/images/main/Scope.png';
import Eye from '../../assets/images/main/Eye.png';
import Moneybag from '../../assets/images/main/Moneybag.png';
import Buyer from '../../assets/images/main/Buyer.png';
import Management from '../../assets/images/main/Management.png';
import Customer from '../../assets/images/main/Customer.png';
import '../../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


const Main = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const Services = [
    {
      imgUrl: Scope,
      header: 'Property Search',
      paragraph:
        'Browse through  our extensive database of property listings to find homes, apartments, commercial spaces, or investment properties that match your criteria.',
    },
    {
      imgUrl: Eye,
      header: 'In-Person Property Viewings',
      paragraph:
        'Arrange and attend in-person property viewings with our real estate agents to see the shortlisted properties in person and assess them firsthand.',
    },
    {
      imgUrl: Moneybag,
      header: 'Property Valuation',
      paragraph:
        'Receive professional property valuation services to understand the market value of their property.',
    },
    {
      imgUrl: Buyer,
      header: 'Buyer Consultations',
      paragraph:
        'Schedule consultations with our real estate agents to discuss home buying preferences, budget, and specific requirements.',
    },
    {
      imgUrl: Management,
      header: 'Transaction Management',
      paragraph:
        'Throughout the buying or selling process, manage the documents, agreements, and communications related to your transactions on our secure platform.',
    },
    {
      imgUrl: Customer,
      header: 'Customer Support',
      paragraph:
        'Reach out to our dedicated customer support team for any queries, assistance, or technical support.',
    },
  ];

  return (
    <div className="grid-container mt-[20vh] mx-[8vw]" data-aos="fade-up" data-aos-duration="3000">
      <h1 className="text-[40px] text-primary-AffilestateBlue60 font-[600] text-center mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3  gap-[30px]">
        {Services.map((service, index) => (
          <div className="grid-item flex flex-col gap-[20px]" key={index}>
            <img src={service.imgUrl} alt="" className="w-[60px]" />
            <h1 className="text-[25px] font-[700]">{service.header}</h1>
            <p className="text-[14px] font-[500]">{service.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
