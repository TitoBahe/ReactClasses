import ListGroup from "./components/ListGroup";
function App(){
  let items = ['Recife', 'Alagoas', 'Sei la'];
  return <div><ListGroup items={items} heading={"Cities"}></ListGroup></div>
}

export default App;