import {
  ParseNode,
  ExpressionNode,
  ParseNodeType,
  CallNode,
  ArgumentNode,
  ErrorNode,
} from "./lib/pyright-parser/parser/parseNodes";
import * as parseTreeUtils from "./lib/pyright-parser/analyzer/parseTreeUtils";
import {
  ParseTreeWalker,
  getChildNodes,
} from "./lib/pyright-parser/analyzer/parseTreeWalker";

export function isExpressionNode(node: ParseNode): node is ExpressionNode {
  switch (node.nodeType) {
    case ParseNodeType.Error:
    case ParseNodeType.UnaryOperation:
    case ParseNodeType.BinaryOperation:
    case ParseNodeType.AssignmentExpression:
    case ParseNodeType.TypeAnnotation:
    case ParseNodeType.Await:
    case ParseNodeType.Ternary:
    case ParseNodeType.Unpack:
    case ParseNodeType.Tuple:
    case ParseNodeType.Call:
    case ParseNodeType.ListComprehension:
    case ParseNodeType.Index:
    case ParseNodeType.Slice:
    case ParseNodeType.Yield:
    case ParseNodeType.YieldFrom:
    case ParseNodeType.MemberAccess:
    case ParseNodeType.Lambda:
    case ParseNodeType.Name:
    case ParseNodeType.Constant:
    case ParseNodeType.Ellipsis:
    case ParseNodeType.Number:
    case ParseNodeType.String:
    case ParseNodeType.FormatString:
    case ParseNodeType.StringList:
    case ParseNodeType.Dictionary:
    case ParseNodeType.List:
    case ParseNodeType.Set:
      return true;

    default:
      return false;
  }
}

export function getPreviousSibling(node: ParseNode): undefined | ParseNode {
  if (!node.parent) {
    return undefined;
  } // Если узел не имеет родителя, вернуть undefined

  const children = getChildNodes(node.parent);

  // Ищем индекс текущего узла в массиве дочерних узлов
  const index = children.findIndex((child) => child === node);

  // Если индекс не найден или узел является первым в списке детей, вернуть undefined
  if (index === -1 || index === 0) {
    return undefined;
  }

  // Вернуть предыдущего соседа узла
  return children[index - 1];
}

export function hasPreviousSibling(node: ParseNode): boolean {
  if (!node.parent) {
    return false;
  } // Если узел не имеет родителя, вернуть false

  const children = getChildNodes(node.parent);

  // Ищем индекс текущего узла в массиве дочерних узлов
  const index = children.findIndex((child) => child === node);

  // Если индекс не найден или узел является первым в списке детей, вернуть false
  if (index === -1 || index === 0) {
    return false;
  }

  return true;
}

// let obj: { [key: string]: any } = {
//   "node.nodeType": parseTreeUtils.printParseNodeType(node.nodeType),
//   "node.parent.nodeType": parseTreeUtils.printParseNodeType(
//     node.parent.nodeType
//   ),
//   "getChildNodes(node.parent)": getChildNodes(node.parent),
// };
// if (node.parent.parent) {
//   obj["getChildNodes(node.parent.parent)"] = getChildNodes(
//     node.parent.parent
//   );
//   obj["node.parent.parent.nodeType"] = parseTreeUtils.printParseNodeType(
//     node.parent.parent.nodeType
//   );
// }
// console.log(obj);
// if (node.parent?.nodeType === ParseNodeType.Argument) {
//   const argumentNodeWalker = new ArgumentNodeWalker((node) => {
//     console.log(node.valueExpression);
//     console.log(node.parent);
//   });
//   argumentNodeWalker.walk(node.parent);
// }
// // console.log(walk);

class ErrorNodeWalker extends ParseTreeWalker {
  constructor(private _callback: (node: ErrorNode) => void) {
    super();
  }

  override visitError(node: ErrorNode) {
    this._callback(node);
    return true;
  }
}
// class ArgumentNodeWalker extends ParseTreeWalker {
//   constructor(private _callback: (node: ArgumentNode) => void) {
//     super();
//   }

//   override visitArgument(node: ArgumentNode) {
//     this._callback(node);
//     return true;
//   }
// }
// export class CallNodeWalker extends ParseTreeWalker {
//   constructor(private _callback: (node: CallNode) => void) {
//     super();
//   }

//   override visitCall(node: CallNode) {
//     this._callback(node);
//     return true;
//   }
// }

// let methodType: FunctionType;
// const callNodeWalker = new CallNodeWalker((node) => {
//   if (node.leftExpression.nodeType === ParseNodeType.MemberAccess) {
//     // Is it accessing the method by the same name?
//     if (node.leftExpression.memberName.value === methodType.details.name) {
//       const memberBaseExpr = node.leftExpression.leftExpression;

//       // Is it a "super" call?
//       if (
//         memberBaseExpr.nodeType === ParseNodeType.Call &&
//         memberBaseExpr.leftExpression.nodeType === ParseNodeType.Name &&
//         memberBaseExpr.leftExpression.value === "super"
//       ) {
//         foundCallOfMember = true;
//       } else {
//         // Is it an X.<method> direct call?
//         const baseType = this._evaluator.getType(memberBaseExpr);
//         if (baseType && isInstantiableClass(baseType)) {
//           foundCallOfMember = true;
//         }
//       }
//     }
//   }
// });
// callNodeWalker.walk(node.suite);
