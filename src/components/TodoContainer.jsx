// import React from 'react'
// import ToDo from './ToDo'

// function TodoContainer({ toDos }) {
//     return (
//         <div className='container'>
//             {toDos.map((todo) => {
//                 return (
//                     <ToDo todo={todo} />
//                 )
//             })}
//         </div>
//     )
// }

// export default TodoContainer
import React from 'react';
import ToDo from './ToDo';

function TodoContainer({ toDos, delToDo }) {
    return (
        <div className="container">
            {toDos.map((todo, index) => (
                <ToDo key={index} toDo={todo} index={index} delToDo={delToDo} />
            ))}
        </div>
    );
}

export default TodoContainer;
