//fetching a JSON file
fetch('./movies.json')
.then((res)=>res.json())
.then((data)=>console.log(data));

//fetching text file
fetch('./text.txt')
.then((res)=>res.text())
.then((data)=>console.log(data));

//fetch from api
fetch('https://api.github.com/users/bradtraversy/repos')
.then((res)=>res.json())
.then((data)=>console.log(data));

