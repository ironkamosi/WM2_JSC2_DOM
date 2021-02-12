------Guide-----
Activity 5 is in file Answers_activity_1.js.
To see Activity 5 change the name of the script of the bottom html file.

Activity 7,8 and 9 are in file Answers.js.
Scratch pad contains ideas for Activity 7,8 and 9.

-----Notes--------
Activity 
Use the indexOf function to get the index in the string of the T.  something like:
let s = '2010-06-21T08:30:00Z';  let idx = s.indexOf("T"); console.log(idx)
2. then try to get everything before the T
s.substring(0,index);
3. Finally use the split function to divide up the date on the - character and put the year, month and day into an array
let date = s.substring(0, index).split("-");

at the end of those steps, date will be an array with date[0]
being the year, date[1] being the month and data[2] being the day.
You might have to turn them into numbers using parseInt
