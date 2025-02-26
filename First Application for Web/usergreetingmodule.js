exports.myDateTime = function () {
    return Date();
};

exports.hello=function(fullname){
    return "Hello "+fullname+"! \n The time is: "+new Date().getHours()+"Hours and"+new Date().getMinutes()+"Minutes";
}

