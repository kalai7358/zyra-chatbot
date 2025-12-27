const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.post("/chat", (req, res) => {
  const msg = req.body.message.toLowerCase();
  let reply = "Sorry, I can help only with Kings Engineering College information.";

  if (msg.includes("hi") || msg.includes("hello")) {
    reply = "Hi 👋 I am Zyra, the college chatbot of Kings Engineering College.";
  }
  else if (msg.includes("college")) {
    reply = "Kings Engineering College, Sriperumbudur.";
  }
  else if (msg.includes("location")) {
    reply = "Located at Irungattukottai, Sriperumbudur.";
  }
  else if (msg.includes("timing")) {
    reply = "College timing is 8:45 AM to 2:15 PM.";
  }
  else if (msg.includes("department")) {
    reply = "Departments: IT, CSE, AIDS, BME, ECE, Mechanical, AI & ML, Robotics.";
  }
  else if (msg.includes("library")) {
    reply = "The college has a central library with books and e-resources.";
  }
  else if (msg.includes("exam")) {
    reply = "Internal and semester exams are conducted as per Anna University norms.";
  }
  else if (msg.includes("event")) {
    reply = "Technical symposiums and cultural events are conducted every year.";
  }
  else if (msg.includes("hod")) {
    if (msg.includes("it")) reply = "HOD of IT Department is Dr. Alphas Jebasing.";
    else if (msg.includes("cse")) reply = "HOD of CSE Department is Dr. Jullie Josphine.";
    else if (msg.includes("aids")) reply = "HOD of AIDS Department is Dr. Ganeshan.";
    else if (msg.includes("bme")) reply = "HOD of BME Department is Dr. Lekha Shree.";
    else reply = "Please mention the department name.";
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Zyra running on port " + PORT);
});
