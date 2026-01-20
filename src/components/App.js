import React from 'react'
import Tabs from './Components/Tabs';

const App = () => {
  const tabsData = [
  { title: "Home", content: <div>Home Content</div> },
  { title: "Profile", content: <div>Profile Content</div> },
  { title: "Settings", content: <div>Settings Content</div> }
];
  return (
    <div>
      <h2>Tabs</h2>
      <Tabs tabs={tabsData}/>
    </div>
  )
}

export default App