import React, { useState } from 'react';

import Navigation from '../../components/Navigation';
import Card from '../../components/Card';
import TabPage from './tabPages/Index';

import Creation from './siderPage/Creation';
import AdvBtns from './siderPage/AdvBtns';
import SelfFunctions from './siderPage/selfFunc';

export default function Home() {


    const [hide, setHide] = useState(true);

    const handleChange = (isHide) => {
        setHide(isHide);
    }

  return (
    <div className='bg-gray-100'>
        <Navigation className="sticky top-0" hide={hide} ></Navigation>
        <div className='mx-auto w-320 max-w-7xl flex my-2 px-20'>
            <Card className="w-2/3">
                <TabPage onChange={handleChange} /> 
            </Card>
            <div className='w-1/3'>
                <Card  >
                    <Creation />
                </Card>
                <Card><AdvBtns /></Card>
                <Card><SelfFunctions /></Card>
            </div>
        </div>
    </div>
  )
}
