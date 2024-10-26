// import React from 'react'

// const AcceptTask = ({data}) => {
//     console.log();
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
//             <div className='flex justify-between items-center'>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
//                 <h4 className='text-sm'>{data.taskDate}</h4>
//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//             <p className='text-sm mt-2'>
//                 {data.taskDescription}
//             </p>
//             <div className='flex justify-between mt-6 '>
//                 <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
//                 <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
//             </div>
//         </div>
//   )
// }

// export default AcceptTask

// import React from 'react';
import PropTypes from 'prop-types';

const AcceptTask = ({ data, onComplete, onFail }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button 
                    className='bg-green-500 rounded font-medium py-1 px-2 text-xs hover:bg-green-600'
                    onClick={() => onComplete(data)}
                >
                    Mark as Completed
                </button>
                <button 
                    className='bg-red-500 rounded font-medium py-1 px-2 text-xs hover:bg-red-600'
                    onClick={() => onFail(data)}
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    );
}

// Define PropTypes for the component
AcceptTask.propTypes = {
    data: PropTypes.shape({
        category: PropTypes.string.isRequired,
        taskDate: PropTypes.string.isRequired,
        taskTitle: PropTypes.string.isRequired,
        taskDescription: PropTypes.string.isRequired,
    }).isRequired,
    onComplete: PropTypes.func.isRequired,
    onFail: PropTypes.func.isRequired,
};

export default AcceptTask;
