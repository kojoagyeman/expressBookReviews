// Task 11

public_users.get('/isbn/:isbn', async function (req, res) {
  // Write your code here
  let isbn = req.params.isbn;

  try {
    const response = await axios.get('http://localhost:5000/books');

    if (response.data[isbn]) {
      return res.status(200).send(JSON.stringify(response.data[isbn], null, 4));
    } else {
      return res.status(404).send("No book found with ISBN " + isbn);
    }
  } catch (error) {
    // Handle errors, e.g., network issues or API errors
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});




// Task 12

public_users.get('/author/:author', async function (req, res) {
  // Write your code here
  let author = req.params.author;
  let booksByAuthor = [];

  try {
    
    const response = await axios.get('http://localhost:5000/books');

    for (let isbn in response.data) {
      if (response.data[isbn].author == author) {
        booksByAuthor.push(response.data[isbn]);
      }
    }

    if (booksByAuthor.length > 0) {
      return res.status(200).send(JSON.stringify(booksByAuthor, null, 4));
    } else {
      return res.status(404).send("No book found with author " + author);
    }
  } catch (error) {
    // Handle errors, e.g., network issues or API errors
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

// Task 13

public_users.get('/title/:title', async function (req, res) {

  let title = req.params.title;
  let booksByTitle = [];

  try {
 
    const response = await axios.get('http://localhost:5000/books');

    for (let isbn in response.data) {
      if (response.data[isbn].title == title) {
        booksByTitle.push(response.data[isbn]);
      }
    }

    if (booksByTitle.length > 0) {
      return res.status(200).send(JSON.stringify(booksByTitle, null, 4));
    } else {
      return res.status(404).send("No book found with title " + title);
    }
  } catch (error) {
  
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});






