const NAMEOFSCHOOL = 'Kunjasreepur Govt. Primary School';
let numberOfTeacher = 5;
let classes = ['One', 'Two', 'Three', 'Four', 'Five'];
let numberOfStudents = {
    'One': 40,
    'Two': 45,
    'Three': 50,
    'Four': 45,
    'Five': 60,
}

let age = calculateAge(1994, 4, 1);

function calculateAge(year, month, day) {
    let dt = new Date();
    year = dt.getFullYear() - year;
    month = dt.getMonth() + 1 - month;
    day = dt.getDate() - day

    return `${year} years ${month} months ${day} days`
}


// let selector = $('div');