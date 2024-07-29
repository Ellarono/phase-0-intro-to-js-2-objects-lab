const employee = {
name:"sam",
streetName:"Hamilton St",
}
function updateEmployeeWithKeyAndValue(object,key,value){
    return {
        ...object,
        [key]: value,
    };

}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}
function deleteFromEmployeeByKey(object, key){
    const newEmployee = {...object}
     delete newEmployee[key]
     return newEmployee

}
function destructivelyDeleteFromEmployeeByKey(object , key){
    delete object[key];
    return object 
}
