const pizzaorder = new Promise((resolve, reject)=>{
    const isPizzaReady = true;

    if(isPizzaReady){
        resolve("Pizza is ready")
    }else{
        reject("Pizza is not ready")
    }
})

let Pizzastatus = async() =>{
    try {
        const result = await pizzaorder
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

Pizzastatus()


//////////////////////

const amount = 5000
const balance = 3000

const bankTransfer = new Promise((resolve,reject)=>{
    if(amount <= balance){
        resolve("Transfer successful")
    }if(amount > balance){
        reject("Transfer failed")
    }
})

let transferstatus = async()=>{
    try {
        const result = await bankTransfer
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
transferstatus()