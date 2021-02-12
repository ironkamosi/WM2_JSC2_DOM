//global variable
let newsIndex = 0;
let div = document.getElementById("content");

// activity 7 and activity 8
// function displayArticle(article) {
//   let div = document.getElementById("content")
//   let header = document.getElementById("title")
//   let p = document.getElementById("description");
//   let img = document.getElementById("image");
//   header.innerText = article.title;
//   div.appendChild(header);
//   img.src = article.urlToImage;
//   div.appendChild(img);
//   p.innerText = article.description;
//   div.appendChild(p);
// }
// displayArticle(articles[0]);
// articles.forEach(displayArticle);

// activity 9 

function displayArticle(article) {
  let div = document.getElementById("content");
  let header = document.getElementById("title");
  let p = document.getElementById("description");
  let img = document.getElementById("image");
  header.innerText = article.title;
  div.appendChild(header);
  img.src = article.urlToImage;
  div.appendChild(img);
  p.innerText = article.description;
  div.appendChild(p);
}

function newsPager() {
   let prev = document.createElement("button");
  prev.innerText = "Previous";
  div.appendChild(prev); 
 
  let next = document.createElement("button");
  next.innerText = "Next";
  div.appendChild(next);
 
  let h2 = document.createElement("h2");
  h2.id = "title";
  let img = document.createElement("img");
  img.id = "image";
  let p = document.createElement("p");
  p.id = "description";
  div.appendChild(h2);
  div.appendChild(img);
  div.appendChild(p);
  // ------------------------------------
  // add your code here to complete the function
  displayArticle(articles[newsIndex]);

  next.onclick = function () {
    newsIndex = newsIndex + 1;
    displayArticle(articles[newsIndex]);
    if (newsIndex === articles.length - 1) {
      newsIndex = 0;
    }
  };
  
   prev.onclick = function () {
     newsIndex = newsIndex - 1;
     displayArticle(articles[newsIndex]);
     if (newsIndex === 0) {
       newsIndex = articles.length-1;
     }
    console.log(newsIndex)

   };

  
  
  
}
newsPager();
