// task 5
// let formattedDate = function (date) {
//   let index = date.indexOf("T");
//   const formattedDate = date.substring(0, index);
//   return formattedDate;
// };

// let goodArticles = articles.filter((element) => {
//   return formattedDate(element.publishedAt) >= "2021-01-20";
// });
// let formattedArticles = goodArticles.map((element) => {
//   return {
//     title: element.title,
//     date: formattedDate(element.publishedAt),
//   };
// });

// formattedArticles.forEach((element) => {
//   let div = document.getElementById("content");
//   let paragraph = document.createElement("p");
//   paragraph.innerHTML = `New title: ${element.title}, published on: ${element.date}`;
//   div.appendChild(paragraph);
// });


