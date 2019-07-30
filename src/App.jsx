import React from "react";
import {connect} from "react-redux";
import {DuxOkDialog} from 'duxpanel';
//import {DuxPanel} from 'duxpanel';
import PropTypes from 'prop-types';

import { StockInfo } from "./components/StockInfo";
import { setPrice } from "./actions/stockActions";
import { hideErrorDialog } from "./actions/stockActions";

class App extends React.Component {
    constructor(props){
        super(props);
        this.repeatingIntervalId = 0;
    }

    render() {
        if ((this.props.stock.showErrorDialog) && (this.repeatingIntervalId)){
            clearInterval(this.repeatingIntervalId);
            this.repeatingIntervalId = 0;
        }
        return (
            <div id="AppContainer" className="container">
                <StockInfo currentName={this.props.stock.name} currentPrice={this.props.stock.price}/>
                <DuxOkDialog show={this.props.stock.showErrorDialog} onOk={this.props.hideErrorDialog} onClose={this.props.hideErrorDialog}
                    onEscPressed={this.props.hideErrorDialog} 
                    allowClose={true} allowOk={true} allowDrag={true} modal={true} width={400} title="Error updating stock price">
                    <p>{this.props.stock.errorMessage}</p>
                </DuxOkDialog>
            </div>
        );
    }
    componentDidMount() {
        if (!this.repeatingInervalId){
            this.repeatingIntervalId = setInterval(this.props.setPrice,3000);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        stock: state.stock,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPrice: () => {
            dispatch(setPrice());
        },
        hideErrorDialog: () => {
            dispatch(hideErrorDialog());
        }
    };
};

App.propTypes = {
    stock: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        showErrorDialog: PropTypes.bool,
        errorMessage: PropTypes.string
    }),
    setPrice: PropTypes.func,
    hideErrorDialog: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

