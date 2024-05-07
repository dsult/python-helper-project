import {
  getFoldersAndFiles,
  makeAssistSuite,
  makeCommandSuite,
} from "./testUtils";

let targetDir;
let FoldersAndFiles;

// // typing_assist

targetDir = __dirname + "/typing_assist";
FoldersAndFiles = getFoldersAndFiles(targetDir);

for (const suiteName in FoldersAndFiles) {
  //   if (suiteName !== "StringSeparator") {
  //     continue;
  //   }
  const testNames = FoldersAndFiles[suiteName];
  makeAssistSuite(suiteName, testNames, targetDir);
}

// // ctrl + backspace

targetDir = __dirname + "/smart_backspace";
FoldersAndFiles = getFoldersAndFiles(targetDir);

for (const suiteName in FoldersAndFiles) {
  //   if (suiteName !== "CommentSeparator") {
  //     continue;
  //   }
  const testNames = FoldersAndFiles[suiteName];
  makeCommandSuite(suiteName, testNames, targetDir);
}
