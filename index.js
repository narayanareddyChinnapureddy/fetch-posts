let button = document.getElementById('fetchBtn');

button.addEventListener('click', function () {
	let url = 'https://jsonplaceholder.typicode.com/posts';

	fetch(url).then((response) => {
		if (response.status !== 200) {
			console.log(`Something went wrong: ${response.status}`);
			return;
		}

		response.json().then((data) => {
			displayPostsData(data);
		});
	});
});

function displayPostsData(posts) {
	let htmlTemplate = '';

	for (post of posts) {
		htmlTemplate += `<h3>${post.title}</h3>
                        <p>${post.body}</p>
        
        `;
	}
	document.getElementById('results').innerHTML = htmlTemplate;
}
