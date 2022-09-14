const customPromise = (productos) => {
    return (
        new Promise ((resolve, reject) => {
            setTimeout (()=> {
                resolve (productos)
            },2000)
        }
    ));
};

export default customPromise