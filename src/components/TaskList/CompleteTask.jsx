// import React from 'react'

// const CompleteTask = ({data}) => {
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
//             <div className='flex justify-between items-center'>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
//                 <h4 className='text-sm'>{data.taskDate}</h4>
//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//             <p className='text-sm mt-2'>
//                 {data.taskDescription}
//             </p>
//             <div className='mt-6'>
//                 <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Complete</button>
//             </div>
//         </div>
//   )
// }

// export default CompleteTask

import PropTypes from 'prop-types';

const CompleteTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-6'>
                {/* Consider changing this button to a "View Details" button if the task is completed */}
                <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs hover:bg-green-700'>
                    View Details
                </button>
            </div>
        </div>
    );
};

// Define PropTypes for the component
CompleteTask.propTypes = {
    data: PropTypes.shape({
        category: PropTypes.string.isRequired,
        taskDate: PropTypes.string.isRequired,
        taskTitle: PropTypes.string.isRequired,
        taskDescription: PropTypes.string.isRequired,
    }).isRequired,
};

export default CompleteTask;
