import { MouseEvent, useState } from "react";

interface ListGroupProps{
    items: string[];
    heading: string;
}
// o react cria um objeto para esse elemento a partir dos atributos passados na tag, nesse caso, o elemento vai ser do tipo ListGroupsProps, ou seja, estamos criando um obejto dessa classe/Interface

function ListGroup({items, heading}: ListGroupProps){

    //Hook  
    //-> 0: varibale (selectedIndex variable)
    //-> 1: updater function
    const [selectedIndex, setSelectedIndex]  = useState(-1);

    const handle = (event : MouseEvent, item : string, index : number) =>{
        console.log('clicked', item, index);
        setSelectedIndex(index);
 
    }

    const getMessage = () =>{
        return items.length === 0 && <p> No item found</p>;
    }

    return (<>
        <h1>List</h1>
        {getMessage()}
        <ul className="list-group">
        {items.map((item, index)=>{return <li className = {selectedIndex === index? 'list-group-item active': 'list-group-item'}
        onClick={(e)=>{handle(e, item, index)}} key={item}>{item}</li>})}
        </ul>
    </>);
}

export default ListGroup;