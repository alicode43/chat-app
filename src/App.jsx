import './App.css'
import Header from './header/header'
import Communty from './community/community'
import Invite from './Invite/invite'
import CommunityChat from './community/communityChat'

import Footer from './footer/footer'
function App() {
  

  return (
    <div className='main'>
      <div className='background-image'>
    {/* <CommunityChat/> */}
      <Header/>
    {/* <Communty/> */}
    {/* <Invite/> */}
      </div>

      <Footer/>
    </div>
  )
}


export default App
