import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = {
    [todoListID: string]: Array<TaskType>
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(id: string, todolistID: string) {
        let filteredTasks = tasks[todolistID].filter(t => t.id != id);
        setTasks({...tasks, [todolistID]: filteredTasks});
    }

    function addTask(title: string, todolistID: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks[todolistID]];
        setTasks({...tasks, [todolistID]: newTasks});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistID: string) {
        let task = tasks[todolistID].map(t => t.id === taskId ? {...t, isDone: isDone} : t);
        setTasks({...tasks, [todolistID]: task});
    }

    function changeFilter(filter: FilterValuesType, todolistID: string) {
        const filteredTodolist = todolists.map(tl => tl.id === todolistID ? {...tl, filter: filter} : tl)
        setTodolists(filteredTodolist);
    }


    const todolistComponents = todolists.map(tl => {

        let tasksForTodolist = tasks[tl.id];

        if (tl.filter === "active") {
            tasksForTodolist = tasks[tl.id].filter(t => t.isDone === false);
        }
        if (tl.filter === "completed") {
            tasksForTodolist = tasks[tl.id].filter(t => t.isDone === true);
        }
        return (
            <Todolist key={tl.id}
                      id={tl.id}
                      title={tl.title}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={tl.filter}
            />
        )
    })

        return (
            <div className="App">
                {todolistComponents}
            </div>
        );
    }
    export default App;
