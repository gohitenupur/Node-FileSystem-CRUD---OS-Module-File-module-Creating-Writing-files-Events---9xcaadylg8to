const fs = require("fs");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
      return;
    }
    console.log(
      `File ${fileName} has been created with content: ${fileContent}`
    );
  });
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    console.log(`File ${fileName} has been read, content is: ${data}`);
  });
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  fs.appendFile(fileName, fileContent, (err) => {
    if (err) {
      console.error(`Error updating file: ${err}`);
      return;
    }
    console.log(
      `File ${fileName} has been updated with new content: ${newContent}`
    );
  });
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.unlink(fileName, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err}`);
      return;
    }
    console.log(`File ${fileName} has been deleted`);
  });
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
