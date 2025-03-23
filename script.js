const tasks = [
  { title: "Expectation Document", path: "Task1/index.html" },
  { title: "Basic HTML Styling", path: "Task2/index.html" },
  { title: "CSS Hover", path: "Task3/index.html" },
  { title: "Welcome to JS", path: "Task4/index.html" },
  { title: "Calculator with JS", path: "Task5/index.html" },
  { title: "Github Integration", path: "Task6/index.html" },
  { title: "Console Output", path: "Task7/index.html" },
  { title: "String Operation", path: "Task8/index.html" },
  { title: "Conditions", path: "Task9/index.html" },
  { title: "Call Stack with Array", path: "Task10/index.html" },
  { title: "Star with Loops", path: "Task11/index.html" },
  { title: "Class Work", path: "Task12/index.html" },
  { title: "Class Work-Objects", path: "Task13/index.html" },
  { title: "Class Work-Objects2", path: "Task14a/index.html" },
  { title: "Class Work-Functions", path: "Task14b/index.html" },
  { title: "Class & Bootstrap", path: "Task15/index.html" },
  { title: "JSON", path: "Task16/index.html" }
];

const taskList = document.getElementById("task-list");
const taskFrame = document.getElementById("task-frame");

tasks.forEach(task => {
  const li = document.createElement("li");
  li.textContent = task.title;
  li.addEventListener("click", () => {
      taskFrame.src = task.path; 
  });
  taskList.appendChild(li);
});

function showInfo(infoType) {
  let content = document.getElementById('content');

  if(infoType === 'aboutMe') {
      content.innerHTML = `
          <h2>About Me</h2>
          <p>Hi, I’m MadanMohan Reddy Bandi, a Cloud Engineer and Full-Stack Developer with expertise in AWS, DevOps, and modern web technologies. I specialize in building scalable, automated cloud infrastructures and developing dynamic web applications.

I have experience working with AWS services (EC2, S3, IAM, Lambda) and tools like Terraform and Ansible for automation. On the development side, I’m proficient in JavaScript, React, and Node.js, creating efficient, user-friendly web applications.

I'm passionate about continuous learning, solving problems with innovative solutions, and collaborating on impactful projects. Let’s connect and create something great!

</p>
      `;
  } else if(infoType === 'contactDetails') {
      content.innerHTML = `
          <h2>Contact Details</h2>
          <p>Email: mbandiat@aum.edu</p>
          <p>Mobile: +1 334-513-9862</p>
      `;
  } else if(infoType === 'linkedin') {
      content.innerHTML = `
          <h2>LinkedIn</h2>
          <p>Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/madanmohan-reddy-bandiatmakur-178509198/" target="_blank">MadanMohan Reddy Bandi</a></p>
      `;
  }
}
