function fetchGradeData() {
    console.log("fetching grade data...")
let xhr = new XMLHttpRequest();
let apiRoute = "/api/grades";
xhr.onreadystatechange = function(){
if(xhr.readyState === xhr.DONE){
    if(xhr.status !== 200){
        console.error('Could not get grades. Status: ${xhr.status}');
    }
}
    }.bind(this);
    xhr.open("GET", apiRoute, true);
    xhr.send();
}
function populateGradebook(data) {
    let tableElm = document.getElementById("gradebook");
    data.forEach(function(assignment) {
        let row = document.createElement("tr");
        let columns = {};
        columns.name = document.createElement('td');
        columns.name.appendChild(
            document.createTextNode(assignment.last_name + ", " + assignment.first_name)
        );
        columns.grade = document.createElement('td');
        columns.grade.appendChild(
            document.createTextNode(assignment.grade)
        );
        row.appendChild(columns.name);
        row.appendChild(columns.grade);
        tableElm.appendChild(row);
    });
}
    

