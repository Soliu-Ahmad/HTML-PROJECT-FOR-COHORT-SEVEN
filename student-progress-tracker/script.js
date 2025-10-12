
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const studentList = document.getElementById("studentList");
const totalEl = document.getElementById("total");
const averageEl = document.getElementById("average");
const topEl = document.getElementById("top");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");
const cancelBtn = document.getElementById("cancelBtn");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = null;

// Calculate grade
function calculateGrade(score) {
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 40) return "D";
  return "F";
}

// Save data
function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

// Render student list
function renderStudents(filter = "") {
  studentList.innerHTML = "";

  let filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredStudents.length === 0) {
    studentList.innerHTML = `<tr><td colspan="4">No records found</td></tr>`;
    updateStats(filteredStudents);
    return;
  }

  filteredStudents.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.score}</td>
      <td>${calculateGrade(student.score)}</td>
      <td>
        <button onclick="editStudent(${index})">Edit</button>
        <button class="delete" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    studentList.appendChild(row);
  });

  updateStats(filteredStudents);
}

// Update statistics
function updateStats(list) {
  totalEl.textContent = list.length;
  if (list.length === 0) {
    averageEl.textContent = 0;
    topEl.textContent = "N/A";
    return;
  }

  const totalScore = list.reduce((sum, s) => sum + s.score, 0);
  const average = (totalScore / list.length).toFixed(1);
  averageEl.textContent = average;

  const topStudent = list.reduce((a, b) => (b.score > a.score ? b : a));
  topEl.textContent = `${topStudent.name} (${topStudent.score})`;
}

// Add student
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const score = parseFloat(scoreInput.value);

  if (!name || isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a valid name and score (0–100).");
    return;
  }

  students.push({ name, score });
  saveToLocalStorage();
  form.reset();
  renderStudents();
});

// Edit student
function editStudent(index) {
  const student = students[index];
  nameInput.value = student.name;
  scoreInput.value = student.score;
  editIndex = index;

  submitBtn.classList.add("hidden");
  updateBtn.classList.remove("hidden");
  cancelBtn.classList.remove("hidden");
}

// Update student
updateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const score = parseFloat(scoreInput.value);

  if (!name || isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a valid name and score (0–100).");
    return;
  }

  students[editIndex] = { name, score };
  saveToLocalStorage();

  form.reset();
  editIndex = null;
  toggleButtons();
  renderStudents();
});

// Delete student
function deleteStudent(index) {
  if (confirm("Delete this record?")) {
    students.splice(index, 1);
    saveToLocalStorage();
    renderStudents(searchInput.value);
  }
}

// Cancel edit
cancelBtn.addEventListener("click", () => {
  form.reset();
  editIndex = null;
  toggleButtons();
});

// Toggle buttons
function toggleButtons() {
  submitBtn.classList.remove("hidden");
  updateBtn.classList.add("hidden");
  cancelBtn.classList.add("hidden");
}

// Search
searchInput.addEventListener("input", (e) => {
  renderStudents(e.target.value);
});

// Sort
sortSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  if (value === "name-asc") students.sort((a, b) => a.name.localeCompare(b.name));
  if (value === "name-desc") students.sort((a, b) => b.name.localeCompare(a.name));
  if (value === "score-asc") students.sort((a, b) => a.score - b.score);
  if (value === "score-desc") students.sort((a, b) => b.score - a.score);
  saveToLocalStorage();
  renderStudents(searchInput.value);
});

// Initialize app
window.addEventListener("load", () => {
  renderStudents();
});
