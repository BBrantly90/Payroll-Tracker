// Factored code
  // reference to #add-employees-btn

  const addEmployeesBtn = document.querySelector('#add-employees-btn');
  let employeesArray = []
  // Collect employee data
  const collectEmployees = function() {
    // TODO: Get user input to create and return an array of employee objects
    let keepLooping = true;
    while(keepLooping) {
        let employeeInfo = {
            firstName: prompt("First Name"),
            lastName: prompt("Last Name"),
            salary: parseInt(prompt("Salary"))
        }
        employeesArray.push(employeeInfo)
        let keepAdding = confirm("Would you like to continue?")
        if (keepAdding == false) {
          keepLooping = false;
        }
    }
    return employeesArray;
  }
  // Average Salary displayed
  const displayAverageSalary = function(employeesArray) {
    let totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
    console.log("The average employee salary between the employees is $" + (
      totalSalary / employeesArray.length));
  }
  // Choose an employee at random
  const getRandomEmployee = function(employeesArray) {
    // TODO: Select and display a random employee
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Congrats ${randomEmployee.firstName} ${randomEmployee.lastName}, the random winner!`);
  }

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');
  
    // Clear the employee table
    employeeTable.innerHTML = '';
  
    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];
  
      const newTableRow = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);
  
      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);
  
      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
      });
  
      newTableRow.append(salaryCell);
  
      employeeTable.append(newTableRow);
    }
  }
  
  const trackEmployeeData = function() {
    const employees = collectEmployees();
  
    console.table(employees);
  
    displayAverageSalary(employees);
  
    console.log('==============================');
  
    getRandomEmployee(employees);
  
    employees.sort(function(a,b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });
  
    displayEmployees(employees);
  }
  
  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData);

  