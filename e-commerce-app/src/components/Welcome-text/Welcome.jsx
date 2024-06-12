import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import './Welcome.css'

function Welcome() {
    const userCtx = useContext(UserContext);
  return (
    <div className="welcome">
        <h1>Welcome {userCtx.name}!</h1>
        <h2>Check some of our popular offers</h2>
    </div>
  )
}

export default Welcome