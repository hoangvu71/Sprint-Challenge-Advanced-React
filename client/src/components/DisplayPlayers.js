import React, {useState} from "react"

function DisplayPlayers(props) {
    const [players, showPlayers] = useState([])
    const slicePlayers = () => {
        let oldData = props.data;
        let newData = oldData.slice(0, props.showPlayers)
        console.log(newData);
        showPlayers(newData)
        props.handleShowPlayers();
    };
    return (
        <div>
            <h2>Women World Cup's players:</h2>
            <div>{players.map(ele =>
                <div>
                    <div>{`${ele.name} Country: ${ele.country}`}</div>

                </div>
            )}</div>
            <button data-testid="btnShowMore" onClick={slicePlayers}>Show More</button>
        </div>
    )
}







export default DisplayPlayers