import React, {useState}from 'react'

const RoomPage: React.FC = () =>  {
  const [swithTheme, setSwithTheme] = useState(true);

  return ( 
    <div className={swithTheme ? "page" : "page-black"}>
      
    </div>
  )
}

export default RoomPage