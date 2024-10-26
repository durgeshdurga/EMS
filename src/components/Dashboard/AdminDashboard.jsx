
// import Header from '../other/Header'
// import CreateTask from '../other/CreateTask'
// import AllTask from '../other/AllTask'

// const AdminDashboard = (props) => {
//     return (
//         <div className='h-screen w-full p-7'>
//             <Header changeUser={props.changeUser} />
//             <CreateTask />
//             <AllTask />
//         </div>
//     )
// }

// export default AdminDashboard


import PropTypes from 'prop-types'; // Import PropTypes for prop type checking
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = ({ changeUser }) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    );
}

// Define prop types for the AdminDashboard component
AdminDashboard.propTypes = {
    changeUser: PropTypes.func.isRequired, // Ensure changeUser is a required function
};

export default AdminDashboard;
