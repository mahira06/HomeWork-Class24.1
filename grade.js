let marks = window.prompt ("Enter your marks");

if ( marks >= 80 && marks <= 100){
    document.write("Congratulation, You've got A+");
} else if ( marks >= 70 && marks < 80){
    document.write("You've got A");
} else if ( marks >= 60 && marks < 70){
    document.write("You've got A-");
} else if ( marks >= 50 && marks < 60){
    document.write("You've got B");
} else if ( marks >= 40 && marks < 50){
    document.write("You've got C");
} else if ( marks >= 33 && marks < 40){
    document.write("You've got D");
} else if ( marks >= 0 && marks < 33){
    document.write("Sorry, You have failed your exam");
} else {
    document.write("Invalid Number");
}
