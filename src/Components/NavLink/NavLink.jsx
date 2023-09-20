import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// কম্পোনেন্টটি Link ,,, তাই রাউটারের Link কাজ করতেছে না এখানে রাউটারের Link as dara পরিবর্তন করা হয়েছে

const NavLink = ({route}) => {
    return (
        <div>
        {/* <a className='mr-5 text-center hover:cursor-pointer text-lg font-bold' href={route.path}>{route.name} </a> */}
         <Link  to={route.path} className='mr-5 text-center hover:cursor-pointer text-lg font-bold' > {route.name} </Link>
        
    </div>
    );
};

NavLink.propTypes = {
    route:PropTypes.object
};

export default NavLink;