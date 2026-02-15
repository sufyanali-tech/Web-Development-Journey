const day = "saturd"; // day === "monday"

switch (day) {

    case "monday":

        console.log("yes today is moday");
        break;
    case "tuesday":

        console.log("today is tuesday");
         break;
    case "wednesday":

        console.log("today is wednesday");
         break;
    case "thursday":

        console.log("today is thurday");
         break;
    case "friday":
    case "saturday":

        console.log("both friday and saturday is combine");
         break;
    case "sunday":

        console.log("today is sunday");
         break;
    default:
        
        console.log("Invalid Not found day");
        
}
