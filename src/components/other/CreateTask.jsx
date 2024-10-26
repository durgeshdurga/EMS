// import React, { useContext, useState } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const CreateTask = () => {

//     const [userData, setUserData] = useContext(AuthContext)

//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDescription, setTaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [asignTo, setAsignTo] = useState('')
//     const [category, setCategory] = useState('')

//     const [newTask, setNewTask] = useState({})

//     const submitHandler = (e) => {
//         e.preventDefault()

//         setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

//         const data = userData

//         data.forEach(function (elem) {
//             if (asignTo == elem.firstName) {
//                 elem.tasks.push(newTask)
//                 elem.taskCounts.newTask = elem.taskCounts.newTask + 1
//             }
//         })
//         setUserData(data)
//         console.log(data);

//         setTaskTitle('')
//         setCategory('')
//         setAsignTo('')
//         setTaskDate('')
//         setTaskDescription('')

//     }

//     return (
//         <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
//             <form onSubmit={(e) => {
//                 submitHandler(e)
//             }}
//                 className='flex flex-wrap w-full items-start justify-between'
//             >
//                 <div className='w-1/2'>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//                         <input
//                             value={taskTitle}
//                             onChange={(e) => {
//                                 setTaskTitle(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
//                         />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//                         <input
//                             value={taskDate}
//                             onChange={(e) => {
//                                 setTaskDate(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
//                         <input
//                             value={asignTo}
//                             onChange={(e) => {
//                                 setAsignTo(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//                         <input
//                             value={category}
//                             onChange={(e) => {
//                                 setCategory(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
//                     </div>
//                 </div>

//                 <div className='w-2/5 flex flex-col items-start'>
//                     <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//                     <textarea value={taskDescription}
//                         onChange={(e) => {
//                             setTaskDescription(e.target.value)
//                         }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
//                     <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default CreateTask

import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskData, setTaskData] = useState({
        taskTitle: '',
        taskDescription: '',
        taskDate: '',
        asignTo: '',
        category: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => ({ ...prev, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const { taskTitle, taskDescription, taskDate, asignTo, category } = taskData;

        // Validate form fields
        if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
            alert("All fields are required");
            return;
        }

        const newTask = { 
            taskTitle, 
            taskDescription, 
            taskDate, 
            category, 
            active: false, 
            newTask: true, 
            failed: false, 
            completed: false 
        };

        const updatedUserData = userData.map((elem) => {
            if (asignTo === elem.firstName) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTask],
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1
                    }
                };
            }
            return elem;
        });

        setUserData(updatedUserData);
        setSuccessMessage('Task created successfully!');

        // Reset form fields
        setTaskData({
            taskTitle: '',
            taskDescription: '',
            taskDate: '',
            asignTo: '',
            category: ''
        });

        // Optional: Remove the success message after a few seconds
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            {successMessage && <div className='mb-2 text-green-500'>{successMessage}</div>}
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            name="taskTitle"
                            value={taskData.taskTitle}
                            onChange={handleChange}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            name="taskDate"
                            value={taskData.taskDate}
                            onChange={handleChange}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input
                            name="asignTo"
                            value={taskData.asignTo}
                            onChange={handleChange}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Employee name'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            name="category"
                            value={taskData.category}
                            onChange={handleChange}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Design, dev, etc.'
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                        name="taskDescription"
                        value={taskData.taskDescription}
                        onChange={handleChange}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
