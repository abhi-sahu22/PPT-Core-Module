const fetchButton = document.getElementById('fetchButton');
const loader = document.getElementById('loader');
const dataContainer = document.getElementById('dataContainer');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

async function fetchData() {
  showLoader();

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    const commentPromises = posts.map(async post => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
      const comments = await response.json();
      post.comments = comments;
    });

    await Promise.all(commentPromises);
    hideLoader();
    displayData(posts);
  } catch (error) {
    hideLoader();
    console.error('Error:', error);
  }
}

function displayData(posts) {
  posts.forEach(post => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <h4>Comments:</h4>
    `;

    post.comments.forEach(comment => {
      const commentDiv = document.createElement('div');
      commentDiv.innerHTML = `
        <strong>${comment.name}</strong>
        <p>${comment.body}</p>
      `;
      div.appendChild(commentDiv);
    });

    dataContainer.appendChild(div);
  });
}

fetchButton.addEventListener('click', fetchData);
