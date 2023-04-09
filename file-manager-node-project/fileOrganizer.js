// This is a js file through this I will organize folder name(folder-to-organize) by grouping all similiar kind of files into a new folders

//step1:   Take a folder path as a input from terminal
let fs =  require('fs');
let path = require('path');
let extensionsObj = {
  Audio:[".mp3"],
  Video:[".mp4", ".gif"],
  Image:[".jpeg", ".jpg" ,".png"],
  Document: [".doc",".xlsx"],
  Software:[".exe"]
}
let inputArr = process.argv;
console.log(inputArr);    //returns array 
/*
[
  'C:\\Program Files\\nodejs\\node.exe',                      
  'E:\\Carrer\\WebProjects\\nodeproject\\file-manager-node-project\\fileOrganizer.js',
  'E:\\Carrer\\WebProjects\\nodeproject\\file-manager-node-project\\folder-to-organize'
]
*/
//******************* */ NOTE:  Always pass the input of folderPath in string.********************************
let folderPathInput = inputArr[2];
// console.log(folderPathInput);          // print an input at index 2 which is the path of the folder


//step-2 :  Now we get the folder path from input but we have to check that user input the correct folder path or not
let folderExists = fs.existsSync(folderPathInput); // if exists then folderExists value = true else false

if(folderExists){
  //step 3: now folder is exist then read the folder
  let files = fs.readdirSync(folderPathInput);
  console.log(files);
  for(let i=0; i<files.length; i++){
    let ext = path.extname(files[i]);
    console.log(ext);
    //step4: find the folder name where that file extension file belongs like .mp3 is audio file
    let folderNameBelongs = giveFolderName(ext);
    console.log(folderNameBelongs);
    //step5. create that folderNameBelongs if it doesn't exist 
    let folderNameBelongsPath = path.join(folderPathInput,folderNameBelongs);
    if(!fs.existsSync(folderNameBelongsPath)){
      fs.mkdirSync(folderNameBelongsPath);
    }
    // //step6. now folderNameBelongs folder exist now we have to move the file into that folder
    let sourcePath = path.join(folderPathInput , files[i]);
    let destinationPath = path.join(folderNameBelongsPath , files[i]);
    fs.copyFileSync(sourcePath,destinationPath);  // now here extenison file copy to the belongs folder
    //step7: delete the source Path file
    fs.unlinkSync(sourcePath);
  }
   console.log("folder Exists");
}else{
  console.log("Please Enter The Valid Path");
}

// This is a function which takes file extension and returns that where that extension file should belongs
function giveFolderName(ext){
  //1. To traverse on the whole object first access all the keys
  for(let key in extensionsObj){
    let valueArr = extensionsObj[key];
    for(let i=0; i<valueArr.length; i++){
      if(valueArr[i] == ext){
        return key;
      }
    }
  }
  return 'others';
}





