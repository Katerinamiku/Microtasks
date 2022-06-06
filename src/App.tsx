import React, {MouseEvent, useState} from 'react';
import './App.css';
import {FullInput} from './components/FulInput'
import {Button} from "./components/button";
import {Input} from './components/Input'

//Six microtask------------------/INPUT/------------------

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}, //<---приходят с сервера
    ])

    let [title, setTitle] = useState('') //создали локальный стейт из инпута здесь, тк нужно чтобы он потом
    // передвался в на button

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]) //к старым добавляем новые (все message)
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className={'App'}>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input
                setTitle={setTitle}
                title={title}
            />
            <Button
                name={'+'}
                callBack={callBackButtonHandler}
            />
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App


//Forth and fifth microtask------------/FILTER/---------------

// type FilterType = 'all' | 'dollars' | 'rubles'
//
// function App() {
//     const [money, setMoney] = useState([
//         {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
//         {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//         {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
//     ])
//
//     const [filter, setFilter] = useState<FilterType>('all')
//
//     let currentMoney = money;
//     if (filter === 'rubles') {
//         currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
//     } else if (filter === 'dollars') {
//         currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
//     }
//
//
//     const onClickFilterHandler = (nameButton: FilterType) => {
//         setFilter(nameButton)
//     }
//     return (
//         <>
//             <ul>
//                 {currentMoney.map((objFromMoneyArr, index) => {
//                     return (
//                         <li key={index}>
//                             <span> {objFromMoneyArr.banknots}</span>
//                             <span> {objFromMoneyArr.value}</span>
//                             <span> {objFromMoneyArr.number}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//             <div style={{marginLeft: '35px'}}>
//                 <button onClick={() => onClickFilterHandler('all')}>All</button>
//                 <button onClick={() => onClickFilterHandler('rubles')}>Rubles</button>
//                 <button onClick={() => onClickFilterHandler('dollars')}>Dollars</button>
//             </div>
//         </>
//     );
// }
//
//
// export default App;


//Third microtask--------------/BUTTON/----------------------------------

// -----------------------------------Базовая кнопка-------------------
// type ButtonPropsType = {
//     name: string
//     callBack: () => void
// }
//
// export const Button = (props: ButtonPropsType) => {
//     const onClickButtonHandler = () => {
//         props.callBack()
//     }
//     return (
//         <button onClick={onClickButtonHandler}>{props.name}</button>
//     )
// }
//----------------------------------------------------------------------------

// function App() {
//     // let a = 1
//     let [a, setA] = useState(1)
//
//     const onClickHandler = () => {
//         setA(++a)
//
//     }
//     const onClickHandlerNull = () => {
//         setA(a = 0)
//
//     }
//     return (
//         <div className="App">
//             <h1>
//                 {a}
//             </h1>
//             <button onClick={onClickHandler}>number</button>
//             <button onClick={onClickHandlerNull}>0</button>
//         </div>
//     );
// }
//
//
// export default App;


// Second microtask
// Task 3-----------
//import {Button} from './components/button'
// function App() {
//     const Button1Foo = (subscriber: string, age: number) => {
//         console.log(subscriber, age)
//     }
//     const Button2Foo = (subscriber: string, age: number) => {
//         console.log(subscriber, age)
//     }
//     const Button3Foo = () => {
//         console.log('Im stupid button')
//     }
//
//     return (
//         <div className={'App'}>
//             <Button name={'myYoutubeChannel-1'} callBack={()=>Button1Foo('Vasya', 21)}/>
//             <Button name={'myYoutubeChannel-2'} callBack={()=>Button2Foo('Ivan', 34)}/>
//             <Button name={'myYoutubeChannel-3'} callBack={Button3Foo}/>
//         </div>
//     );
// }
//
// export default App;
//

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
