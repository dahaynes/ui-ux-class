// Add Event Listener Below

$("#toggle").on("click", function(){
    console.log("I was clicked")
    $("ul").slideToggle();
    
});





var helloWorld = 'Hello World';
console.log(helloWorld);
var firstName = "david";
var lastName = "joker";


/** This function addNumbers adds 2 numbers together */
function addNumbers(x, y) {

    return x + y

}


function capitalize(theString) {
    return theString[0].toUpperCase() + theString.substring(1)
}


function printName(fName, lName) {
    console.log(fName + " " + lName);
    var theNames = [fName, lName];
    var emptyName = "";

    for (i = 0; i < theNames.length; i++) {
        /* console.log(theNames[i][0] + theNames[i].substring(1) ); */
        emptyName = emptyName + theNames[i][0].toUpperCase() + theNames[i].substring(1) + " ";
        /* string[0].toUpperCase() + string.substring(1) */
    }


}

printName(firstName, lastName);
k = capitalize(firstName)
console.log(k)
/* console.log(emptyName) */
/* alert("Wakeup", emptyName) */

console.log(addNumbers(5, -3))