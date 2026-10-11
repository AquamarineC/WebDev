
import Button from "./Button";

function HabitList(){

    const habits = [
        {id:1, name: "网球" },
        {id:2, name: "射击" },
        {id:3, name: "编程" },
        {id:4, name: "健身" },

    ];

    if(habits.length === 0){
        return <p className="text-center text-zinc-500 py-12">No habits yet. Add one above to get started!</p>
    } else {
       return (
            <div >
              {habits.map(habit => (<HabitItem key={habit.id} habit = {habit} />) )}
              
            </div>
       )
    
    }
}


function HabitItem({habit}){


    return(
        <div id="border" className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
            <div className= "flex items-center justify-between mb-3">
                <div className="flex gap-3 items-center">

                    <span className="font-medium">{habit.name}</span>
                    <span className="text-sm text-amber-400">Strike 3</span>

                </div>
                <Button>Delete</Button>
            </div> 
            <div className="flex gap-1.5">
                map
            </div>
        </div>
    )
}





export default HabitList