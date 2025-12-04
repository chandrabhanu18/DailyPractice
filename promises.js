function getuserdetails(id,callback) {
    return new Promise((resolve,reject)=>{
    console.log("Fetching user details...",id);
    resolve({userroll:"123"})
});
};
function getusersubjects(userroll,callback) {
    return new Promise((resolve,reject)=>{
        console.log("getting user subjects...",userroll);
        resolve({subid:"eng-1"})
    })
}
function getusermarks(usersubid) {
    return new Promise((resolve,reject)=>{
    console.log("get user marks...",usersubid);
});
}

getuserdetails("123").then((result)=>{
    getusersubjects(result.userroll).then((subresult)=>{
        getusermarks(subresult.subid)
    })
});