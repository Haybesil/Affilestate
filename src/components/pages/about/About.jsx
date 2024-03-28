import React, { Fragment } from 'react';
import Navbar from '../../navbar/Navbar';
import Abouthero from '../../abouthero/Abouthero';
import Aboutmainhero from '../../aboutmainhero/Aboutmainhero';
import Bodysection from '../../bodysection/Bodysection';
import Mainfooter from '../../mainfooter/Mainfooter';
import Aboutteam from '../../aboutteam/Aboutteam';

const About = () => {
  return (
    <Fragment>
      <div>
        <Navbar />
        <Abouthero/>
        <Aboutmainhero/>
        <Aboutteam/>
        <Bodysection/>
        <Mainfooter/>
      </div>
    </Fragment>
  );
};

export default About;
