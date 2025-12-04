function getUserDetails(userId, callback) {
    console.log("Fetching details for user ID : ", userId);
    callback({userroll:"678"});
}
function getUserSubjects(userRoll,callback){
    console.log("Fetching subjects for user roll : ", userRoll);
    callback({subid:"english"});
}
function getUserMarks(subjectId){
    console.log("Fetching marks for subject ID : ", subjectId);
}
getUserDetails("123",function(userRoll){
    getUserSubjects(userRoll,function(userSubId){
        getUserMarks(userSubId);
    });
});