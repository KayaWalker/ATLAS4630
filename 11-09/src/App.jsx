import MyButton from "./MyButton.jsx";
import MyList from "./MyList.jsx";

export default function App() {
  return (
    <div>
      <h1>Welcome to my React App!</h1>
      <MyButton isSpecial={true} text=";)" />
      <MyButton isSpecial={false} text=":("/>
      <MyList />
    </div>
  )
}