import data from '../../data/db.json'
import Tours from '../tours/Tours'
export default function Home(){
    return(
        <>
         <Tours  data={data}/>
        </>
    )
}