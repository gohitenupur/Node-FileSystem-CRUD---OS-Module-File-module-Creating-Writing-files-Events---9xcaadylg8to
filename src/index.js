const fs = require("fs");

const myFileWriter = async (fileName, fileContent) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(fileContent);
  });
};

const myFileReader = async (fileName) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

const myFileUpdater = async (fileName, fileContent) => {
  fs.appendFile(fileName, fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(fileContent);
  });
};

const myFileDeleter = async (fileName) => {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(fileName);
  });
};

let fileName = "File.txt";
let fileContent = "Hello";
myFileWriter(fileName, fileContent);
myFileReader(fileName);
myFileUpdater(fileName, " World");
myFileDeleter(fileName);

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
