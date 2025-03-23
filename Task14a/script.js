var profiles = [];

function Profile(Name, DOB, Age, Education, Address, State, Mobile) {
  this.Name = Name;
  this.DOB = DOB;
  this.Age = Age;
  this.Education = Education;
  this.Address = Address;
  this.State = State;
  this.Mobile = Mobile;
}

function getValue(id) {
  return document.getElementById(id).value.trim();
}

function InsertProfile() {
  var profile = new Profile(
    getValue("name"),
    getValue("dob"),
    getValue("age"),
    getValue("education"),
    getValue("address"),
    getValue("state"),
    getValue("mobile")
  );
  profiles.push(profile);
  clearInputs();
  alert("Profile inserted successfully!");
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

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("age").value = "";
  document.getElementById("education").value = "";
  document.getElementById("address").value = "";
  document.getElementById("state").value = "";
  document.getElementById("mobile").value = "";
}

function clearDisplay() {
  document.getElementById("profile_info").innerHTML = "";
}

function searchProfiles() {
  var keyword = getValue("searchField").toLowerCase();
  var profileInfo = document.getElementById("profile_info");

  var result = profiles.filter(function(profile) {
    return (
      profile.Name.toLowerCase().indexOf(keyword) !== -1 ||
      profile.Education.toLowerCase().indexOf(keyword) !== -1
    );
  });

  if (result.length === 0) {
    profileInfo.innerHTML = "No matching profiles found.";
    return;
  }

  var profileDetails = "";
  for (var i = 0; i < result.length; i++) {
    profileDetails +=
      "<strong>Profile " + (i + 1) + ":</strong><br>" +
      "Name: " + result[i].Name + "<br>" +
      "DOB: " + result[i].DOB + "<br>" +
      "Age: " + result[i].Age + "<br>" +
      "Education: " + result[i].Education + "<br>" +
      "Address: " + result[i].Address + "<br>" +
      "State: " + result[i].State + "<br>" +
      "Mobile: " + result[i].Mobile + "<br><br>";
  }

  profileInfo.innerHTML = profileDetails;
}
