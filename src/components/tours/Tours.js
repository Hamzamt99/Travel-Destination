
import Tour from './tour/Tour';

export default function Tours({data}){
    
    return(
        <>
        {
            data.map(item =>{
                return(
                    <Tour  item = {item}/>
                )
            })
        }
       
        </>
    )
}