import React, { useContext } from 'react'
import Popular from '../components/Popular/Popular.jsx';
import Welcome from '../components/Welcome-text/Welcome.jsx';

function Home() {

  return (
    <>
        <Welcome/>
        <Popular/>
    </>
  )
}

export default Home