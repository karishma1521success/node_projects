// This is a js file through this I will organize folder name(folder-to-organize) by grouping all similiar kind of files into a new folders

//step1:   Take a folder path as a input from terminal

let inputArr = process.argv;
console.log(inputArr);    //returns array 
/*
[
  'C:\\Program Files\\nodejs\\node.exe',                      
  'E:\\Carrer\\WebProjects\\nodeproject\\file-manager-node-project\\fileOrganizer.js',
  'E:\\Carrer\\WebProjects\\nodeproject\\file-manager-node-project\\folder-to-organize'
]
*/
let folderPathInput = inputArr[2];
console.log(folderPathInput);          // print an input at index 2 which is the path of the folder


//step-2 :  Now systemize all the files in seperate folders

