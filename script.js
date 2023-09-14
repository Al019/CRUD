let studentData = [];

function addRow() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const studentId = document.getElementById("studentId").value;

  if (firstName && lastName && studentId) {
    const newRow = document.getElementById("studentTable").insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = studentId;
    cell4.innerHTML = '<button style="border: none; background: none; cursor: pointer;" onclick="editRow(this)"><img style="height: 25px;" src="pencil.png"/></button> <button style="border: none; background: none; cursor: pointer;" onclick="deleteRow(this)"><img style="height: 25px;" src="delete.png"/></button>';

    studentData.push({ firstName, lastName, studentId });

    clearForm();
  } else {
    alert("Please fill in all fields.");
  }
}

function clearForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("studentId").value = "";
  document.getElementById("btnSubmit").innerText = "Submit";
}

function editRow(button) {
  const row = button.parentNode.parentNode;
  const rowIndex = row.rowIndex - 1;
  const student = studentData[rowIndex];

  document.getElementById("firstName").value = student.firstName;
  document.getElementById("lastName").value = student.lastName;
  document.getElementById("studentId").value = student.studentId;

  document.getElementById("btnSubmit").innerText = "Save";
  document.getElementById("btnSubmit").onclick = function () {
    saveRow(rowIndex);
  };
}

function saveRow(rowIndex) {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const studentId = document.getElementById("studentId").value;

  if (firstName && lastName && studentId) {
    if (rowIndex !== -1) {
      const row = document.getElementById("studentTable").rows[rowIndex + 1];
      row.cells[0].innerHTML = firstName;
      row.cells[1].innerHTML = lastName;
      row.cells[2].innerHTML = studentId;
      studentData[rowIndex] = { firstName, lastName, studentId };
    } else {
      const newRow = document.getElementById("studentTable").insertRow(-1);
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);

      cell1.innerHTML = firstName;
      cell2.innerHTML = lastName;
      cell3.innerHTML = studentId;

      studentData.push({ firstName, lastName, studentId });
    }

    clearForm();
    document.getElementById("btnSubmit").innerText = "Submit";
    document.getElementById("btnSubmit").onclick = addRow;
  } else {
    alert("Please fill in all fields.");
  }
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  const rowIndex = row.rowIndex - 1;
  if (confirm("Are you sure you want to delete this student?")) {
    studentData.splice(rowIndex, 1);
    row.remove();
  }
  
}

function initializeTable() {
  studentData.forEach((student) => {
    const newRow = document.getElementById("studentTable").insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.lastName;
    cell3.innerHTML = student.studentId;

  });
}

initializeTable();