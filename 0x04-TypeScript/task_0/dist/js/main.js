var studentsList;
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "London"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
    location: "Paris"
};
studentsList = [student1, student2];
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map