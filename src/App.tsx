import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from './components/button'

// Second microtask
// Task 3-----------

function App() {
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button3Foo = () => {
        console.log('Im stupid button')
    }

    return (
        <div className={'App'}>
            <Button name={'myYoutubeChannel-1'} callBack={()=>Button1Foo('Vasya', 21)}/>
            <Button name={'myYoutubeChannel-2'} callBack={()=>Button2Foo('Ivan', 34)}/>
            <Button name={'myYoutubeChannel-3'} callBack={Button3Foo}/>
        </div>
    );
}

export default App;


// Task 2-----------------
// function App() {
//     const foo1 = () => {
//         console.log(100200)
//     }
//     const foo2 = (num: number) => {
//         console.log(num);
//     }
//     return(
//         <div className="App">
//             <button onClick={()=>foo1()}>1</button>
//             <button onClick={()=>foo2(100200)}>2</button>
//         </div>
//     );
// }
//
// export default App;

// Task1---------------
// function App() {
// const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
//     console.log('Hello, Im Vasya')
// }
// const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
//     console.log('Hello, Im Ivan')
// }

//     const onClickHandler=(name: string) => {
//         console.log(name)
//     }
//     return (
//         <div className="App">
//             {/*<button onClick={(event)=>{console.log('Hello')}}>myYoutubeChannel-1</button>*/}
//             <button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>myYoutubeChannel-1</button>
//             <button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>myYoutubeChannel-2</button>
//             <button onClick={()=> onClickHandler('Petr')}>myYoutubeChannel-3</button>
//         </div>
//     );
// }
//
// export default App;

// First microtask
// Task1-----------------
// import {NewComponent} from "./NewComponents";
//
// // const students = [
// //   {id: 1, name: "James", age: 8},
// //   {id: 2, name: "Robert", age: 18},
// //   {id: 3, name: "John", age: 28},
// //   {id: 4, name: "Michael", age: 38},
// //   {id: 5, name: "William", age: 48},
// //   {id: 6, name: "David", age: 58},
// //   {id: 7, name: "Richard", age: 68},
// //   {id: 8, name: "Joseph", age: 78},
// //   {id: 9, name: "Thomas", age: 88},
// //   {id: 10, name: "Charles", age: 98},
// // ]
//
// Task 2-------------------------
// const topCars = [
//   {manufacturer:'BMW', model:'m5cs'},
//   {manufacturer:'Mercedes', model:'e63s'},
//   {manufacturer:'Audi', model:'rs6'}
// ]
//
// function App() {
//   return (
//       <NewComponent  topCars={topCars}/>
//   )
// }
//
// export default App;
