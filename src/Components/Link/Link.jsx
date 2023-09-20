import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
        <a className='mr-5 text-center hover:cursor-pointer text-lg font-bold' href={route.path}>{route.name} </a>
    </div>
    );
};

Link.propTypes = {
    route:PropTypes.object
};

export default Link;