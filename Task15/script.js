function calculateAge() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    if (!day || !month || !year) {
    document.getElementById('result').innerText = "Please enter a valid date.";
    return;
    }
    let birthDate = new Date(year, month - 1, day);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
    }
    document.getElementById('result').innerText = "Your age is " + age + " years.";
    }
    