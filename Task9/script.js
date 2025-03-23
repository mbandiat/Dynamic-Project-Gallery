function calculateGrade() {
    let score = parseFloat(document.getElementById("score_input").value);
    let grade = "";

    if (score >= 80) {
        grade = "A";
    } else if (score >= 60 && score <= 79) {
        grade = "B";
    } else if (score >= 40 && score <= 59) {
        grade = "C";
    } else if (score >= 0 && score <= 39) {
        grade = "F";
    } else {
        grade = "Invalid score";
    }

    document.getElementById("grade_span").innerText = grade;
}
