import { Link } from "react-router-dom";

export default function Tour({item}){

    const divStyle = {
        color: 'blue',
        width: '100%',
      };
    //   console.log('test',item)
    return(
        <>
       
                    <Link to = {`/tours/${item.id}`}>  
                    <figure key = {item.id}> 
                        <p style={divStyle}>{item.name}</p>
                        <img src={item.image}/>
                        </figure>    
                    </Link>
         
          
            
            </>
                        
    )
}