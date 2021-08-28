console.log("Hi,this is Priyanka here");

const fetchApiDemo = fetch("sample-text.txt")
    .then(response=>response.text())
    .then(data=>console.log(data))
    .catch(err=>console.error(err));

const fetchJsonDemo = fetch("sample-json.json")
    .then(response=>response.json())
    .then(data=>{
        const element = document.querySelector("#fetch-api");
        let htmlElement = "";
        data.forEach(element => {
            console.log(element);
            htmlElement+=`<h1>${element.name}</h1>`;
        });
        element.innerHTML=htmlElement;
    })
    .catch(error=>console.error(error));

const asyncFun = async() =>{
    const response = await fetch("sample-json.json");
    const data = await response.json();
    data.forEach(res=>console.log(res.name))
}
asyncFun();

const myPromise = new Promise((resolve,reject)=>{
    const x=5;
    if(x>0)
    {
        resolve(x);
    }
    else
    {
        reject(new Error("Error occurred"));
    }
});
myPromise
.then(value=>console.log(value))
.catch(error=>console.error(error));

const promiseFun = function(number){
    return new Promise((resolve,reject)=>{
        if(number>0)
            resolve(number);
        else
            reject("error happened");
    }).then(value=>console.log(value))
    .catch(error=>console.log("Error occurred"));
}
promiseFun(-2);
promiseFun(2);

const myPromiseFun1 = function(){
    const promise = setTimeout(() => {
        return new Promise((resolve,reject)=>{
            const number=10;
            if(number>5)
                resolve("Resolved");
            else
                reject(new Error(1));
        }).then(value=>console.log(value))
        .catch(err=>console.log(err));
    }, 5000);
    return promise;
}
myPromiseFun1();