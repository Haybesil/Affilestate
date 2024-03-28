import React from 'react';
import Navbar from '../../navbar/Navbar';
import Heroheader from '../../heroheader/Heroheader';
import Main from '../../main/Main';
import Mainbody from '../../mainbody/Mainbody';
import Bodysection from '../../bodysection/Bodysection';
import Mainfooter from '../../mainfooter/Mainfooter';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroheader />
      <Main />
      <Mainbody />
      <Bodysection />
      <Mainfooter />
    </div>
  );
};

export default Home;
