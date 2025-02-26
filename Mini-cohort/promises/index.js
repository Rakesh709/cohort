const fs = require("fs")

console.log("Programe started");

fs.readFile('./hello.txt','utf-8',function(err,content){
    if(err){
        console.log('Error in file reading',err);
    }else{
        console.log();
    }
})

///*
// fecthUser("Arjun")
// .then((user) => fetchUserPhotos(user.username))
// .then((userPhotos) => console.log(`Your photes are ${userPhotos}`));
// */

// const displayUserData = async () => {
// const user = await fecthUser(`Govind`);
// const photos = await fetchUserPhotos(user.username);
// console.log(`${user.username} Your photos are: ${photos}`);
// };

// displayUserData();
