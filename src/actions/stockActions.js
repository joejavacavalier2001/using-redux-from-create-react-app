import axios from 'axios';

function setPrice() {
    return {
        type: "SET_PRICE",
        payload: new Promise((resolve,reject) => {
            axios.get("https://rktlebnhwebworks.net/getStockInfoTest.php")
                .then(function(response){
                    let responseObj = JSON.parse(response.request.response);
                    if (responseObj.hasOwnProperty('latestPrice')){
                        resolve(responseObj.latestPrice);
                    } else {
                        reject(new Error("response object did not have latestPrice property"));
                    }
                })
                .catch(function(error){
                    if (error.response) {
                        reject(new Error(error.response.status));
                    } else if (error.message) {
                        reject(new Error(error.message));
                    }
                });
        })
    };
}

function setName(name) {
    return {
        type: "SET_NAME",
        payload: name
    };
}

function hideErrorDialog() {
    return {
        type: "HIDE_STOCK_ERROR",
        payload: ""
    };
}

export {setPrice, setName, hideErrorDialog};

