import axios from 'axios';
import React, { useEffect } from 'react'
import styles from './constanst/style';

import { Navbar, Hero, Button, Bisines, Billing, CardDeal, Testimontns, CTA, Footer, Client, State } from './components';
const App = () =>
(
  <div className='bg-primary w-full overflow-hidden ' >
    <div className={`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`} >
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary  ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`} >
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`} >
        <State />
        <Bisines />
        <Billing />
        <CardDeal />
        <Testimontns />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>


  </div>
);


export default App;