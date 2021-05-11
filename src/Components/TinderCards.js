import React,{useState, useEffect} from 'react'
import "./CSS/TinderCards.css"
import TinderCard from "react-tinder-card"
import axios from "./Axios/Axios"

const TinderCards = () => {

    const [lastDirection,setLastDirection]=useState()
    const [people,setPeople]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/tinder/cards');
            setPeople(req.data)
        }
        fetchData()
    },[])


const swiped=(direction,nameToDelete)=>{
    console.log("removing" + nameToDelete)
    setLastDirection(direction)
}
const outOfFrame=(name)=>{
console.log(name +"left the screen")
}

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                  { people.map((p) => {
            return (
            <TinderCard
            className="swipe"
            key={p.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=> swiped(dir,p.name)}
            onCardLeftScreen={()=> outOfFrame(p.name)}
            >
                <div style={{backgroundImage: `url(${p.imgUrl}`}} className="card">
                    <h3>{p.name}</h3>
                </div>
            </TinderCard>
            )
            })}
            </div>
         
        </div>
    )
}

export default TinderCards
