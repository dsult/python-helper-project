import {
  getFoldersAndFiles,
  makeAssistSuite,
  makeCommandSuite,
} from "./testUtils";

// // typing_assist

// const targetDir = __dirname + "/typing_assist";
// const FoldersAndFiles = getFoldersAndFiles(targetDir);

// for (const suiteName in FoldersAndFiles) {
//   //   if (suiteName !== "CommentSeparator") {
//   //     continue;
//   //   }
//   const testNames = FoldersAndFiles[suiteName];
//   makeAssistSuite(suiteName, testNames, targetDir);
// }

// ctrl + backspace

const targetDir = __dirname + "/smart_backspace";
const FoldersAndFiles = getFoldersAndFiles(targetDir);

for (const suiteName in FoldersAndFiles) {
  //   if (suiteName !== "CommentSeparator") {
  //     continue;
  //   }
  const testNames = FoldersAndFiles[suiteName];
  makeCommandSuite(suiteName, testNames, targetDir);
}
