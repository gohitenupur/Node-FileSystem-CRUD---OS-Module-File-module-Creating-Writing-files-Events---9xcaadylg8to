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

const fileName = "File.txt";
const fileContent = "Hello";
const updateContent = " World";

myFileWriter(fileName, fileContent);
myFileReader(fileName);
myFileUpdater(fileName, updateContent);
myFileReader(fileName);
myFileDeleter(fileName);

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
