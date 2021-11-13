import React from 'react';
import PropTypes from 'prop-types';
import { FILTERS_BTN } from '../../const';

const Footer = ({ amount, activeFilter, changeFilter }) => {
    return (
        <div className="footer">
            <span className="amount">{`${amount} Tasks Left`}</span>
            <div className="btn-group">
                {FILTERS_BTN.map(({ text, id }) => (
                    <button
                        onClick={() => changeFilter(id)}
                        key={id}
                        id={id}
                        className={id === activeFilter ? "filter-btn active" : "filter-btn"}
                    >{text}</button>
                ))}
            </div>
        </div>
    );
};

Footer.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
    changeFilter: PropTypes.func,
};

Footer.defaultProps = {
    amount: 0,
    activeFilter: 'all',
    changeFilter: () => {},
};

export default Footer;
