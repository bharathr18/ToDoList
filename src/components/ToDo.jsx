// import React from 'react'

// function ToDo({ toDos }) {
//     return (
//         <div className='todo'>
//             <p>{toDos}</p>
//             <div className='actions'>
//                 <input type='checkbox' />
//                 <button>Delete</button>
//             </div>
//         </div>
//     )
// }

// export default ToDo

import React from 'react';

function ToDo({ toDo, index, delToDo }) {  // Rename prop to 'toDo'
    return (
        <div className="todo">
            <p>{toDo}</p>
            <div className="actions">
                <input type="checkbox" />
                <button onClick={() => delToDo(index)}>Delete</button>
            </div>
        </div>
    );
}

export default ToDo;
