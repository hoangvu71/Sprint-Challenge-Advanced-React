import React, { useState, useEffect } from "react"
import axios from "axios"
import DisplayPlayers from "./components/DisplayPlayers";
import useShowPlayers from "./components/hooks/useShowPlayers"

function App(){
  const [players, setPlayers] = useState([])
  const [showPlayers,setShowPlayers, handleShowPlayers] = useShowPlayers(10);
  
  useEffect(() => {
    axios
    .get("http://localhost:5000/api/players")
    .then(res => {
      console.log(res);
      setPlayers(res.data)
    })
    .catch(err => console.log(err))
  },[])
    return(
      <div>
        <DisplayPlayers handleShowPlayers={handleShowPlayers} data={players} showPlayers={showPlayers}/>
      </div>
    )
  }




export default App