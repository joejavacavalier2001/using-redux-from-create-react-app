import React from "react";
import {connect} from "react-redux";
import {DuxOkDialog} from 'duxpanel';
//import {DuxPanel} from 'duxpanel';
import PropTypes from 'prop-types';

import { User } from "./components/User";
import { Main } from "./components/Main";
import { StockInfo } from "./components/StockInfo";
import { setName } from "./actions/userActions";
import { setPrice } from "./actions/stockActions";
import { hideErrorDialog } from "./actions/stockActions";

class App extends React.Component {
    constructor(props){
        super(props);
        this.repeatingIntervalId = 0;
    }

    shouldClose() {return true;}

    render() {
        let changeFunction = (comp) => {
            console.log("inside changeFunction()"); // eslint-disable-line no-console
            comp.props.setName("Anna");
        };
        let cf2 = function(){changeFunction(this);}.bind(this);
        if ((this.props.stock.showErrorDialog) && (this.repeatingIntervalId)){
            clearInterval(this.repeatingIntervalId);
            this.repeatingIntervalId = 0;
        }
        return (
            <div id="AppContainer" className="container">
                <Main changeUsername={cf2}/>
                <User username={this.props.user.name}/>
                <StockInfo currentName={this.props.stock.name} currentPrice={this.props.stock.price}/>
                <DuxOkDialog show={this.props.stock.showErrorDialog} onOk={this.props.hideErrorDialog} onClose={this.props.hideErrorDialog}
                    onEscPressed={this.props.hideErrorDialog} shouldClose={this.shouldClose}
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
        user: state.user,
        stock: state.stock,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setPrice: () => {
            dispatch(setPrice());
        },
        hideErrorDialog: () => {
            dispatch(hideErrorDialog());
        }
    };
};

App.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }),
    stock: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        showErrorDialog: PropTypes.bool,
        errorMessage: PropTypes.string
    }),
    setName: PropTypes.func,
    setPrice: PropTypes.func,
    hideErrorDialog: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

