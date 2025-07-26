function fetchGradeData() {
    console.log("Fetching grade data...");
    let xhr = new XMLHttpRequest();
     let apiRoute = "/api/grades";
   
     xhr.onreadystatechange = function(){
        let results;
        if (xhr.readyState === xhr.DONE){
            if(xhr.status === 200){
            populateGradebook(JSON.parse(xhr.responseText));
            } else{
                console.error(`Could not get grades. Status: ${xhr.status}`);
            }
        }
       
    }.bind(this);
   
    xhr.open("GET", apiRoute, true);
    xhr.send();
}
function populateGradebook(data){ 
    //this function takes the data we got from the server and puts it into the table
    console.log("populating gradebook with data:", data);
    let tableElm = document.querySelector("#gradebook tbody"); // Get the gradebook table element
    data.forEach(function(assignment){ //for each row of data were passed in
        let row = document.createElement("tr"); //create a table row element
        let columns = {}; //Handy place to stick the columns of information 
        columns.name = document.createElement("td");// the first column's tan;e data will be the name 
        columns.name.appendChild( 
            //Concatenate the first and last name
            document.createTextNode( assignment.lastName + ", " + assignment.firstName)
        );
        columns.grade = document.createElement("td");
        columns.grade.appendChild(
            // Just put the name in text, you could be fancy and figure out the letter grade here 
            document.createTextNode(assignment.grade)
        );
// Add the table data columns to the table row
row.appendChild(columns.name);
        row.appendChild(columns.grade);
        // Add the row to the table itselff to make it visible
        tableElm.appendChild(row);
    });
}

fetchGradeData();