function setName(name) {
    return {
        type: "SET_NAME",
        payload: new Promise((resolve,reject) => {
            if (!name){
                reject();
            }
            setTimeout(() => {
                resolve(name);
            },5000);
        })
    };
}

function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
}

export {setName, setAge};

