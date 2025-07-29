
import PropTypes from 'prop-types';

export default function Container({ children }) {
    return (
        <div className="w-[1280px] mx-auto">
            {children}
        </div>
    )
}

Container.propTypes = { children: PropTypes.node.isRequired }