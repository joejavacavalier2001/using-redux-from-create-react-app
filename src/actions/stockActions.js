import axios from 'axios';

function setPrice() {
    return {
        type: "SET_PRICE",
        payload: new Promise((resolve,reject) => {
            axios.get("http://rktlebnhwebworks.net/getStockInfoTest.php")
                .then(function(response){
                    let responseObj = JSON.parse(response.request.response);
                    if (responseObj.hasOwnProperty('latestPrice')){
                        resolve(responseObj.latestPrice);
                    } else {
                        reject("response object did not have currentPrice property");
                    }
                })
                .catch(function(error){
                    if (error.response) {
                        reject(error.response.status);
                    } else if (error.message) {
                        reject(error.message);
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

export {setPrice, setName};

