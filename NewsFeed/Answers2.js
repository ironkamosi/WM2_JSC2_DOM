// write your code below this line.
// global variables
let div = document.getElementById("content");
let filterDate = new Date(2021, 01, 21);
// let filteredArray = articles.filter(element=>{
//   element
// });
// time stamp
// activity 5
function extractDate(articles) {
  let filteredArticlesArray = articles.filter(
    (article) => new Date(article.publishedAt) > new Date(2021, 01, 21)
  );
  //console.log(articles);
  filteredArticlesArray.forEach((element) => {
    let paragraph = document.createElement("p");
    //console.log("test1", element.title); // this work
    // var n = d.toDateString();
    // console.log("test", element.publishedAt)
    let myDate = new Date(element.publishedAt);
    let testDate = myDate.toDateString();

    paragraph.innerHTML = `${element.title} "published on" ${testDate}`;
    div.appendChild(paragraph);
    //console.log(testDate);
    // if (testDate === "Thu Feb 04 2021") { // if test >
    //   console.log(element.title + "published on",testDate);
    // }
    // if ( myDate.getTime() > filterDate.getTime()) { // getTime gathers the time
    //   // if test >
    //   console.log(myDate.getTime(), filterDate.getTime())
    //   paragraph.innerHTML = `${element.title} "published on" ${testDate}`;
    //   div.appendChild(paragraph);
    // }

    //  if (testDate > "Jan 21 2021") {
    //    // if test >
    //    paragraph.innerHTML = `${element.title} "published on" ${testDate}`;
    //    div.appendChild(paragraph);
    //  }

    // testDate.filter()
    //console.log("test", element.publishedAt.toDateString())
    //let dateOf = new Date().toLocaleDateString();
    //console.log(dateOf)
    /*
 if (testDate === "Thu Feb 04 2021"){
  return article.title && article.date
 }
 
 */
  });
}
extractDate(articles);

// activity 7
function displayArticle(article){
    let p = document.createElement('p');
    let img = document.createElement('img');
    let header = document.createElement('h2');
    header.innerText = article.title;
    div.appendChild(header);
    img.src = article.urlToImage;
    div.appendChild(img);
    p.innerText = article.description;
    div.appendChild(p);
}
 displayArticle(articles[0]);
 articles.forEach(displayArticle);

// Activity 7/8 and 9
function displayArticle(article) {
  let header = document.getElementById("title");
  let img = document.getElementById("image");
  header.innerText = article.title;
  img.src = article.urlToImage;
}

let newsIndex = 0;

function newsPager() {
  let next = document.createElement("button");
  next.innerText = "Next";
  div.appendChild(next);

  let prev = document.createElement("button");
  prev.innerText = "Previous";
  div.appendChild(prev);
  let h2 = document.createElement("h2");
  h2.id = "title";
  let img = document.createElement("img");
  img.id = "image";
  let p = document.createElement("p");
  p.id = "description";
  div.appendChild(h2);
  div.appendChild(img);
  div.appendChild(p);
//   // ------------------------------------
//   // add your code here to complete the function
  displayArticle(articles[newsIndex]);
  next.onclick = function () {
    newsIndex = newsIndex + 1;
    displayArticle(articles[newsIndex]);
  };
}
newsPager();


// Use the indexOf function to get the index in the string of the T.  something like:
// let s = '2010-06-21T08:30:00Z';  let idx = s.indexOf("T"); console.log(idx)
// 2. then try to get everything before the T
// s.substring(0,index);
// 3. Finally use the split function to divide up the date on the - character and put the year, month and day into an array
// let date = s.substring(0, index).split("-");

// at the end of those steps, date will be an array with date[0]
// being the year, date[1] being the month and data[2] being the day.
// You might have to turn them into numbers using parseInt
