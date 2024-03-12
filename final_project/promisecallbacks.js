// TASK 10
public_users.get('/books', async function (req, res) {
  try {
    await new Promise((resolve) => {
      resolve(res.send(JSON.stringify({ books }, null, 4)));
    });
    console.log("Promise for Task 10 resolved");
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

//TASK 11
public_users.get('/isbn/:isbn', async function (req, res) {
  try {
    await new Promise((resolve) => {
      resolve(res.send(JSON.stringify({ isbn }, null, 4)));
    });
    console.log("Promise for Task 10 resolved");
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

//TASK 12
public_users.get('/author/:author', async function (req, res) {
  try {
    await new Promise((resolve) => {
      resolve(res.send(JSON.stringify({ author }, { books }, null, 4)));
    });

    console.log("Promise for Task 10 resolved");
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

//TASK 13
public_users.get('/title/:title', async function (req, res) {
  try {
    await new Promise((resolve) => {
      resolve(res.send(JSON.stringify({ title }, { books }, null, 4)));
    });

    console.log("Promise for Task 10 resolved");
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
