import React from "react";
import PropTypes from 'prop-types';

import accounting from 'accounting';

export const StockInfo = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <p>Stock price ({props.currentName}):</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {accounting.formatMoney(props.currentPrice)}</p>
                </div>
            </div>
        </div>
    );
};

StockInfo.propTypes = {
    currentName: PropTypes.string,
    currentPrice: PropTypes.number
};


