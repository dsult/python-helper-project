import {
  findNodeByOffset,
  getFirstAncestorOrSelfOfKind,
} from "../lib/pyright-parser/analyzer/parseTreeUtils";
import { assert } from "../lib/pyright-parser/common/debug";
import { DiagnosticSink } from "../lib/pyright-parser/common/diagnosticSink";
import { ParseNodeType } from "../lib/pyright-parser/parser/parseNodes";
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

// test("ParserRecovery1", () => {
//   const diagSink = new DiagnosticSink();
//   const parseResults = TestUtils.parseSampleFile(
//     "parserRecovery1.py",
//     diagSink
//   );

//   const node = findNodeByOffset(
//     parseResults.parserOutput.parseTree,
//     parseResults.text.length - 2
//   );
//   const functionNode = getFirstAncestorOrSelfOfKind(
//     node,
//     ParseNodeType.Function
//   );
//   assert.equal(functionNode!.parent!.nodeType, ParseNodeType.Module);
// });

// test("ParserRecovery2", () => {
//   const diagSink = new DiagnosticSink();
//   const parseResults = TestUtils.parseSampleFile(
//     "parserRecovery2.py",
//     diagSink
//   );

//   const node = findNodeByOffset(
//     parseResults.parserOutput.parseTree,
//     parseResults.text.length - 2
//   );
//   const functionNode = getFirstAncestorOrSelfOfKind(
//     node,
//     ParseNodeType.Function
//   );
//   assert.equal(functionNode!.parent!.nodeType, ParseNodeType.Suite);
// });

// test("ParserRecovery3", () => {
//   const diagSink = new DiagnosticSink();
//   const parseResults = TestUtils.parseSampleFile(
//     "parserRecovery3.py",
//     diagSink
//   );

//   const node = findNodeByOffset(
//     parseResults.parserOutput.parseTree,
//     parseResults.text.length - 2
//   );
//   const functionNode = getFirstAncestorOrSelfOfKind(
//     node,
//     ParseNodeType.Function
//   );
//   assert.equal(functionNode!.parent!.nodeType, ParseNodeType.Module);
// });
