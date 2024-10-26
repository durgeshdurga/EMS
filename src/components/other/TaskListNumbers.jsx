
import PropTypes from 'prop-types';

const TaskListNumbers = ({ data }) => {
  return (
    <div id='taskList' className='flex flex-wrap mt-10 justify-between gap-5 screen'>
      {data && data.taskCounts ? (
        <>
          <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400 hover:shadow-lg transition-shadow duration-300'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
          </div>
          <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400 hover:shadow-lg transition-shadow duration-300'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
          </div>
          <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400 hover:shadow-lg transition-shadow duration-300'>
            <h2 className='text-3xl text-black font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5 text-black font-medium'>Accepted Task</h3>
          </div>
          <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400 hover:shadow-lg transition-shadow duration-300'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
          </div>
        </>
      ) : (
        <div className='w-full py-6 px-9 bg-gray-200 rounded-xl'>
          <h2 className='text-3xl font-bold'>No Data Available</h2>
        </div>
      )}
    </div>
  );
};

// Adding PropTypes for better type-checking
TaskListNumbers.propTypes = {
  data: PropTypes.shape({
    taskCounts: PropTypes.shape({
      newTask: PropTypes.number.isRequired,
      completed: PropTypes.number.isRequired,
      active: PropTypes.number.isRequired,
      failed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TaskListNumbers;
