function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // this will run after greeting
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Soliu", sayBye);


function downloadFile(filename, callback) {
  console.log(`Downloading ${filename}...`);
  setTimeout(() => {
    console.log(`${filename} downloaded successfully.`);
    callback();
  }, 2000);
}

function processFile() {
  console.log("Processing file...");
}

downloadFile("data.zip", processFile);


let payment = new Promise((resolve, reject) => {
  let paymentSuccessful = true;

  if (paymentSuccessful) {
    resolve("✅ Payment received!");
  } else {
    reject("❌ Payment failed!");
  }
});

payment
  .then(message => console.log(message))
  .catch(error => console.log(error));


function fetchUserData() {
  return new Promise((resolve, reject) => {
    console.log("⏳ Fetching user data...");
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ name: "Soliu", track: "Web3" });
      } else {
        reject("❌ Failed to fetch data");
      }
    }, 2000);
  });
}

fetchUserData()
  .then(data => console.log("User Data:", data))
  .catch(err => console.log(err))
  .finally(() => console.log("Done fetching."));


function delayMessage() {
  return new Promise(resolve => {
    setTimeout(() => resolve("This message appears after 2 seconds"), 2000);
  });
}

async function showMessage() {
  console.log("Starting...");
  let message = await delayMessage();
  console.log(message);
  console.log("Finished!");
}

showMessage();


function loginUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve("👤 User logged in"), 1000);
  });
}

function getUserPosts() {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post1", "Post2", "Post3"]), 1500);
  });
}

async function displayUserPosts() {
  console.log("Fetching login...");
  let user = await loginUser();
  console.log(user);

  console.log("Fetching posts...");
  let posts = await getUserPosts();
  console.log("User Posts:", posts);

  console.log("✅ Done!");
}

displayUserPosts();


function fetchProduct() {
  return new Promise((resolve, reject) => {
    let available = false;
    setTimeout(() => {
      if (available) resolve("Product fetched successfully!");
      else reject("❌ Product not available!");
    }, 2000);
  });
}

async function loadProduct() {
  try {
    let result = await fetchProduct();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Process completed ✅");
  }
}

loadProduct();

async function runTasks() {
  try {
    console.log("Starting tasks...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    throw new Error("Something went wrong!");
  } catch (error) {
    console.error("Caught an error:", error.message);
  } finally {
    console.log("Tasks ended.");
  }
}

runTasks();


// class work
// Real-Life Flow Example (Cohort Simulation)

async function joinCohort(student) {
  console.log(`Processing admission for ${student}...`);

  try {
    let admission = await new Promise((resolve) =>
      setTimeout(() => resolve("✅ Admission Approved!"), 2000)
    );

    console.log(admission);

    let courseStart = await new Promise((resolve) =>
      setTimeout(() => resolve("🚀 Course Started Successfully!"), 1500)
    );

    console.log(courseStart);
  } catch (error) {
    console.error("❌ Admission failed:", error);
  } finally {
    console.log("🎓 Process Complete.");
  }
}

joinCohort("Soliu");
