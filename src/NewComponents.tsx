import React from 'react';

// type NewComponentsType= {
//     students:Array<StudentType>
//     //students:StudentType[]
// }
// type StudentType={
//     id: number,
//     name: string,
//     age: number
// }
// export const NewComponent = (props:NewComponentsType) => {
//      return (
//          <ul>
//              {props.students.map((objectFromStudentArray, index)=>{
//                  return(
//                      <li key={objectFromStudentArray.id}>
//                          <span> {objectFromStudentArray.name}</span>
//                          <span> age: {objectFromStudentArray.age}</span>
//                      </li>
//                  )
//              }) }
//          </ul>
//     )
// }
type NewComponentsType = {
    topCars: Array<topCarsType>
}
type topCarsType = {
    manufacturer: string,
    model: string
}


export const NewComponent = (props: NewComponentsType) => {
    return (
        <table>
            {props.topCars.map((objectsFromTopCars, index) => {
                return (
                    <tr key={index + 1}>
                        <td>{objectsFromTopCars.manufacturer}</td>
                        <td>{objectsFromTopCars.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}