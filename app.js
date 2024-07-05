document.getElementById("copy-btn").addEventListener("click", function () {
  // Get the text from the target element
  var textToCopy = document.getElementById("text-to-copy").innerText;

  // Create a temporary textarea element to hold the text
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;

  // Append the textarea to the body (necessary for execCommand to work)
  document.body.appendChild(tempTextArea);

  // Select the text in the textarea
  tempTextArea.select();

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea from the DOM
  document.body.removeChild(tempTextArea);

  // Optionally, provide user feedback
  alert("Text copied to clipboard!");
});

// time
function updateTime() {
  const currentDayDiv = document.querySelector(".current-day");
  const currentTimeDiv = document.querySelector(".current-time");
  const now = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[now.getUTCDay()];

  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds} UTC`;

  currentDayDiv.textContent = day;
  currentTimeDiv.textContent = formattedTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize the time when the page loads
updateTime();

// Goals
// script.js

const techGoals = [
  {
    title: "Master React and Advanced Frontend Development",
    description:
      "Focus on becoming proficient in React.js, including hooks, context API, and state management with Redux. Learn advanced frontend techniques, such as performance optimization, server-side rendering with Next.js, and building scalable, maintainable applications.",
    timeline: "6 months",
  },
  {
    title: "Build and Deploy Full-Stack Applications",
    description:
      "Develop skills in creating full-stack applications using the MERN (MongoDB, Express, React, Node.js) stack. Learn backend development, RESTful API design, authentication/authorization, and deployment strategies using cloud services like AWS or Heroku.",
    timeline: "6 months",
  },
  {
    title: "Explore DevOps and CI/CD Pipelines",
    description:
      "Gain a thorough understanding of DevOps principles and practices. Learn to set up continuous integration and continuous deployment (CI/CD) pipelines using tools like Jenkins, Travis CI, or GitHub Actions. Understand containerization with Docker and orchestration with Kubernetes.",
    timeline: "4 months",
  },
  {
    title: "Deep Dive into Data Structures and Algorithms",
    description:
      "Strengthen foundational knowledge of data structures and algorithms. Practice solving complex problems on platforms like LeetCode, HackerRank, or CodeSignal. This will improve problem-solving skills and prepare for technical interviews.",
    timeline: "3 months",
  },
  {
    title: "Learn a New Programming Language",
    description:
      "Diversify programming skills by learning a new language such as Python, Go, or Rust. Focus on understanding language syntax, core libraries, and best practices. Apply the new language in personal projects to solidify learning.",
    timeline: "3 months",
  },
  {
    title: "Master Cloud Computing and Services",
    description:
      "Gain expertise in cloud computing platforms like AWS, Azure, or Google Cloud. Learn about different cloud services, architecture, and cost optimization. Achieve certification in cloud services to validate skills and knowledge.",
    timeline: "4 months",
  },
  {
    title: "Contribute to Open Source Projects",
    description:
      "Get involved in the open-source community by contributing to projects on GitHub. This will provide real-world experience, improve coding skills, and expand the professional network. Focus on finding projects that align with personal interests and expertise.",
    timeline: "Ongoing over 2 years",
  },
  {
    title: "Develop Mobile Applications",
    description:
      "Learn mobile app development using frameworks like React Native or Flutter. Focus on building cross-platform applications, understanding the mobile development lifecycle, and deploying apps to app stores.",
    timeline: "4 months",
  },
  {
    title: "Enhance Soft Skills for Tech Leadership",
    description:
      "Improve soft skills such as communication, teamwork, and leadership. Participate in workshops, take online courses, and seek mentorship opportunities to develop these skills, which are essential for career growth and leadership roles.",
    timeline: "Ongoing over 2 years",
  },
  {
    title: "Build a Personal Portfolio and Blog",
    description:
      "Create a personal portfolio website to showcase projects, skills, and achievements. Start a tech blog to share knowledge, document learning experiences, and engage with the tech community. Regularly update the portfolio and blog with new content.",
    timeline: "2 months for initial setup, ongoing updates",
  },
];

function displayGoals() {
  const goalsContainer = document.getElementById("goals-container");
  const goalsHTML = techGoals
    .map(
      (goal) => `
      <div class="goal">
          <h2>${goal.title}</h2>
          <p> ${goal.description}</p>
          <p class="timeline"><strong>Timeline:</strong> ${goal.timeline}</p>
      </div>
  `
    )
    .join("");

  goalsContainer.innerHTML = goalsHTML;
}

// Call the function to display goals
displayGoals();
