var profiles = [];
function InsertProfile() {
var profile = {
Name: getValue("name"),
DOB: getValue("dob"),
Age: getValue("age"),
Education: getValue("education"),
Address: getValue("address"),
State: getValue("state"),
Mobile: getValue("mobile")
};
profiles.push(profile);
clearFields();
}
function ShowProfile() {
var profileInfo = document.getElementById("profile_info");
if (profiles.length === 0) {
profileInfo.innerHTML = "No profiles saved yet.";
return;
}
var profileDetails = "";
for (var i = 0; i < profiles.length; i++) {
profileDetails +=
"<strong>Profile " + (i + 1) + ":</strong><br>" +
"Name: " + profiles[i].Name + "<br>" +
"DOB: " + profiles[i].DOB + "<br>" +
"Age: " + profiles[i].Age + "<br>" +
"Education: " + profiles[i].Education + "<br>" +
"Address: " + profiles[i].Address + "<br>" +
"State: " + profiles[i].State + "<br>" +
"Mobile: " + profiles[i].Mobile + "<br><br>";
}
profileInfo.innerHTML = profileDetails;
}
function getValue(id) {
return document.getElementById(id).value.trim();
}
function clearFields() {
document.getElementById("name").value = "";
document.getElementById("dob").value = "";
document.getElementById("age").value = "";
document.getElementById("education").value = "";
document.getElementById("address").value = "";
document.getElementById("state").value = "";
document.getElementById("mobile").value = "";
}
