// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);

        Object.values(response.data.articles).forEach(topic => {
        topic.forEach(article => {
            let container = document.querySelector(".cards-container");
            container.appendChild(createCard(article));
        });
        });
    });

    //Define functional component here

function createCard(item) {

    //Define new elements

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const authImg = document.createElement('img');
    const name = document.createElement('span');

    //Set class names

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    //Setup structure of elements

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    author.appendChild(name);
    imgCont.appendChild(authImg);

    //Set text content

    headline.textContent = item.headline;
    authImg.src = item.authorPhoto;
    name.textContent = item.authorName;

    return card;

}

