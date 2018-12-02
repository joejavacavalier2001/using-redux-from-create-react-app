import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import { User } from "./components/User";
import { Main } from "./components/Main";
import { StockInfo } from "./components/StockInfo";
import { setName } from "./actions/userActions";
import { setPrice } from "./actions/stockActions";


class App extends React.Component {
    render() {
        let changeFunction = (comp) => {
            console.log("inside changeFunction()"); // eslint-disable-line no-console
            comp.props.setName("Anna");
        };
        let cf2 = function(){changeFunction(this);}.bind(this);
        return (
            <div className="container">
                <Main changeUsername={cf2}/>
                <User username={this.props.user.name}/>
                <StockInfo currentName={this.props.stock.name} currentPrice={this.props.stock.price}/>
            </div>
        );
    }
    componentDidMount() {
        setInterval(this.props.setPrice,3000);
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
        price: PropTypes.number
    }),
    setName: PropTypes.func,
    setPrice: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

