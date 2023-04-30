
export default function Tours(props){

    return(
        <>
        {
        props.data.map(select =>

                <div key={select.id}>       
                    <p>{select.name}</p>
                    <img src={select.image}/>
                </div>
        )
        }
        </>
    )
}