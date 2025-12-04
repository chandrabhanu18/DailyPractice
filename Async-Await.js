function getDetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching details for ID after 5 seconds:", id);
            resolve({userroll   : "678"});
        }   , 5000);
    })
};
const getSubjects = (userRoll) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching subjects for user roll after 2 seconds:", userRoll);
            resolve({subid : "math-101"});
        }   , 2000);
    })
}   ;
const getMarks = (subjectId) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching marks for subject ID after 3 seconds:", subjectId);
            resolve({marks : 95});
        }   , 3000);
    })
};
const myfunction= async()=>{
    console.log("Starting to fetch user data...");
    const userDetails = await getDetails("123");
    const userSubjects = await getSubjects(userDetails.userroll);
    const userMarks = await getMarks(userSubjects.subid);
    console.log("User Marks:", userMarks.marks);
};

myfunction();   
