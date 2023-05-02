import { useParams } from "react-router-dom"
import { useState } from "react";

export default function TourDetails({ data }) {
    const [showFullDes, setshowFullDes] = useState()
    let { id } = useParams()
    // console.log(id)
    const filtered = data.find(sele => sele.id === id)

    // console.log(filtered)

    // const arr = filtered[0];
    // settext(filtered[0])
    function showFullDesHandler() {


        setshowFullDes(!showFullDes)




    }
    const divStyle = {
        color: 'blue',
        width: '100%',

        
      };
    return (
        <>
            <h2>{filtered.name}</h2>
            <img src={filtered.image} />
            <p>{showFullDes ? filtered.info : filtered.info.substring(0, 300)} <a style={divStyle} onClick={showFullDesHandler}>{showFullDes ? "  see less!" : "  see more!"}</a></p>
            
            
        </>
    )





}