/* Your Code Here */

// 1
function createEmployeeRecord(arr) {
    const employee = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee;
}


// 2
function createEmployeeRecords(arrays) {
    return arrays.map(array => createEmployeeRecord(array))
}

// 3
function createTimeInEvent(dateStamp) {
    const dateStr = dateStamp.split(' ');
    const time = {
        type: "TimeIn",
        hour: parseInt(dateStr[1]),
        date: dateStr[0]
    }
    this.timeInEvents.push(time);
    return this;
}
// createTimeInEvent();

// 4
function createTimeOutEvent(dateStamp) {
    const dateStr = dateStamp.split(' ');
    const time = {
        type: "TimeOut",
        hour: parseInt(dateStr[1]),
        date: dateStr[0]
    }
    this.timeOutEvents.push(time);
    return this;
}

// 5
function hoursWorkedOnDate(dateStr) {
    const timeIn = this.timeInEvents.find(element => element.date === dateStr);
    const timeOut = this.timeOutEvents.find(element => element.date === dateStr);
    // find num hours btw timeInEvent and timeOutEvent
    const hours = (timeOut.hour - timeIn.hour) / 100;
    return hours; // integer
}

// 6
function wagesEarnedOnDate(dateStamp) {
    // multiply the hours by the record's payRate to determine amount owed
    const hours = hoursWorkedOnDate.call(this, dateStamp);
    // this.hours(dateStamp) - alt written
    const payOwed = hours * this.payPerHour;
    return payOwed;
}


// 7 - allWagesFor function provided by lesson; scroll to bottom.

// 8
function findEmployeeByFirstName(emps, name) {
    // Test the firstName field for a match with the firstName argument
    const emp = emps.find(employee => employee.firstName === name);
    // console.log(emp);
    return emp;
}

// 9
function calculatePayroll(emps) {
    const payroll = emps.reduce((previousValue, currentValue) => {
        return previousValue + allWagesFor.call(currentValue)
    }, 0)
    // return sum of pay owed to all employees for all dates - as num
    return payroll;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
