
import Button from "./Components/Button"
import HabitForm from "./Components/HabitForm"
import { Header } from "./Components/Header"
import HabitList from "./Components/HabitList"

export default function App(){
  return (
    <div id="" className="max-w-2xl mx-auto p-4 flex flex-col gap-4">

      <Header />
      <HabitForm /> 
      <HabitList />


    </div> 
  )

}

