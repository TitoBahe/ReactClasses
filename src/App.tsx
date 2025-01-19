import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App(){

  let items = ['Recife', 'Alagoas', 'Sei la'];
 

  const [AlertVisibility, setAlertVisibility] = useState(false);

  const handleSelectItem =  (item: string) =>{
    console.log('Do app.tsx', item);
    // setSelectedItem(item);
  }

  const onClickButton = () =>{
    setAlertVisibility(true);
    // console.log('item selected when clicked the button: ', selectedItem);
  }
  const onCloseAlert = () =>{
    setAlertVisibility(false);
  }

  return <div id="oi">
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup>
      {AlertVisibility && <Alert onCloseAlert={onCloseAlert}>Hellooooo <span>span1 bitches</span></Alert>}
      <Button color="primary" onClickButton={onClickButton}>
        cliqueAqui
      </Button>
    </div>
}

export default App;