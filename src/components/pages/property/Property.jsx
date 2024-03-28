import React from 'react'
import Navbar from '../../navbar/Navbar'
import Propertyhero from '../../propertyhero/Propertyhero'
import Propertysection from '../../propertysection/Propertysection'
import Propertymain from '../../propertymain/Propertymain'
import Mainfooter from '../../mainfooter/Mainfooter'
import Propertylast from '../../propertylast/Propertylast'
import Propertyhead from '../../propertyhead/Propertyhead'

const Property = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/> 
       <Propertyhead/>
       <Propertyhero/>
       <Propertymain/>
       <Propertysection/>
       <Propertylast/>
       <Mainfooter/>
    </div>
  )
}

export default Property
