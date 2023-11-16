import Button from './button.jsx';
import Card from './Card.jsx';
import './App.css';

export default function App() {
  const [ count, setCount ] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  
  return (
  <>
  <CountContext.Provider value={0}>
    <h1>Hello World!</h1>
    <Button count={count} incrementCount={incrementCount}/>
    <Button count={count} incrementCount={incrementCount}/>
    <Card padding = "large">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto temporibus dolorum voluptates unde reiciendis nostrum. Autem numquam sed quibusdam facere magnam, magni qui labore rem nisi minus exercitationem dolores tenetur?</p>
    </Card>
    <Card padding="small">
      <Button count={count} incrementCount={incrementCount}/>
    </Card>
  </CountContext.Provider>
  </>
  );
}