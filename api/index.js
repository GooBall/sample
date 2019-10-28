const fs = require('fs');
const path = require('path');
const util = require('util');
const _ = require('lodash');

fs.readFileAsync = util.promisify(fs.readFile);

function readDirR(dir) {
  return fs.statSync(dir).isDirectory()
    ? Array.prototype.concat(...fs.readdirSync(dir).map(f => readDirR(path.join(dir, f))))
    : dir;
}

async function getFileContents(filePath) {
  fileContent = await fs.readFileAsync(filePath, "utf8");
  return fileContent ? JSON.parse(fileContent) : {};
}

const getInstances = () => {
  const files = readDirR('./stacks/');
  const stacks = [];

  files.forEach((file, i) => {
    stacks[i] = getFileContents(file);
  });

  return Promise.all(stacks);
}

async function getStacks() {
  const instances = await getInstances();

  const result = _.chain(instances)
    .groupBy("ec2TagStackLower")
    .toPairs()
    .map(currentItem => {
      return _.zipObjectDeep(["name", "instances"], currentItem);
    })
    .value();

  return result;
}

module.exports.getInstances = getInstances;
module.exports.getStacks = getStacks;
