const fs = require("fs.promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${fileName} - ${fileContent}`);
  });
  // dont chnage function name
};
const myFileReader = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    console.log("---" + data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  await fs.appendFile(fileName, fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${fileName} --${fileContent}`);
  });
  // dont chnage function name
};

const myFileDeleter = async (fileName) => {
  await fs.unlinkSync(fileName, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(fileName);
  });
  // write code here
  // dont chnage function name
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
