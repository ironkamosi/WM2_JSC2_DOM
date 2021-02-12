const music = require("./MusicNews");
let newsItems = music.getMusicNews();
/*
    newsItems is a list of objects.  Each object has the following properties:
    source
    author
    title
    description
    url:
    urlToImage:
    publishedAt:
    content:
*/

// -------------------------------------------------------------------
// DO NOT EDIT ANYTHING ABOVE THIS LINE

// ex 3.1 
console.log(newsItems.length)

// ex 3.2
function displayArticle(article) {
  //console.log(article.title) 
  console.log(`News title: ${article.title} By: ${article.author}` ); 

};
displayArticle(newsItems[0])

// ex 3.3
for (let i = 0; i < newsItems.length; i++){
displayArticle(newsItems[i])
}

// ex 4.1
newsItems.forEach(displayArticle)


// ex 4.2
let listOfAuthors = newsItems.map(element => {
  return element.author
})
// console.log(listOfAuthors)

// ex 4.3
listOfAuthors.forEach(function (element) {
  console.log(`Author: ${element}`)
 });


// ex 4.4 
let joesphGreen =newsItems.filter(element => {
  return element.author === "Joseph Green"
})

// ex 4.5
joesphGreen.forEach(displayArticle);

// ex 4.6
let krisHolt = newsItems.find(element => {
  return element.author === "Kris Holt"
})

displayArticle(krisHolt)

/*
Write a console.log statement that will print the number of news articles in the newsItems array?
Write a function called displayArticle that takes one parameter value, which will be a news article. 
Your function should log the title of that news article. Call displayArticle and pass it the news article 
from the first index in the newsItems array.
Write a for statement that will iterate through every index in the newsItems array. For each index, it should call displayArticle. You should see the list of titles from every news article.
Back
*/
