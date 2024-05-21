// Generated from src/lib/antlr/PythonParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PythonParserListener } from "./PythonParserListener";

export class PythonParser extends Parser {
  public static readonly INDENT = 1;
  public static readonly DEDENT = 2;
  public static readonly FSTRING_START = 3;
  public static readonly FSTRING_MIDDLE = 4;
  public static readonly FSTRING_END = 5;
  public static readonly FALSE = 6;
  public static readonly AWAIT = 7;
  public static readonly ELSE = 8;
  public static readonly IMPORT = 9;
  public static readonly PASS = 10;
  public static readonly NONE = 11;
  public static readonly BREAK = 12;
  public static readonly EXCEPT = 13;
  public static readonly IN = 14;
  public static readonly RAISE = 15;
  public static readonly TRUE = 16;
  public static readonly CLASS = 17;
  public static readonly FINALLY = 18;
  public static readonly IS = 19;
  public static readonly RETURN = 20;
  public static readonly AND = 21;
  public static readonly CONTINUE = 22;
  public static readonly FOR = 23;
  public static readonly LAMBDA = 24;
  public static readonly TRY = 25;
  public static readonly AS = 26;
  public static readonly DEF = 27;
  public static readonly FROM = 28;
  public static readonly NONLOCAL = 29;
  public static readonly WHILE = 30;
  public static readonly ASSERT = 31;
  public static readonly DEL = 32;
  public static readonly GLOBAL = 33;
  public static readonly NOT = 34;
  public static readonly WITH = 35;
  public static readonly ASYNC = 36;
  public static readonly ELIF = 37;
  public static readonly IF = 38;
  public static readonly OR = 39;
  public static readonly YIELD = 40;
  public static readonly LPAR = 41;
  public static readonly LSQB = 42;
  public static readonly LBRACE = 43;
  public static readonly RPAR = 44;
  public static readonly RSQB = 45;
  public static readonly RBRACE = 46;
  public static readonly DOT = 47;
  public static readonly COLON = 48;
  public static readonly COMMA = 49;
  public static readonly SEMI = 50;
  public static readonly PLUS = 51;
  public static readonly MINUS = 52;
  public static readonly STAR = 53;
  public static readonly SLASH = 54;
  public static readonly VBAR = 55;
  public static readonly AMPER = 56;
  public static readonly LESS = 57;
  public static readonly GREATER = 58;
  public static readonly EQUAL = 59;
  public static readonly PERCENT = 60;
  public static readonly EQEQUAL = 61;
  public static readonly NOTEQUAL = 62;
  public static readonly LESSEQUAL = 63;
  public static readonly GREATEREQUAL = 64;
  public static readonly TILDE = 65;
  public static readonly CIRCUMFLEX = 66;
  public static readonly LEFTSHIFT = 67;
  public static readonly RIGHTSHIFT = 68;
  public static readonly DOUBLESTAR = 69;
  public static readonly PLUSEQUAL = 70;
  public static readonly MINEQUAL = 71;
  public static readonly STAREQUAL = 72;
  public static readonly SLASHEQUAL = 73;
  public static readonly PERCENTEQUAL = 74;
  public static readonly AMPEREQUAL = 75;
  public static readonly VBAREQUAL = 76;
  public static readonly CIRCUMFLEXEQUAL = 77;
  public static readonly LEFTSHIFTEQUAL = 78;
  public static readonly RIGHTSHIFTEQUAL = 79;
  public static readonly DOUBLESTAREQUAL = 80;
  public static readonly DOUBLESLASH = 81;
  public static readonly DOUBLESLASHEQUAL = 82;
  public static readonly AT = 83;
  public static readonly ATEQUAL = 84;
  public static readonly RARROW = 85;
  public static readonly ELLIPSIS = 86;
  public static readonly COLONEQUAL = 87;
  public static readonly EXCLAMATION = 88;
  public static readonly NAME = 89;
  public static readonly NUMBER = 90;
  public static readonly STRING = 91;
  public static readonly TYPE_COMMENT = 92;
  public static readonly NEWLINE = 93;
  public static readonly COMMENT = 94;
  public static readonly WS = 95;
  public static readonly EXPLICIT_LINE_JOINING = 96;
  public static readonly ERROR_TOKEN = 97;
  public static readonly RULE_file_input = 0;
  public static readonly RULE_interactive = 1;
  public static readonly RULE_eval = 2;
  public static readonly RULE_func_type = 3;
  public static readonly RULE_fstring_input = 4;
  public static readonly RULE_statements = 5;
  public static readonly RULE_statement = 6;
  public static readonly RULE_statement_newline = 7;
  public static readonly RULE_simple_stmts = 8;
  public static readonly RULE_simple_stmt = 9;
  public static readonly RULE_compound_stmt = 10;
  public static readonly RULE_assignment = 11;
  public static readonly RULE_annotated_rhs = 12;
  public static readonly RULE_augassign = 13;
  public static readonly RULE_return_stmt = 14;
  public static readonly RULE_raise_stmt = 15;
  public static readonly RULE_global_stmt = 16;
  public static readonly RULE_nonlocal_stmt = 17;
  public static readonly RULE_del_stmt = 18;
  public static readonly RULE_yield_stmt = 19;
  public static readonly RULE_assert_stmt = 20;
  public static readonly RULE_import_stmt = 21;
  public static readonly RULE_import_name = 22;
  public static readonly RULE_import_from = 23;
  public static readonly RULE_import_from_targets = 24;
  public static readonly RULE_import_from_as_names = 25;
  public static readonly RULE_import_from_as_name = 26;
  public static readonly RULE_dotted_as_names = 27;
  public static readonly RULE_dotted_as_name = 28;
  public static readonly RULE_dotted_name = 29;
  public static readonly RULE_block = 30;
  public static readonly RULE_decorators = 31;
  public static readonly RULE_class_def = 32;
  public static readonly RULE_class_def_raw = 33;
  public static readonly RULE_function_def = 34;
  public static readonly RULE_function_def_raw = 35;
  public static readonly RULE_params = 36;
  public static readonly RULE_parameters = 37;
  public static readonly RULE_slash_no_default = 38;
  public static readonly RULE_slash_with_default = 39;
  public static readonly RULE_star_etc = 40;
  public static readonly RULE_kwds = 41;
  public static readonly RULE_param_no_default = 42;
  public static readonly RULE_param_no_default_star_annotation = 43;
  public static readonly RULE_param_with_default = 44;
  public static readonly RULE_param_maybe_default = 45;
  public static readonly RULE_param = 46;
  public static readonly RULE_param_star_annotation = 47;
  public static readonly RULE_annotation = 48;
  public static readonly RULE_star_annotation = 49;
  public static readonly RULE_default_assignment = 50;
  public static readonly RULE_if_stmt = 51;
  public static readonly RULE_elif_stmt = 52;
  public static readonly RULE_else_block = 53;
  public static readonly RULE_while_stmt = 54;
  public static readonly RULE_for_stmt = 55;
  public static readonly RULE_with_stmt = 56;
  public static readonly RULE_with_item = 57;
  public static readonly RULE_try_stmt = 58;
  public static readonly RULE_except_block = 59;
  public static readonly RULE_except_star_block = 60;
  public static readonly RULE_finally_block = 61;
  public static readonly RULE_match_stmt = 62;
  public static readonly RULE_subject_expr = 63;
  public static readonly RULE_case_block = 64;
  public static readonly RULE_guard = 65;
  public static readonly RULE_patterns = 66;
  public static readonly RULE_pattern = 67;
  public static readonly RULE_as_pattern = 68;
  public static readonly RULE_or_pattern = 69;
  public static readonly RULE_closed_pattern = 70;
  public static readonly RULE_literal_pattern = 71;
  public static readonly RULE_literal_expr = 72;
  public static readonly RULE_complex_number = 73;
  public static readonly RULE_signed_number = 74;
  public static readonly RULE_signed_real_number = 75;
  public static readonly RULE_real_number = 76;
  public static readonly RULE_imaginary_number = 77;
  public static readonly RULE_capture_pattern = 78;
  public static readonly RULE_pattern_capture_target = 79;
  public static readonly RULE_wildcard_pattern = 80;
  public static readonly RULE_value_pattern = 81;
  public static readonly RULE_attr = 82;
  public static readonly RULE_name_or_attr = 83;
  public static readonly RULE_group_pattern = 84;
  public static readonly RULE_sequence_pattern = 85;
  public static readonly RULE_open_sequence_pattern = 86;
  public static readonly RULE_maybe_sequence_pattern = 87;
  public static readonly RULE_maybe_star_pattern = 88;
  public static readonly RULE_star_pattern = 89;
  public static readonly RULE_mapping_pattern = 90;
  public static readonly RULE_items_pattern = 91;
  public static readonly RULE_key_value_pattern = 92;
  public static readonly RULE_double_star_pattern = 93;
  public static readonly RULE_class_pattern = 94;
  public static readonly RULE_positional_patterns = 95;
  public static readonly RULE_keyword_patterns = 96;
  public static readonly RULE_keyword_pattern = 97;
  public static readonly RULE_type_alias = 98;
  public static readonly RULE_type_params = 99;
  public static readonly RULE_type_param_seq = 100;
  public static readonly RULE_type_param = 101;
  public static readonly RULE_type_param_bound = 102;
  public static readonly RULE_expressions = 103;
  public static readonly RULE_expression = 104;
  public static readonly RULE_yield_expr = 105;
  public static readonly RULE_star_expressions = 106;
  public static readonly RULE_star_expression = 107;
  public static readonly RULE_star_named_expressions = 108;
  public static readonly RULE_star_named_expression = 109;
  public static readonly RULE_assignment_expression = 110;
  public static readonly RULE_named_expression = 111;
  public static readonly RULE_disjunction = 112;
  public static readonly RULE_conjunction = 113;
  public static readonly RULE_inversion = 114;
  public static readonly RULE_comparison = 115;
  public static readonly RULE_compare_op_bitwise_or_pair = 116;
  public static readonly RULE_eq_bitwise_or = 117;
  public static readonly RULE_noteq_bitwise_or = 118;
  public static readonly RULE_lte_bitwise_or = 119;
  public static readonly RULE_lt_bitwise_or = 120;
  public static readonly RULE_gte_bitwise_or = 121;
  public static readonly RULE_gt_bitwise_or = 122;
  public static readonly RULE_notin_bitwise_or = 123;
  public static readonly RULE_in_bitwise_or = 124;
  public static readonly RULE_isnot_bitwise_or = 125;
  public static readonly RULE_is_bitwise_or = 126;
  public static readonly RULE_bitwise_or = 127;
  public static readonly RULE_bitwise_xor = 128;
  public static readonly RULE_bitwise_and = 129;
  public static readonly RULE_shift_expr = 130;
  public static readonly RULE_sum = 131;
  public static readonly RULE_term = 132;
  public static readonly RULE_factor = 133;
  public static readonly RULE_power = 134;
  public static readonly RULE_await_primary = 135;
  public static readonly RULE_primary = 136;
  public static readonly RULE_slices = 137;
  public static readonly RULE_slice = 138;
  public static readonly RULE_atom = 139;
  public static readonly RULE_group = 140;
  public static readonly RULE_lambdef = 141;
  public static readonly RULE_lambda_params = 142;
  public static readonly RULE_lambda_parameters = 143;
  public static readonly RULE_lambda_slash_no_default = 144;
  public static readonly RULE_lambda_slash_with_default = 145;
  public static readonly RULE_lambda_star_etc = 146;
  public static readonly RULE_lambda_kwds = 147;
  public static readonly RULE_lambda_param_no_default = 148;
  public static readonly RULE_lambda_param_with_default = 149;
  public static readonly RULE_lambda_param_maybe_default = 150;
  public static readonly RULE_lambda_param = 151;
  public static readonly RULE_fstring_middle = 152;
  public static readonly RULE_fstring_replacement_field = 153;
  public static readonly RULE_fstring_conversion = 154;
  public static readonly RULE_fstring_full_format_spec = 155;
  public static readonly RULE_fstring_format_spec = 156;
  public static readonly RULE_fstring = 157;
  public static readonly RULE_string = 158;
  public static readonly RULE_strings = 159;
  public static readonly RULE_list = 160;
  public static readonly RULE_tuple = 161;
  public static readonly RULE_set = 162;
  public static readonly RULE_dict = 163;
  public static readonly RULE_double_starred_kvpairs = 164;
  public static readonly RULE_double_starred_kvpair = 165;
  public static readonly RULE_kvpair = 166;
  public static readonly RULE_for_if_clauses = 167;
  public static readonly RULE_for_if_clause = 168;
  public static readonly RULE_listcomp = 169;
  public static readonly RULE_setcomp = 170;
  public static readonly RULE_genexp = 171;
  public static readonly RULE_dictcomp = 172;
  public static readonly RULE_arguments = 173;
  public static readonly RULE_args = 174;
  public static readonly RULE_kwargs = 175;
  public static readonly RULE_starred_expression = 176;
  public static readonly RULE_kwarg_or_starred = 177;
  public static readonly RULE_kwarg_or_double_starred = 178;
  public static readonly RULE_star_targets = 179;
  public static readonly RULE_star_targets_list_seq = 180;
  public static readonly RULE_star_targets_tuple_seq = 181;
  public static readonly RULE_star_target = 182;
  public static readonly RULE_target_with_star_atom = 183;
  public static readonly RULE_star_atom = 184;
  public static readonly RULE_single_target = 185;
  public static readonly RULE_single_subscript_attribute_target = 186;
  public static readonly RULE_t_primary = 187;
  public static readonly RULE_del_targets = 188;
  public static readonly RULE_del_target = 189;
  public static readonly RULE_del_t_atom = 190;
  public static readonly RULE_type_expressions = 191;
  public static readonly RULE_func_type_comment = 192;
  public static readonly RULE_soft_kw_type = 193;
  public static readonly RULE_soft_kw_match = 194;
  public static readonly RULE_soft_kw_case = 195;
  public static readonly RULE_soft_kw_wildcard = 196;
  public static readonly RULE_soft_kw__not__wildcard = 197;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "file_input",
    "interactive",
    "eval",
    "func_type",
    "fstring_input",
    "statements",
    "statement",
    "statement_newline",
    "simple_stmts",
    "simple_stmt",
    "compound_stmt",
    "assignment",
    "annotated_rhs",
    "augassign",
    "return_stmt",
    "raise_stmt",
    "global_stmt",
    "nonlocal_stmt",
    "del_stmt",
    "yield_stmt",
    "assert_stmt",
    "import_stmt",
    "import_name",
    "import_from",
    "import_from_targets",
    "import_from_as_names",
    "import_from_as_name",
    "dotted_as_names",
    "dotted_as_name",
    "dotted_name",
    "block",
    "decorators",
    "class_def",
    "class_def_raw",
    "function_def",
    "function_def_raw",
    "params",
    "parameters",
    "slash_no_default",
    "slash_with_default",
    "star_etc",
    "kwds",
    "param_no_default",
    "param_no_default_star_annotation",
    "param_with_default",
    "param_maybe_default",
    "param",
    "param_star_annotation",
    "annotation",
    "star_annotation",
    "default_assignment",
    "if_stmt",
    "elif_stmt",
    "else_block",
    "while_stmt",
    "for_stmt",
    "with_stmt",
    "with_item",
    "try_stmt",
    "except_block",
    "except_star_block",
    "finally_block",
    "match_stmt",
    "subject_expr",
    "case_block",
    "guard",
    "patterns",
    "pattern",
    "as_pattern",
    "or_pattern",
    "closed_pattern",
    "literal_pattern",
    "literal_expr",
    "complex_number",
    "signed_number",
    "signed_real_number",
    "real_number",
    "imaginary_number",
    "capture_pattern",
    "pattern_capture_target",
    "wildcard_pattern",
    "value_pattern",
    "attr",
    "name_or_attr",
    "group_pattern",
    "sequence_pattern",
    "open_sequence_pattern",
    "maybe_sequence_pattern",
    "maybe_star_pattern",
    "star_pattern",
    "mapping_pattern",
    "items_pattern",
    "key_value_pattern",
    "double_star_pattern",
    "class_pattern",
    "positional_patterns",
    "keyword_patterns",
    "keyword_pattern",
    "type_alias",
    "type_params",
    "type_param_seq",
    "type_param",
    "type_param_bound",
    "expressions",
    "expression",
    "yield_expr",
    "star_expressions",
    "star_expression",
    "star_named_expressions",
    "star_named_expression",
    "assignment_expression",
    "named_expression",
    "disjunction",
    "conjunction",
    "inversion",
    "comparison",
    "compare_op_bitwise_or_pair",
    "eq_bitwise_or",
    "noteq_bitwise_or",
    "lte_bitwise_or",
    "lt_bitwise_or",
    "gte_bitwise_or",
    "gt_bitwise_or",
    "notin_bitwise_or",
    "in_bitwise_or",
    "isnot_bitwise_or",
    "is_bitwise_or",
    "bitwise_or",
    "bitwise_xor",
    "bitwise_and",
    "shift_expr",
    "sum",
    "term",
    "factor",
    "power",
    "await_primary",
    "primary",
    "slices",
    "slice",
    "atom",
    "group",
    "lambdef",
    "lambda_params",
    "lambda_parameters",
    "lambda_slash_no_default",
    "lambda_slash_with_default",
    "lambda_star_etc",
    "lambda_kwds",
    "lambda_param_no_default",
    "lambda_param_with_default",
    "lambda_param_maybe_default",
    "lambda_param",
    "fstring_middle",
    "fstring_replacement_field",
    "fstring_conversion",
    "fstring_full_format_spec",
    "fstring_format_spec",
    "fstring",
    "string",
    "strings",
    "list",
    "tuple",
    "set",
    "dict",
    "double_starred_kvpairs",
    "double_starred_kvpair",
    "kvpair",
    "for_if_clauses",
    "for_if_clause",
    "listcomp",
    "setcomp",
    "genexp",
    "dictcomp",
    "arguments",
    "args",
    "kwargs",
    "starred_expression",
    "kwarg_or_starred",
    "kwarg_or_double_starred",
    "star_targets",
    "star_targets_list_seq",
    "star_targets_tuple_seq",
    "star_target",
    "target_with_star_atom",
    "star_atom",
    "single_target",
    "single_subscript_attribute_target",
    "t_primary",
    "del_targets",
    "del_target",
    "del_t_atom",
    "type_expressions",
    "func_type_comment",
    "soft_kw_type",
    "soft_kw_match",
    "soft_kw_case",
    "soft_kw_wildcard",
    "soft_kw__not__wildcard",
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'False'",
    "'await'",
    "'else'",
    "'import'",
    "'pass'",
    "'None'",
    "'break'",
    "'except'",
    "'in'",
    "'raise'",
    "'True'",
    "'class'",
    "'finally'",
    "'is'",
    "'return'",
    "'and'",
    "'continue'",
    "'for'",
    "'lambda'",
    "'try'",
    "'as'",
    "'def'",
    "'from'",
    "'nonlocal'",
    "'while'",
    "'assert'",
    "'del'",
    "'global'",
    "'not'",
    "'with'",
    "'async'",
    "'elif'",
    "'if'",
    "'or'",
    "'yield'",
    "'('",
    "'['",
    undefined,
    "')'",
    "']'",
    undefined,
    "'.'",
    "':'",
    "','",
    "';'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'|'",
    "'&'",
    "'<'",
    "'>'",
    "'='",
    "'%'",
    "'=='",
    "'!='",
    "'<='",
    "'>='",
    "'~'",
    "'^'",
    "'<<'",
    "'>>'",
    "'**'",
    "'+='",
    "'-='",
    "'*='",
    "'/='",
    "'%='",
    "'&='",
    "'|='",
    "'^='",
    "'<<='",
    "'>>='",
    "'**='",
    "'//'",
    "'//='",
    "'@'",
    "'@='",
    "'->'",
    "'...'",
    "':='",
    "'!'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    "INDENT",
    "DEDENT",
    "FSTRING_START",
    "FSTRING_MIDDLE",
    "FSTRING_END",
    "FALSE",
    "AWAIT",
    "ELSE",
    "IMPORT",
    "PASS",
    "NONE",
    "BREAK",
    "EXCEPT",
    "IN",
    "RAISE",
    "TRUE",
    "CLASS",
    "FINALLY",
    "IS",
    "RETURN",
    "AND",
    "CONTINUE",
    "FOR",
    "LAMBDA",
    "TRY",
    "AS",
    "DEF",
    "FROM",
    "NONLOCAL",
    "WHILE",
    "ASSERT",
    "DEL",
    "GLOBAL",
    "NOT",
    "WITH",
    "ASYNC",
    "ELIF",
    "IF",
    "OR",
    "YIELD",
    "LPAR",
    "LSQB",
    "LBRACE",
    "RPAR",
    "RSQB",
    "RBRACE",
    "DOT",
    "COLON",
    "COMMA",
    "SEMI",
    "PLUS",
    "MINUS",
    "STAR",
    "SLASH",
    "VBAR",
    "AMPER",
    "LESS",
    "GREATER",
    "EQUAL",
    "PERCENT",
    "EQEQUAL",
    "NOTEQUAL",
    "LESSEQUAL",
    "GREATEREQUAL",
    "TILDE",
    "CIRCUMFLEX",
    "LEFTSHIFT",
    "RIGHTSHIFT",
    "DOUBLESTAR",
    "PLUSEQUAL",
    "MINEQUAL",
    "STAREQUAL",
    "SLASHEQUAL",
    "PERCENTEQUAL",
    "AMPEREQUAL",
    "VBAREQUAL",
    "CIRCUMFLEXEQUAL",
    "LEFTSHIFTEQUAL",
    "RIGHTSHIFTEQUAL",
    "DOUBLESTAREQUAL",
    "DOUBLESLASH",
    "DOUBLESLASHEQUAL",
    "AT",
    "ATEQUAL",
    "RARROW",
    "ELLIPSIS",
    "COLONEQUAL",
    "EXCLAMATION",
    "NAME",
    "NUMBER",
    "STRING",
    "TYPE_COMMENT",
    "NEWLINE",
    "COMMENT",
    "WS",
    "EXPLICIT_LINE_JOINING",
    "ERROR_TOKEN",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    PythonParser._LITERAL_NAMES,
    PythonParser._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return PythonParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "PythonParser.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return PythonParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return PythonParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(PythonParser._ATN, this);
  }
  // @RuleVersion(0)
  public file_input(): File_inputContext {
    let _localctx: File_inputContext = new File_inputContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 0, PythonParser.RULE_file_input);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 397;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
          case 1:
            {
              this.state = 396;
              this.statements();
            }
            break;
        }
        this.state = 399;
        this.match(PythonParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public interactive(): InteractiveContext {
    let _localctx: InteractiveContext = new InteractiveContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 2, PythonParser.RULE_interactive);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 401;
        this.statement_newline();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public eval(): EvalContext {
    let _localctx: EvalContext = new EvalContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, PythonParser.RULE_eval);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 403;
        this.expressions();
        this.state = 407;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.NEWLINE) {
          {
            {
              this.state = 404;
              this.match(PythonParser.NEWLINE);
            }
          }
          this.state = 409;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 410;
        this.match(PythonParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public func_type(): Func_typeContext {
    let _localctx: Func_typeContext = new Func_typeContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 6, PythonParser.RULE_func_type);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 412;
        this.match(PythonParser.LPAR);
        this.state = 414;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PythonParser.FSTRING_START) |
                (1 << PythonParser.FALSE) |
                (1 << PythonParser.AWAIT) |
                (1 << PythonParser.NONE) |
                (1 << PythonParser.TRUE) |
                (1 << PythonParser.LAMBDA))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (PythonParser.NOT - 34)) |
                (1 << (PythonParser.LPAR - 34)) |
                (1 << (PythonParser.LSQB - 34)) |
                (1 << (PythonParser.LBRACE - 34)) |
                (1 << (PythonParser.PLUS - 34)) |
                (1 << (PythonParser.MINUS - 34)) |
                (1 << (PythonParser.STAR - 34)) |
                (1 << (PythonParser.TILDE - 34)))) !==
              0) ||
          (((_la - 69) & ~0x1f) === 0 &&
            ((1 << (_la - 69)) &
              ((1 << (PythonParser.DOUBLESTAR - 69)) |
                (1 << (PythonParser.ELLIPSIS - 69)) |
                (1 << (PythonParser.NAME - 69)) |
                (1 << (PythonParser.NUMBER - 69)) |
                (1 << (PythonParser.STRING - 69)))) !==
              0)
        ) {
          {
            this.state = 413;
            this.type_expressions();
          }
        }

        this.state = 416;
        this.match(PythonParser.RPAR);
        this.state = 417;
        this.match(PythonParser.RARROW);
        this.state = 418;
        this.expression();
        this.state = 422;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.NEWLINE) {
          {
            {
              this.state = 419;
              this.match(PythonParser.NEWLINE);
            }
          }
          this.state = 424;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 425;
        this.match(PythonParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fstring_input(): Fstring_inputContext {
    let _localctx: Fstring_inputContext = new Fstring_inputContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 8, PythonParser.RULE_fstring_input);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 427;
        this.star_expressions();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public statements(): StatementsContext {
    let _localctx: StatementsContext = new StatementsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 10, PythonParser.RULE_statements);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 430;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 429;
                  this.statement();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 432;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 12, PythonParser.RULE_statement);
    try {
      this.state = 436;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 434;
            this.compound_stmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 435;
            this.simple_stmts();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public statement_newline(): Statement_newlineContext {
    let _localctx: Statement_newlineContext = new Statement_newlineContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 14, PythonParser.RULE_statement_newline);
    try {
      this.state = 444;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 438;
            this.compound_stmt();
            this.state = 439;
            this.match(PythonParser.NEWLINE);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 441;
            this.simple_stmts();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 442;
            this.match(PythonParser.NEWLINE);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 443;
            this.match(PythonParser.EOF);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public simple_stmts(): Simple_stmtsContext {
    let _localctx: Simple_stmtsContext = new Simple_stmtsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 16, PythonParser.RULE_simple_stmts);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 446;
        this.simple_stmt();
        this.state = 451;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 447;
                this.match(PythonParser.SEMI);
                this.state = 448;
                this.simple_stmt();
              }
            }
          }
          this.state = 453;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
        }
        this.state = 455;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.SEMI) {
          {
            this.state = 454;
            this.match(PythonParser.SEMI);
          }
        }

        this.state = 457;
        this.match(PythonParser.NEWLINE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public simple_stmt(): Simple_stmtContext {
    let _localctx: Simple_stmtContext = new Simple_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 18, PythonParser.RULE_simple_stmt);
    try {
      this.state = 473;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 459;
            this.assignment();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 460;
            this.type_alias();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 461;
            this.star_expressions();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 462;
            this.return_stmt();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 463;
            this.import_stmt();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 464;
            this.raise_stmt();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 465;
            this.match(PythonParser.PASS);
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 466;
            this.del_stmt();
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 467;
            this.yield_stmt();
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 468;
            this.assert_stmt();
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 469;
            this.match(PythonParser.BREAK);
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 470;
            this.match(PythonParser.CONTINUE);
          }
          break;

        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 471;
            this.global_stmt();
          }
          break;

        case 14:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 472;
            this.nonlocal_stmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public compound_stmt(): Compound_stmtContext {
    let _localctx: Compound_stmtContext = new Compound_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 20, PythonParser.RULE_compound_stmt);
    try {
      this.state = 483;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 475;
            this.function_def();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 476;
            this.if_stmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 477;
            this.class_def();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 478;
            this.with_stmt();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 479;
            this.for_stmt();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 480;
            this.try_stmt();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 481;
            this.while_stmt();
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 482;
            this.match_stmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public assignment(): AssignmentContext {
    let _localctx: AssignmentContext = new AssignmentContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 22, PythonParser.RULE_assignment);
    let _la: number;
    try {
      let _alt: number;
      this.state = 525;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 485;
            this.match(PythonParser.NAME);
            this.state = 486;
            this.match(PythonParser.COLON);
            this.state = 487;
            this.expression();
            this.state = 490;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.EQUAL) {
              {
                this.state = 488;
                this.match(PythonParser.EQUAL);
                this.state = 489;
                this.annotated_rhs();
              }
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 497;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 12, this._ctx)
            ) {
              case 1:
                {
                  this.state = 492;
                  this.match(PythonParser.LPAR);
                  this.state = 493;
                  this.single_target();
                  this.state = 494;
                  this.match(PythonParser.RPAR);
                }
                break;

              case 2:
                {
                  this.state = 496;
                  this.single_subscript_attribute_target();
                }
                break;
            }
            this.state = 499;
            this.match(PythonParser.COLON);
            this.state = 500;
            this.expression();
            this.state = 503;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.EQUAL) {
              {
                this.state = 501;
                this.match(PythonParser.EQUAL);
                this.state = 502;
                this.annotated_rhs();
              }
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 508;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 505;
                      this.star_targets();
                      this.state = 506;
                      this.match(PythonParser.EQUAL);
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 510;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                14,
                this._ctx
              );
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            this.state = 514;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PythonParser.YIELD:
                {
                  this.state = 512;
                  this.yield_expr();
                }
                break;
              case PythonParser.FSTRING_START:
              case PythonParser.FALSE:
              case PythonParser.AWAIT:
              case PythonParser.NONE:
              case PythonParser.TRUE:
              case PythonParser.LAMBDA:
              case PythonParser.NOT:
              case PythonParser.LPAR:
              case PythonParser.LSQB:
              case PythonParser.LBRACE:
              case PythonParser.PLUS:
              case PythonParser.MINUS:
              case PythonParser.STAR:
              case PythonParser.TILDE:
              case PythonParser.ELLIPSIS:
              case PythonParser.NAME:
              case PythonParser.NUMBER:
              case PythonParser.STRING:
                {
                  this.state = 513;
                  this.star_expressions();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 517;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.TYPE_COMMENT) {
              {
                this.state = 516;
                this.match(PythonParser.TYPE_COMMENT);
              }
            }
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 519;
            this.single_target();
            this.state = 520;
            this.augassign();
            this.state = 523;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PythonParser.YIELD:
                {
                  this.state = 521;
                  this.yield_expr();
                }
                break;
              case PythonParser.FSTRING_START:
              case PythonParser.FALSE:
              case PythonParser.AWAIT:
              case PythonParser.NONE:
              case PythonParser.TRUE:
              case PythonParser.LAMBDA:
              case PythonParser.NOT:
              case PythonParser.LPAR:
              case PythonParser.LSQB:
              case PythonParser.LBRACE:
              case PythonParser.PLUS:
              case PythonParser.MINUS:
              case PythonParser.STAR:
              case PythonParser.TILDE:
              case PythonParser.ELLIPSIS:
              case PythonParser.NAME:
              case PythonParser.NUMBER:
              case PythonParser.STRING:
                {
                  this.state = 522;
                  this.star_expressions();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public annotated_rhs(): Annotated_rhsContext {
    let _localctx: Annotated_rhsContext = new Annotated_rhsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 24, PythonParser.RULE_annotated_rhs);
    try {
      this.state = 529;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.YIELD:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 527;
            this.yield_expr();
          }
          break;
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.AWAIT:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.LAMBDA:
        case PythonParser.NOT:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.PLUS:
        case PythonParser.MINUS:
        case PythonParser.STAR:
        case PythonParser.TILDE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 528;
            this.star_expressions();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public augassign(): AugassignContext {
    let _localctx: AugassignContext = new AugassignContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 26, PythonParser.RULE_augassign);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 531;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 70) & ~0x1f) === 0 &&
            ((1 << (_la - 70)) &
              ((1 << (PythonParser.PLUSEQUAL - 70)) |
                (1 << (PythonParser.MINEQUAL - 70)) |
                (1 << (PythonParser.STAREQUAL - 70)) |
                (1 << (PythonParser.SLASHEQUAL - 70)) |
                (1 << (PythonParser.PERCENTEQUAL - 70)) |
                (1 << (PythonParser.AMPEREQUAL - 70)) |
                (1 << (PythonParser.VBAREQUAL - 70)) |
                (1 << (PythonParser.CIRCUMFLEXEQUAL - 70)) |
                (1 << (PythonParser.LEFTSHIFTEQUAL - 70)) |
                (1 << (PythonParser.RIGHTSHIFTEQUAL - 70)) |
                (1 << (PythonParser.DOUBLESTAREQUAL - 70)) |
                (1 << (PythonParser.DOUBLESLASHEQUAL - 70)) |
                (1 << (PythonParser.ATEQUAL - 70)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public return_stmt(): Return_stmtContext {
    let _localctx: Return_stmtContext = new Return_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 28, PythonParser.RULE_return_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 533;
        this.match(PythonParser.RETURN);
        this.state = 535;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PythonParser.FSTRING_START) |
                (1 << PythonParser.FALSE) |
                (1 << PythonParser.AWAIT) |
                (1 << PythonParser.NONE) |
                (1 << PythonParser.TRUE) |
                (1 << PythonParser.LAMBDA))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (PythonParser.NOT - 34)) |
                (1 << (PythonParser.LPAR - 34)) |
                (1 << (PythonParser.LSQB - 34)) |
                (1 << (PythonParser.LBRACE - 34)) |
                (1 << (PythonParser.PLUS - 34)) |
                (1 << (PythonParser.MINUS - 34)) |
                (1 << (PythonParser.STAR - 34)) |
                (1 << (PythonParser.TILDE - 34)))) !==
              0) ||
          (((_la - 86) & ~0x1f) === 0 &&
            ((1 << (_la - 86)) &
              ((1 << (PythonParser.ELLIPSIS - 86)) |
                (1 << (PythonParser.NAME - 86)) |
                (1 << (PythonParser.NUMBER - 86)) |
                (1 << (PythonParser.STRING - 86)))) !==
              0)
        ) {
          {
            this.state = 534;
            this.star_expressions();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public raise_stmt(): Raise_stmtContext {
    let _localctx: Raise_stmtContext = new Raise_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 30, PythonParser.RULE_raise_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 537;
        this.match(PythonParser.RAISE);
        this.state = 543;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PythonParser.FSTRING_START) |
                (1 << PythonParser.FALSE) |
                (1 << PythonParser.AWAIT) |
                (1 << PythonParser.NONE) |
                (1 << PythonParser.TRUE) |
                (1 << PythonParser.LAMBDA))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (PythonParser.NOT - 34)) |
                (1 << (PythonParser.LPAR - 34)) |
                (1 << (PythonParser.LSQB - 34)) |
                (1 << (PythonParser.LBRACE - 34)) |
                (1 << (PythonParser.PLUS - 34)) |
                (1 << (PythonParser.MINUS - 34)) |
                (1 << (PythonParser.TILDE - 34)))) !==
              0) ||
          (((_la - 86) & ~0x1f) === 0 &&
            ((1 << (_la - 86)) &
              ((1 << (PythonParser.ELLIPSIS - 86)) |
                (1 << (PythonParser.NAME - 86)) |
                (1 << (PythonParser.NUMBER - 86)) |
                (1 << (PythonParser.STRING - 86)))) !==
              0)
        ) {
          {
            this.state = 538;
            this.expression();
            this.state = 541;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.FROM) {
              {
                this.state = 539;
                this.match(PythonParser.FROM);
                this.state = 540;
                this.expression();
              }
            }
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public global_stmt(): Global_stmtContext {
    let _localctx: Global_stmtContext = new Global_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 32, PythonParser.RULE_global_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 545;
        this.match(PythonParser.GLOBAL);
        this.state = 546;
        this.match(PythonParser.NAME);
        this.state = 551;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.COMMA) {
          {
            {
              this.state = 547;
              this.match(PythonParser.COMMA);
              this.state = 548;
              this.match(PythonParser.NAME);
            }
          }
          this.state = 553;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public nonlocal_stmt(): Nonlocal_stmtContext {
    let _localctx: Nonlocal_stmtContext = new Nonlocal_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 34, PythonParser.RULE_nonlocal_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 554;
        this.match(PythonParser.NONLOCAL);
        this.state = 555;
        this.match(PythonParser.NAME);
        this.state = 560;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.COMMA) {
          {
            {
              this.state = 556;
              this.match(PythonParser.COMMA);
              this.state = 557;
              this.match(PythonParser.NAME);
            }
          }
          this.state = 562;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public del_stmt(): Del_stmtContext {
    let _localctx: Del_stmtContext = new Del_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 36, PythonParser.RULE_del_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 563;
        this.match(PythonParser.DEL);
        this.state = 564;
        this.del_targets();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public yield_stmt(): Yield_stmtContext {
    let _localctx: Yield_stmtContext = new Yield_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 38, PythonParser.RULE_yield_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 566;
        this.yield_expr();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public assert_stmt(): Assert_stmtContext {
    let _localctx: Assert_stmtContext = new Assert_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 40, PythonParser.RULE_assert_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 568;
        this.match(PythonParser.ASSERT);
        this.state = 569;
        this.expression();
        this.state = 572;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 570;
            this.match(PythonParser.COMMA);
            this.state = 571;
            this.expression();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_stmt(): Import_stmtContext {
    let _localctx: Import_stmtContext = new Import_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 42, PythonParser.RULE_import_stmt);
    try {
      this.state = 576;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.IMPORT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 574;
            this.import_name();
          }
          break;
        case PythonParser.FROM:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 575;
            this.import_from();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_name(): Import_nameContext {
    let _localctx: Import_nameContext = new Import_nameContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 44, PythonParser.RULE_import_name);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 578;
        this.match(PythonParser.IMPORT);
        this.state = 579;
        this.dotted_as_names();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_from(): Import_fromContext {
    let _localctx: Import_fromContext = new Import_fromContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 46, PythonParser.RULE_import_from);
    let _la: number;
    try {
      this.state = 600;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 581;
            this.match(PythonParser.FROM);
            this.state = 585;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.DOT || _la === PythonParser.ELLIPSIS) {
              {
                {
                  this.state = 582;
                  _la = this._input.LA(1);
                  if (
                    !(_la === PythonParser.DOT || _la === PythonParser.ELLIPSIS)
                  ) {
                    this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                }
              }
              this.state = 587;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 588;
            this.dotted_name(0);
            this.state = 589;
            this.match(PythonParser.IMPORT);
            this.state = 590;
            this.import_from_targets();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 592;
            this.match(PythonParser.FROM);
            this.state = 594;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 593;
                  _la = this._input.LA(1);
                  if (
                    !(_la === PythonParser.DOT || _la === PythonParser.ELLIPSIS)
                  ) {
                    this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                }
              }
              this.state = 596;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === PythonParser.DOT || _la === PythonParser.ELLIPSIS);
            this.state = 598;
            this.match(PythonParser.IMPORT);
            this.state = 599;
            this.import_from_targets();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_from_targets(): Import_from_targetsContext {
    let _localctx: Import_from_targetsContext = new Import_from_targetsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 48, PythonParser.RULE_import_from_targets);
    let _la: number;
    try {
      this.state = 611;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.LPAR:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 602;
            this.match(PythonParser.LPAR);
            this.state = 603;
            this.import_from_as_names();
            this.state = 605;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COMMA) {
              {
                this.state = 604;
                this.match(PythonParser.COMMA);
              }
            }

            this.state = 607;
            this.match(PythonParser.RPAR);
          }
          break;
        case PythonParser.NAME:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 609;
            this.import_from_as_names();
          }
          break;
        case PythonParser.STAR:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 610;
            this.match(PythonParser.STAR);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_from_as_names(): Import_from_as_namesContext {
    let _localctx: Import_from_as_namesContext =
      new Import_from_as_namesContext(this._ctx, this.state);
    this.enterRule(_localctx, 50, PythonParser.RULE_import_from_as_names);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 613;
        this.import_from_as_name();
        this.state = 618;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 614;
                this.match(PythonParser.COMMA);
                this.state = 615;
                this.import_from_as_name();
              }
            }
          }
          this.state = 620;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public import_from_as_name(): Import_from_as_nameContext {
    let _localctx: Import_from_as_nameContext = new Import_from_as_nameContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 52, PythonParser.RULE_import_from_as_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 621;
        this.match(PythonParser.NAME);
        this.state = 624;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.AS) {
          {
            this.state = 622;
            this.match(PythonParser.AS);
            this.state = 623;
            this.match(PythonParser.NAME);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public dotted_as_names(): Dotted_as_namesContext {
    let _localctx: Dotted_as_namesContext = new Dotted_as_namesContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 54, PythonParser.RULE_dotted_as_names);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 626;
        this.dotted_as_name();
        this.state = 631;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.COMMA) {
          {
            {
              this.state = 627;
              this.match(PythonParser.COMMA);
              this.state = 628;
              this.dotted_as_name();
            }
          }
          this.state = 633;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public dotted_as_name(): Dotted_as_nameContext {
    let _localctx: Dotted_as_nameContext = new Dotted_as_nameContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 56, PythonParser.RULE_dotted_as_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 634;
        this.dotted_name(0);
        this.state = 637;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.AS) {
          {
            this.state = 635;
            this.match(PythonParser.AS);
            this.state = 636;
            this.match(PythonParser.NAME);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public dotted_name(): Dotted_nameContext;
  public dotted_name(_p: number): Dotted_nameContext;
  // @RuleVersion(0)
  public dotted_name(_p?: number): Dotted_nameContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Dotted_nameContext = new Dotted_nameContext(
      this._ctx,
      _parentState
    );
    let _prevctx: Dotted_nameContext = _localctx;
    let _startState: number = 58;
    this.enterRecursionRule(_localctx, 58, PythonParser.RULE_dotted_name, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 640;
          this.match(PythonParser.NAME);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 647;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Dotted_nameContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PythonParser.RULE_dotted_name
                );
                this.state = 642;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this._ctx, 2)"
                  );
                }
                this.state = 643;
                this.match(PythonParser.DOT);
                this.state = 644;
                this.match(PythonParser.NAME);
              }
            }
          }
          this.state = 649;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public block(): BlockContext {
    let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, PythonParser.RULE_block);
    try {
      this.state = 656;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 650;
            this.match(PythonParser.NEWLINE);
            this.state = 651;
            this.match(PythonParser.INDENT);
            this.state = 652;
            this.statements();
            this.state = 653;
            this.match(PythonParser.DEDENT);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 655;
            this.simple_stmts();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public decorators(): DecoratorsContext {
    let _localctx: DecoratorsContext = new DecoratorsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 62, PythonParser.RULE_decorators);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 662;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 658;
              this.match(PythonParser.AT);
              this.state = 659;
              this.named_expression();
              this.state = 660;
              this.match(PythonParser.NEWLINE);
            }
          }
          this.state = 664;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === PythonParser.AT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public class_def(): Class_defContext {
    let _localctx: Class_defContext = new Class_defContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 64, PythonParser.RULE_class_def);
    try {
      this.state = 670;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.AT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 666;
            this.decorators();
            this.state = 667;
            this.class_def_raw();
          }
          break;
        case PythonParser.CLASS:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 669;
            this.class_def_raw();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public class_def_raw(): Class_def_rawContext {
    let _localctx: Class_def_rawContext = new Class_def_rawContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 66, PythonParser.RULE_class_def_raw);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 672;
        this.match(PythonParser.CLASS);
        this.state = 673;
        this.match(PythonParser.NAME);
        this.state = 675;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.LSQB) {
          {
            this.state = 674;
            this.type_params();
          }
        }

        this.state = 682;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.LPAR) {
          {
            this.state = 677;
            this.match(PythonParser.LPAR);
            this.state = 679;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PythonParser.FSTRING_START) |
                    (1 << PythonParser.FALSE) |
                    (1 << PythonParser.AWAIT) |
                    (1 << PythonParser.NONE) |
                    (1 << PythonParser.TRUE) |
                    (1 << PythonParser.LAMBDA))) !==
                  0) ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (PythonParser.NOT - 34)) |
                    (1 << (PythonParser.LPAR - 34)) |
                    (1 << (PythonParser.LSQB - 34)) |
                    (1 << (PythonParser.LBRACE - 34)) |
                    (1 << (PythonParser.PLUS - 34)) |
                    (1 << (PythonParser.MINUS - 34)) |
                    (1 << (PythonParser.STAR - 34)) |
                    (1 << (PythonParser.TILDE - 34)))) !==
                  0) ||
              (((_la - 69) & ~0x1f) === 0 &&
                ((1 << (_la - 69)) &
                  ((1 << (PythonParser.DOUBLESTAR - 69)) |
                    (1 << (PythonParser.ELLIPSIS - 69)) |
                    (1 << (PythonParser.NAME - 69)) |
                    (1 << (PythonParser.NUMBER - 69)) |
                    (1 << (PythonParser.STRING - 69)))) !==
                  0)
            ) {
              {
                this.state = 678;
                this.arguments();
              }
            }

            this.state = 681;
            this.match(PythonParser.RPAR);
          }
        }

        this.state = 684;
        this.match(PythonParser.COLON);
        this.state = 685;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_def(): Function_defContext {
    let _localctx: Function_defContext = new Function_defContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 68, PythonParser.RULE_function_def);
    try {
      this.state = 691;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.AT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 687;
            this.decorators();
            this.state = 688;
            this.function_def_raw();
          }
          break;
        case PythonParser.DEF:
        case PythonParser.ASYNC:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 690;
            this.function_def_raw();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_def_raw(): Function_def_rawContext {
    let _localctx: Function_def_rawContext = new Function_def_rawContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 70, PythonParser.RULE_function_def_raw);
    let _la: number;
    try {
      this.state = 732;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.DEF:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 693;
            this.match(PythonParser.DEF);
            this.state = 694;
            this.match(PythonParser.NAME);
            this.state = 696;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.LSQB) {
              {
                this.state = 695;
                this.type_params();
              }
            }

            this.state = 698;
            this.match(PythonParser.LPAR);
            this.state = 700;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              _la === PythonParser.STAR ||
              _la === PythonParser.DOUBLESTAR ||
              _la === PythonParser.NAME
            ) {
              {
                this.state = 699;
                this.params();
              }
            }

            this.state = 702;
            this.match(PythonParser.RPAR);
            this.state = 705;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.RARROW) {
              {
                this.state = 703;
                this.match(PythonParser.RARROW);
                this.state = 704;
                this.expression();
              }
            }

            this.state = 707;
            this.match(PythonParser.COLON);
            this.state = 709;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 47, this._ctx)
            ) {
              case 1:
                {
                  this.state = 708;
                  this.func_type_comment();
                }
                break;
            }
            this.state = 711;
            this.block();
          }
          break;
        case PythonParser.ASYNC:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 712;
            this.match(PythonParser.ASYNC);
            this.state = 713;
            this.match(PythonParser.DEF);
            this.state = 714;
            this.match(PythonParser.NAME);
            this.state = 716;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.LSQB) {
              {
                this.state = 715;
                this.type_params();
              }
            }

            this.state = 718;
            this.match(PythonParser.LPAR);
            this.state = 720;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              _la === PythonParser.STAR ||
              _la === PythonParser.DOUBLESTAR ||
              _la === PythonParser.NAME
            ) {
              {
                this.state = 719;
                this.params();
              }
            }

            this.state = 722;
            this.match(PythonParser.RPAR);
            this.state = 725;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.RARROW) {
              {
                this.state = 723;
                this.match(PythonParser.RARROW);
                this.state = 724;
                this.expression();
              }
            }

            this.state = 727;
            this.match(PythonParser.COLON);
            this.state = 729;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 51, this._ctx)
            ) {
              case 1:
                {
                  this.state = 728;
                  this.func_type_comment();
                }
                break;
            }
            this.state = 731;
            this.block();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public params(): ParamsContext {
    let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
    this.enterRule(_localctx, 72, PythonParser.RULE_params);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 734;
        this.parameters();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public parameters(): ParametersContext {
    let _localctx: ParametersContext = new ParametersContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 74, PythonParser.RULE_parameters);
    let _la: number;
    try {
      let _alt: number;
      this.state = 785;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 736;
            this.slash_no_default();
            this.state = 740;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 737;
                    this.param_no_default();
                  }
                }
              }
              this.state = 742;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                53,
                this._ctx
              );
            }
            this.state = 746;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.NAME) {
              {
                {
                  this.state = 743;
                  this.param_with_default();
                }
              }
              this.state = 748;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 750;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.STAR || _la === PythonParser.DOUBLESTAR) {
              {
                this.state = 749;
                this.star_etc();
              }
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 752;
            this.slash_with_default();
            this.state = 756;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.NAME) {
              {
                {
                  this.state = 753;
                  this.param_with_default();
                }
              }
              this.state = 758;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 760;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.STAR || _la === PythonParser.DOUBLESTAR) {
              {
                this.state = 759;
                this.star_etc();
              }
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 763;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 762;
                      this.param_no_default();
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 765;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                58,
                this._ctx
              );
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            this.state = 770;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.NAME) {
              {
                {
                  this.state = 767;
                  this.param_with_default();
                }
              }
              this.state = 772;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 774;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.STAR || _la === PythonParser.DOUBLESTAR) {
              {
                this.state = 773;
                this.star_etc();
              }
            }
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 777;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 776;
                  this.param_with_default();
                }
              }
              this.state = 779;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === PythonParser.NAME);
            this.state = 782;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.STAR || _la === PythonParser.DOUBLESTAR) {
              {
                this.state = 781;
                this.star_etc();
              }
            }
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 784;
            this.star_etc();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public slash_no_default(): Slash_no_defaultContext {
    let _localctx: Slash_no_defaultContext = new Slash_no_defaultContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 76, PythonParser.RULE_slash_no_default);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 788;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 787;
              this.param_no_default();
            }
          }
          this.state = 790;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === PythonParser.NAME);
        this.state = 792;
        this.match(PythonParser.SLASH);
        this.state = 794;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 793;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public slash_with_default(): Slash_with_defaultContext {
    let _localctx: Slash_with_defaultContext = new Slash_with_defaultContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 78, PythonParser.RULE_slash_with_default);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 799;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 796;
                this.param_no_default();
              }
            }
          }
          this.state = 801;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
        }
        this.state = 803;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 802;
              this.param_with_default();
            }
          }
          this.state = 805;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === PythonParser.NAME);
        this.state = 807;
        this.match(PythonParser.SLASH);
        this.state = 809;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 808;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_etc(): Star_etcContext {
    let _localctx: Star_etcContext = new Star_etcContext(this._ctx, this.state);
    this.enterRule(_localctx, 80, PythonParser.RULE_star_etc);
    let _la: number;
    try {
      this.state = 844;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 811;
            this.match(PythonParser.STAR);
            this.state = 812;
            this.param_no_default();
            this.state = 816;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.NAME) {
              {
                {
                  this.state = 813;
                  this.param_maybe_default();
                }
              }
              this.state = 818;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 820;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.DOUBLESTAR) {
              {
                this.state = 819;
                this.kwds();
              }
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 822;
            this.match(PythonParser.STAR);
            this.state = 823;
            this.param_no_default_star_annotation();
            this.state = 827;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.NAME) {
              {
                {
                  this.state = 824;
                  this.param_maybe_default();
                }
              }
              this.state = 829;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 831;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.DOUBLESTAR) {
              {
                this.state = 830;
                this.kwds();
              }
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 833;
            this.match(PythonParser.STAR);
            this.state = 834;
            this.match(PythonParser.COMMA);
            this.state = 836;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 835;
                  this.param_maybe_default();
                }
              }
              this.state = 838;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === PythonParser.NAME);
            this.state = 841;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.DOUBLESTAR) {
              {
                this.state = 840;
                this.kwds();
              }
            }
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 843;
            this.kwds();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public kwds(): KwdsContext {
    let _localctx: KwdsContext = new KwdsContext(this._ctx, this.state);
    this.enterRule(_localctx, 82, PythonParser.RULE_kwds);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 846;
        this.match(PythonParser.DOUBLESTAR);
        this.state = 847;
        this.param_no_default();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public param_no_default(): Param_no_defaultContext {
    let _localctx: Param_no_defaultContext = new Param_no_defaultContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 84, PythonParser.RULE_param_no_default);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 849;
        this.param();
        this.state = 851;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 850;
            this.match(PythonParser.COMMA);
          }
        }

        this.state = 854;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.TYPE_COMMENT) {
          {
            this.state = 853;
            this.match(PythonParser.TYPE_COMMENT);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public param_no_default_star_annotation(): Param_no_default_star_annotationContext {
    let _localctx: Param_no_default_star_annotationContext =
      new Param_no_default_star_annotationContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      86,
      PythonParser.RULE_param_no_default_star_annotation
    );
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 856;
        this.param_star_annotation();
        this.state = 858;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 857;
            this.match(PythonParser.COMMA);
          }
        }

        this.state = 861;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.TYPE_COMMENT) {
          {
            this.state = 860;
            this.match(PythonParser.TYPE_COMMENT);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public param_with_default(): Param_with_defaultContext {
    let _localctx: Param_with_defaultContext = new Param_with_defaultContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 88, PythonParser.RULE_param_with_default);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 863;
        this.param();
        this.state = 864;
        this.default_assignment();
        this.state = 866;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 865;
            this.match(PythonParser.COMMA);
          }
        }

        this.state = 869;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.TYPE_COMMENT) {
          {
            this.state = 868;
            this.match(PythonParser.TYPE_COMMENT);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public param_maybe_default(): Param_maybe_defaultContext {
    let _localctx: Param_maybe_defaultContext = new Param_maybe_defaultContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 90, PythonParser.RULE_param_maybe_default);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 871;
        this.param();
        this.state = 873;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.EQUAL) {
          {
            this.state = 872;
            this.default_assignment();
          }
        }

        this.state = 876;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 875;
            this.match(PythonParser.COMMA);
          }
        }

        this.state = 879;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.TYPE_COMMENT) {
          {
            this.state = 878;
            this.match(PythonParser.TYPE_COMMENT);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public param(): ParamContext {
    let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
    this.enterRule(_localctx, 92, PythonParser.RULE_param);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 881;
        this.match(PythonParser.NAME);
        this.state = 883;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COLON) {
          {
            this.state = 882;
            this.annotation();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public param_star_annotation(): Param_star_annotationContext {
    let _localctx: Param_star_annotationContext =
      new Param_star_annotationContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, PythonParser.RULE_param_star_annotation);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 885;
        this.match(PythonParser.NAME);
        this.state = 886;
        this.star_annotation();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public annotation(): AnnotationContext {
    let _localctx: AnnotationContext = new AnnotationContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 96, PythonParser.RULE_annotation);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 888;
        this.match(PythonParser.COLON);
        this.state = 889;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_annotation(): Star_annotationContext {
    let _localctx: Star_annotationContext = new Star_annotationContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 98, PythonParser.RULE_star_annotation);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 891;
        this.match(PythonParser.COLON);
        this.state = 892;
        this.star_expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public default_assignment(): Default_assignmentContext {
    let _localctx: Default_assignmentContext = new Default_assignmentContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 100, PythonParser.RULE_default_assignment);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 894;
        this.match(PythonParser.EQUAL);
        this.state = 895;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public if_stmt(): If_stmtContext {
    let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 102, PythonParser.RULE_if_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 897;
        this.match(PythonParser.IF);
        this.state = 898;
        this.named_expression();
        this.state = 899;
        this.match(PythonParser.COLON);
        this.state = 900;
        this.block();
        this.state = 905;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
          case 1:
            {
              this.state = 901;
              this.elif_stmt();
            }
            break;

          case 2:
            {
              this.state = 903;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 86, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 902;
                    this.else_block();
                  }
                  break;
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public elif_stmt(): Elif_stmtContext {
    let _localctx: Elif_stmtContext = new Elif_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 104, PythonParser.RULE_elif_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 907;
        this.match(PythonParser.ELIF);
        this.state = 908;
        this.named_expression();
        this.state = 909;
        this.match(PythonParser.COLON);
        this.state = 910;
        this.block();
        this.state = 915;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
          case 1:
            {
              this.state = 911;
              this.elif_stmt();
            }
            break;

          case 2:
            {
              this.state = 913;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 88, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 912;
                    this.else_block();
                  }
                  break;
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public else_block(): Else_blockContext {
    let _localctx: Else_blockContext = new Else_blockContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 106, PythonParser.RULE_else_block);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 917;
        this.match(PythonParser.ELSE);
        this.state = 918;
        this.match(PythonParser.COLON);
        this.state = 919;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public while_stmt(): While_stmtContext {
    let _localctx: While_stmtContext = new While_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 108, PythonParser.RULE_while_stmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 921;
        this.match(PythonParser.WHILE);
        this.state = 922;
        this.named_expression();
        this.state = 923;
        this.match(PythonParser.COLON);
        this.state = 924;
        this.block();
        this.state = 926;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
          case 1:
            {
              this.state = 925;
              this.else_block();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public for_stmt(): For_stmtContext {
    let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 110, PythonParser.RULE_for_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 929;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.ASYNC) {
          {
            this.state = 928;
            this.match(PythonParser.ASYNC);
          }
        }

        this.state = 931;
        this.match(PythonParser.FOR);
        this.state = 932;
        this.star_targets();
        this.state = 933;
        this.match(PythonParser.IN);
        this.state = 934;
        this.star_expressions();
        this.state = 935;
        this.match(PythonParser.COLON);
        this.state = 937;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
          case 1:
            {
              this.state = 936;
              this.match(PythonParser.TYPE_COMMENT);
            }
            break;
        }
        this.state = 939;
        this.block();
        this.state = 941;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
          case 1:
            {
              this.state = 940;
              this.else_block();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public with_stmt(): With_stmtContext {
    let _localctx: With_stmtContext = new With_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 112, PythonParser.RULE_with_stmt);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 944;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.ASYNC) {
          {
            this.state = 943;
            this.match(PythonParser.ASYNC);
          }
        }

        this.state = 946;
        this.match(PythonParser.WITH);
        this.state = 974;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
          case 1:
            {
              this.state = 947;
              this.match(PythonParser.LPAR);
              this.state = 948;
              this.with_item();
              this.state = 953;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                95,
                this._ctx
              );
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 949;
                      this.match(PythonParser.COMMA);
                      this.state = 950;
                      this.with_item();
                    }
                  }
                }
                this.state = 955;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  95,
                  this._ctx
                );
              }
              this.state = 957;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === PythonParser.COMMA) {
                {
                  this.state = 956;
                  this.match(PythonParser.COMMA);
                }
              }

              this.state = 959;
              this.match(PythonParser.RPAR);
              this.state = 960;
              this.match(PythonParser.COLON);
            }
            break;

          case 2:
            {
              this.state = 962;
              this.with_item();
              this.state = 967;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === PythonParser.COMMA) {
                {
                  {
                    this.state = 963;
                    this.match(PythonParser.COMMA);
                    this.state = 964;
                    this.with_item();
                  }
                }
                this.state = 969;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              }
              this.state = 970;
              this.match(PythonParser.COLON);
              this.state = 972;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 98, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 971;
                    this.match(PythonParser.TYPE_COMMENT);
                  }
                  break;
              }
            }
            break;
        }
        this.state = 976;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public with_item(): With_itemContext {
    let _localctx: With_itemContext = new With_itemContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 114, PythonParser.RULE_with_item);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 978;
        this.expression();
        this.state = 981;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.AS) {
          {
            this.state = 979;
            this.match(PythonParser.AS);
            this.state = 980;
            this.star_target();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public try_stmt(): Try_stmtContext {
    let _localctx: Try_stmtContext = new Try_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 116, PythonParser.RULE_try_stmt);
    try {
      let _alt: number;
      this.state = 1016;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 983;
            this.match(PythonParser.TRY);
            this.state = 984;
            this.match(PythonParser.COLON);
            this.state = 985;
            this.block();
            this.state = 986;
            this.finally_block();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 988;
            this.match(PythonParser.TRY);
            this.state = 989;
            this.match(PythonParser.COLON);
            this.state = 990;
            this.block();
            this.state = 992;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 991;
                      this.except_block();
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 994;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                101,
                this._ctx
              );
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            this.state = 997;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 102, this._ctx)
            ) {
              case 1:
                {
                  this.state = 996;
                  this.else_block();
                }
                break;
            }
            this.state = 1000;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 103, this._ctx)
            ) {
              case 1:
                {
                  this.state = 999;
                  this.finally_block();
                }
                break;
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1002;
            this.match(PythonParser.TRY);
            this.state = 1003;
            this.match(PythonParser.COLON);
            this.state = 1004;
            this.block();
            this.state = 1006;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 1005;
                      this.except_star_block();
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 1008;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                104,
                this._ctx
              );
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            this.state = 1011;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 105, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1010;
                  this.else_block();
                }
                break;
            }
            this.state = 1014;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 106, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1013;
                  this.finally_block();
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public except_block(): Except_blockContext {
    let _localctx: Except_blockContext = new Except_blockContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 118, PythonParser.RULE_except_block);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1018;
        this.match(PythonParser.EXCEPT);
        this.state = 1024;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PythonParser.FSTRING_START) |
                (1 << PythonParser.FALSE) |
                (1 << PythonParser.AWAIT) |
                (1 << PythonParser.NONE) |
                (1 << PythonParser.TRUE) |
                (1 << PythonParser.LAMBDA))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (PythonParser.NOT - 34)) |
                (1 << (PythonParser.LPAR - 34)) |
                (1 << (PythonParser.LSQB - 34)) |
                (1 << (PythonParser.LBRACE - 34)) |
                (1 << (PythonParser.PLUS - 34)) |
                (1 << (PythonParser.MINUS - 34)) |
                (1 << (PythonParser.TILDE - 34)))) !==
              0) ||
          (((_la - 86) & ~0x1f) === 0 &&
            ((1 << (_la - 86)) &
              ((1 << (PythonParser.ELLIPSIS - 86)) |
                (1 << (PythonParser.NAME - 86)) |
                (1 << (PythonParser.NUMBER - 86)) |
                (1 << (PythonParser.STRING - 86)))) !==
              0)
        ) {
          {
            this.state = 1019;
            this.expression();
            this.state = 1022;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.AS) {
              {
                this.state = 1020;
                this.match(PythonParser.AS);
                this.state = 1021;
                this.match(PythonParser.NAME);
              }
            }
          }
        }

        this.state = 1026;
        this.match(PythonParser.COLON);
        this.state = 1027;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public except_star_block(): Except_star_blockContext {
    let _localctx: Except_star_blockContext = new Except_star_blockContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 120, PythonParser.RULE_except_star_block);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1029;
        this.match(PythonParser.EXCEPT);
        this.state = 1030;
        this.match(PythonParser.STAR);
        this.state = 1031;
        this.expression();
        this.state = 1034;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.AS) {
          {
            this.state = 1032;
            this.match(PythonParser.AS);
            this.state = 1033;
            this.match(PythonParser.NAME);
          }
        }

        this.state = 1036;
        this.match(PythonParser.COLON);
        this.state = 1037;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public finally_block(): Finally_blockContext {
    let _localctx: Finally_blockContext = new Finally_blockContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 122, PythonParser.RULE_finally_block);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1039;
        this.match(PythonParser.FINALLY);
        this.state = 1040;
        this.match(PythonParser.COLON);
        this.state = 1041;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public match_stmt(): Match_stmtContext {
    let _localctx: Match_stmtContext = new Match_stmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 124, PythonParser.RULE_match_stmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1043;
        this.soft_kw_match();
        this.state = 1044;
        this.subject_expr();
        this.state = 1045;
        this.match(PythonParser.COLON);
        this.state = 1046;
        this.match(PythonParser.NEWLINE);
        this.state = 1047;
        this.match(PythonParser.INDENT);
        this.state = 1049;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1048;
                  this.case_block();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1051;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 1053;
        this.match(PythonParser.DEDENT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public subject_expr(): Subject_exprContext {
    let _localctx: Subject_exprContext = new Subject_exprContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 126, PythonParser.RULE_subject_expr);
    let _la: number;
    try {
      this.state = 1061;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1055;
            this.star_named_expression();
            this.state = 1056;
            this.match(PythonParser.COMMA);
            this.state = 1058;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PythonParser.FSTRING_START) |
                    (1 << PythonParser.FALSE) |
                    (1 << PythonParser.AWAIT) |
                    (1 << PythonParser.NONE) |
                    (1 << PythonParser.TRUE) |
                    (1 << PythonParser.LAMBDA))) !==
                  0) ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (PythonParser.NOT - 34)) |
                    (1 << (PythonParser.LPAR - 34)) |
                    (1 << (PythonParser.LSQB - 34)) |
                    (1 << (PythonParser.LBRACE - 34)) |
                    (1 << (PythonParser.PLUS - 34)) |
                    (1 << (PythonParser.MINUS - 34)) |
                    (1 << (PythonParser.STAR - 34)) |
                    (1 << (PythonParser.TILDE - 34)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (PythonParser.ELLIPSIS - 86)) |
                    (1 << (PythonParser.NAME - 86)) |
                    (1 << (PythonParser.NUMBER - 86)) |
                    (1 << (PythonParser.STRING - 86)))) !==
                  0)
            ) {
              {
                this.state = 1057;
                this.star_named_expressions();
              }
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1060;
            this.named_expression();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public case_block(): Case_blockContext {
    let _localctx: Case_blockContext = new Case_blockContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 128, PythonParser.RULE_case_block);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1063;
        this.soft_kw_case();
        this.state = 1064;
        this.patterns();
        this.state = 1066;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.IF) {
          {
            this.state = 1065;
            this.guard();
          }
        }

        this.state = 1068;
        this.match(PythonParser.COLON);
        this.state = 1069;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public guard(): GuardContext {
    let _localctx: GuardContext = new GuardContext(this._ctx, this.state);
    this.enterRule(_localctx, 130, PythonParser.RULE_guard);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1071;
        this.match(PythonParser.IF);
        this.state = 1072;
        this.named_expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public patterns(): PatternsContext {
    let _localctx: PatternsContext = new PatternsContext(this._ctx, this.state);
    this.enterRule(_localctx, 132, PythonParser.RULE_patterns);
    try {
      this.state = 1076;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1074;
            this.open_sequence_pattern();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1075;
            this.pattern();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public pattern(): PatternContext {
    let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
    this.enterRule(_localctx, 134, PythonParser.RULE_pattern);
    try {
      this.state = 1080;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1078;
            this.as_pattern();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1079;
            this.or_pattern();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public as_pattern(): As_patternContext {
    let _localctx: As_patternContext = new As_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 136, PythonParser.RULE_as_pattern);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1082;
        this.or_pattern();
        this.state = 1083;
        this.match(PythonParser.AS);
        this.state = 1084;
        this.pattern_capture_target();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public or_pattern(): Or_patternContext {
    let _localctx: Or_patternContext = new Or_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 138, PythonParser.RULE_or_pattern);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1086;
        this.closed_pattern();
        this.state = 1091;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.VBAR) {
          {
            {
              this.state = 1087;
              this.match(PythonParser.VBAR);
              this.state = 1088;
              this.closed_pattern();
            }
          }
          this.state = 1093;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public closed_pattern(): Closed_patternContext {
    let _localctx: Closed_patternContext = new Closed_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 140, PythonParser.RULE_closed_pattern);
    try {
      this.state = 1102;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1094;
            this.literal_pattern();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1095;
            this.capture_pattern();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1096;
            this.wildcard_pattern();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1097;
            this.value_pattern();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1098;
            this.group_pattern();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1099;
            this.sequence_pattern();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1100;
            this.mapping_pattern();
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 1101;
            this.class_pattern();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public literal_pattern(): Literal_patternContext {
    let _localctx: Literal_patternContext = new Literal_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 142, PythonParser.RULE_literal_pattern);
    try {
      this.state = 1110;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1104;
            this.signed_number();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1105;
            this.complex_number();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1106;
            this.strings();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1107;
            this.match(PythonParser.NONE);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1108;
            this.match(PythonParser.TRUE);
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1109;
            this.match(PythonParser.FALSE);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public literal_expr(): Literal_exprContext {
    let _localctx: Literal_exprContext = new Literal_exprContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 144, PythonParser.RULE_literal_expr);
    try {
      this.state = 1118;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1112;
            this.signed_number();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1113;
            this.complex_number();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1114;
            this.strings();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1115;
            this.match(PythonParser.NONE);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1116;
            this.match(PythonParser.TRUE);
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1117;
            this.match(PythonParser.FALSE);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public complex_number(): Complex_numberContext {
    let _localctx: Complex_numberContext = new Complex_numberContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 146, PythonParser.RULE_complex_number);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1120;
        this.signed_real_number();
        this.state = 1121;
        _la = this._input.LA(1);
        if (!(_la === PythonParser.PLUS || _la === PythonParser.MINUS)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 1122;
        this.imaginary_number();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public signed_number(): Signed_numberContext {
    let _localctx: Signed_numberContext = new Signed_numberContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 148, PythonParser.RULE_signed_number);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.MINUS) {
          {
            this.state = 1124;
            this.match(PythonParser.MINUS);
          }
        }

        this.state = 1127;
        this.match(PythonParser.NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public signed_real_number(): Signed_real_numberContext {
    let _localctx: Signed_real_numberContext = new Signed_real_numberContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 150, PythonParser.RULE_signed_real_number);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.MINUS) {
          {
            this.state = 1129;
            this.match(PythonParser.MINUS);
          }
        }

        this.state = 1132;
        this.real_number();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public real_number(): Real_numberContext {
    let _localctx: Real_numberContext = new Real_numberContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 152, PythonParser.RULE_real_number);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1134;
        this.match(PythonParser.NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public imaginary_number(): Imaginary_numberContext {
    let _localctx: Imaginary_numberContext = new Imaginary_numberContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 154, PythonParser.RULE_imaginary_number);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1136;
        this.match(PythonParser.NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public capture_pattern(): Capture_patternContext {
    let _localctx: Capture_patternContext = new Capture_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 156, PythonParser.RULE_capture_pattern);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1138;
        this.pattern_capture_target();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public pattern_capture_target(): Pattern_capture_targetContext {
    let _localctx: Pattern_capture_targetContext =
      new Pattern_capture_targetContext(this._ctx, this.state);
    this.enterRule(_localctx, 158, PythonParser.RULE_pattern_capture_target);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1140;
        this.soft_kw__not__wildcard();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public wildcard_pattern(): Wildcard_patternContext {
    let _localctx: Wildcard_patternContext = new Wildcard_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 160, PythonParser.RULE_wildcard_pattern);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1142;
        this.soft_kw_wildcard();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public value_pattern(): Value_patternContext {
    let _localctx: Value_patternContext = new Value_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 162, PythonParser.RULE_value_pattern);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1144;
        this.attr();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public attr(): AttrContext {
    let _localctx: AttrContext = new AttrContext(this._ctx, this.state);
    this.enterRule(_localctx, 164, PythonParser.RULE_attr);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1146;
        this.match(PythonParser.NAME);
        this.state = 1149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1147;
              this.match(PythonParser.DOT);
              this.state = 1148;
              this.match(PythonParser.NAME);
            }
          }
          this.state = 1151;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === PythonParser.DOT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public name_or_attr(): Name_or_attrContext {
    let _localctx: Name_or_attrContext = new Name_or_attrContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 166, PythonParser.RULE_name_or_attr);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1153;
        this.match(PythonParser.NAME);
        this.state = 1158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.DOT) {
          {
            {
              this.state = 1154;
              this.match(PythonParser.DOT);
              this.state = 1155;
              this.match(PythonParser.NAME);
            }
          }
          this.state = 1160;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public group_pattern(): Group_patternContext {
    let _localctx: Group_patternContext = new Group_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 168, PythonParser.RULE_group_pattern);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1161;
        this.match(PythonParser.LPAR);
        this.state = 1162;
        this.pattern();
        this.state = 1163;
        this.match(PythonParser.RPAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public sequence_pattern(): Sequence_patternContext {
    let _localctx: Sequence_patternContext = new Sequence_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 170, PythonParser.RULE_sequence_pattern);
    try {
      this.state = 1175;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.LSQB:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1165;
            this.match(PythonParser.LSQB);
            this.state = 1167;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 125, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1166;
                  this.maybe_sequence_pattern();
                }
                break;
            }
            this.state = 1169;
            this.match(PythonParser.RSQB);
          }
          break;
        case PythonParser.LPAR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1170;
            this.match(PythonParser.LPAR);
            this.state = 1172;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 126, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1171;
                  this.open_sequence_pattern();
                }
                break;
            }
            this.state = 1174;
            this.match(PythonParser.RPAR);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public open_sequence_pattern(): Open_sequence_patternContext {
    let _localctx: Open_sequence_patternContext =
      new Open_sequence_patternContext(this._ctx, this.state);
    this.enterRule(_localctx, 172, PythonParser.RULE_open_sequence_pattern);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1177;
        this.maybe_star_pattern();
        this.state = 1178;
        this.match(PythonParser.COMMA);
        this.state = 1180;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
          case 1:
            {
              this.state = 1179;
              this.maybe_sequence_pattern();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public maybe_sequence_pattern(): Maybe_sequence_patternContext {
    let _localctx: Maybe_sequence_patternContext =
      new Maybe_sequence_patternContext(this._ctx, this.state);
    this.enterRule(_localctx, 174, PythonParser.RULE_maybe_sequence_pattern);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1182;
        this.maybe_star_pattern();
        this.state = 1187;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1183;
                this.match(PythonParser.COMMA);
                this.state = 1184;
                this.maybe_star_pattern();
              }
            }
          }
          this.state = 1189;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
        }
        this.state = 1191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1190;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public maybe_star_pattern(): Maybe_star_patternContext {
    let _localctx: Maybe_star_patternContext = new Maybe_star_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 176, PythonParser.RULE_maybe_star_pattern);
    try {
      this.state = 1195;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1193;
            this.star_pattern();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1194;
            this.pattern();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_pattern(): Star_patternContext {
    let _localctx: Star_patternContext = new Star_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 178, PythonParser.RULE_star_pattern);
    try {
      this.state = 1201;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1197;
            this.match(PythonParser.STAR);
            this.state = 1198;
            this.pattern_capture_target();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1199;
            this.match(PythonParser.STAR);
            this.state = 1200;
            this.wildcard_pattern();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public mapping_pattern(): Mapping_patternContext {
    let _localctx: Mapping_patternContext = new Mapping_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 180, PythonParser.RULE_mapping_pattern);
    let _la: number;
    try {
      this.state = 1223;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1203;
            this.match(PythonParser.LBRACE);
            this.state = 1204;
            this.match(PythonParser.RBRACE);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1205;
            this.match(PythonParser.LBRACE);
            this.state = 1206;
            this.double_star_pattern();
            this.state = 1208;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COMMA) {
              {
                this.state = 1207;
                this.match(PythonParser.COMMA);
              }
            }

            this.state = 1210;
            this.match(PythonParser.RBRACE);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1212;
            this.match(PythonParser.LBRACE);
            this.state = 1213;
            this.items_pattern();
            this.state = 1216;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 134, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1214;
                  this.match(PythonParser.COMMA);
                  this.state = 1215;
                  this.double_star_pattern();
                }
                break;
            }
            this.state = 1219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COMMA) {
              {
                this.state = 1218;
                this.match(PythonParser.COMMA);
              }
            }

            this.state = 1221;
            this.match(PythonParser.RBRACE);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public items_pattern(): Items_patternContext {
    let _localctx: Items_patternContext = new Items_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 182, PythonParser.RULE_items_pattern);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1225;
        this.key_value_pattern();
        this.state = 1230;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1226;
                this.match(PythonParser.COMMA);
                this.state = 1227;
                this.key_value_pattern();
              }
            }
          }
          this.state = 1232;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public key_value_pattern(): Key_value_patternContext {
    let _localctx: Key_value_patternContext = new Key_value_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 184, PythonParser.RULE_key_value_pattern);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1235;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PythonParser.FSTRING_START:
          case PythonParser.FALSE:
          case PythonParser.NONE:
          case PythonParser.TRUE:
          case PythonParser.MINUS:
          case PythonParser.NUMBER:
          case PythonParser.STRING:
            {
              this.state = 1233;
              this.literal_expr();
            }
            break;
          case PythonParser.NAME:
            {
              this.state = 1234;
              this.attr();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1237;
        this.match(PythonParser.COLON);
        this.state = 1238;
        this.pattern();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public double_star_pattern(): Double_star_patternContext {
    let _localctx: Double_star_patternContext = new Double_star_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 186, PythonParser.RULE_double_star_pattern);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1240;
        this.match(PythonParser.DOUBLESTAR);
        this.state = 1241;
        this.pattern_capture_target();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public class_pattern(): Class_patternContext {
    let _localctx: Class_patternContext = new Class_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 188, PythonParser.RULE_class_pattern);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1243;
        this.name_or_attr();
        this.state = 1244;
        this.match(PythonParser.LPAR);
        this.state = 1256;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
          case 1:
            {
              this.state = 1251;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 140, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 1245;
                    this.positional_patterns();
                    this.state = 1248;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        139,
                        this._ctx
                      )
                    ) {
                      case 1:
                        {
                          this.state = 1246;
                          this.match(PythonParser.COMMA);
                          this.state = 1247;
                          this.keyword_patterns();
                        }
                        break;
                    }
                  }
                  break;

                case 2:
                  {
                    this.state = 1250;
                    this.keyword_patterns();
                  }
                  break;
              }
              this.state = 1254;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === PythonParser.COMMA) {
                {
                  this.state = 1253;
                  this.match(PythonParser.COMMA);
                }
              }
            }
            break;
        }
        this.state = 1258;
        this.match(PythonParser.RPAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public positional_patterns(): Positional_patternsContext {
    let _localctx: Positional_patternsContext = new Positional_patternsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 190, PythonParser.RULE_positional_patterns);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1260;
        this.pattern();
        this.state = 1265;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1261;
                this.match(PythonParser.COMMA);
                this.state = 1262;
                this.pattern();
              }
            }
          }
          this.state = 1267;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public keyword_patterns(): Keyword_patternsContext {
    let _localctx: Keyword_patternsContext = new Keyword_patternsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 192, PythonParser.RULE_keyword_patterns);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1268;
        this.keyword_pattern();
        this.state = 1273;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1269;
                this.match(PythonParser.COMMA);
                this.state = 1270;
                this.keyword_pattern();
              }
            }
          }
          this.state = 1275;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public keyword_pattern(): Keyword_patternContext {
    let _localctx: Keyword_patternContext = new Keyword_patternContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 194, PythonParser.RULE_keyword_pattern);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1276;
        this.match(PythonParser.NAME);
        this.state = 1277;
        this.match(PythonParser.EQUAL);
        this.state = 1278;
        this.pattern();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type_alias(): Type_aliasContext {
    let _localctx: Type_aliasContext = new Type_aliasContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 196, PythonParser.RULE_type_alias);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1280;
        this.soft_kw_type();
        this.state = 1281;
        this.match(PythonParser.NAME);
        this.state = 1283;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.LSQB) {
          {
            this.state = 1282;
            this.type_params();
          }
        }

        this.state = 1285;
        this.match(PythonParser.EQUAL);
        this.state = 1286;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type_params(): Type_paramsContext {
    let _localctx: Type_paramsContext = new Type_paramsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 198, PythonParser.RULE_type_params);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1288;
        this.match(PythonParser.LSQB);
        this.state = 1289;
        this.type_param_seq();
        this.state = 1290;
        this.match(PythonParser.RSQB);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type_param_seq(): Type_param_seqContext {
    let _localctx: Type_param_seqContext = new Type_param_seqContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 200, PythonParser.RULE_type_param_seq);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1292;
        this.type_param();
        this.state = 1297;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1293;
                this.match(PythonParser.COMMA);
                this.state = 1294;
                this.type_param();
              }
            }
          }
          this.state = 1299;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
        }
        this.state = 1301;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1300;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type_param(): Type_paramContext {
    let _localctx: Type_paramContext = new Type_paramContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 202, PythonParser.RULE_type_param);
    let _la: number;
    try {
      this.state = 1319;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1303;
            this.match(PythonParser.NAME);
            this.state = 1305;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COLON) {
              {
                this.state = 1304;
                this.type_param_bound();
              }
            }
          }
          break;
        case PythonParser.STAR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1307;
            this.match(PythonParser.STAR);
            this.state = 1308;
            this.match(PythonParser.NAME);
            this.state = 1311;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COLON) {
              {
                this.state = 1309;
                this.match(PythonParser.COLON);
                this.state = 1310;
                this.expression();
              }
            }
          }
          break;
        case PythonParser.DOUBLESTAR:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1313;
            this.match(PythonParser.DOUBLESTAR);
            this.state = 1314;
            this.match(PythonParser.NAME);
            this.state = 1317;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COLON) {
              {
                this.state = 1315;
                this.match(PythonParser.COLON);
                this.state = 1316;
                this.expression();
              }
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type_param_bound(): Type_param_boundContext {
    let _localctx: Type_param_boundContext = new Type_param_boundContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 204, PythonParser.RULE_type_param_bound);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1321;
        this.match(PythonParser.COLON);
        this.state = 1322;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expressions(): ExpressionsContext {
    let _localctx: ExpressionsContext = new ExpressionsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 206, PythonParser.RULE_expressions);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1324;
        this.expression();
        this.state = 1329;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1325;
                this.match(PythonParser.COMMA);
                this.state = 1326;
                this.expression();
              }
            }
          }
          this.state = 1331;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
        }
        this.state = 1333;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1332;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expression(): ExpressionContext {
    let _localctx: ExpressionContext = new ExpressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 208, PythonParser.RULE_expression);
    let _la: number;
    try {
      this.state = 1344;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.AWAIT:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.NOT:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.PLUS:
        case PythonParser.MINUS:
        case PythonParser.TILDE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1335;
            this.disjunction();
            this.state = 1341;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.IF) {
              {
                this.state = 1336;
                this.match(PythonParser.IF);
                this.state = 1337;
                this.disjunction();
                this.state = 1338;
                this.match(PythonParser.ELSE);
                this.state = 1339;
                this.expression();
              }
            }
          }
          break;
        case PythonParser.LAMBDA:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1343;
            this.lambdef();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public yield_expr(): Yield_exprContext {
    let _localctx: Yield_exprContext = new Yield_exprContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 210, PythonParser.RULE_yield_expr);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1346;
        this.match(PythonParser.YIELD);
        this.state = 1352;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PythonParser.FROM:
            {
              this.state = 1347;
              this.match(PythonParser.FROM);
              this.state = 1348;
              this.expression();
            }
            break;
          case PythonParser.FSTRING_START:
          case PythonParser.FALSE:
          case PythonParser.AWAIT:
          case PythonParser.NONE:
          case PythonParser.TRUE:
          case PythonParser.LAMBDA:
          case PythonParser.NOT:
          case PythonParser.LPAR:
          case PythonParser.LSQB:
          case PythonParser.LBRACE:
          case PythonParser.RPAR:
          case PythonParser.RBRACE:
          case PythonParser.COLON:
          case PythonParser.SEMI:
          case PythonParser.PLUS:
          case PythonParser.MINUS:
          case PythonParser.STAR:
          case PythonParser.EQUAL:
          case PythonParser.TILDE:
          case PythonParser.ELLIPSIS:
          case PythonParser.EXCLAMATION:
          case PythonParser.NAME:
          case PythonParser.NUMBER:
          case PythonParser.STRING:
          case PythonParser.TYPE_COMMENT:
          case PythonParser.NEWLINE:
            {
              this.state = 1350;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (
                ((_la & ~0x1f) === 0 &&
                  ((1 << _la) &
                    ((1 << PythonParser.FSTRING_START) |
                      (1 << PythonParser.FALSE) |
                      (1 << PythonParser.AWAIT) |
                      (1 << PythonParser.NONE) |
                      (1 << PythonParser.TRUE) |
                      (1 << PythonParser.LAMBDA))) !==
                    0) ||
                (((_la - 34) & ~0x1f) === 0 &&
                  ((1 << (_la - 34)) &
                    ((1 << (PythonParser.NOT - 34)) |
                      (1 << (PythonParser.LPAR - 34)) |
                      (1 << (PythonParser.LSQB - 34)) |
                      (1 << (PythonParser.LBRACE - 34)) |
                      (1 << (PythonParser.PLUS - 34)) |
                      (1 << (PythonParser.MINUS - 34)) |
                      (1 << (PythonParser.STAR - 34)) |
                      (1 << (PythonParser.TILDE - 34)))) !==
                    0) ||
                (((_la - 86) & ~0x1f) === 0 &&
                  ((1 << (_la - 86)) &
                    ((1 << (PythonParser.ELLIPSIS - 86)) |
                      (1 << (PythonParser.NAME - 86)) |
                      (1 << (PythonParser.NUMBER - 86)) |
                      (1 << (PythonParser.STRING - 86)))) !==
                    0)
              ) {
                {
                  this.state = 1349;
                  this.star_expressions();
                }
              }
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_expressions(): Star_expressionsContext {
    let _localctx: Star_expressionsContext = new Star_expressionsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 212, PythonParser.RULE_star_expressions);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1354;
        this.star_expression();
        this.state = 1359;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1355;
                this.match(PythonParser.COMMA);
                this.state = 1356;
                this.star_expression();
              }
            }
          }
          this.state = 1361;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
        }
        this.state = 1363;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1362;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_expression(): Star_expressionContext {
    let _localctx: Star_expressionContext = new Star_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 214, PythonParser.RULE_star_expression);
    try {
      this.state = 1368;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.STAR:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1365;
            this.match(PythonParser.STAR);
            this.state = 1366;
            this.bitwise_or(0);
          }
          break;
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.AWAIT:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.LAMBDA:
        case PythonParser.NOT:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.PLUS:
        case PythonParser.MINUS:
        case PythonParser.TILDE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1367;
            this.expression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_named_expressions(): Star_named_expressionsContext {
    let _localctx: Star_named_expressionsContext =
      new Star_named_expressionsContext(this._ctx, this.state);
    this.enterRule(_localctx, 216, PythonParser.RULE_star_named_expressions);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1370;
        this.star_named_expression();
        this.state = 1375;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1371;
                this.match(PythonParser.COMMA);
                this.state = 1372;
                this.star_named_expression();
              }
            }
          }
          this.state = 1377;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
        }
        this.state = 1379;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1378;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_named_expression(): Star_named_expressionContext {
    let _localctx: Star_named_expressionContext =
      new Star_named_expressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 218, PythonParser.RULE_star_named_expression);
    try {
      this.state = 1384;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.STAR:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1381;
            this.match(PythonParser.STAR);
            this.state = 1382;
            this.bitwise_or(0);
          }
          break;
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.AWAIT:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.LAMBDA:
        case PythonParser.NOT:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.PLUS:
        case PythonParser.MINUS:
        case PythonParser.TILDE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1383;
            this.named_expression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public assignment_expression(): Assignment_expressionContext {
    let _localctx: Assignment_expressionContext =
      new Assignment_expressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 220, PythonParser.RULE_assignment_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1386;
        this.match(PythonParser.NAME);
        this.state = 1387;
        this.match(PythonParser.COLONEQUAL);
        this.state = 1388;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public named_expression(): Named_expressionContext {
    let _localctx: Named_expressionContext = new Named_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 222, PythonParser.RULE_named_expression);
    try {
      this.state = 1392;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1390;
            this.assignment_expression();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1391;
            this.expression();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public disjunction(): DisjunctionContext {
    let _localctx: DisjunctionContext = new DisjunctionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 224, PythonParser.RULE_disjunction);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1394;
        this.conjunction();
        this.state = 1399;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.OR) {
          {
            {
              this.state = 1395;
              this.match(PythonParser.OR);
              this.state = 1396;
              this.conjunction();
            }
          }
          this.state = 1401;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public conjunction(): ConjunctionContext {
    let _localctx: ConjunctionContext = new ConjunctionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 226, PythonParser.RULE_conjunction);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1402;
        this.inversion();
        this.state = 1407;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.AND) {
          {
            {
              this.state = 1403;
              this.match(PythonParser.AND);
              this.state = 1404;
              this.inversion();
            }
          }
          this.state = 1409;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inversion(): InversionContext {
    let _localctx: InversionContext = new InversionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 228, PythonParser.RULE_inversion);
    try {
      this.state = 1413;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.NOT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1410;
            this.match(PythonParser.NOT);
            this.state = 1411;
            this.inversion();
          }
          break;
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.AWAIT:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.PLUS:
        case PythonParser.MINUS:
        case PythonParser.TILDE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1412;
            this.comparison();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public comparison(): ComparisonContext {
    let _localctx: ComparisonContext = new ComparisonContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 230, PythonParser.RULE_comparison);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1415;
        this.bitwise_or(0);
        this.state = 1419;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          _la === PythonParser.IN ||
          _la === PythonParser.IS ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (PythonParser.NOT - 34)) |
                (1 << (PythonParser.LESS - 34)) |
                (1 << (PythonParser.GREATER - 34)) |
                (1 << (PythonParser.EQEQUAL - 34)) |
                (1 << (PythonParser.NOTEQUAL - 34)) |
                (1 << (PythonParser.LESSEQUAL - 34)) |
                (1 << (PythonParser.GREATEREQUAL - 34)))) !==
              0)
        ) {
          {
            {
              this.state = 1416;
              this.compare_op_bitwise_or_pair();
            }
          }
          this.state = 1421;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public compare_op_bitwise_or_pair(): Compare_op_bitwise_or_pairContext {
    let _localctx: Compare_op_bitwise_or_pairContext =
      new Compare_op_bitwise_or_pairContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      232,
      PythonParser.RULE_compare_op_bitwise_or_pair
    );
    try {
      this.state = 1432;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 169, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1422;
            this.eq_bitwise_or();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1423;
            this.noteq_bitwise_or();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1424;
            this.lte_bitwise_or();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1425;
            this.lt_bitwise_or();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1426;
            this.gte_bitwise_or();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1427;
            this.gt_bitwise_or();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1428;
            this.notin_bitwise_or();
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 1429;
            this.in_bitwise_or();
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 1430;
            this.isnot_bitwise_or();
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 1431;
            this.is_bitwise_or();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public eq_bitwise_or(): Eq_bitwise_orContext {
    let _localctx: Eq_bitwise_orContext = new Eq_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 234, PythonParser.RULE_eq_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1434;
        this.match(PythonParser.EQEQUAL);
        this.state = 1435;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public noteq_bitwise_or(): Noteq_bitwise_orContext {
    let _localctx: Noteq_bitwise_orContext = new Noteq_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 236, PythonParser.RULE_noteq_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1437;
          this.match(PythonParser.NOTEQUAL);
        }
        this.state = 1438;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lte_bitwise_or(): Lte_bitwise_orContext {
    let _localctx: Lte_bitwise_orContext = new Lte_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 238, PythonParser.RULE_lte_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1440;
        this.match(PythonParser.LESSEQUAL);
        this.state = 1441;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lt_bitwise_or(): Lt_bitwise_orContext {
    let _localctx: Lt_bitwise_orContext = new Lt_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 240, PythonParser.RULE_lt_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1443;
        this.match(PythonParser.LESS);
        this.state = 1444;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public gte_bitwise_or(): Gte_bitwise_orContext {
    let _localctx: Gte_bitwise_orContext = new Gte_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 242, PythonParser.RULE_gte_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1446;
        this.match(PythonParser.GREATEREQUAL);
        this.state = 1447;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public gt_bitwise_or(): Gt_bitwise_orContext {
    let _localctx: Gt_bitwise_orContext = new Gt_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 244, PythonParser.RULE_gt_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1449;
        this.match(PythonParser.GREATER);
        this.state = 1450;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public notin_bitwise_or(): Notin_bitwise_orContext {
    let _localctx: Notin_bitwise_orContext = new Notin_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 246, PythonParser.RULE_notin_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1452;
        this.match(PythonParser.NOT);
        this.state = 1453;
        this.match(PythonParser.IN);
        this.state = 1454;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public in_bitwise_or(): In_bitwise_orContext {
    let _localctx: In_bitwise_orContext = new In_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 248, PythonParser.RULE_in_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1456;
        this.match(PythonParser.IN);
        this.state = 1457;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public isnot_bitwise_or(): Isnot_bitwise_orContext {
    let _localctx: Isnot_bitwise_orContext = new Isnot_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 250, PythonParser.RULE_isnot_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1459;
        this.match(PythonParser.IS);
        this.state = 1460;
        this.match(PythonParser.NOT);
        this.state = 1461;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public is_bitwise_or(): Is_bitwise_orContext {
    let _localctx: Is_bitwise_orContext = new Is_bitwise_orContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 252, PythonParser.RULE_is_bitwise_or);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1463;
        this.match(PythonParser.IS);
        this.state = 1464;
        this.bitwise_or(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public bitwise_or(): Bitwise_orContext;
  public bitwise_or(_p: number): Bitwise_orContext;
  // @RuleVersion(0)
  public bitwise_or(_p?: number): Bitwise_orContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Bitwise_orContext = new Bitwise_orContext(
      this._ctx,
      _parentState
    );
    let _prevctx: Bitwise_orContext = _localctx;
    let _startState: number = 254;
    this.enterRecursionRule(_localctx, 254, PythonParser.RULE_bitwise_or, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1467;
          this.bitwise_xor(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1474;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Bitwise_orContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PythonParser.RULE_bitwise_or
                );
                this.state = 1469;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this._ctx, 2)"
                  );
                }
                this.state = 1470;
                this.match(PythonParser.VBAR);
                this.state = 1471;
                this.bitwise_xor(0);
              }
            }
          }
          this.state = 1476;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public bitwise_xor(): Bitwise_xorContext;
  public bitwise_xor(_p: number): Bitwise_xorContext;
  // @RuleVersion(0)
  public bitwise_xor(_p?: number): Bitwise_xorContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Bitwise_xorContext = new Bitwise_xorContext(
      this._ctx,
      _parentState
    );
    let _prevctx: Bitwise_xorContext = _localctx;
    let _startState: number = 256;
    this.enterRecursionRule(_localctx, 256, PythonParser.RULE_bitwise_xor, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1478;
          this.bitwise_and(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1485;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Bitwise_xorContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PythonParser.RULE_bitwise_xor
                );
                this.state = 1480;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this._ctx, 2)"
                  );
                }
                this.state = 1481;
                this.match(PythonParser.CIRCUMFLEX);
                this.state = 1482;
                this.bitwise_and(0);
              }
            }
          }
          this.state = 1487;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public bitwise_and(): Bitwise_andContext;
  public bitwise_and(_p: number): Bitwise_andContext;
  // @RuleVersion(0)
  public bitwise_and(_p?: number): Bitwise_andContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Bitwise_andContext = new Bitwise_andContext(
      this._ctx,
      _parentState
    );
    let _prevctx: Bitwise_andContext = _localctx;
    let _startState: number = 258;
    this.enterRecursionRule(_localctx, 258, PythonParser.RULE_bitwise_and, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1489;
          this.shift_expr(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1496;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Bitwise_andContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PythonParser.RULE_bitwise_and
                );
                this.state = 1491;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this._ctx, 2)"
                  );
                }
                this.state = 1492;
                this.match(PythonParser.AMPER);
                this.state = 1493;
                this.shift_expr(0);
              }
            }
          }
          this.state = 1498;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public shift_expr(): Shift_exprContext;
  public shift_expr(_p: number): Shift_exprContext;
  // @RuleVersion(0)
  public shift_expr(_p?: number): Shift_exprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Shift_exprContext = new Shift_exprContext(
      this._ctx,
      _parentState
    );
    let _prevctx: Shift_exprContext = _localctx;
    let _startState: number = 260;
    this.enterRecursionRule(_localctx, 260, PythonParser.RULE_shift_expr, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1500;
          this.sum(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1507;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Shift_exprContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PythonParser.RULE_shift_expr
                );
                this.state = 1502;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this._ctx, 2)"
                  );
                }
                this.state = 1503;
                _la = this._input.LA(1);
                if (
                  !(
                    _la === PythonParser.LEFTSHIFT ||
                    _la === PythonParser.RIGHTSHIFT
                  )
                ) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 1504;
                this.sum(0);
              }
            }
          }
          this.state = 1509;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public sum(): SumContext;
  public sum(_p: number): SumContext;
  // @RuleVersion(0)
  public sum(_p?: number): SumContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: SumContext = new SumContext(this._ctx, _parentState);
    let _prevctx: SumContext = _localctx;
    let _startState: number = 262;
    this.enterRecursionRule(_localctx, 262, PythonParser.RULE_sum, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1511;
          this.term(0);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1518;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new SumContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PythonParser.RULE_sum
                );
                this.state = 1513;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this._ctx, 2)"
                  );
                }
                this.state = 1514;
                _la = this._input.LA(1);
                if (
                  !(_la === PythonParser.PLUS || _la === PythonParser.MINUS)
                ) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 1515;
                this.term(0);
              }
            }
          }
          this.state = 1520;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public term(): TermContext;
  public term(_p: number): TermContext;
  // @RuleVersion(0)
  public term(_p?: number): TermContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: TermContext = new TermContext(this._ctx, _parentState);
    let _prevctx: TermContext = _localctx;
    let _startState: number = 264;
    this.enterRecursionRule(_localctx, 264, PythonParser.RULE_term, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1522;
          this.factor();
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1529;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new TermContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PythonParser.RULE_term
                );
                this.state = 1524;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this._ctx, 2)"
                  );
                }
                this.state = 1525;
                _la = this._input.LA(1);
                if (
                  !(
                    ((_la - 53) & ~0x1f) === 0 &&
                    ((1 << (_la - 53)) &
                      ((1 << (PythonParser.STAR - 53)) |
                        (1 << (PythonParser.SLASH - 53)) |
                        (1 << (PythonParser.PERCENT - 53)) |
                        (1 << (PythonParser.DOUBLESLASH - 53)) |
                        (1 << (PythonParser.AT - 53)))) !==
                      0
                  )
                ) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 1526;
                this.factor();
              }
            }
          }
          this.state = 1531;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public factor(): FactorContext {
    let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
    this.enterRule(_localctx, 266, PythonParser.RULE_factor);
    try {
      this.state = 1539;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.PLUS:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1532;
            this.match(PythonParser.PLUS);
            this.state = 1533;
            this.factor();
          }
          break;
        case PythonParser.MINUS:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1534;
            this.match(PythonParser.MINUS);
            this.state = 1535;
            this.factor();
          }
          break;
        case PythonParser.TILDE:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1536;
            this.match(PythonParser.TILDE);
            this.state = 1537;
            this.factor();
          }
          break;
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.AWAIT:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1538;
            this.power();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public power(): PowerContext {
    let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
    this.enterRule(_localctx, 268, PythonParser.RULE_power);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1541;
        this.await_primary();
        this.state = 1544;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 177, this._ctx)) {
          case 1:
            {
              this.state = 1542;
              this.match(PythonParser.DOUBLESTAR);
              this.state = 1543;
              this.factor();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public await_primary(): Await_primaryContext {
    let _localctx: Await_primaryContext = new Await_primaryContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 270, PythonParser.RULE_await_primary);
    try {
      this.state = 1549;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.AWAIT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1546;
            this.match(PythonParser.AWAIT);
            this.state = 1547;
            this.primary(0);
          }
          break;
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1548;
            this.primary(0);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public primary(): PrimaryContext;
  public primary(_p: number): PrimaryContext;
  // @RuleVersion(0)
  public primary(_p?: number): PrimaryContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: PrimaryContext = new PrimaryContext(this._ctx, _parentState);
    let _prevctx: PrimaryContext = _localctx;
    let _startState: number = 272;
    this.enterRecursionRule(_localctx, 272, PythonParser.RULE_primary, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1552;
          this.atom();
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1571;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new PrimaryContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PythonParser.RULE_primary
                );
                this.state = 1554;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this._ctx, 2)"
                  );
                }
                this.state = 1567;
                this._errHandler.sync(this);
                switch (
                  this.interpreter.adaptivePredict(this._input, 180, this._ctx)
                ) {
                  case 1:
                    {
                      this.state = 1555;
                      this.match(PythonParser.DOT);
                      this.state = 1556;
                      this.match(PythonParser.NAME);
                    }
                    break;

                  case 2:
                    {
                      this.state = 1557;
                      this.genexp();
                    }
                    break;

                  case 3:
                    {
                      this.state = 1558;
                      this.match(PythonParser.LPAR);
                      this.state = 1560;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (
                        ((_la & ~0x1f) === 0 &&
                          ((1 << _la) &
                            ((1 << PythonParser.FSTRING_START) |
                              (1 << PythonParser.FALSE) |
                              (1 << PythonParser.AWAIT) |
                              (1 << PythonParser.NONE) |
                              (1 << PythonParser.TRUE) |
                              (1 << PythonParser.LAMBDA))) !==
                            0) ||
                        (((_la - 34) & ~0x1f) === 0 &&
                          ((1 << (_la - 34)) &
                            ((1 << (PythonParser.NOT - 34)) |
                              (1 << (PythonParser.LPAR - 34)) |
                              (1 << (PythonParser.LSQB - 34)) |
                              (1 << (PythonParser.LBRACE - 34)) |
                              (1 << (PythonParser.PLUS - 34)) |
                              (1 << (PythonParser.MINUS - 34)) |
                              (1 << (PythonParser.STAR - 34)) |
                              (1 << (PythonParser.TILDE - 34)))) !==
                            0) ||
                        (((_la - 69) & ~0x1f) === 0 &&
                          ((1 << (_la - 69)) &
                            ((1 << (PythonParser.DOUBLESTAR - 69)) |
                              (1 << (PythonParser.ELLIPSIS - 69)) |
                              (1 << (PythonParser.NAME - 69)) |
                              (1 << (PythonParser.NUMBER - 69)) |
                              (1 << (PythonParser.STRING - 69)))) !==
                            0)
                      ) {
                        {
                          this.state = 1559;
                          this.arguments();
                        }
                      }

                      this.state = 1562;
                      this.match(PythonParser.RPAR);
                    }
                    break;

                  case 4:
                    {
                      this.state = 1563;
                      this.match(PythonParser.LSQB);
                      this.state = 1564;
                      this.slices();
                      this.state = 1565;
                      this.match(PythonParser.RSQB);
                    }
                    break;
                }
              }
            }
          }
          this.state = 1573;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public slices(): SlicesContext {
    let _localctx: SlicesContext = new SlicesContext(this._ctx, this.state);
    this.enterRule(_localctx, 274, PythonParser.RULE_slices);
    let _la: number;
    try {
      let _alt: number;
      this.state = 1592;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1574;
            this.slice();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1577;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PythonParser.FSTRING_START:
              case PythonParser.FALSE:
              case PythonParser.AWAIT:
              case PythonParser.NONE:
              case PythonParser.TRUE:
              case PythonParser.LAMBDA:
              case PythonParser.NOT:
              case PythonParser.LPAR:
              case PythonParser.LSQB:
              case PythonParser.LBRACE:
              case PythonParser.COLON:
              case PythonParser.PLUS:
              case PythonParser.MINUS:
              case PythonParser.TILDE:
              case PythonParser.ELLIPSIS:
              case PythonParser.NAME:
              case PythonParser.NUMBER:
              case PythonParser.STRING:
                {
                  this.state = 1575;
                  this.slice();
                }
                break;
              case PythonParser.STAR:
                {
                  this.state = 1576;
                  this.starred_expression();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 1586;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(
              this._input,
              184,
              this._ctx
            );
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 1579;
                    this.match(PythonParser.COMMA);
                    this.state = 1582;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PythonParser.FSTRING_START:
                      case PythonParser.FALSE:
                      case PythonParser.AWAIT:
                      case PythonParser.NONE:
                      case PythonParser.TRUE:
                      case PythonParser.LAMBDA:
                      case PythonParser.NOT:
                      case PythonParser.LPAR:
                      case PythonParser.LSQB:
                      case PythonParser.LBRACE:
                      case PythonParser.COLON:
                      case PythonParser.PLUS:
                      case PythonParser.MINUS:
                      case PythonParser.TILDE:
                      case PythonParser.ELLIPSIS:
                      case PythonParser.NAME:
                      case PythonParser.NUMBER:
                      case PythonParser.STRING:
                        {
                          this.state = 1580;
                          this.slice();
                        }
                        break;
                      case PythonParser.STAR:
                        {
                          this.state = 1581;
                          this.starred_expression();
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                  }
                }
              }
              this.state = 1588;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                184,
                this._ctx
              );
            }
            this.state = 1590;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COMMA) {
              {
                this.state = 1589;
                this.match(PythonParser.COMMA);
              }
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public slice(): SliceContext {
    let _localctx: SliceContext = new SliceContext(this._ctx, this.state);
    this.enterRule(_localctx, 276, PythonParser.RULE_slice);
    let _la: number;
    try {
      this.state = 1608;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1595;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PythonParser.FSTRING_START) |
                    (1 << PythonParser.FALSE) |
                    (1 << PythonParser.AWAIT) |
                    (1 << PythonParser.NONE) |
                    (1 << PythonParser.TRUE) |
                    (1 << PythonParser.LAMBDA))) !==
                  0) ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (PythonParser.NOT - 34)) |
                    (1 << (PythonParser.LPAR - 34)) |
                    (1 << (PythonParser.LSQB - 34)) |
                    (1 << (PythonParser.LBRACE - 34)) |
                    (1 << (PythonParser.PLUS - 34)) |
                    (1 << (PythonParser.MINUS - 34)) |
                    (1 << (PythonParser.TILDE - 34)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (PythonParser.ELLIPSIS - 86)) |
                    (1 << (PythonParser.NAME - 86)) |
                    (1 << (PythonParser.NUMBER - 86)) |
                    (1 << (PythonParser.STRING - 86)))) !==
                  0)
            ) {
              {
                this.state = 1594;
                this.expression();
              }
            }

            this.state = 1597;
            this.match(PythonParser.COLON);
            this.state = 1599;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PythonParser.FSTRING_START) |
                    (1 << PythonParser.FALSE) |
                    (1 << PythonParser.AWAIT) |
                    (1 << PythonParser.NONE) |
                    (1 << PythonParser.TRUE) |
                    (1 << PythonParser.LAMBDA))) !==
                  0) ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (PythonParser.NOT - 34)) |
                    (1 << (PythonParser.LPAR - 34)) |
                    (1 << (PythonParser.LSQB - 34)) |
                    (1 << (PythonParser.LBRACE - 34)) |
                    (1 << (PythonParser.PLUS - 34)) |
                    (1 << (PythonParser.MINUS - 34)) |
                    (1 << (PythonParser.TILDE - 34)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (PythonParser.ELLIPSIS - 86)) |
                    (1 << (PythonParser.NAME - 86)) |
                    (1 << (PythonParser.NUMBER - 86)) |
                    (1 << (PythonParser.STRING - 86)))) !==
                  0)
            ) {
              {
                this.state = 1598;
                this.expression();
              }
            }

            this.state = 1605;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COLON) {
              {
                this.state = 1601;
                this.match(PythonParser.COLON);
                this.state = 1603;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (
                  ((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                      ((1 << PythonParser.FSTRING_START) |
                        (1 << PythonParser.FALSE) |
                        (1 << PythonParser.AWAIT) |
                        (1 << PythonParser.NONE) |
                        (1 << PythonParser.TRUE) |
                        (1 << PythonParser.LAMBDA))) !==
                      0) ||
                  (((_la - 34) & ~0x1f) === 0 &&
                    ((1 << (_la - 34)) &
                      ((1 << (PythonParser.NOT - 34)) |
                        (1 << (PythonParser.LPAR - 34)) |
                        (1 << (PythonParser.LSQB - 34)) |
                        (1 << (PythonParser.LBRACE - 34)) |
                        (1 << (PythonParser.PLUS - 34)) |
                        (1 << (PythonParser.MINUS - 34)) |
                        (1 << (PythonParser.TILDE - 34)))) !==
                      0) ||
                  (((_la - 86) & ~0x1f) === 0 &&
                    ((1 << (_la - 86)) &
                      ((1 << (PythonParser.ELLIPSIS - 86)) |
                        (1 << (PythonParser.NAME - 86)) |
                        (1 << (PythonParser.NUMBER - 86)) |
                        (1 << (PythonParser.STRING - 86)))) !==
                      0)
                ) {
                  {
                    this.state = 1602;
                    this.expression();
                  }
                }
              }
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1607;
            this.named_expression();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public atom(): AtomContext {
    let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
    this.enterRule(_localctx, 278, PythonParser.RULE_atom);
    try {
      this.state = 1632;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1610;
            this.match(PythonParser.NAME);
          }
          break;
        case PythonParser.TRUE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1611;
            this.match(PythonParser.TRUE);
          }
          break;
        case PythonParser.FALSE:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1612;
            this.match(PythonParser.FALSE);
          }
          break;
        case PythonParser.NONE:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1613;
            this.match(PythonParser.NONE);
          }
          break;
        case PythonParser.FSTRING_START:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1614;
            this.strings();
          }
          break;
        case PythonParser.NUMBER:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1615;
            this.match(PythonParser.NUMBER);
          }
          break;
        case PythonParser.LPAR:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1619;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 192, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1616;
                  this.tuple();
                }
                break;

              case 2:
                {
                  this.state = 1617;
                  this.group();
                }
                break;

              case 3:
                {
                  this.state = 1618;
                  this.genexp();
                }
                break;
            }
          }
          break;
        case PythonParser.LSQB:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 1623;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 193, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1621;
                  this.list();
                }
                break;

              case 2:
                {
                  this.state = 1622;
                  this.listcomp();
                }
                break;
            }
          }
          break;
        case PythonParser.LBRACE:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 1629;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 194, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1625;
                  this.dict();
                }
                break;

              case 2:
                {
                  this.state = 1626;
                  this.set();
                }
                break;

              case 3:
                {
                  this.state = 1627;
                  this.dictcomp();
                }
                break;

              case 4:
                {
                  this.state = 1628;
                  this.setcomp();
                }
                break;
            }
          }
          break;
        case PythonParser.ELLIPSIS:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 1631;
            this.match(PythonParser.ELLIPSIS);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public group(): GroupContext {
    let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
    this.enterRule(_localctx, 280, PythonParser.RULE_group);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1634;
        this.match(PythonParser.LPAR);
        this.state = 1637;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PythonParser.YIELD:
            {
              this.state = 1635;
              this.yield_expr();
            }
            break;
          case PythonParser.FSTRING_START:
          case PythonParser.FALSE:
          case PythonParser.AWAIT:
          case PythonParser.NONE:
          case PythonParser.TRUE:
          case PythonParser.LAMBDA:
          case PythonParser.NOT:
          case PythonParser.LPAR:
          case PythonParser.LSQB:
          case PythonParser.LBRACE:
          case PythonParser.PLUS:
          case PythonParser.MINUS:
          case PythonParser.TILDE:
          case PythonParser.ELLIPSIS:
          case PythonParser.NAME:
          case PythonParser.NUMBER:
          case PythonParser.STRING:
            {
              this.state = 1636;
              this.named_expression();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1639;
        this.match(PythonParser.RPAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambdef(): LambdefContext {
    let _localctx: LambdefContext = new LambdefContext(this._ctx, this.state);
    this.enterRule(_localctx, 282, PythonParser.RULE_lambdef);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1641;
        this.match(PythonParser.LAMBDA);
        this.state = 1643;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          _la === PythonParser.STAR ||
          _la === PythonParser.DOUBLESTAR ||
          _la === PythonParser.NAME
        ) {
          {
            this.state = 1642;
            this.lambda_params();
          }
        }

        this.state = 1645;
        this.match(PythonParser.COLON);
        this.state = 1646;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_params(): Lambda_paramsContext {
    let _localctx: Lambda_paramsContext = new Lambda_paramsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 284, PythonParser.RULE_lambda_params);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1648;
        this.lambda_parameters();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_parameters(): Lambda_parametersContext {
    let _localctx: Lambda_parametersContext = new Lambda_parametersContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 286, PythonParser.RULE_lambda_parameters);
    let _la: number;
    try {
      let _alt: number;
      this.state = 1699;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 208, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1650;
            this.lambda_slash_no_default();
            this.state = 1654;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(
              this._input,
              198,
              this._ctx
            );
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 1651;
                    this.lambda_param_no_default();
                  }
                }
              }
              this.state = 1656;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                198,
                this._ctx
              );
            }
            this.state = 1660;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.NAME) {
              {
                {
                  this.state = 1657;
                  this.lambda_param_with_default();
                }
              }
              this.state = 1662;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1664;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.STAR || _la === PythonParser.DOUBLESTAR) {
              {
                this.state = 1663;
                this.lambda_star_etc();
              }
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1666;
            this.lambda_slash_with_default();
            this.state = 1670;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.NAME) {
              {
                {
                  this.state = 1667;
                  this.lambda_param_with_default();
                }
              }
              this.state = 1672;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1674;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.STAR || _la === PythonParser.DOUBLESTAR) {
              {
                this.state = 1673;
                this.lambda_star_etc();
              }
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1677;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 1676;
                      this.lambda_param_no_default();
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 1679;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                203,
                this._ctx
              );
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            this.state = 1684;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.NAME) {
              {
                {
                  this.state = 1681;
                  this.lambda_param_with_default();
                }
              }
              this.state = 1686;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1688;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.STAR || _la === PythonParser.DOUBLESTAR) {
              {
                this.state = 1687;
                this.lambda_star_etc();
              }
            }
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1691;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 1690;
                  this.lambda_param_with_default();
                }
              }
              this.state = 1693;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === PythonParser.NAME);
            this.state = 1696;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.STAR || _la === PythonParser.DOUBLESTAR) {
              {
                this.state = 1695;
                this.lambda_star_etc();
              }
            }
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1698;
            this.lambda_star_etc();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_slash_no_default(): Lambda_slash_no_defaultContext {
    let _localctx: Lambda_slash_no_defaultContext =
      new Lambda_slash_no_defaultContext(this._ctx, this.state);
    this.enterRule(_localctx, 288, PythonParser.RULE_lambda_slash_no_default);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1702;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1701;
              this.lambda_param_no_default();
            }
          }
          this.state = 1704;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === PythonParser.NAME);
        this.state = 1706;
        this.match(PythonParser.SLASH);
        this.state = 1708;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1707;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_slash_with_default(): Lambda_slash_with_defaultContext {
    let _localctx: Lambda_slash_with_defaultContext =
      new Lambda_slash_with_defaultContext(this._ctx, this.state);
    this.enterRule(_localctx, 290, PythonParser.RULE_lambda_slash_with_default);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1713;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1710;
                this.lambda_param_no_default();
              }
            }
          }
          this.state = 1715;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
        }
        this.state = 1717;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1716;
              this.lambda_param_with_default();
            }
          }
          this.state = 1719;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === PythonParser.NAME);
        this.state = 1721;
        this.match(PythonParser.SLASH);
        this.state = 1723;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1722;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_star_etc(): Lambda_star_etcContext {
    let _localctx: Lambda_star_etcContext = new Lambda_star_etcContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 292, PythonParser.RULE_lambda_star_etc);
    let _la: number;
    try {
      this.state = 1747;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 218, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1725;
            this.match(PythonParser.STAR);
            this.state = 1726;
            this.lambda_param_no_default();
            this.state = 1730;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PythonParser.NAME) {
              {
                {
                  this.state = 1727;
                  this.lambda_param_maybe_default();
                }
              }
              this.state = 1732;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1734;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.DOUBLESTAR) {
              {
                this.state = 1733;
                this.lambda_kwds();
              }
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1736;
            this.match(PythonParser.STAR);
            this.state = 1737;
            this.match(PythonParser.COMMA);
            this.state = 1739;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 1738;
                  this.lambda_param_maybe_default();
                }
              }
              this.state = 1741;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === PythonParser.NAME);
            this.state = 1744;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.DOUBLESTAR) {
              {
                this.state = 1743;
                this.lambda_kwds();
              }
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1746;
            this.lambda_kwds();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_kwds(): Lambda_kwdsContext {
    let _localctx: Lambda_kwdsContext = new Lambda_kwdsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 294, PythonParser.RULE_lambda_kwds);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1749;
        this.match(PythonParser.DOUBLESTAR);
        this.state = 1750;
        this.lambda_param_no_default();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_param_no_default(): Lambda_param_no_defaultContext {
    let _localctx: Lambda_param_no_defaultContext =
      new Lambda_param_no_defaultContext(this._ctx, this.state);
    this.enterRule(_localctx, 296, PythonParser.RULE_lambda_param_no_default);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1752;
        this.lambda_param();
        this.state = 1754;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1753;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_param_with_default(): Lambda_param_with_defaultContext {
    let _localctx: Lambda_param_with_defaultContext =
      new Lambda_param_with_defaultContext(this._ctx, this.state);
    this.enterRule(_localctx, 298, PythonParser.RULE_lambda_param_with_default);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1756;
        this.lambda_param();
        this.state = 1757;
        this.default_assignment();
        this.state = 1759;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1758;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_param_maybe_default(): Lambda_param_maybe_defaultContext {
    let _localctx: Lambda_param_maybe_defaultContext =
      new Lambda_param_maybe_defaultContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      300,
      PythonParser.RULE_lambda_param_maybe_default
    );
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1761;
        this.lambda_param();
        this.state = 1763;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.EQUAL) {
          {
            this.state = 1762;
            this.default_assignment();
          }
        }

        this.state = 1766;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1765;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public lambda_param(): Lambda_paramContext {
    let _localctx: Lambda_paramContext = new Lambda_paramContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 302, PythonParser.RULE_lambda_param);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1768;
        this.match(PythonParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fstring_middle(): Fstring_middleContext {
    let _localctx: Fstring_middleContext = new Fstring_middleContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 304, PythonParser.RULE_fstring_middle);
    try {
      this.state = 1772;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.LBRACE:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1770;
            this.fstring_replacement_field();
          }
          break;
        case PythonParser.FSTRING_MIDDLE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1771;
            this.match(PythonParser.FSTRING_MIDDLE);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fstring_replacement_field(): Fstring_replacement_fieldContext {
    let _localctx: Fstring_replacement_fieldContext =
      new Fstring_replacement_fieldContext(this._ctx, this.state);
    this.enterRule(_localctx, 306, PythonParser.RULE_fstring_replacement_field);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1774;
        this.match(PythonParser.LBRACE);
        this.state = 1777;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PythonParser.YIELD:
            {
              this.state = 1775;
              this.yield_expr();
            }
            break;
          case PythonParser.FSTRING_START:
          case PythonParser.FALSE:
          case PythonParser.AWAIT:
          case PythonParser.NONE:
          case PythonParser.TRUE:
          case PythonParser.LAMBDA:
          case PythonParser.NOT:
          case PythonParser.LPAR:
          case PythonParser.LSQB:
          case PythonParser.LBRACE:
          case PythonParser.PLUS:
          case PythonParser.MINUS:
          case PythonParser.STAR:
          case PythonParser.TILDE:
          case PythonParser.ELLIPSIS:
          case PythonParser.NAME:
          case PythonParser.NUMBER:
          case PythonParser.STRING:
            {
              this.state = 1776;
              this.star_expressions();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1780;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.EQUAL) {
          {
            this.state = 1779;
            this.match(PythonParser.EQUAL);
          }
        }

        this.state = 1783;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.EXCLAMATION) {
          {
            this.state = 1782;
            this.fstring_conversion();
          }
        }

        this.state = 1786;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COLON) {
          {
            this.state = 1785;
            this.fstring_full_format_spec();
          }
        }

        this.state = 1788;
        this.match(PythonParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fstring_conversion(): Fstring_conversionContext {
    let _localctx: Fstring_conversionContext = new Fstring_conversionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 308, PythonParser.RULE_fstring_conversion);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1790;
        this.match(PythonParser.EXCLAMATION);
        this.state = 1791;
        this.match(PythonParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fstring_full_format_spec(): Fstring_full_format_specContext {
    let _localctx: Fstring_full_format_specContext =
      new Fstring_full_format_specContext(this._ctx, this.state);
    this.enterRule(_localctx, 310, PythonParser.RULE_fstring_full_format_spec);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1793;
        this.match(PythonParser.COLON);
        this.state = 1797;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          _la === PythonParser.FSTRING_MIDDLE ||
          _la === PythonParser.LBRACE
        ) {
          {
            {
              this.state = 1794;
              this.fstring_format_spec();
            }
          }
          this.state = 1799;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fstring_format_spec(): Fstring_format_specContext {
    let _localctx: Fstring_format_specContext = new Fstring_format_specContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 312, PythonParser.RULE_fstring_format_spec);
    try {
      this.state = 1802;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.FSTRING_MIDDLE:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1800;
            this.match(PythonParser.FSTRING_MIDDLE);
          }
          break;
        case PythonParser.LBRACE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1801;
            this.fstring_replacement_field();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public fstring(): FstringContext {
    let _localctx: FstringContext = new FstringContext(this._ctx, this.state);
    this.enterRule(_localctx, 314, PythonParser.RULE_fstring);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1804;
        this.match(PythonParser.FSTRING_START);
        this.state = 1808;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          _la === PythonParser.FSTRING_MIDDLE ||
          _la === PythonParser.LBRACE
        ) {
          {
            {
              this.state = 1805;
              this.fstring_middle();
            }
          }
          this.state = 1810;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1811;
        this.match(PythonParser.FSTRING_END);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public string(): StringContext {
    let _localctx: StringContext = new StringContext(this._ctx, this.state);
    this.enterRule(_localctx, 316, PythonParser.RULE_string);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1813;
        this.match(PythonParser.STRING);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public strings(): StringsContext {
    let _localctx: StringsContext = new StringsContext(this._ctx, this.state);
    this.enterRule(_localctx, 318, PythonParser.RULE_strings);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1817;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                this.state = 1817;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                  case PythonParser.FSTRING_START:
                    {
                      this.state = 1815;
                      this.fstring();
                    }
                    break;
                  case PythonParser.STRING:
                    {
                      this.state = 1816;
                      this.string();
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 1819;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public list(): ListContext {
    let _localctx: ListContext = new ListContext(this._ctx, this.state);
    this.enterRule(_localctx, 320, PythonParser.RULE_list);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1821;
        this.match(PythonParser.LSQB);
        this.state = 1823;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PythonParser.FSTRING_START) |
                (1 << PythonParser.FALSE) |
                (1 << PythonParser.AWAIT) |
                (1 << PythonParser.NONE) |
                (1 << PythonParser.TRUE) |
                (1 << PythonParser.LAMBDA))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (PythonParser.NOT - 34)) |
                (1 << (PythonParser.LPAR - 34)) |
                (1 << (PythonParser.LSQB - 34)) |
                (1 << (PythonParser.LBRACE - 34)) |
                (1 << (PythonParser.PLUS - 34)) |
                (1 << (PythonParser.MINUS - 34)) |
                (1 << (PythonParser.STAR - 34)) |
                (1 << (PythonParser.TILDE - 34)))) !==
              0) ||
          (((_la - 86) & ~0x1f) === 0 &&
            ((1 << (_la - 86)) &
              ((1 << (PythonParser.ELLIPSIS - 86)) |
                (1 << (PythonParser.NAME - 86)) |
                (1 << (PythonParser.NUMBER - 86)) |
                (1 << (PythonParser.STRING - 86)))) !==
              0)
        ) {
          {
            this.state = 1822;
            this.star_named_expressions();
          }
        }

        this.state = 1825;
        this.match(PythonParser.RSQB);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tuple(): TupleContext {
    let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
    this.enterRule(_localctx, 322, PythonParser.RULE_tuple);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1827;
        this.match(PythonParser.LPAR);
        this.state = 1833;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PythonParser.FSTRING_START) |
                (1 << PythonParser.FALSE) |
                (1 << PythonParser.AWAIT) |
                (1 << PythonParser.NONE) |
                (1 << PythonParser.TRUE) |
                (1 << PythonParser.LAMBDA))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (PythonParser.NOT - 34)) |
                (1 << (PythonParser.LPAR - 34)) |
                (1 << (PythonParser.LSQB - 34)) |
                (1 << (PythonParser.LBRACE - 34)) |
                (1 << (PythonParser.PLUS - 34)) |
                (1 << (PythonParser.MINUS - 34)) |
                (1 << (PythonParser.STAR - 34)) |
                (1 << (PythonParser.TILDE - 34)))) !==
              0) ||
          (((_la - 86) & ~0x1f) === 0 &&
            ((1 << (_la - 86)) &
              ((1 << (PythonParser.ELLIPSIS - 86)) |
                (1 << (PythonParser.NAME - 86)) |
                (1 << (PythonParser.NUMBER - 86)) |
                (1 << (PythonParser.STRING - 86)))) !==
              0)
        ) {
          {
            this.state = 1828;
            this.star_named_expression();
            this.state = 1829;
            this.match(PythonParser.COMMA);
            this.state = 1831;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PythonParser.FSTRING_START) |
                    (1 << PythonParser.FALSE) |
                    (1 << PythonParser.AWAIT) |
                    (1 << PythonParser.NONE) |
                    (1 << PythonParser.TRUE) |
                    (1 << PythonParser.LAMBDA))) !==
                  0) ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (PythonParser.NOT - 34)) |
                    (1 << (PythonParser.LPAR - 34)) |
                    (1 << (PythonParser.LSQB - 34)) |
                    (1 << (PythonParser.LBRACE - 34)) |
                    (1 << (PythonParser.PLUS - 34)) |
                    (1 << (PythonParser.MINUS - 34)) |
                    (1 << (PythonParser.STAR - 34)) |
                    (1 << (PythonParser.TILDE - 34)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (PythonParser.ELLIPSIS - 86)) |
                    (1 << (PythonParser.NAME - 86)) |
                    (1 << (PythonParser.NUMBER - 86)) |
                    (1 << (PythonParser.STRING - 86)))) !==
                  0)
            ) {
              {
                this.state = 1830;
                this.star_named_expressions();
              }
            }
          }
        }

        this.state = 1835;
        this.match(PythonParser.RPAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public set(): SetContext {
    let _localctx: SetContext = new SetContext(this._ctx, this.state);
    this.enterRule(_localctx, 324, PythonParser.RULE_set);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1837;
        this.match(PythonParser.LBRACE);
        this.state = 1838;
        this.star_named_expressions();
        this.state = 1839;
        this.match(PythonParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public dict(): DictContext {
    let _localctx: DictContext = new DictContext(this._ctx, this.state);
    this.enterRule(_localctx, 326, PythonParser.RULE_dict);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1841;
        this.match(PythonParser.LBRACE);
        this.state = 1843;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PythonParser.FSTRING_START) |
                (1 << PythonParser.FALSE) |
                (1 << PythonParser.AWAIT) |
                (1 << PythonParser.NONE) |
                (1 << PythonParser.TRUE) |
                (1 << PythonParser.LAMBDA))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (PythonParser.NOT - 34)) |
                (1 << (PythonParser.LPAR - 34)) |
                (1 << (PythonParser.LSQB - 34)) |
                (1 << (PythonParser.LBRACE - 34)) |
                (1 << (PythonParser.PLUS - 34)) |
                (1 << (PythonParser.MINUS - 34)) |
                (1 << (PythonParser.TILDE - 34)))) !==
              0) ||
          (((_la - 69) & ~0x1f) === 0 &&
            ((1 << (_la - 69)) &
              ((1 << (PythonParser.DOUBLESTAR - 69)) |
                (1 << (PythonParser.ELLIPSIS - 69)) |
                (1 << (PythonParser.NAME - 69)) |
                (1 << (PythonParser.NUMBER - 69)) |
                (1 << (PythonParser.STRING - 69)))) !==
              0)
        ) {
          {
            this.state = 1842;
            this.double_starred_kvpairs();
          }
        }

        this.state = 1845;
        this.match(PythonParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public double_starred_kvpairs(): Double_starred_kvpairsContext {
    let _localctx: Double_starred_kvpairsContext =
      new Double_starred_kvpairsContext(this._ctx, this.state);
    this.enterRule(_localctx, 328, PythonParser.RULE_double_starred_kvpairs);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1847;
        this.double_starred_kvpair();
        this.state = 1852;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1848;
                this.match(PythonParser.COMMA);
                this.state = 1849;
                this.double_starred_kvpair();
              }
            }
          }
          this.state = 1854;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
        }
        this.state = 1856;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1855;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public double_starred_kvpair(): Double_starred_kvpairContext {
    let _localctx: Double_starred_kvpairContext =
      new Double_starred_kvpairContext(this._ctx, this.state);
    this.enterRule(_localctx, 330, PythonParser.RULE_double_starred_kvpair);
    try {
      this.state = 1861;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.DOUBLESTAR:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1858;
            this.match(PythonParser.DOUBLESTAR);
            this.state = 1859;
            this.bitwise_or(0);
          }
          break;
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.AWAIT:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.LAMBDA:
        case PythonParser.NOT:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.PLUS:
        case PythonParser.MINUS:
        case PythonParser.TILDE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1860;
            this.kvpair();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public kvpair(): KvpairContext {
    let _localctx: KvpairContext = new KvpairContext(this._ctx, this.state);
    this.enterRule(_localctx, 332, PythonParser.RULE_kvpair);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1863;
        this.expression();
        this.state = 1864;
        this.match(PythonParser.COLON);
        this.state = 1865;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public for_if_clauses(): For_if_clausesContext {
    let _localctx: For_if_clausesContext = new For_if_clausesContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 334, PythonParser.RULE_for_if_clauses);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1868;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 1867;
              this.for_if_clause();
            }
          }
          this.state = 1870;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === PythonParser.FOR || _la === PythonParser.ASYNC);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public for_if_clause(): For_if_clauseContext {
    let _localctx: For_if_clauseContext = new For_if_clauseContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 336, PythonParser.RULE_for_if_clause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1873;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.ASYNC) {
          {
            this.state = 1872;
            this.match(PythonParser.ASYNC);
          }
        }

        this.state = 1875;
        this.match(PythonParser.FOR);
        this.state = 1876;
        this.star_targets();
        this.state = 1877;
        this.match(PythonParser.IN);
        this.state = 1878;
        this.disjunction();
        this.state = 1883;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PythonParser.IF) {
          {
            {
              this.state = 1879;
              this.match(PythonParser.IF);
              this.state = 1880;
              this.disjunction();
            }
          }
          this.state = 1885;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public listcomp(): ListcompContext {
    let _localctx: ListcompContext = new ListcompContext(this._ctx, this.state);
    this.enterRule(_localctx, 338, PythonParser.RULE_listcomp);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1886;
        this.match(PythonParser.LSQB);
        this.state = 1887;
        this.named_expression();
        this.state = 1888;
        this.for_if_clauses();
        this.state = 1889;
        this.match(PythonParser.RSQB);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public setcomp(): SetcompContext {
    let _localctx: SetcompContext = new SetcompContext(this._ctx, this.state);
    this.enterRule(_localctx, 340, PythonParser.RULE_setcomp);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1891;
        this.match(PythonParser.LBRACE);
        this.state = 1892;
        this.named_expression();
        this.state = 1893;
        this.for_if_clauses();
        this.state = 1894;
        this.match(PythonParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public genexp(): GenexpContext {
    let _localctx: GenexpContext = new GenexpContext(this._ctx, this.state);
    this.enterRule(_localctx, 342, PythonParser.RULE_genexp);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1896;
        this.match(PythonParser.LPAR);
        this.state = 1899;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 243, this._ctx)) {
          case 1:
            {
              this.state = 1897;
              this.assignment_expression();
            }
            break;

          case 2:
            {
              this.state = 1898;
              this.expression();
            }
            break;
        }
        this.state = 1901;
        this.for_if_clauses();
        this.state = 1902;
        this.match(PythonParser.RPAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public dictcomp(): DictcompContext {
    let _localctx: DictcompContext = new DictcompContext(this._ctx, this.state);
    this.enterRule(_localctx, 344, PythonParser.RULE_dictcomp);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1904;
        this.match(PythonParser.LBRACE);
        this.state = 1905;
        this.kvpair();
        this.state = 1906;
        this.for_if_clauses();
        this.state = 1907;
        this.match(PythonParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public arguments(): ArgumentsContext {
    let _localctx: ArgumentsContext = new ArgumentsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 346, PythonParser.RULE_arguments);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1909;
        this.args();
        this.state = 1911;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1910;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public args(): ArgsContext {
    let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
    this.enterRule(_localctx, 348, PythonParser.RULE_args);
    try {
      let _alt: number;
      this.state = 1938;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 251, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1918;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PythonParser.STAR:
                {
                  this.state = 1913;
                  this.starred_expression();
                }
                break;
              case PythonParser.FSTRING_START:
              case PythonParser.FALSE:
              case PythonParser.AWAIT:
              case PythonParser.NONE:
              case PythonParser.TRUE:
              case PythonParser.LAMBDA:
              case PythonParser.NOT:
              case PythonParser.LPAR:
              case PythonParser.LSQB:
              case PythonParser.LBRACE:
              case PythonParser.PLUS:
              case PythonParser.MINUS:
              case PythonParser.TILDE:
              case PythonParser.ELLIPSIS:
              case PythonParser.NAME:
              case PythonParser.NUMBER:
              case PythonParser.STRING:
                {
                  this.state = 1916;
                  this._errHandler.sync(this);
                  switch (
                    this.interpreter.adaptivePredict(
                      this._input,
                      245,
                      this._ctx
                    )
                  ) {
                    case 1:
                      {
                        this.state = 1914;
                        this.assignment_expression();
                      }
                      break;

                    case 2:
                      {
                        this.state = 1915;
                        this.expression();
                      }
                      break;
                  }
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 1930;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(
              this._input,
              249,
              this._ctx
            );
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 1920;
                    this.match(PythonParser.COMMA);
                    this.state = 1926;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PythonParser.STAR:
                        {
                          this.state = 1921;
                          this.starred_expression();
                        }
                        break;
                      case PythonParser.FSTRING_START:
                      case PythonParser.FALSE:
                      case PythonParser.AWAIT:
                      case PythonParser.NONE:
                      case PythonParser.TRUE:
                      case PythonParser.LAMBDA:
                      case PythonParser.NOT:
                      case PythonParser.LPAR:
                      case PythonParser.LSQB:
                      case PythonParser.LBRACE:
                      case PythonParser.PLUS:
                      case PythonParser.MINUS:
                      case PythonParser.TILDE:
                      case PythonParser.ELLIPSIS:
                      case PythonParser.NAME:
                      case PythonParser.NUMBER:
                      case PythonParser.STRING:
                        {
                          this.state = 1924;
                          this._errHandler.sync(this);
                          switch (
                            this.interpreter.adaptivePredict(
                              this._input,
                              247,
                              this._ctx
                            )
                          ) {
                            case 1:
                              {
                                this.state = 1922;
                                this.assignment_expression();
                              }
                              break;

                            case 2:
                              {
                                this.state = 1923;
                                this.expression();
                              }
                              break;
                          }
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                  }
                }
              }
              this.state = 1932;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                249,
                this._ctx
              );
            }
            this.state = 1935;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 250, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1933;
                  this.match(PythonParser.COMMA);
                  this.state = 1934;
                  this.kwargs();
                }
                break;
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1937;
            this.kwargs();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public kwargs(): KwargsContext {
    let _localctx: KwargsContext = new KwargsContext(this._ctx, this.state);
    this.enterRule(_localctx, 350, PythonParser.RULE_kwargs);
    try {
      let _alt: number;
      this.state = 1967;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 256, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1940;
            this.kwarg_or_starred();
            this.state = 1945;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(
              this._input,
              252,
              this._ctx
            );
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 1941;
                    this.match(PythonParser.COMMA);
                    this.state = 1942;
                    this.kwarg_or_starred();
                  }
                }
              }
              this.state = 1947;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                252,
                this._ctx
              );
            }
            this.state = 1957;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 254, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1948;
                  this.match(PythonParser.COMMA);
                  this.state = 1949;
                  this.kwarg_or_double_starred();
                  this.state = 1954;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(
                    this._input,
                    253,
                    this._ctx
                  );
                  while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                      {
                        {
                          this.state = 1950;
                          this.match(PythonParser.COMMA);
                          this.state = 1951;
                          this.kwarg_or_double_starred();
                        }
                      }
                    }
                    this.state = 1956;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(
                      this._input,
                      253,
                      this._ctx
                    );
                  }
                }
                break;
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1959;
            this.kwarg_or_double_starred();
            this.state = 1964;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(
              this._input,
              255,
              this._ctx
            );
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 1960;
                    this.match(PythonParser.COMMA);
                    this.state = 1961;
                    this.kwarg_or_double_starred();
                  }
                }
              }
              this.state = 1966;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                255,
                this._ctx
              );
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public starred_expression(): Starred_expressionContext {
    let _localctx: Starred_expressionContext = new Starred_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 352, PythonParser.RULE_starred_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1969;
        this.match(PythonParser.STAR);
        this.state = 1970;
        this.expression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public kwarg_or_starred(): Kwarg_or_starredContext {
    let _localctx: Kwarg_or_starredContext = new Kwarg_or_starredContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 354, PythonParser.RULE_kwarg_or_starred);
    try {
      this.state = 1976;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1972;
            this.match(PythonParser.NAME);
            this.state = 1973;
            this.match(PythonParser.EQUAL);
            this.state = 1974;
            this.expression();
          }
          break;
        case PythonParser.STAR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1975;
            this.starred_expression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public kwarg_or_double_starred(): Kwarg_or_double_starredContext {
    let _localctx: Kwarg_or_double_starredContext =
      new Kwarg_or_double_starredContext(this._ctx, this.state);
    this.enterRule(_localctx, 356, PythonParser.RULE_kwarg_or_double_starred);
    try {
      this.state = 1983;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1978;
            this.match(PythonParser.NAME);
            this.state = 1979;
            this.match(PythonParser.EQUAL);
            this.state = 1980;
            this.expression();
          }
          break;
        case PythonParser.DOUBLESTAR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1981;
            this.match(PythonParser.DOUBLESTAR);
            this.state = 1982;
            this.expression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_targets(): Star_targetsContext {
    let _localctx: Star_targetsContext = new Star_targetsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 358, PythonParser.RULE_star_targets);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1985;
        this.star_target();
        this.state = 1990;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1986;
                this.match(PythonParser.COMMA);
                this.state = 1987;
                this.star_target();
              }
            }
          }
          this.state = 1992;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
        }
        this.state = 1994;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 1993;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_targets_list_seq(): Star_targets_list_seqContext {
    let _localctx: Star_targets_list_seqContext =
      new Star_targets_list_seqContext(this._ctx, this.state);
    this.enterRule(_localctx, 360, PythonParser.RULE_star_targets_list_seq);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1996;
        this.star_target();
        this.state = 1999;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 1997;
                  this.match(PythonParser.COMMA);
                  this.state = 1998;
                  this.star_target();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 2001;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 2004;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 2003;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_targets_tuple_seq(): Star_targets_tuple_seqContext {
    let _localctx: Star_targets_tuple_seqContext =
      new Star_targets_tuple_seqContext(this._ctx, this.state);
    this.enterRule(_localctx, 362, PythonParser.RULE_star_targets_tuple_seq);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2006;
        this.star_target();
        this.state = 2017;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 265, this._ctx)) {
          case 1:
            {
              this.state = 2007;
              this.match(PythonParser.COMMA);
            }
            break;

          case 2:
            {
              this.state = 2010;
              this._errHandler.sync(this);
              _alt = 1;
              do {
                switch (_alt) {
                  case 1:
                    {
                      {
                        this.state = 2008;
                        this.match(PythonParser.COMMA);
                        this.state = 2009;
                        this.star_target();
                      }
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
                this.state = 2012;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  263,
                  this._ctx
                );
              } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
              this.state = 2015;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === PythonParser.COMMA) {
                {
                  this.state = 2014;
                  this.match(PythonParser.COMMA);
                }
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_target(): Star_targetContext {
    let _localctx: Star_targetContext = new Star_targetContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 364, PythonParser.RULE_star_target);
    try {
      this.state = 2022;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.STAR:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2019;
            this.match(PythonParser.STAR);
            {
              this.state = 2020;
              this.star_target();
            }
          }
          break;
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2021;
            this.target_with_star_atom();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public target_with_star_atom(): Target_with_star_atomContext {
    let _localctx: Target_with_star_atomContext =
      new Target_with_star_atomContext(this._ctx, this.state);
    this.enterRule(_localctx, 366, PythonParser.RULE_target_with_star_atom);
    try {
      this.state = 2034;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 268, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2024;
            this.t_primary(0);
            this.state = 2031;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PythonParser.DOT:
                {
                  this.state = 2025;
                  this.match(PythonParser.DOT);
                  this.state = 2026;
                  this.match(PythonParser.NAME);
                }
                break;
              case PythonParser.LSQB:
                {
                  this.state = 2027;
                  this.match(PythonParser.LSQB);
                  this.state = 2028;
                  this.slices();
                  this.state = 2029;
                  this.match(PythonParser.RSQB);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2033;
            this.star_atom();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public star_atom(): Star_atomContext {
    let _localctx: Star_atomContext = new Star_atomContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 368, PythonParser.RULE_star_atom);
    let _la: number;
    try {
      this.state = 2051;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 271, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2036;
            this.match(PythonParser.NAME);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2037;
            this.match(PythonParser.LPAR);
            this.state = 2038;
            this.target_with_star_atom();
            this.state = 2039;
            this.match(PythonParser.RPAR);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2041;
            this.match(PythonParser.LPAR);
            this.state = 2043;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PythonParser.FSTRING_START) |
                    (1 << PythonParser.FALSE) |
                    (1 << PythonParser.NONE) |
                    (1 << PythonParser.TRUE))) !==
                  0) ||
              (((_la - 41) & ~0x1f) === 0 &&
                ((1 << (_la - 41)) &
                  ((1 << (PythonParser.LPAR - 41)) |
                    (1 << (PythonParser.LSQB - 41)) |
                    (1 << (PythonParser.LBRACE - 41)) |
                    (1 << (PythonParser.STAR - 41)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (PythonParser.ELLIPSIS - 86)) |
                    (1 << (PythonParser.NAME - 86)) |
                    (1 << (PythonParser.NUMBER - 86)) |
                    (1 << (PythonParser.STRING - 86)))) !==
                  0)
            ) {
              {
                this.state = 2042;
                this.star_targets_tuple_seq();
              }
            }

            this.state = 2045;
            this.match(PythonParser.RPAR);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 2046;
            this.match(PythonParser.LSQB);
            this.state = 2048;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PythonParser.FSTRING_START) |
                    (1 << PythonParser.FALSE) |
                    (1 << PythonParser.NONE) |
                    (1 << PythonParser.TRUE))) !==
                  0) ||
              (((_la - 41) & ~0x1f) === 0 &&
                ((1 << (_la - 41)) &
                  ((1 << (PythonParser.LPAR - 41)) |
                    (1 << (PythonParser.LSQB - 41)) |
                    (1 << (PythonParser.LBRACE - 41)) |
                    (1 << (PythonParser.STAR - 41)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (PythonParser.ELLIPSIS - 86)) |
                    (1 << (PythonParser.NAME - 86)) |
                    (1 << (PythonParser.NUMBER - 86)) |
                    (1 << (PythonParser.STRING - 86)))) !==
                  0)
            ) {
              {
                this.state = 2047;
                this.star_targets_list_seq();
              }
            }

            this.state = 2050;
            this.match(PythonParser.RSQB);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public single_target(): Single_targetContext {
    let _localctx: Single_targetContext = new Single_targetContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 370, PythonParser.RULE_single_target);
    try {
      this.state = 2059;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 272, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2053;
            this.single_subscript_attribute_target();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2054;
            this.match(PythonParser.NAME);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2055;
            this.match(PythonParser.LPAR);
            this.state = 2056;
            this.single_target();
            this.state = 2057;
            this.match(PythonParser.RPAR);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public single_subscript_attribute_target(): Single_subscript_attribute_targetContext {
    let _localctx: Single_subscript_attribute_targetContext =
      new Single_subscript_attribute_targetContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      372,
      PythonParser.RULE_single_subscript_attribute_target
    );
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2061;
        this.t_primary(0);
        this.state = 2068;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PythonParser.DOT:
            {
              this.state = 2062;
              this.match(PythonParser.DOT);
              this.state = 2063;
              this.match(PythonParser.NAME);
            }
            break;
          case PythonParser.LSQB:
            {
              this.state = 2064;
              this.match(PythonParser.LSQB);
              this.state = 2065;
              this.slices();
              this.state = 2066;
              this.match(PythonParser.RSQB);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public t_primary(): T_primaryContext;
  public t_primary(_p: number): T_primaryContext;
  // @RuleVersion(0)
  public t_primary(_p?: number): T_primaryContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: T_primaryContext = new T_primaryContext(
      this._ctx,
      _parentState
    );
    let _prevctx: T_primaryContext = _localctx;
    let _startState: number = 374;
    this.enterRecursionRule(_localctx, 374, PythonParser.RULE_t_primary, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 2071;
          this.atom();
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 2090;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 276, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new T_primaryContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PythonParser.RULE_t_primary
                );
                this.state = 2073;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this._ctx, 2)"
                  );
                }
                this.state = 2086;
                this._errHandler.sync(this);
                switch (
                  this.interpreter.adaptivePredict(this._input, 275, this._ctx)
                ) {
                  case 1:
                    {
                      this.state = 2074;
                      this.match(PythonParser.DOT);
                      this.state = 2075;
                      this.match(PythonParser.NAME);
                    }
                    break;

                  case 2:
                    {
                      this.state = 2076;
                      this.match(PythonParser.LSQB);
                      this.state = 2077;
                      this.slices();
                      this.state = 2078;
                      this.match(PythonParser.RSQB);
                    }
                    break;

                  case 3:
                    {
                      this.state = 2080;
                      this.genexp();
                    }
                    break;

                  case 4:
                    {
                      this.state = 2081;
                      this.match(PythonParser.LPAR);
                      this.state = 2083;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (
                        ((_la & ~0x1f) === 0 &&
                          ((1 << _la) &
                            ((1 << PythonParser.FSTRING_START) |
                              (1 << PythonParser.FALSE) |
                              (1 << PythonParser.AWAIT) |
                              (1 << PythonParser.NONE) |
                              (1 << PythonParser.TRUE) |
                              (1 << PythonParser.LAMBDA))) !==
                            0) ||
                        (((_la - 34) & ~0x1f) === 0 &&
                          ((1 << (_la - 34)) &
                            ((1 << (PythonParser.NOT - 34)) |
                              (1 << (PythonParser.LPAR - 34)) |
                              (1 << (PythonParser.LSQB - 34)) |
                              (1 << (PythonParser.LBRACE - 34)) |
                              (1 << (PythonParser.PLUS - 34)) |
                              (1 << (PythonParser.MINUS - 34)) |
                              (1 << (PythonParser.STAR - 34)) |
                              (1 << (PythonParser.TILDE - 34)))) !==
                            0) ||
                        (((_la - 69) & ~0x1f) === 0 &&
                          ((1 << (_la - 69)) &
                            ((1 << (PythonParser.DOUBLESTAR - 69)) |
                              (1 << (PythonParser.ELLIPSIS - 69)) |
                              (1 << (PythonParser.NAME - 69)) |
                              (1 << (PythonParser.NUMBER - 69)) |
                              (1 << (PythonParser.STRING - 69)))) !==
                            0)
                      ) {
                        {
                          this.state = 2082;
                          this.arguments();
                        }
                      }

                      this.state = 2085;
                      this.match(PythonParser.RPAR);
                    }
                    break;
                }
              }
            }
          }
          this.state = 2092;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 276, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public del_targets(): Del_targetsContext {
    let _localctx: Del_targetsContext = new Del_targetsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 376, PythonParser.RULE_del_targets);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2093;
        this.del_target();
        this.state = 2098;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 2094;
                this.match(PythonParser.COMMA);
                this.state = 2095;
                this.del_target();
              }
            }
          }
          this.state = 2100;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
        }
        this.state = 2102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PythonParser.COMMA) {
          {
            this.state = 2101;
            this.match(PythonParser.COMMA);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public del_target(): Del_targetContext {
    let _localctx: Del_targetContext = new Del_targetContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 378, PythonParser.RULE_del_target);
    try {
      this.state = 2114;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 280, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2104;
            this.t_primary(0);
            this.state = 2111;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PythonParser.DOT:
                {
                  this.state = 2105;
                  this.match(PythonParser.DOT);
                  this.state = 2106;
                  this.match(PythonParser.NAME);
                }
                break;
              case PythonParser.LSQB:
                {
                  this.state = 2107;
                  this.match(PythonParser.LSQB);
                  this.state = 2108;
                  this.slices();
                  this.state = 2109;
                  this.match(PythonParser.RSQB);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2113;
            this.del_t_atom();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public del_t_atom(): Del_t_atomContext {
    let _localctx: Del_t_atomContext = new Del_t_atomContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 380, PythonParser.RULE_del_t_atom);
    let _la: number;
    try {
      this.state = 2131;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 283, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2116;
            this.match(PythonParser.NAME);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2117;
            this.match(PythonParser.LPAR);
            this.state = 2118;
            this.del_target();
            this.state = 2119;
            this.match(PythonParser.RPAR);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2121;
            this.match(PythonParser.LPAR);
            this.state = 2123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PythonParser.FSTRING_START) |
                    (1 << PythonParser.FALSE) |
                    (1 << PythonParser.NONE) |
                    (1 << PythonParser.TRUE))) !==
                  0) ||
              (((_la - 41) & ~0x1f) === 0 &&
                ((1 << (_la - 41)) &
                  ((1 << (PythonParser.LPAR - 41)) |
                    (1 << (PythonParser.LSQB - 41)) |
                    (1 << (PythonParser.LBRACE - 41)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (PythonParser.ELLIPSIS - 86)) |
                    (1 << (PythonParser.NAME - 86)) |
                    (1 << (PythonParser.NUMBER - 86)) |
                    (1 << (PythonParser.STRING - 86)))) !==
                  0)
            ) {
              {
                this.state = 2122;
                this.del_targets();
              }
            }

            this.state = 2125;
            this.match(PythonParser.RPAR);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 2126;
            this.match(PythonParser.LSQB);
            this.state = 2128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PythonParser.FSTRING_START) |
                    (1 << PythonParser.FALSE) |
                    (1 << PythonParser.NONE) |
                    (1 << PythonParser.TRUE))) !==
                  0) ||
              (((_la - 41) & ~0x1f) === 0 &&
                ((1 << (_la - 41)) &
                  ((1 << (PythonParser.LPAR - 41)) |
                    (1 << (PythonParser.LSQB - 41)) |
                    (1 << (PythonParser.LBRACE - 41)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (PythonParser.ELLIPSIS - 86)) |
                    (1 << (PythonParser.NAME - 86)) |
                    (1 << (PythonParser.NUMBER - 86)) |
                    (1 << (PythonParser.STRING - 86)))) !==
                  0)
            ) {
              {
                this.state = 2127;
                this.del_targets();
              }
            }

            this.state = 2130;
            this.match(PythonParser.RSQB);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type_expressions(): Type_expressionsContext {
    let _localctx: Type_expressionsContext = new Type_expressionsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 382, PythonParser.RULE_type_expressions);
    let _la: number;
    try {
      let _alt: number;
      this.state = 2164;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.FSTRING_START:
        case PythonParser.FALSE:
        case PythonParser.AWAIT:
        case PythonParser.NONE:
        case PythonParser.TRUE:
        case PythonParser.LAMBDA:
        case PythonParser.NOT:
        case PythonParser.LPAR:
        case PythonParser.LSQB:
        case PythonParser.LBRACE:
        case PythonParser.PLUS:
        case PythonParser.MINUS:
        case PythonParser.TILDE:
        case PythonParser.ELLIPSIS:
        case PythonParser.NAME:
        case PythonParser.NUMBER:
        case PythonParser.STRING:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2133;
            this.expression();
            this.state = 2138;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(
              this._input,
              284,
              this._ctx
            );
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 2134;
                    this.match(PythonParser.COMMA);
                    this.state = 2135;
                    this.expression();
                  }
                }
              }
              this.state = 2140;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                284,
                this._ctx
              );
            }
            this.state = 2153;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COMMA) {
              {
                this.state = 2141;
                this.match(PythonParser.COMMA);
                this.state = 2151;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                  case PythonParser.STAR:
                    {
                      this.state = 2142;
                      this.match(PythonParser.STAR);
                      this.state = 2143;
                      this.expression();
                      this.state = 2147;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === PythonParser.COMMA) {
                        {
                          this.state = 2144;
                          this.match(PythonParser.COMMA);
                          this.state = 2145;
                          this.match(PythonParser.DOUBLESTAR);
                          this.state = 2146;
                          this.expression();
                        }
                      }
                    }
                    break;
                  case PythonParser.DOUBLESTAR:
                    {
                      this.state = 2149;
                      this.match(PythonParser.DOUBLESTAR);
                      this.state = 2150;
                      this.expression();
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
              }
            }
          }
          break;
        case PythonParser.STAR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2155;
            this.match(PythonParser.STAR);
            this.state = 2156;
            this.expression();
            this.state = 2160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PythonParser.COMMA) {
              {
                this.state = 2157;
                this.match(PythonParser.COMMA);
                this.state = 2158;
                this.match(PythonParser.DOUBLESTAR);
                this.state = 2159;
                this.expression();
              }
            }
          }
          break;
        case PythonParser.DOUBLESTAR:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 2162;
            this.match(PythonParser.DOUBLESTAR);
            this.state = 2163;
            this.expression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public func_type_comment(): Func_type_commentContext {
    let _localctx: Func_type_commentContext = new Func_type_commentContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 384, PythonParser.RULE_func_type_comment);
    try {
      this.state = 2169;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PythonParser.NEWLINE:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 2166;
            this.match(PythonParser.NEWLINE);
            this.state = 2167;
            this.match(PythonParser.TYPE_COMMENT);
          }
          break;
        case PythonParser.TYPE_COMMENT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 2168;
            this.match(PythonParser.TYPE_COMMENT);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public soft_kw_type(): Soft_kw_typeContext {
    let _localctx: Soft_kw_typeContext = new Soft_kw_typeContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 386, PythonParser.RULE_soft_kw_type);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2171;

        this.state = 2172;
        this.match(PythonParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public soft_kw_match(): Soft_kw_matchContext {
    let _localctx: Soft_kw_matchContext = new Soft_kw_matchContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 388, PythonParser.RULE_soft_kw_match);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2174;

        this.state = 2175;
        this.match(PythonParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public soft_kw_case(): Soft_kw_caseContext {
    let _localctx: Soft_kw_caseContext = new Soft_kw_caseContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 390, PythonParser.RULE_soft_kw_case);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2177;

        this.state = 2178;
        this.match(PythonParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public soft_kw_wildcard(): Soft_kw_wildcardContext {
    let _localctx: Soft_kw_wildcardContext = new Soft_kw_wildcardContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 392, PythonParser.RULE_soft_kw_wildcard);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2180;

        this.state = 2181;
        this.match(PythonParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public soft_kw__not__wildcard(): Soft_kw__not__wildcardContext {
    let _localctx: Soft_kw__not__wildcardContext =
      new Soft_kw__not__wildcardContext(this._ctx, this.state);
    this.enterRule(_localctx, 394, PythonParser.RULE_soft_kw__not__wildcard);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2183;

        this.state = 2184;
        this.match(PythonParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number
  ): boolean {
    switch (ruleIndex) {
      case 29:
        return this.dotted_name_sempred(
          _localctx as Dotted_nameContext,
          predIndex
        );

      case 127:
        return this.bitwise_or_sempred(
          _localctx as Bitwise_orContext,
          predIndex
        );

      case 128:
        return this.bitwise_xor_sempred(
          _localctx as Bitwise_xorContext,
          predIndex
        );

      case 129:
        return this.bitwise_and_sempred(
          _localctx as Bitwise_andContext,
          predIndex
        );

      case 130:
        return this.shift_expr_sempred(
          _localctx as Shift_exprContext,
          predIndex
        );

      case 131:
        return this.sum_sempred(_localctx as SumContext, predIndex);

      case 132:
        return this.term_sempred(_localctx as TermContext, predIndex);

      case 136:
        return this.primary_sempred(_localctx as PrimaryContext, predIndex);

      case 187:
        return this.t_primary_sempred(_localctx as T_primaryContext, predIndex);

      case 193:
        return this.soft_kw_type_sempred(
          _localctx as Soft_kw_typeContext,
          predIndex
        );

      case 194:
        return this.soft_kw_match_sempred(
          _localctx as Soft_kw_matchContext,
          predIndex
        );

      case 195:
        return this.soft_kw_case_sempred(
          _localctx as Soft_kw_caseContext,
          predIndex
        );

      case 196:
        return this.soft_kw_wildcard_sempred(
          _localctx as Soft_kw_wildcardContext,
          predIndex
        );

      case 197:
        return this.soft_kw__not__wildcard_sempred(
          _localctx as Soft_kw__not__wildcardContext,
          predIndex
        );
    }
    return true;
  }
  private dotted_name_sempred(
    _localctx: Dotted_nameContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private bitwise_or_sempred(
    _localctx: Bitwise_orContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private bitwise_xor_sempred(
    _localctx: Bitwise_xorContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private bitwise_and_sempred(
    _localctx: Bitwise_andContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 3:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private shift_expr_sempred(
    _localctx: Shift_exprContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 4:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private sum_sempred(_localctx: SumContext, predIndex: number): boolean {
    switch (predIndex) {
      case 5:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private term_sempred(_localctx: TermContext, predIndex: number): boolean {
    switch (predIndex) {
      case 6:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private primary_sempred(
    _localctx: PrimaryContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 7:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private t_primary_sempred(
    _localctx: T_primaryContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 8:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private soft_kw_type_sempred(
    _localctx: Soft_kw_typeContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 9:
        return false;
    }
    return true;
  }
  private soft_kw_match_sempred(
    _localctx: Soft_kw_matchContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 10:
        return false;
    }
    return true;
  }
  private soft_kw_case_sempred(
    _localctx: Soft_kw_caseContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 11:
        return false;
    }
    return true;
  }
  private soft_kw_wildcard_sempred(
    _localctx: Soft_kw_wildcardContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 12:
        return false;
    }
    return true;
  }
  private soft_kw__not__wildcard_sempred(
    _localctx: Soft_kw__not__wildcardContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 13:
        return false;
    }
    return true;
  }

  private static readonly _serializedATNSegments: number = 4;
  private static readonly _serializedATNSegment0: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03c\u088D\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
    "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
    "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
    "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
    "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
    "\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
    "\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
    "\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
    "\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
    "\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
    "\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
    "\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
    "\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
    "\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
    "\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
    "\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
    "\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
    "\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
    "\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
    "\x03\x02\x05\x02\u0190\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
    "\x04\x07\x04\u0198\n\x04\f\x04\x0E\x04\u019B\v\x04\x03\x04\x03\x04\x03" +
    "\x05\x03\x05\x05\x05\u01A1\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
    "\u01A7\n\x05\f\x05\x0E\x05\u01AA\v\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
    "\x03\x07\x06\x07\u01B1\n\x07\r\x07\x0E\x07\u01B2\x03\b\x03\b\x05\b\u01B7" +
    "\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01BF\n\t\x03\n\x03\n\x03" +
    "\n\x07\n\u01C4\n\n\f\n\x0E\n\u01C7\v\n\x03\n\x05\n\u01CA\n\n\x03\n\x03" +
    "\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x05\v\u01DC\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
    "\f\x03\f\x05\f\u01E6\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01ED\n\r" +
    "\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01F4\n\r\x03\r\x03\r\x03\r\x03\r" +
    "\x05\r\u01FA\n\r\x03\r\x03\r\x03\r\x06\r\u01FF\n\r\r\r\x0E\r\u0200\x03" +
    "\r\x03\r\x05\r\u0205\n\r\x03\r\x05\r\u0208\n\r\x03\r\x03\r\x03\r\x03\r" +
    "\x05\r\u020E\n\r\x05\r\u0210\n\r\x03\x0E\x03\x0E\x05\x0E\u0214\n\x0E\x03" +
    "\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\u021A\n\x10\x03\x11\x03\x11\x03\x11" +
    "\x03\x11\x05\x11\u0220\n\x11\x05\x11\u0222\n\x11\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x07\x12\u0228\n\x12\f\x12\x0E\x12\u022B\v\x12\x03\x13\x03\x13" +
    "\x03\x13\x03\x13\x07\x13\u0231\n\x13\f\x13\x0E\x13\u0234\v\x13\x03\x14" +
    "\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
    "\u023F\n\x16\x03\x17\x03\x17\x05\x17\u0243\n\x17\x03\x18\x03\x18\x03\x18" +
    "\x03\x19\x03\x19\x07\x19\u024A\n\x19\f\x19\x0E\x19\u024D\v\x19\x03\x19" +
    "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x06\x19\u0255\n\x19\r\x19\x0E" +
    "\x19\u0256\x03\x19\x03\x19\x05\x19\u025B\n\x19\x03\x1A\x03\x1A\x03\x1A" +
    "\x05\x1A\u0260\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0266\n\x1A" +
    "\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u026B\n\x1B\f\x1B\x0E\x1B\u026E\v\x1B" +
    "\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0273\n\x1C\x03\x1D\x03\x1D\x03\x1D\x07" +
    "\x1D\u0278\n\x1D\f\x1D\x0E\x1D\u027B\v\x1D\x03\x1E\x03\x1E\x03\x1E\x05" +
    "\x1E\u0280\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
    "\u0288\n\x1F\f\x1F\x0E\x1F\u028B\v\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x05" +
    ' \u0293\n \x03!\x03!\x03!\x03!\x06!\u0299\n!\r!\x0E!\u029A\x03"\x03"' +
    '\x03"\x03"\x05"\u02A1\n"\x03#\x03#\x03#\x05#\u02A6\n#\x03#\x03#\x05' +
    "#\u02AA\n#\x03#\x05#\u02AD\n#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x05$" +
    "\u02B6\n$\x03%\x03%\x03%\x05%\u02BB\n%\x03%\x03%\x05%\u02BF\n%\x03%\x03" +
    "%\x03%\x05%\u02C4\n%\x03%\x03%\x05%\u02C8\n%\x03%\x03%\x03%\x03%\x03%" +
    "\x05%\u02CF\n%\x03%\x03%\x05%\u02D3\n%\x03%\x03%\x03%\x05%\u02D8\n%\x03" +
    "%\x03%\x05%\u02DC\n%\x03%\x05%\u02DF\n%\x03&\x03&\x03'\x03'\x07'\u02E5" +
    "\n'\f'\x0E'\u02E8\v'\x03'\x07'\u02EB\n'\f'\x0E'\u02EE\v'\x03" +
    "'\x05'\u02F1\n'\x03'\x03'\x07'\u02F5\n'\f'\x0E'\u02F8\v'\x03" +
    "'\x05'\u02FB\n'\x03'\x06'\u02FE\n'\r'\x0E'\u02FF\x03'\x07'\u0303" +
    "\n'\f'\x0E'\u0306\v'\x03'\x05'\u0309\n'\x03'\x06'\u030C\n'\r" +
    "'\x0E'\u030D\x03'\x05'\u0311\n'\x03'\x05'\u0314\n'\x03(\x06(\u0317" +
    "\n(\r(\x0E(\u0318\x03(\x03(\x05(\u031D\n(\x03)\x07)\u0320\n)\f)\x0E)\u0323" +
    "\v)\x03)\x06)\u0326\n)\r)\x0E)\u0327\x03)\x03)\x05)\u032C\n)\x03*\x03" +
    "*\x03*\x07*\u0331\n*\f*\x0E*\u0334\v*\x03*\x05*\u0337\n*\x03*\x03*\x03" +
    "*\x07*\u033C\n*\f*\x0E*\u033F\v*\x03*\x05*\u0342\n*\x03*\x03*\x03*\x06" +
    "*\u0347\n*\r*\x0E*\u0348\x03*\x05*\u034C\n*\x03*\x05*\u034F\n*\x03+\x03" +
    "+\x03+\x03,\x03,\x05,\u0356\n,\x03,\x05,\u0359\n,\x03-\x03-\x05-\u035D" +
    "\n-\x03-\x05-\u0360\n-\x03.\x03.\x03.\x05.\u0365\n.\x03.\x05.\u0368\n" +
    ".\x03/\x03/\x05/\u036C\n/\x03/\x05/\u036F\n/\x03/\x05/\u0372\n/\x030\x03" +
    "0\x050\u0376\n0\x031\x031\x031\x032\x032\x032\x033\x033\x033\x034\x03" +
    "4\x034\x035\x035\x035\x035\x035\x035\x055\u038A\n5\x055\u038C\n5\x036" +
    "\x036\x036\x036\x036\x036\x056\u0394\n6\x056\u0396\n6\x037\x037\x037\x03" +
    "7\x038\x038\x038\x038\x038\x058\u03A1\n8\x039\x059\u03A4\n9\x039\x039" +
    "\x039\x039\x039\x039\x059\u03AC\n9\x039\x039\x059\u03B0\n9\x03:\x05:\u03B3" +
    "\n:\x03:\x03:\x03:\x03:\x03:\x07:\u03BA\n:\f:\x0E:\u03BD\v:\x03:\x05:" +
    "\u03C0\n:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u03C8\n:\f:\x0E:\u03CB\v" +
    ":\x03:\x03:\x05:\u03CF\n:\x05:\u03D1\n:\x03:\x03:\x03;\x03;\x03;\x05;" +
    "\u03D8\n;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x06<\u03E3\n<\r" +
    "<\x0E<\u03E4\x03<\x05<\u03E8\n<\x03<\x05<\u03EB\n<\x03<\x03<\x03<\x03" +
    "<\x06<\u03F1\n<\r<\x0E<\u03F2\x03<\x05<\u03F6\n<\x03<\x05<\u03F9\n<\x05" +
    "<\u03FB\n<\x03=\x03=\x03=\x03=\x05=\u0401\n=\x05=\u0403\n=\x03=\x03=\x03" +
    "=\x03>\x03>\x03>\x03>\x03>\x05>\u040D\n>\x03>\x03>\x03>\x03?\x03?\x03" +
    "?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x06@\u041C\n@\r@\x0E@\u041D\x03@" +
    "\x03@\x03A\x03A\x03A\x05A\u0425\nA\x03A\x05A\u0428\nA\x03B\x03B\x03B\x05" +
    "B\u042D\nB\x03B\x03B\x03B\x03C\x03C\x03C\x03D\x03D\x05D\u0437\nD\x03E" +
    "\x03E\x05E\u043B\nE\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x07G\u0444\nG\f" +
    "G\x0EG\u0447\vG\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0451\nH" +
    "\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0459\nI\x03J\x03J\x03J\x03J\x03J" +
    "\x03J\x05J\u0461\nJ\x03K\x03K\x03K\x03K\x03L\x05L\u0468\nL\x03L\x03L\x03" +
    "M\x05M\u046D\nM\x03M\x03M\x03N\x03N\x03O\x03O\x03P\x03P\x03Q\x03Q\x03" +
    "R\x03R\x03S\x03S\x03T\x03T\x03T\x06T\u0480\nT\rT\x0ET\u0481\x03U\x03U" +
    "\x03U\x07U\u0487\nU\fU\x0EU\u048A\vU\x03V\x03V\x03V\x03V\x03W\x03W\x05" +
    "W\u0492\nW\x03W\x03W\x03W\x05W\u0497\nW\x03W\x05W\u049A\nW\x03X\x03X\x03" +
    "X\x05X\u049F\nX\x03Y\x03Y\x03Y\x07Y\u04A4\nY\fY\x0EY\u04A7\vY\x03Y\x05" +
    "Y\u04AA\nY\x03Z\x03Z\x05Z\u04AE\nZ\x03[\x03[\x03[\x03[\x05[\u04B4\n[\x03" +
    "\\\x03\\\x03\\\x03\\\x03\\\x05\\\u04BB\n\\\x03\\\x03\\\x03\\\x03\\\x03" +
    "\\\x03\\\x05\\\u04C3\n\\\x03\\\x05\\\u04C6\n\\\x03\\\x03\\\x05\\\u04CA" +
    "\n\\\x03]\x03]\x03]\x07]\u04CF\n]\f]\x0E]\u04D2\v]\x03^\x03^\x05^\u04D6" +
    "\n^\x03^\x03^\x03^\x03_\x03_\x03_\x03`\x03`\x03`\x03`\x03`\x05`\u04E3" +
    "\n`\x03`\x05`\u04E6\n`\x03`\x05`\u04E9\n`\x05`\u04EB\n`\x03`\x03`\x03" +
    "a\x03a\x03a\x07a\u04F2\na\fa\x0Ea\u04F5\va\x03b\x03b\x03b\x07b\u04FA\n" +
    "b\fb\x0Eb\u04FD\vb\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x05d\u0506\nd\x03" +
    "d\x03d\x03d\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x07f\u0512\nf\ff\x0Ef\u0515" +
    "\vf\x03f\x05f\u0518\nf\x03g\x03g\x05g\u051C\ng\x03g\x03g\x03g\x03g\x05" +
    "g\u0522\ng\x03g\x03g\x03g\x03g\x05g\u0528\ng\x05g\u052A\ng\x03h\x03h\x03" +
    "h\x03i\x03i\x03i\x07i\u0532\ni\fi\x0Ei\u0535\vi\x03i\x05i\u0538\ni\x03" +
    "j\x03j\x03j\x03j\x03j\x03j\x05j\u0540\nj\x03j\x05j\u0543\nj\x03k\x03k" +
    "\x03k\x03k\x05k\u0549\nk\x05k\u054B\nk\x03l\x03l\x03l\x07l\u0550\nl\f" +
    "l\x0El\u0553\vl\x03l\x05l\u0556\nl\x03m\x03m\x03m\x05m\u055B\nm\x03n\x03" +
    "n\x03n\x07n\u0560\nn\fn\x0En\u0563\vn\x03n\x05n\u0566\nn\x03o\x03o\x03" +
    "o\x05o\u056B\no\x03p\x03p\x03p\x03p\x03q\x03q\x05q\u0573\nq\x03r\x03r" +
    "\x03r\x07r\u0578\nr\fr\x0Er\u057B\vr\x03s\x03s\x03s\x07s\u0580\ns\fs\x0E" +
    "s\u0583\vs\x03t\x03t\x03t\x05t\u0588\nt\x03u\x03u\x07u\u058C\nu\fu\x0E" +
    "u\u058F\vu\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x05v\u059B" +
    "\nv\x03w\x03w\x03w\x03x\x03x\x03x\x03y\x03y\x03y\x03z\x03z\x03z\x03{\x03" +
    "{\x03{\x03|\x03|\x03|\x03}\x03}\x03}\x03}\x03~\x03~\x03~\x03\x7F\x03\x7F" +
    "\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81" +
    "\x03\x81\x03\x81\x07\x81\u05C3\n\x81\f\x81\x0E\x81\u05C6\v\x81\x03\x82" +
    "\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x07\x82\u05CE\n\x82\f\x82\x0E" +
    "\x82\u05D1\v\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x07\x83" +
    "\u05D9\n\x83\f\x83\x0E\x83\u05DC\v\x83\x03\x84\x03\x84\x03\x84\x03\x84" +
    "\x03\x84\x03\x84\x07\x84\u05E4\n\x84\f\x84\x0E\x84\u05E7\v\x84\x03\x85" +
    "\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x07\x85\u05EF\n\x85\f\x85\x0E" +
    "\x85\u05F2\v\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x07\x86" +
    "\u05FA\n\x86\f\x86\x0E\x86\u05FD\v\x86\x03\x87\x03\x87\x03\x87\x03\x87" +
    "\x03\x87\x03\x87\x03\x87\x05\x87\u0606\n\x87\x03\x88\x03\x88\x03\x88\x05" +
    "\x88\u060B\n\x88\x03\x89\x03\x89\x03\x89\x05\x89\u0610\n\x89\x03\x8A\x03" +
    "\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u061B" +
    "\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0622\n\x8A\x07" +
    "\x8A\u0624\n\x8A\f\x8A\x0E\x8A\u0627\v\x8A\x03\x8B\x03\x8B\x03\x8B\x05" +
    "\x8B\u062C\n\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0631\n\x8B\x07\x8B\u0633" +
    "\n\x8B\f\x8B\x0E\x8B\u0636\v\x8B\x03\x8B\x05\x8B\u0639\n\x8B\x05\x8B\u063B" +
    "\n\x8B\x03\x8C\x05\x8C\u063E\n\x8C\x03\x8C\x03\x8C\x05\x8C\u0642\n\x8C" +
    "\x03\x8C\x03\x8C\x05\x8C\u0646\n\x8C\x05\x8C\u0648\n\x8C\x03\x8C\x05\x8C" +
    "\u064B\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03" +
    "\x8D\x03\x8D\x05\x8D\u0656\n\x8D\x03\x8D\x03\x8D\x05\x8D\u065A\n\x8D\x03" +
    "\x8D\x03\x8D\x03\x8D\x03\x8D\x05\x8D\u0660\n\x8D\x03\x8D\x05\x8D\u0663" +
    "\n\x8D\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0668\n\x8E\x03\x8E\x03\x8E\x03" +
    "\x8F\x03\x8F\x05\x8F\u066E\n\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90" +
    "\x03\x91\x03\x91\x07\x91\u0677\n\x91\f\x91\x0E\x91\u067A\v\x91\x03\x91" +
    "\x07\x91\u067D\n\x91\f\x91\x0E\x91\u0680\v\x91\x03\x91\x05\x91\u0683\n" +
    "\x91\x03\x91\x03\x91\x07\x91\u0687\n\x91\f\x91\x0E\x91\u068A\v\x91\x03" +
    "\x91\x05\x91\u068D\n\x91\x03\x91\x06\x91\u0690\n\x91\r\x91\x0E\x91\u0691" +
    "\x03\x91\x07\x91\u0695\n\x91\f\x91\x0E\x91\u0698\v\x91\x03\x91\x05\x91" +
    "\u069B\n\x91\x03\x91\x06\x91\u069E\n\x91\r\x91\x0E\x91\u069F\x03\x91\x05" +
    "\x91\u06A3\n\x91\x03\x91\x05\x91\u06A6\n\x91\x03\x92\x06\x92\u06A9\n\x92" +
    "\r\x92\x0E\x92\u06AA\x03\x92\x03\x92\x05\x92\u06AF\n\x92\x03\x93\x07\x93" +
    "\u06B2\n\x93\f\x93\x0E\x93\u06B5\v\x93\x03\x93\x06\x93\u06B8\n\x93\r\x93" +
    "\x0E\x93\u06B9\x03\x93\x03\x93\x05\x93\u06BE\n\x93\x03\x94\x03\x94\x03" +
    "\x94\x07\x94\u06C3\n\x94\f\x94\x0E\x94\u06C6\v\x94\x03\x94\x05\x94\u06C9" +
    "\n\x94\x03\x94\x03\x94\x03\x94\x06\x94\u06CE\n\x94\r\x94\x0E\x94\u06CF" +
    "\x03\x94\x05\x94\u06D3\n\x94\x03\x94\x05\x94\u06D6\n\x94\x03\x95\x03\x95" +
    "\x03\x95\x03\x96\x03\x96\x05\x96\u06DD\n\x96\x03\x97\x03\x97\x03\x97\x05" +
    "\x97\u06E2\n\x97\x03\x98\x03\x98\x05\x98\u06E6\n\x98\x03\x98\x05\x98\u06E9" +
    "\n\x98\x03\x99\x03\x99\x03\x9A\x03\x9A\x05\x9A\u06EF\n\x9A\x03\x9B\x03" +
    "\x9B\x03\x9B\x05\x9B\u06F4\n\x9B\x03\x9B\x05\x9B\u06F7\n\x9B\x03\x9B\x05" +
    "\x9B\u06FA\n\x9B\x03\x9B\x05\x9B\u06FD\n\x9B\x03\x9B\x03\x9B\x03\x9C\x03" +
    "\x9C\x03\x9C\x03\x9D\x03\x9D\x07\x9D\u0706\n\x9D\f\x9D\x0E\x9D\u0709\v" +
    "\x9D\x03\x9E\x03\x9E\x05\x9E\u070D\n\x9E\x03\x9F\x03\x9F\x07\x9F\u0711" +
    "\n\x9F\f\x9F\x0E\x9F\u0714\v\x9F\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA1" +
    "\x03\xA1\x06\xA1\u071C\n\xA1\r\xA1\x0E\xA1\u071D\x03\xA2\x03\xA2\x05\xA2" +
    "\u0722\n\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x05\xA3\u072A" +
    "\n\xA3\x05\xA3\u072C\n\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA4\x03" +
    "\xA4\x03\xA5\x03\xA5\x05\xA5\u0736\n\xA5\x03\xA5\x03\xA5\x03\xA6\x03\xA6" +
    "\x03\xA6\x07\xA6\u073D\n\xA6\f\xA6\x0E\xA6\u0740\v\xA6\x03\xA6\x05\xA6" +
    "\u0743\n\xA6\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u0748\n\xA7\x03\xA8\x03\xA8" +
    "\x03\xA8\x03\xA8\x03\xA9\x06\xA9\u074F\n\xA9\r\xA9\x0E\xA9\u0750\x03\xAA" +
    "\x05\xAA\u0754\n\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x07" +
    "\xAA\u075C\n\xAA\f\xAA\x0E\xAA\u075F\v\xAA\x03\xAB\x03\xAB\x03\xAB\x03" +
    "\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03" +
    "\xAD\x05\xAD\u076E\n\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE" +
    "\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x05\xAF\u077A\n\xAF\x03\xB0\x03\xB0\x03" +
    "\xB0\x05\xB0\u077F\n\xB0\x05\xB0\u0781\n\xB0\x03\xB0\x03\xB0\x03\xB0\x03" +
    "\xB0\x05\xB0\u0787\n\xB0\x05\xB0\u0789\n\xB0\x07\xB0\u078B\n\xB0\f\xB0" +
    "\x0E\xB0\u078E\v\xB0\x03\xB0\x03\xB0\x05\xB0\u0792\n\xB0\x03\xB0\x05\xB0" +
    "\u0795\n\xB0\x03\xB1\x03\xB1\x03\xB1\x07\xB1\u079A\n\xB1\f\xB1\x0E\xB1" +
    "\u079D\v\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x07\xB1\u07A3\n\xB1\f\xB1" +
    "\x0E\xB1\u07A6\v\xB1\x05\xB1\u07A8\n\xB1\x03\xB1\x03\xB1\x03\xB1\x07\xB1" +
    "\u07AD\n\xB1\f\xB1\x0E\xB1\u07B0\v\xB1\x05\xB1\u07B2\n\xB1\x03\xB2\x03" +
    "\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u07BB\n\xB3\x03\xB4" +
    "\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x05\xB4\u07C2\n\xB4\x03\xB5\x03\xB5\x03" +
    "\xB5\x07\xB5\u07C7\n\xB5\f\xB5\x0E\xB5\u07CA\v\xB5\x03\xB5\x05\xB5\u07CD" +
    "\n\xB5\x03\xB6\x03\xB6\x03\xB6\x06\xB6\u07D2\n\xB6\r\xB6\x0E\xB6\u07D3" +
    "\x03\xB6\x05\xB6\u07D7\n\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x06\xB7\u07DD" +
    "\n\xB7\r\xB7\x0E\xB7\u07DE\x03\xB7\x05\xB7\u07E2\n\xB7\x05\xB7\u07E4\n" +
    "\xB7\x03\xB8\x03\xB8\x03\xB8\x05\xB8\u07E9\n\xB8\x03\xB9\x03\xB9\x03\xB9" +
    "\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x05\xB9\u07F2\n\xB9\x03\xB9\x05\xB9\u07F5" +
    "\n\xB9\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA" +
    "\u07FE\n\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u0803\n\xBA\x03\xBA\x05\xBA" +
    "\u0806\n\xBA\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x05\xBB\u080E" +
    "\n\xBB\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x05\xBC" +
    "\u0817\n\xBC\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x03" +
    "\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x05\xBD\u0826\n\xBD\x03\xBD" +
    "\x05\xBD\u0829\n\xBD\x07\xBD\u082B\n\xBD\f\xBD\x0E\xBD\u082E\v\xBD\x03" +
    "\xBE\x03\xBE\x03\xBE\x07\xBE\u0833\n\xBE\f\xBE\x0E\xBE\u0836\v\xBE\x03" +
    "\xBE\x05\xBE\u0839\n\xBE\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF" +
    "\x03\xBF\x05\xBF\u0842\n\xBF\x03\xBF\x05\xBF\u0845\n\xBF\x03\xC0\x03\xC0" +
    "\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u084E\n\xC0\x03\xC0\x03" +
    "\xC0\x03\xC0\x05\xC0\u0853\n\xC0\x03\xC0\x05\xC0\u0856\n\xC0\x03\xC1\x03" +
    "\xC1\x03\xC1\x07\xC1\u085B\n\xC1\f\xC1\x0E\xC1\u085E\v\xC1\x03\xC1\x03" +
    "\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x05\xC1\u0866\n\xC1\x03\xC1\x03\xC1" +
    "\x05\xC1\u086A\n\xC1\x05\xC1\u086C\n\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1" +
    "\x03\xC1\x05\xC1\u0873\n\xC1\x03\xC1\x03\xC1\x05\xC1\u0877\n\xC1\x03\xC2" +
    "\x03\xC2\x03\xC2\x05\xC2\u087C\n\xC2\x03\xC3\x03\xC3\x03\xC3\x03\xC4\x03" +
    "\xC4\x03\xC4\x03\xC5\x03\xC5\x03\xC5\x03\xC6\x03\xC6\x03\xC6\x03\xC7\x03" +
    "\xC7\x03\xC7\x03\xC7\x02\x02\v<\u0100\u0102\u0104\u0106\u0108\u010A\u0112" +
    "\u0178\xC8\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
    '\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&' +
    "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
    "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
    "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
    "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
    "\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
    "\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
    "\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
    "\xE8\x02";
  private static readonly _serializedATNSegment1: string =
    "\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02" +
    "\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A" +
    "\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118" +
    "\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126" +
    "\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134" +
    "\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142" +
    "\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150" +
    "\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\u015E" +
    "\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02\u016C" +
    "\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02\u017A" +
    "\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02\u0188" +
    "\x02\u018A\x02\u018C\x02\x02\x07\x05\x02HRTTVV\x04\x0211XX\x03\x0256\x03" +
    "\x02EF\x06\x0278>>SSUU\x02\u0939\x02\u018F\x03\x02\x02\x02\x04\u0193\x03" +
    "\x02\x02\x02\x06\u0195\x03\x02\x02\x02\b\u019E\x03\x02\x02\x02\n\u01AD" +
    "\x03\x02\x02\x02\f\u01B0\x03\x02\x02\x02\x0E\u01B6\x03\x02\x02\x02\x10" +
    "\u01BE\x03\x02\x02\x02\x12\u01C0\x03\x02\x02\x02\x14\u01DB\x03\x02\x02" +
    "\x02\x16\u01E5\x03\x02\x02\x02\x18\u020F\x03\x02\x02\x02\x1A\u0213\x03" +
    "\x02\x02\x02\x1C\u0215\x03\x02\x02\x02\x1E\u0217\x03\x02\x02\x02 \u021B" +
    '\x03\x02\x02\x02"\u0223\x03\x02\x02\x02$\u022C\x03\x02\x02\x02&\u0235' +
    "\x03\x02\x02\x02(\u0238\x03\x02\x02\x02*\u023A\x03\x02\x02\x02,\u0242" +
    "\x03\x02\x02\x02.\u0244\x03\x02\x02\x020\u025A\x03\x02\x02\x022\u0265" +
    "\x03\x02\x02\x024\u0267\x03\x02\x02\x026\u026F\x03\x02\x02\x028\u0274" +
    "\x03\x02\x02\x02:\u027C\x03\x02\x02\x02<\u0281\x03\x02\x02\x02>\u0292" +
    "\x03\x02\x02\x02@\u0298\x03\x02\x02\x02B\u02A0\x03\x02\x02\x02D\u02A2" +
    "\x03\x02\x02\x02F\u02B5\x03\x02\x02\x02H\u02DE\x03\x02\x02\x02J\u02E0" +
    "\x03\x02\x02\x02L\u0313\x03\x02\x02\x02N\u0316\x03\x02\x02\x02P\u0321" +
    "\x03\x02\x02\x02R\u034E\x03\x02\x02\x02T\u0350\x03\x02\x02\x02V\u0353" +
    "\x03\x02\x02\x02X\u035A\x03\x02\x02\x02Z\u0361\x03\x02\x02\x02\\\u0369" +
    "\x03\x02\x02\x02^\u0373\x03\x02\x02\x02`\u0377\x03\x02\x02\x02b\u037A" +
    "\x03\x02\x02\x02d\u037D\x03\x02\x02\x02f\u0380\x03\x02\x02\x02h\u0383" +
    "\x03\x02\x02\x02j\u038D\x03\x02\x02\x02l\u0397\x03\x02\x02\x02n\u039B" +
    "\x03\x02\x02\x02p\u03A3\x03\x02\x02\x02r\u03B2\x03\x02\x02\x02t\u03D4" +
    "\x03\x02\x02\x02v\u03FA\x03\x02\x02\x02x\u03FC\x03\x02\x02\x02z\u0407" +
    "\x03\x02\x02\x02|\u0411\x03\x02\x02\x02~\u0415\x03\x02\x02\x02\x80\u0427" +
    "\x03\x02\x02\x02\x82\u0429\x03\x02\x02\x02\x84\u0431\x03\x02\x02\x02\x86" +
    "\u0436\x03\x02\x02\x02\x88\u043A\x03\x02\x02\x02\x8A\u043C\x03\x02\x02" +
    "\x02\x8C\u0440\x03\x02\x02\x02\x8E\u0450\x03\x02\x02\x02\x90\u0458\x03" +
    "\x02\x02\x02\x92\u0460\x03\x02\x02\x02\x94\u0462\x03\x02\x02\x02\x96\u0467" +
    "\x03\x02\x02\x02\x98\u046C\x03\x02\x02\x02\x9A\u0470\x03\x02\x02\x02\x9C" +
    "\u0472\x03\x02\x02\x02\x9E\u0474\x03\x02\x02\x02\xA0\u0476\x03\x02\x02" +
    "\x02\xA2\u0478\x03\x02\x02\x02\xA4\u047A\x03\x02\x02\x02\xA6\u047C\x03" +
    "\x02\x02\x02\xA8\u0483\x03\x02\x02\x02\xAA\u048B\x03\x02\x02\x02\xAC\u0499" +
    "\x03\x02\x02\x02\xAE\u049B\x03\x02\x02\x02\xB0\u04A0\x03\x02\x02\x02\xB2" +
    "\u04AD\x03\x02\x02\x02\xB4\u04B3\x03\x02\x02\x02\xB6\u04C9\x03\x02\x02" +
    "\x02\xB8\u04CB\x03\x02\x02\x02\xBA\u04D5\x03\x02\x02\x02\xBC\u04DA\x03" +
    "\x02\x02\x02\xBE\u04DD\x03\x02\x02\x02\xC0\u04EE\x03\x02\x02\x02\xC2\u04F6" +
    "\x03\x02\x02\x02\xC4\u04FE\x03\x02\x02\x02\xC6\u0502\x03\x02\x02\x02\xC8" +
    "\u050A\x03\x02\x02\x02\xCA\u050E\x03\x02\x02\x02\xCC\u0529\x03\x02\x02" +
    "\x02\xCE\u052B\x03\x02\x02\x02\xD0\u052E\x03\x02\x02\x02\xD2\u0542\x03" +
    "\x02\x02\x02\xD4\u0544\x03\x02\x02\x02\xD6\u054C\x03\x02\x02\x02\xD8\u055A" +
    "\x03\x02\x02\x02\xDA\u055C\x03\x02\x02\x02\xDC\u056A\x03\x02\x02\x02\xDE" +
    "\u056C\x03\x02\x02\x02\xE0\u0572\x03\x02\x02\x02\xE2\u0574\x03\x02\x02" +
    "\x02\xE4\u057C\x03\x02\x02\x02\xE6\u0587\x03\x02\x02\x02\xE8\u0589\x03" +
    "\x02\x02\x02\xEA\u059A\x03\x02\x02\x02\xEC\u059C\x03\x02\x02\x02\xEE\u059F" +
    "\x03\x02\x02\x02\xF0\u05A2\x03\x02\x02\x02\xF2\u05A5\x03\x02\x02\x02\xF4" +
    "\u05A8\x03\x02\x02\x02\xF6\u05AB\x03\x02\x02\x02\xF8\u05AE\x03\x02\x02" +
    "\x02\xFA\u05B2\x03\x02\x02\x02\xFC\u05B5\x03\x02\x02\x02\xFE\u05B9\x03" +
    "\x02\x02\x02\u0100\u05BC\x03\x02\x02\x02\u0102\u05C7\x03\x02\x02\x02\u0104" +
    "\u05D2\x03\x02\x02\x02\u0106\u05DD\x03\x02\x02\x02\u0108\u05E8\x03\x02" +
    "\x02\x02\u010A\u05F3\x03\x02\x02\x02\u010C\u0605\x03\x02\x02\x02\u010E" +
    "\u0607\x03\x02\x02\x02\u0110\u060F\x03\x02\x02\x02\u0112\u0611\x03\x02" +
    "\x02\x02\u0114\u063A\x03\x02\x02\x02\u0116\u064A\x03\x02\x02\x02\u0118" +
    "\u0662\x03\x02\x02\x02\u011A\u0664\x03\x02\x02\x02\u011C\u066B\x03\x02" +
    "\x02\x02\u011E\u0672\x03\x02\x02\x02\u0120\u06A5\x03\x02\x02\x02\u0122" +
    "\u06A8\x03\x02\x02\x02\u0124\u06B3\x03\x02\x02\x02\u0126\u06D5\x03\x02" +
    "\x02\x02\u0128\u06D7\x03\x02\x02\x02\u012A\u06DA\x03\x02\x02\x02\u012C" +
    "\u06DE\x03\x02\x02\x02\u012E\u06E3\x03\x02\x02\x02\u0130\u06EA\x03\x02" +
    "\x02\x02\u0132\u06EE\x03\x02\x02\x02\u0134\u06F0\x03\x02\x02\x02\u0136" +
    "\u0700\x03\x02\x02\x02\u0138\u0703\x03\x02\x02\x02\u013A\u070C\x03\x02" +
    "\x02\x02\u013C\u070E\x03\x02\x02\x02\u013E\u0717\x03\x02\x02\x02\u0140" +
    "\u071B\x03\x02\x02\x02\u0142\u071F\x03\x02\x02\x02\u0144\u0725\x03\x02" +
    "\x02\x02\u0146\u072F\x03\x02\x02\x02\u0148\u0733\x03\x02\x02\x02\u014A" +
    "\u0739\x03\x02\x02\x02\u014C\u0747\x03\x02\x02\x02\u014E\u0749\x03\x02" +
    "\x02\x02\u0150\u074E\x03\x02\x02\x02\u0152\u0753\x03\x02\x02\x02\u0154" +
    "\u0760\x03\x02\x02\x02\u0156\u0765\x03\x02\x02\x02\u0158\u076A\x03\x02" +
    "\x02\x02\u015A\u0772\x03\x02\x02\x02\u015C\u0777\x03\x02\x02\x02\u015E" +
    "\u0794\x03\x02\x02\x02\u0160\u07B1\x03\x02\x02\x02\u0162\u07B3\x03\x02" +
    "\x02\x02\u0164\u07BA\x03\x02\x02\x02\u0166\u07C1\x03\x02\x02\x02\u0168" +
    "\u07C3\x03\x02\x02\x02\u016A\u07CE\x03\x02\x02\x02\u016C\u07D8\x03\x02" +
    "\x02\x02\u016E\u07E8\x03\x02\x02\x02\u0170\u07F4\x03\x02\x02\x02\u0172" +
    "\u0805\x03\x02\x02\x02\u0174\u080D\x03\x02\x02\x02\u0176\u080F\x03\x02" +
    "\x02\x02\u0178\u0818\x03\x02\x02\x02\u017A\u082F\x03\x02\x02\x02\u017C" +
    "\u0844\x03\x02\x02\x02\u017E\u0855\x03\x02\x02\x02\u0180\u0876\x03\x02" +
    "\x02\x02\u0182\u087B\x03\x02\x02\x02\u0184\u087D\x03\x02\x02\x02\u0186" +
    "\u0880\x03\x02\x02\x02\u0188\u0883\x03\x02\x02\x02\u018A\u0886\x03\x02" +
    "\x02\x02\u018C\u0889\x03\x02\x02\x02\u018E\u0190\x05\f\x07\x02\u018F\u018E" +
    "\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02" +
    "\u0191\u0192\x07\x02\x02\x03\u0192\x03\x03\x02\x02\x02\u0193\u0194\x05" +
    "\x10\t\x02\u0194\x05\x03\x02\x02\x02\u0195\u0199\x05\xD0i\x02\u0196\u0198" +
    "\x07_\x02\x02\u0197\u0196\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02" +
    "\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03" +
    "\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019D\x07\x02\x02\x03\u019D" +
    "\x07\x03\x02\x02\x02\u019E\u01A0\x07+\x02\x02\u019F\u01A1\x05\u0180\xC1" +
    "\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2" +
    "\x03\x02\x02\x02\u01A2\u01A3\x07.\x02\x02\u01A3\u01A4\x07W\x02\x02\u01A4" +
    "\u01A8\x05\xD2j\x02\u01A5\u01A7\x07_\x02\x02\u01A6\u01A5\x03\x02\x02\x02" +
    "\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03" +
    "\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB" +
    "\u01AC\x07\x02\x02\x03\u01AC\t\x03\x02\x02\x02\u01AD\u01AE\x05\xD6l\x02" +
    "\u01AE\v\x03\x02\x02\x02\u01AF\u01B1\x05\x0E\b\x02\u01B0\u01AF\x03\x02" +
    "\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2" +
    "\u01B3\x03\x02\x02\x02\u01B3\r\x03\x02\x02\x02\u01B4\u01B7\x05\x16\f\x02" +
    "\u01B5\u01B7\x05\x12\n\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B5\x03" +
    "\x02\x02\x02\u01B7\x0F\x03\x02\x02\x02\u01B8\u01B9\x05\x16\f\x02\u01B9" +
    "\u01BA\x07_\x02\x02\u01BA\u01BF\x03\x02\x02\x02\u01BB\u01BF\x05\x12\n" +
    "\x02\u01BC\u01BF\x07_\x02\x02\u01BD\u01BF\x07\x02\x02\x03\u01BE\u01B8" +
    "\x03\x02\x02\x02\u01BE\u01BB\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02" +
    "\u01BE\u01BD\x03\x02\x02\x02\u01BF\x11\x03\x02\x02\x02\u01C0\u01C5\x05" +
    "\x14\v\x02\u01C1\u01C2\x074\x02\x02\u01C2\u01C4\x05\x14\v\x02\u01C3\u01C1" +
    "\x03\x02\x02\x02\u01C4\u01C7\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02" +
    "\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03" +
    "\x02\x02\x02\u01C8\u01CA\x074\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9" +
    "\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x07_\x02" +
    "\x02\u01CC\x13\x03\x02\x02\x02\u01CD\u01DC\x05\x18\r\x02\u01CE\u01DC\x05" +
    "\xC6d\x02\u01CF\u01DC\x05\xD6l\x02\u01D0\u01DC\x05\x1E\x10\x02\u01D1\u01DC" +
    "\x05,\x17\x02\u01D2\u01DC\x05 \x11\x02\u01D3\u01DC\x07\f\x02\x02\u01D4" +
    "\u01DC\x05&\x14\x02\u01D5\u01DC\x05(\x15\x02\u01D6\u01DC\x05*\x16\x02" +
    "\u01D7\u01DC\x07\x0E\x02\x02\u01D8\u01DC\x07\x18\x02\x02\u01D9\u01DC\x05" +
    '"\x12\x02\u01DA\u01DC\x05$\x13\x02\u01DB\u01CD\x03\x02\x02\x02\u01DB' +
    "\u01CE\x03\x02\x02\x02\u01DB\u01CF\x03\x02\x02\x02\u01DB\u01D0\x03\x02" +
    "\x02\x02\u01DB\u01D1\x03\x02\x02\x02\u01DB\u01D2\x03\x02\x02\x02\u01DB" +
    "\u01D3\x03\x02\x02\x02\u01DB\u01D4\x03\x02\x02\x02\u01DB\u01D5\x03\x02" +
    "\x02\x02\u01DB\u01D6\x03\x02\x02\x02\u01DB\u01D7\x03\x02\x02\x02\u01DB" +
    "\u01D8\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DA\x03\x02" +
    "\x02\x02\u01DC\x15\x03\x02\x02\x02\u01DD\u01E6\x05F$\x02\u01DE\u01E6\x05" +
    'h5\x02\u01DF\u01E6\x05B"\x02\u01E0\u01E6\x05r:\x02\u01E1\u01E6\x05p9' +
    "\x02\u01E2\u01E6\x05v<\x02\u01E3\u01E6\x05n8\x02\u01E4\u01E6\x05~@\x02" +
    "\u01E5\u01DD\x03\x02\x02\x02\u01E5\u01DE\x03\x02\x02\x02\u01E5\u01DF\x03" +
    "\x02\x02\x02\u01E5\u01E0\x03\x02\x02\x02\u01E5\u01E1\x03\x02\x02\x02\u01E5" +
    "\u01E2\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E4\x03\x02" +
    "\x02\x02\u01E6\x17\x03\x02\x02\x02\u01E7\u01E8\x07[\x02\x02\u01E8\u01E9" +
    "\x072\x02\x02\u01E9\u01EC\x05\xD2j\x02\u01EA\u01EB\x07=\x02\x02\u01EB" +
    "\u01ED\x05\x1A\x0E\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02" +
    "\x02\x02\u01ED\u0210\x03\x02\x02\x02\u01EE\u01EF\x07+\x02\x02\u01EF\u01F0" +
    "\x05\u0174\xBB\x02\u01F0\u01F1\x07.\x02\x02\u01F1\u01F4\x03\x02\x02\x02" +
    "\u01F2\u01F4\x05\u0176\xBC\x02\u01F3\u01EE\x03\x02\x02\x02\u01F3\u01F2" +
    "\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\x072\x02\x02" +
    "\u01F6\u01F9\x05\xD2j\x02\u01F7\u01F8\x07=\x02\x02\u01F8\u01FA\x05\x1A" +
    "\x0E\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA" +
    "\u0210\x03\x02\x02\x02\u01FB\u01FC\x05\u0168\xB5\x02\u01FC\u01FD\x07=" +
    "\x02\x02\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01FB\x03\x02\x02\x02\u01FF" +
    "\u0200\x03\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02" +
    "\x02\x02\u0201\u0204\x03\x02\x02\x02\u0202\u0205\x05\xD4k\x02\u0203\u0205" +
    "\x05\xD6l\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0203\x03\x02\x02\x02" +
    "\u0205\u0207\x03\x02\x02\x02\u0206\u0208\x07^\x02\x02\u0207\u0206\x03" +
    "\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0210\x03\x02\x02\x02\u0209" +
    "\u020A\x05\u0174\xBB\x02\u020A\u020D\x05\x1C\x0F\x02\u020B\u020E\x05\xD4" +
    "k\x02\u020C\u020E\x05\xD6l\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020C" +
    "\x03\x02\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u01E7\x03\x02\x02\x02" +
    "\u020F\u01F3\x03\x02\x02\x02\u020F\u01FE\x03\x02\x02\x02\u020F\u0209\x03" +
    "\x02\x02\x02\u0210\x19\x03\x02\x02\x02\u0211\u0214\x05\xD4k\x02\u0212" +
    "\u0214\x05\xD6l\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0212\x03\x02\x02" +
    "\x02\u0214\x1B\x03\x02\x02\x02\u0215\u0216\t\x02\x02\x02\u0216\x1D\x03" +
    "\x02\x02\x02\u0217\u0219\x07\x16\x02\x02\u0218\u021A\x05\xD6l\x02\u0219" +
    "\u0218\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\x1F\x03\x02\x02" +
    "\x02\u021B\u0221\x07\x11\x02\x02\u021C\u021F\x05\xD2j\x02\u021D\u021E" +
    "\x07\x1E\x02\x02\u021E\u0220\x05\xD2j\x02\u021F\u021D\x03\x02\x02\x02" +
    "\u021F\u0220\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02\u0221\u021C\x03" +
    "\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222!\x03\x02\x02\x02\u0223" +
    "\u0224\x07#\x02\x02\u0224\u0229\x07[\x02\x02\u0225\u0226\x073\x02\x02" +
    "\u0226\u0228\x07[\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u022B\x03" +
    "\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A" +
    "#\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022C\u022D\x07\x1F\x02" +
    "\x02\u022D\u0232\x07[\x02\x02\u022E\u022F\x073\x02\x02\u022F\u0231\x07" +
    "[\x02\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0234\x03\x02\x02\x02\u0232" +
    "\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233%\x03\x02\x02" +
    '\x02\u0234\u0232\x03\x02\x02\x02\u0235\u0236\x07"\x02\x02\u0236\u0237' +
    "\x05\u017A\xBE\x02\u0237'\x03\x02\x02\x02\u0238\u0239\x05\xD4k\x02\u0239" +
    ")\x03\x02\x02\x02\u023A\u023B\x07!\x02\x02\u023B\u023E\x05\xD2j\x02\u023C" +
    "\u023D\x073\x02\x02\u023D\u023F\x05\xD2j\x02\u023E\u023C\x03\x02\x02\x02" +
    "\u023E\u023F\x03\x02\x02\x02\u023F+\x03\x02\x02\x02\u0240\u0243\x05.\x18" +
    "\x02\u0241\u0243\x050\x19\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0241" +
    "\x03\x02\x02\x02\u0243-\x03\x02\x02\x02\u0244\u0245\x07\v\x02\x02\u0245" +
    "\u0246\x058\x1D\x02\u0246/\x03\x02\x02\x02\u0247\u024B\x07\x1E\x02\x02" +
    "\u0248\u024A\t\x03\x02\x02\u0249\u0248\x03\x02\x02\x02\u024A\u024D\x03" +
    "\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C" +
    "\u024E\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024E\u024F\x05<\x1F" +
    "\x02\u024F\u0250\x07\v\x02\x02\u0250\u0251\x052\x1A\x02\u0251\u025B\x03" +
    "\x02\x02\x02\u0252\u0254\x07\x1E\x02\x02\u0253\u0255\t\x03\x02\x02\u0254" +
    "\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0254\x03\x02" +
    "\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258" +
    "\u0259\x07\v\x02\x02\u0259\u025B\x052\x1A\x02\u025A\u0247\x03\x02\x02" +
    "\x02\u025A\u0252\x03\x02\x02\x02\u025B1\x03\x02\x02\x02\u025C\u025D\x07" +
    "+\x02\x02\u025D\u025F\x054\x1B\x02\u025E\u0260\x073\x02\x02\u025F\u025E" +
    "\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02" +
    "\u0261\u0262\x07.\x02\x02\u0262\u0266\x03\x02\x02\x02\u0263\u0266\x05" +
    "4\x1B\x02\u0264\u0266\x077\x02\x02\u0265\u025C\x03\x02\x02\x02\u0265\u0263" +
    "\x03\x02\x02\x02\u0265\u0264\x03\x02\x02\x02\u02663\x03\x02\x02\x02\u0267" +
    "\u026C\x056\x1C\x02\u0268\u0269\x073\x02\x02\u0269\u026B\x056\x1C\x02" +
    "\u026A\u0268\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03" +
    "\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D5\x03\x02\x02\x02\u026E" +
    "\u026C\x03\x02\x02\x02\u026F\u0272\x07[\x02\x02\u0270\u0271\x07\x1C\x02" +
    "\x02\u0271\u0273\x07[\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273" +
    "\x03\x02\x02\x02\u02737\x03\x02\x02\x02\u0274\u0279\x05:\x1E\x02\u0275" +
    "\u0276\x073\x02\x02\u0276\u0278\x05:\x1E\x02\u0277\u0275\x03\x02\x02\x02" +
    "\u0278\u027B\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03" +
    "\x02\x02\x02\u027A9\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027C" +
    "\u027F\x05<\x1F\x02\u027D\u027E\x07\x1C\x02\x02\u027E\u0280\x07[\x02\x02" +
    "\u027F\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280;\x03\x02" +
    "\x02\x02\u0281\u0282\b\x1F\x01\x02\u0282\u0283\x07[\x02\x02\u0283\u0289" +
    "\x03\x02\x02\x02\u0284\u0285\f\x04\x02\x02\u0285\u0286\x071\x02\x02\u0286" +
    "\u0288\x07[\x02\x02\u0287\u0284\x03\x02\x02\x02\u0288\u028B\x03\x02\x02" +
    "\x02\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A=\x03" +
    "\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028D\x07_\x02\x02\u028D" +
    "\u028E\x07\x03\x02\x02\u028E\u028F\x05\f\x07\x02\u028F\u0290\x07\x04\x02" +
    "\x02\u0290\u0293\x03\x02\x02\x02\u0291\u0293\x05\x12\n\x02\u0292\u028C" +
    "\x03\x02\x02\x02\u0292\u0291\x03\x02\x02\x02\u0293?\x03\x02\x02\x02\u0294" +
    "\u0295\x07U\x02\x02\u0295\u0296\x05\xE0q\x02\u0296\u0297\x07_\x02\x02" +
    "\u0297\u0299\x03\x02\x02\x02\u0298\u0294\x03\x02\x02\x02\u0299\u029A\x03" +
    "\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B" +
    "A\x03\x02\x02\x02\u029C\u029D\x05@!\x02\u029D\u029E\x05D#\x02\u029E\u02A1" +
    "\x03\x02\x02\x02\u029F\u02A1\x05D#\x02\u02A0\u029C\x03\x02\x02\x02\u02A0" +
    "\u029F\x03\x02\x02\x02\u02A1C\x03\x02\x02\x02\u02A2\u02A3\x07\x13\x02" +
    "\x02\u02A3\u02A5\x07[\x02\x02\u02A4\u02A6\x05\xC8e\x02\u02A5\u02A4\x03" +
    "\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02AC\x03\x02\x02\x02\u02A7" +
    "\u02A9\x07+\x02\x02\u02A8\u02AA\x05\u015C\xAF\x02\u02A9\u02A8\x03\x02" +
    "\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB" +
    "\u02AD\x07.\x02\x02\u02AC\u02A7\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02" +
    "\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x072\x02\x02\u02AF\u02B0" +
    "\x05> \x02\u02B0E\x03\x02\x02\x02\u02B1\u02B2\x05@!\x02\u02B2\u02B3\x05" +
    "H%\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B6\x05H%\x02\u02B5\u02B1\x03" +
    "\x02\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B6G\x03\x02\x02\x02\u02B7" +
    "\u02B8\x07\x1D\x02\x02\u02B8\u02BA\x07[\x02\x02\u02B9\u02BB\x05\xC8e\x02" +
    "\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC\x03" +
    "\x02\x02\x02\u02BC\u02BE\x07+\x02\x02\u02BD\u02BF\x05J&\x02\u02BE\u02BD" +
    "\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02" +
    "\u02C0\u02C3\x07.\x02\x02\u02C1\u02C2\x07W\x02\x02\u02C2\u02C4\x05\xD2" +
    "j\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C5" +
    "\x03\x02\x02\x02\u02C5\u02C7\x072\x02\x02\u02C6\u02C8\x05\u0182\xC2\x02" +
    "\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02C9\x03" +
    "\x02\x02\x02\u02C9\u02DF\x05> \x02\u02CA\u02CB\x07&\x02\x02\u02CB\u02CC" +
    "\x07\x1D\x02\x02\u02CC\u02CE\x07[\x02\x02\u02CD\u02CF\x05\xC8e\x02\u02CE" +
    "\u02CD\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D0\x03\x02" +
    "\x02\x02\u02D0\u02D2\x07+\x02\x02\u02D1\u02D3\x05J&\x02\u02D2\u02D1\x03" +
    "\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4" +
    "\u02D7\x07.\x02\x02\u02D5\u02D6\x07W\x02\x02\u02D6\u02D8\x05\xD2j\x02" +
    "\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x03" +
    "\x02\x02\x02\u02D9\u02DB\x072\x02\x02\u02DA\u02DC\x05\u0182\xC2\x02\u02DB" +
    "\u02DA\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DD\x03\x02" +
    "\x02\x02\u02DD\u02DF\x05> \x02\u02DE\u02B7\x03\x02\x02\x02\u02DE\u02CA" +
    "\x03\x02\x02\x02\u02DFI\x03\x02\x02\x02\u02E0\u02E1\x05L'\x02\u02E1K" +
    "\x03\x02\x02\x02\u02E2\u02E6\x05N(\x02\u02E3\u02E5\x05V,\x02\u02E4\u02E3" +
    "\x03\x02\x02\x02\u02E5\u02E8\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02" +
    "\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02EC\x03\x02\x02\x02\u02E8\u02E6\x03" +
    "\x02\x02\x02\u02E9\u02EB\x05Z.\x02\u02EA\u02E9\x03\x02\x02\x02\u02EB\u02EE" +
    "\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02" +
    "\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F1\x05" +
    "R*\x02\u02F0\u02EF\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u0314" +
    "\x03\x02\x02\x02\u02F2\u02F6\x05P)\x02\u02F3\u02F5\x05Z.\x02\u02F4\u02F3" +
    "\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02" +
    "\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02\u02F8\u02F6\x03" +
    "\x02\x02\x02\u02F9\u02FB\x05R*\x02\u02FA\u02F9\x03\x02\x02\x02\u02FA\u02FB" +
    "\x03\x02\x02\x02\u02FB\u0314\x03\x02\x02\x02\u02FC\u02FE\x05V,\x02\u02FD" +
    "\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u02FD\x03\x02" +
    "\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0304\x03\x02\x02\x02\u0301" +
    "\u0303\x05Z.\x02\u0302\u0301\x03\x02\x02\x02\u0303\u0306\x03\x02\x02\x02" +
    "\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0308\x03" +
    "\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0307\u0309\x05R*\x02\u0308\u0307" +
    "\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u0314\x03\x02\x02\x02" +
    "\u030A\u030C\x05Z.\x02\u030B\u030A\x03\x02\x02\x02\u030C\u030D\x03\x02" +
    "\x02\x02\u030D\u030B\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E" +
    "\u0310\x03\x02\x02\x02\u030F\u0311\x05R*\x02\u0310\u030F\x03\x02\x02\x02" +
    "\u0310\u0311\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0314\x05" +
    "R*\x02\u0313\u02E2\x03\x02\x02\x02\u0313\u02F2\x03\x02\x02\x02\u0313\u02FD" +
    "\x03\x02\x02\x02\u0313\u030B\x03\x02\x02\x02\u0313\u0312\x03\x02\x02\x02" +
    "\u0314M\x03\x02\x02\x02\u0315\u0317\x05V,\x02\u0316\u0315\x03\x02\x02" +
    "\x02\u0317\u0318\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0318\u0319" +
    "\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031C\x078\x02\x02" +
    "\u031B\u031D\x073\x02\x02\u031C\u031B\x03\x02\x02\x02\u031C\u031D\x03" +
    "\x02\x02\x02\u031DO\x03\x02\x02\x02\u031E\u0320\x05V,\x02\u031F\u031E" +
    "\x03\x02\x02\x02\u0320\u0323\x03\x02\x02\x02\u0321\u031F\x03\x02\x02\x02" +
    "\u0321\u0322\x03\x02\x02\x02\u0322\u0325\x03\x02\x02\x02\u0323\u0321\x03" +
    "\x02\x02\x02\u0324\u0326\x05Z.\x02\u0325\u0324\x03\x02\x02\x02\u0326\u0327" +
    "\x03\x02\x02\x02\u0327\u0325\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02" +
    "\u0328\u0329\x03\x02\x02\x02\u0329\u032B\x078\x02\x02\u032A\u032C\x07" +
    "3\x02\x02\u032B\u032A\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C" +
    "Q\x03\x02\x02\x02\u032D\u032E\x077\x02\x02\u032E\u0332\x05V,\x02\u032F" +
    "\u0331\x05\\/\x02\u0330\u032F\x03\x02\x02\x02\u0331\u0334\x03\x02\x02" +
    "\x02\u0332\u0330\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0336" +
    "\x03\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0335\u0337\x05T+\x02\u0336" +
    "\u0335\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u034F\x03\x02" +
    "\x02\x02\u0338\u0339\x077\x02\x02\u0339\u033D\x05X-\x02\u033A\u033C\x05" +
    "\\/\x02\u033B\u033A\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D" +
    "\u033B\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u0341\x03\x02" +
    "\x02\x02\u033F\u033D\x03\x02\x02\x02\u0340\u0342\x05T+\x02\u0341\u0340" +
    "\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u034F\x03\x02\x02\x02" +
    "\u0343\u0344\x077\x02\x02\u0344\u0346\x073\x02\x02\u0345\u0347\x05\\/" +
    "\x02\u0346\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u0346" +
    "\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034B\x03\x02\x02\x02" +
    "\u034A\u034C\x05T+\x02\u034B\u034A\x03\x02\x02\x02\u034B\u034C\x03\x02" +
    "\x02\x02\u034C\u034F\x03\x02\x02\x02\u034D\u034F\x05T+\x02\u034E\u032D" +
    "\x03\x02\x02\x02\u034E\u0338\x03\x02\x02\x02\u034E\u0343\x03\x02\x02\x02" +
    "\u034E\u034D\x03\x02\x02\x02\u034FS\x03\x02\x02\x02\u0350\u0351\x07G\x02" +
    "\x02\u0351\u0352\x05V,\x02\u0352U\x03\x02\x02\x02\u0353\u0355\x05^0\x02" +
    "\u0354\u0356\x073\x02\x02\u0355\u0354\x03\x02\x02\x02\u0355\u0356\x03" +
    "\x02\x02\x02\u0356\u0358\x03\x02\x02\x02\u0357\u0359\x07^\x02\x02\u0358" +
    "\u0357\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359W\x03\x02\x02" +
    "\x02\u035A\u035C\x05`1\x02\u035B\u035D\x073\x02\x02\u035C\u035B\x03\x02" +
    "\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035F\x03\x02\x02\x02\u035E" +
    "\u0360\x07^\x02\x02\u035F\u035E\x03\x02\x02\x02\u035F\u0360\x03\x02\x02" +
    "\x02\u0360Y\x03\x02\x02\x02\u0361\u0362\x05^0\x02\u0362\u0364\x05f4\x02" +
    "\u0363\u0365\x073\x02\x02\u0364\u0363\x03\x02\x02\x02\u0364\u0365\x03" +
    "\x02\x02\x02\u0365\u0367\x03\x02\x02\x02\u0366\u0368\x07^\x02\x02\u0367" +
    "\u0366\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368[\x03\x02\x02" +
    "\x02\u0369\u036B\x05^0\x02\u036A\u036C\x05f4\x02\u036B\u036A\x03\x02\x02" +
    "\x02\u036B\u036C\x03\x02\x02\x02\u036C\u036E\x03\x02\x02\x02\u036D\u036F" +
    "\x073\x02\x02\u036E\u036D\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02" +
    "\u036F\u0371\x03\x02\x02\x02\u0370\u0372\x07^\x02\x02\u0371\u0370\x03" +
    "\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372]\x03\x02\x02\x02\u0373" +
    "\u0375\x07[\x02\x02\u0374\u0376\x05b2\x02\u0375\u0374\x03\x02\x02\x02" +
    "\u0375\u0376\x03\x02\x02\x02";
  private static readonly _serializedATNSegment2: string =
    "\u0376_\x03\x02\x02\x02\u0377\u0378\x07[\x02\x02\u0378\u0379\x05d3\x02" +
    "\u0379a\x03\x02\x02\x02\u037A\u037B\x072\x02\x02\u037B\u037C\x05\xD2j" +
    "\x02\u037Cc\x03\x02\x02\x02\u037D\u037E\x072\x02\x02\u037E\u037F\x05\xD8" +
    "m\x02\u037Fe\x03\x02\x02\x02\u0380\u0381\x07=\x02\x02\u0381\u0382\x05" +
    "\xD2j\x02\u0382g\x03\x02\x02\x02\u0383\u0384\x07(\x02\x02\u0384\u0385" +
    "\x05\xE0q\x02\u0385\u0386\x072\x02\x02\u0386\u038B\x05> \x02\u0387\u038C" +
    "\x05j6\x02\u0388\u038A\x05l7\x02\u0389\u0388\x03\x02\x02\x02\u0389\u038A" +
    "\x03\x02\x02\x02\u038A\u038C\x03\x02\x02\x02\u038B\u0387\x03\x02\x02\x02" +
    "\u038B\u0389\x03\x02\x02\x02\u038Ci\x03\x02\x02\x02\u038D\u038E\x07'" +
    "\x02\x02\u038E\u038F\x05\xE0q\x02\u038F\u0390\x072\x02\x02\u0390\u0395" +
    "\x05> \x02\u0391\u0396\x05j6\x02\u0392\u0394\x05l7\x02\u0393\u0392\x03" +
    "\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0396\x03\x02\x02\x02\u0395" +
    "\u0391\x03\x02\x02\x02\u0395\u0393\x03\x02\x02\x02\u0396k\x03\x02\x02" +
    "\x02\u0397\u0398\x07\n\x02\x02\u0398\u0399\x072\x02\x02\u0399\u039A\x05" +
    "> \x02\u039Am\x03\x02\x02\x02\u039B\u039C\x07 \x02\x02\u039C\u039D\x05" +
    "\xE0q\x02\u039D\u039E\x072\x02\x02\u039E\u03A0\x05> \x02\u039F\u03A1\x05" +
    "l7\x02\u03A0\u039F\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1o" +
    "\x03\x02\x02\x02\u03A2\u03A4\x07&\x02\x02\u03A3\u03A2\x03\x02\x02\x02" +
    "\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A6\x07" +
    "\x19\x02\x02\u03A6\u03A7\x05\u0168\xB5\x02\u03A7\u03A8\x07\x10\x02\x02" +
    "\u03A8\u03A9\x05\xD6l\x02\u03A9\u03AB\x072\x02\x02\u03AA\u03AC\x07^\x02" +
    "\x02\u03AB\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AD" +
    "\x03\x02\x02\x02\u03AD\u03AF\x05> \x02\u03AE\u03B0\x05l7\x02\u03AF\u03AE" +
    "\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0q\x03\x02\x02\x02\u03B1" +
    "\u03B3\x07&\x02\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02" +
    "\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03D0\x07%\x02\x02\u03B5\u03B6" +
    "\x07+\x02\x02\u03B6\u03BB\x05t;\x02\u03B7\u03B8\x073\x02\x02\u03B8\u03BA" +
    "\x05t;\x02\u03B9\u03B7\x03\x02\x02\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB" +
    "\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BF\x03\x02" +
    "\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BE\u03C0\x073\x02\x02\u03BF\u03BE" +
    "\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02" +
    "\u03C1\u03C2\x07.\x02\x02\u03C2\u03C3\x072\x02\x02\u03C3\u03D1\x03\x02" +
    "\x02\x02\u03C4\u03C9\x05t;\x02\u03C5\u03C6\x073\x02\x02\u03C6\u03C8\x05" +
    "t;\x02\u03C7\u03C5\x03\x02\x02\x02\u03C8\u03CB\x03\x02\x02\x02\u03C9\u03C7" +
    "\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CC\x03\x02\x02\x02" +
    "\u03CB\u03C9\x03\x02\x02\x02\u03CC\u03CE\x072\x02\x02\u03CD\u03CF\x07" +
    "^\x02\x02\u03CE\u03CD\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF" +
    "\u03D1\x03\x02\x02\x02\u03D0\u03B5\x03\x02\x02\x02\u03D0\u03C4\x03\x02" +
    "\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D3\x05> \x02\u03D3s\x03" +
    "\x02\x02\x02\u03D4\u03D7\x05\xD2j\x02\u03D5\u03D6\x07\x1C\x02\x02\u03D6" +
    "\u03D8\x05\u016E\xB8\x02\u03D7\u03D5\x03\x02\x02\x02\u03D7\u03D8\x03\x02" +
    "\x02\x02\u03D8u\x03\x02\x02\x02\u03D9\u03DA\x07\x1B\x02\x02\u03DA\u03DB" +
    "\x072\x02\x02\u03DB\u03DC\x05> \x02\u03DC\u03DD\x05|?\x02\u03DD\u03FB" +
    "\x03\x02\x02\x02\u03DE\u03DF\x07\x1B\x02\x02\u03DF\u03E0\x072\x02\x02" +
    "\u03E0\u03E2\x05> \x02\u03E1\u03E3\x05x=\x02\u03E2\u03E1\x03\x02\x02\x02" +
    "\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E2\x03\x02\x02\x02\u03E4\u03E5\x03" +
    "\x02\x02\x02\u03E5\u03E7\x03\x02\x02\x02\u03E6\u03E8\x05l7\x02\u03E7\u03E6" +
    "\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03EA\x03\x02\x02\x02" +
    "\u03E9\u03EB\x05|?\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB\x03\x02" +
    "\x02\x02\u03EB\u03FB\x03\x02\x02\x02\u03EC\u03ED\x07\x1B\x02\x02\u03ED" +
    "\u03EE\x072\x02\x02\u03EE\u03F0\x05> \x02\u03EF\u03F1\x05z>\x02\u03F0" +
    "\u03EF\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F0\x03\x02" +
    "\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F5\x03\x02\x02\x02\u03F4" +
    "\u03F6\x05l7\x02\u03F5\u03F4\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02" +
    "\u03F6\u03F8\x03\x02\x02\x02\u03F7\u03F9\x05|?\x02\u03F8\u03F7\x03\x02" +
    "\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03FB\x03\x02\x02\x02\u03FA" +
    "\u03D9\x03\x02\x02\x02\u03FA\u03DE\x03\x02\x02\x02\u03FA\u03EC\x03\x02" +
    "\x02\x02\u03FBw\x03\x02\x02\x02\u03FC\u0402\x07\x0F\x02\x02\u03FD\u0400" +
    "\x05\xD2j\x02\u03FE\u03FF\x07\x1C\x02\x02\u03FF\u0401\x07[\x02\x02\u0400" +
    "\u03FE\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\u0403\x03\x02" +
    "\x02\x02\u0402\u03FD\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403" +
    "\u0404\x03\x02\x02\x02\u0404\u0405\x072\x02\x02\u0405\u0406\x05> \x02" +
    "\u0406y\x03\x02\x02\x02\u0407\u0408\x07\x0F\x02\x02\u0408\u0409\x077\x02" +
    "\x02\u0409\u040C\x05\xD2j\x02\u040A\u040B\x07\x1C\x02\x02\u040B\u040D" +
    "\x07[\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02" +
    "\u040D\u040E\x03\x02\x02\x02\u040E\u040F\x072\x02\x02\u040F\u0410\x05" +
    "> \x02\u0410{\x03\x02\x02\x02\u0411\u0412\x07\x14\x02\x02\u0412\u0413" +
    "\x072\x02\x02\u0413\u0414\x05> \x02\u0414}\x03\x02\x02\x02\u0415\u0416" +
    "\x05\u0186\xC4\x02\u0416\u0417\x05\x80A\x02\u0417\u0418\x072\x02\x02\u0418" +
    "\u0419\x07_\x02\x02\u0419\u041B\x07\x03\x02\x02\u041A\u041C\x05\x82B\x02" +
    "\u041B\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u041B\x03" +
    "\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F" +
    "\u0420\x07\x04\x02\x02\u0420\x7F\x03\x02\x02\x02\u0421\u0422\x05\xDCo" +
    "\x02\u0422\u0424\x073\x02\x02\u0423\u0425\x05\xDAn\x02\u0424\u0423\x03" +
    "\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425\u0428\x03\x02\x02\x02\u0426" +
    "\u0428\x05\xE0q\x02\u0427\u0421\x03\x02\x02\x02\u0427\u0426\x03\x02\x02" +
    "\x02\u0428\x81\x03\x02\x02\x02\u0429\u042A\x05\u0188\xC5\x02\u042A\u042C" +
    "\x05\x86D\x02\u042B\u042D\x05\x84C\x02\u042C\u042B\x03\x02\x02\x02\u042C" +
    "\u042D\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E\u042F\x072\x02" +
    "\x02\u042F\u0430\x05> \x02\u0430\x83\x03\x02\x02\x02\u0431\u0432\x07(" +
    "\x02\x02\u0432\u0433\x05\xE0q\x02\u0433\x85\x03\x02\x02\x02\u0434\u0437" +
    "\x05\xAEX\x02\u0435\u0437\x05\x88E\x02\u0436\u0434\x03\x02\x02\x02\u0436" +
    "\u0435\x03\x02\x02\x02\u0437\x87\x03\x02\x02\x02\u0438\u043B\x05\x8AF" +
    "\x02\u0439\u043B\x05\x8CG\x02\u043A\u0438\x03\x02\x02\x02\u043A\u0439" +
    "\x03\x02\x02\x02\u043B\x89\x03\x02\x02\x02\u043C\u043D\x05\x8CG\x02\u043D" +
    "\u043E\x07\x1C\x02\x02\u043E\u043F\x05\xA0Q\x02\u043F\x8B\x03\x02\x02" +
    "\x02\u0440\u0445\x05\x8EH\x02\u0441\u0442\x079\x02\x02\u0442\u0444\x05" +
    "\x8EH\x02\u0443\u0441\x03\x02\x02\x02\u0444\u0447\x03\x02\x02\x02\u0445" +
    "\u0443\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\x8D\x03\x02\x02" +
    "\x02\u0447\u0445\x03\x02\x02\x02\u0448\u0451\x05\x90I\x02\u0449\u0451" +
    "\x05\x9EP\x02\u044A\u0451\x05\xA2R\x02\u044B\u0451\x05\xA4S\x02\u044C" +
    "\u0451\x05\xAAV\x02\u044D\u0451\x05\xACW\x02\u044E\u0451\x05\xB6\\\x02" +
    "\u044F\u0451\x05\xBE`\x02\u0450\u0448\x03\x02\x02\x02\u0450\u0449\x03" +
    "\x02\x02\x02\u0450\u044A\x03\x02\x02\x02\u0450\u044B\x03\x02\x02\x02\u0450" +
    "\u044C\x03\x02\x02\x02\u0450\u044D\x03\x02\x02\x02\u0450\u044E\x03\x02" +
    "\x02\x02\u0450\u044F\x03\x02\x02\x02\u0451\x8F\x03\x02\x02\x02\u0452\u0459" +
    "\x05\x96L\x02\u0453\u0459\x05\x94K\x02\u0454\u0459\x05\u0140\xA1\x02\u0455" +
    "\u0459\x07\r\x02\x02\u0456\u0459\x07\x12\x02\x02\u0457\u0459\x07\b\x02" +
    "\x02\u0458\u0452\x03\x02\x02\x02\u0458\u0453\x03\x02\x02\x02\u0458\u0454" +
    "\x03\x02\x02\x02\u0458\u0455\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02" +
    "\u0458\u0457\x03\x02\x02\x02\u0459\x91\x03\x02\x02\x02\u045A\u0461\x05" +
    "\x96L\x02\u045B\u0461\x05\x94K\x02\u045C\u0461\x05\u0140\xA1\x02\u045D" +
    "\u0461\x07\r\x02\x02\u045E\u0461\x07\x12\x02\x02\u045F\u0461\x07\b\x02" +
    "\x02\u0460\u045A\x03\x02\x02\x02\u0460\u045B\x03\x02\x02\x02\u0460\u045C" +
    "\x03\x02\x02\x02\u0460\u045D\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02" +
    "\u0460\u045F\x03\x02\x02\x02\u0461\x93\x03\x02\x02\x02\u0462\u0463\x05" +
    "\x98M\x02\u0463\u0464\t\x04\x02\x02\u0464\u0465\x05\x9CO\x02\u0465\x95" +
    "\x03\x02\x02\x02\u0466\u0468\x076\x02\x02\u0467\u0466\x03\x02\x02\x02" +
    "\u0467\u0468\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\u046A\x07" +
    "\\\x02\x02\u046A\x97\x03\x02\x02\x02\u046B\u046D\x076\x02\x02\u046C\u046B" +
    "\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02" +
    "\u046E\u046F\x05\x9AN\x02\u046F\x99\x03\x02\x02\x02\u0470\u0471\x07\\" +
    "\x02\x02\u0471\x9B\x03\x02\x02\x02\u0472\u0473\x07\\\x02\x02\u0473\x9D" +
    "\x03\x02\x02\x02\u0474\u0475\x05\xA0Q\x02\u0475\x9F\x03\x02\x02\x02\u0476" +
    "\u0477\x05\u018C\xC7\x02\u0477\xA1\x03\x02\x02\x02\u0478\u0479\x05\u018A" +
    "\xC6\x02\u0479\xA3\x03\x02\x02\x02\u047A\u047B\x05\xA6T\x02\u047B\xA5" +
    "\x03\x02\x02\x02\u047C\u047F\x07[\x02\x02\u047D\u047E\x071\x02\x02\u047E" +
    "\u0480\x07[\x02\x02\u047F\u047D\x03\x02\x02\x02\u0480\u0481\x03\x02\x02" +
    "\x02\u0481\u047F\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\xA7" +
    "\x03\x02\x02\x02\u0483\u0488\x07[\x02\x02\u0484\u0485\x071\x02\x02\u0485" +
    "\u0487\x07[\x02\x02\u0486\u0484\x03\x02\x02\x02\u0487\u048A\x03\x02\x02" +
    "\x02\u0488\u0486\x03\x02\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\xA9" +
    "\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02\u048B\u048C\x07+\x02\x02" +
    "\u048C\u048D\x05\x88E\x02\u048D\u048E\x07.\x02\x02\u048E\xAB\x03\x02\x02" +
    "\x02\u048F\u0491\x07,\x02\x02\u0490\u0492\x05\xB0Y\x02\u0491\u0490\x03" +
    "\x02\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493" +
    "\u049A\x07/\x02\x02\u0494\u0496\x07+\x02\x02\u0495\u0497\x05\xAEX\x02" +
    "\u0496\u0495\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0498\x03" +
    "\x02\x02\x02\u0498\u049A\x07.\x02\x02\u0499\u048F\x03\x02\x02\x02\u0499" +
    "\u0494\x03\x02\x02\x02\u049A\xAD\x03\x02\x02\x02\u049B\u049C\x05\xB2Z" +
    "\x02\u049C\u049E\x073\x02\x02\u049D\u049F\x05\xB0Y\x02\u049E\u049D\x03" +
    "\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F\xAF\x03\x02\x02\x02\u04A0" +
    "\u04A5\x05\xB2Z\x02\u04A1\u04A2\x073\x02\x02\u04A2\u04A4\x05\xB2Z\x02" +
    "\u04A3\u04A1\x03\x02\x02\x02\u04A4\u04A7\x03\x02\x02\x02\u04A5\u04A3\x03" +
    "\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A9\x03\x02\x02\x02\u04A7" +
    "\u04A5\x03\x02\x02\x02\u04A8\u04AA\x073\x02\x02\u04A9\u04A8\x03\x02\x02" +
    "\x02\u04A9\u04AA\x03\x02\x02\x02\u04AA\xB1\x03\x02\x02\x02\u04AB\u04AE" +
    "\x05\xB4[\x02\u04AC\u04AE\x05\x88E\x02\u04AD\u04AB\x03\x02\x02\x02\u04AD" +
    "\u04AC\x03\x02\x02\x02\u04AE\xB3\x03\x02\x02\x02\u04AF\u04B0\x077\x02" +
    "\x02\u04B0\u04B4\x05\xA0Q\x02\u04B1\u04B2\x077\x02\x02\u04B2\u04B4\x05" +
    "\xA2R\x02\u04B3\u04AF\x03\x02\x02\x02\u04B3\u04B1\x03\x02\x02\x02\u04B4" +
    "\xB5\x03\x02\x02\x02\u04B5\u04B6\x07-\x02\x02\u04B6\u04CA\x070\x02\x02" +
    "\u04B7\u04B8\x07-\x02\x02\u04B8\u04BA\x05\xBC_\x02\u04B9\u04BB\x073\x02" +
    "\x02\u04BA\u04B9\x03\x02\x02\x02\u04BA\u04BB\x03\x02\x02\x02\u04BB\u04BC" +
    "\x03\x02\x02\x02\u04BC\u04BD\x070\x02\x02\u04BD\u04CA\x03\x02\x02\x02" +
    "\u04BE\u04BF\x07-\x02\x02\u04BF\u04C2\x05\xB8]\x02\u04C0\u04C1\x073\x02" +
    "\x02\u04C1\u04C3\x05\xBC_\x02\u04C2\u04C0\x03\x02\x02\x02\u04C2\u04C3" +
    "\x03\x02\x02\x02\u04C3\u04C5\x03\x02\x02\x02\u04C4\u04C6\x073\x02\x02" +
    "\u04C5\u04C4\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C7\x03" +
    "\x02\x02\x02\u04C7\u04C8\x070\x02\x02\u04C8\u04CA\x03\x02\x02\x02\u04C9" +
    "\u04B5\x03\x02\x02\x02\u04C9\u04B7\x03\x02\x02\x02\u04C9\u04BE\x03\x02" +
    "\x02\x02\u04CA\xB7\x03\x02\x02\x02\u04CB\u04D0\x05\xBA^\x02\u04CC\u04CD" +
    "\x073\x02\x02\u04CD\u04CF\x05\xBA^\x02\u04CE\u04CC\x03\x02\x02\x02\u04CF" +
    "\u04D2\x03\x02\x02\x02\u04D0\u04CE\x03\x02\x02\x02\u04D0\u04D1\x03\x02" +
    "\x02\x02\u04D1\xB9\x03\x02\x02\x02\u04D2\u04D0\x03\x02\x02\x02\u04D3\u04D6" +
    "\x05\x92J\x02\u04D4\u04D6\x05\xA6T\x02\u04D5\u04D3\x03\x02\x02\x02\u04D5" +
    "\u04D4\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04D8\x072\x02" +
    "\x02\u04D8\u04D9\x05\x88E\x02\u04D9\xBB\x03\x02\x02\x02\u04DA\u04DB\x07" +
    "G\x02\x02\u04DB\u04DC\x05\xA0Q\x02\u04DC\xBD\x03\x02\x02\x02\u04DD\u04DE" +
    "\x05\xA8U\x02\u04DE\u04EA\x07+\x02\x02\u04DF\u04E2\x05\xC0a\x02\u04E0" +
    "\u04E1\x073\x02\x02\u04E1\u04E3\x05\xC2b\x02\u04E2\u04E0\x03\x02\x02\x02" +
    "\u04E2\u04E3\x03\x02\x02\x02\u04E3\u04E6\x03\x02\x02\x02\u04E4\u04E6\x05" +
    "\xC2b\x02\u04E5\u04DF\x03\x02\x02\x02\u04E5\u04E4\x03\x02\x02\x02\u04E6" +
    "\u04E8\x03\x02\x02\x02\u04E7\u04E9\x073\x02\x02\u04E8\u04E7\x03\x02\x02" +
    "\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EB\x03\x02\x02\x02\u04EA\u04E5" +
    "\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02" +
    "\u04EC\u04ED\x07.\x02\x02\u04ED\xBF\x03\x02\x02\x02\u04EE\u04F3\x05\x88" +
    "E\x02\u04EF\u04F0\x073\x02\x02\u04F0\u04F2\x05\x88E\x02\u04F1\u04EF\x03" +
    "\x02\x02\x02\u04F2\u04F5\x03\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F3" +
    "\u04F4\x03\x02\x02\x02\u04F4\xC1\x03\x02\x02\x02\u04F5\u04F3\x03\x02\x02" +
    "\x02\u04F6\u04FB\x05\xC4c\x02\u04F7\u04F8\x073\x02\x02\u04F8\u04FA\x05" +
    "\xC4c\x02\u04F9\u04F7\x03\x02\x02\x02\u04FA\u04FD\x03\x02\x02\x02\u04FB" +
    "\u04F9\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\xC3\x03\x02\x02" +
    "\x02\u04FD\u04FB\x03\x02\x02\x02\u04FE\u04FF\x07[\x02\x02\u04FF\u0500" +
    "\x07=\x02\x02\u0500\u0501\x05\x88E\x02\u0501\xC5\x03\x02\x02\x02\u0502" +
    "\u0503\x05\u0184\xC3\x02\u0503\u0505\x07[\x02\x02\u0504\u0506\x05\xC8" +
    "e\x02\u0505\u0504\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u0507" +
    "\x03\x02\x02\x02\u0507\u0508\x07=\x02\x02\u0508\u0509\x05\xD2j\x02\u0509" +
    "\xC7\x03\x02\x02\x02\u050A\u050B\x07,\x02\x02\u050B\u050C\x05\xCAf\x02" +
    "\u050C\u050D\x07/\x02\x02\u050D\xC9\x03\x02\x02\x02\u050E\u0513\x05\xCC" +
    "g\x02\u050F\u0510\x073\x02\x02\u0510\u0512\x05\xCCg\x02\u0511\u050F\x03" +
    "\x02\x02\x02\u0512\u0515\x03\x02\x02\x02\u0513\u0511\x03\x02\x02\x02\u0513" +
    "\u0514\x03\x02\x02\x02\u0514\u0517\x03\x02\x02\x02\u0515\u0513\x03\x02" +
    "\x02\x02\u0516\u0518\x073\x02\x02\u0517\u0516\x03\x02\x02\x02\u0517\u0518" +
    "\x03\x02\x02\x02\u0518\xCB\x03\x02\x02\x02\u0519\u051B\x07[\x02\x02\u051A" +
    "\u051C\x05\xCEh\x02\u051B\u051A\x03\x02\x02\x02\u051B\u051C\x03\x02\x02" +
    "\x02\u051C\u052A\x03\x02\x02\x02\u051D\u051E\x077\x02\x02\u051E\u0521" +
    "\x07[\x02\x02\u051F\u0520\x072\x02\x02\u0520\u0522\x05\xD2j\x02\u0521" +
    "\u051F\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522\u052A\x03\x02" +
    "\x02\x02\u0523\u0524\x07G\x02\x02\u0524\u0527\x07[\x02\x02\u0525\u0526" +
    "\x072\x02\x02\u0526\u0528\x05\xD2j\x02\u0527\u0525\x03\x02\x02\x02\u0527" +
    "\u0528\x03\x02\x02\x02\u0528\u052A\x03\x02\x02\x02\u0529\u0519\x03\x02" +
    "\x02\x02\u0529\u051D\x03\x02\x02\x02\u0529\u0523\x03\x02\x02\x02\u052A" +
    "\xCD\x03\x02\x02\x02\u052B\u052C\x072\x02\x02\u052C\u052D\x05\xD2j\x02" +
    "\u052D\xCF\x03\x02\x02\x02\u052E\u0533\x05\xD2j\x02\u052F\u0530\x073\x02" +
    "\x02\u0530\u0532\x05\xD2j\x02\u0531\u052F\x03\x02\x02\x02\u0532\u0535" +
    "\x03\x02\x02\x02\u0533\u0531\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02" +
    "\u0534\u0537\x03\x02\x02\x02\u0535\u0533\x03\x02\x02\x02\u0536\u0538\x07" +
    "3\x02\x02\u0537\u0536\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02\u0538" +
    "\xD1\x03\x02\x02\x02\u0539\u053F\x05\xE2r\x02\u053A\u053B\x07(\x02\x02" +
    "\u053B\u053C\x05\xE2r\x02\u053C\u053D\x07\n\x02\x02\u053D\u053E\x05\xD2" +
    "j\x02\u053E\u0540\x03\x02\x02\x02\u053F\u053A\x03\x02\x02\x02\u053F\u0540" +
    "\x03\x02\x02\x02\u0540\u0543\x03\x02\x02\x02\u0541\u0543\x05\u011C\x8F" +
    "\x02\u0542\u0539\x03\x02\x02\x02\u0542\u0541\x03\x02\x02\x02\u0543\xD3" +
    "\x03\x02\x02\x02\u0544\u054A\x07*\x02\x02\u0545\u0546\x07\x1E\x02\x02" +
    "\u0546\u054B\x05\xD2j\x02\u0547\u0549\x05\xD6l\x02\u0548\u0547\x03\x02" +
    "\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054B\x03\x02\x02\x02\u054A" +
    "\u0545\x03\x02\x02\x02\u054A\u0548\x03\x02\x02\x02\u054B\xD5\x03\x02\x02" +
    "\x02\u054C\u0551\x05\xD8m\x02\u054D\u054E\x073\x02\x02\u054E\u0550\x05" +
    "\xD8m\x02\u054F\u054D\x03\x02\x02\x02\u0550\u0553\x03\x02\x02\x02\u0551" +
    "\u054F\x03\x02\x02\x02\u0551\u0552\x03\x02\x02\x02\u0552\u0555\x03\x02" +
    "\x02\x02\u0553\u0551\x03\x02\x02\x02\u0554\u0556\x073\x02\x02\u0555\u0554" +
    "\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02\u0556\xD7\x03\x02\x02\x02" +
    "\u0557\u0558\x077\x02\x02\u0558\u055B\x05\u0100\x81\x02\u0559\u055B\x05" +
    "\xD2j\x02\u055A\u0557\x03\x02\x02\x02\u055A\u0559\x03\x02\x02\x02\u055B" +
    "\xD9\x03\x02\x02\x02\u055C\u0561\x05\xDCo\x02\u055D\u055E\x073\x02\x02" +
    "\u055E\u0560\x05\xDCo\x02\u055F\u055D\x03\x02\x02\x02\u0560\u0563\x03" +
    "\x02\x02\x02\u0561\u055F\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02\u0562" +
    "\u0565\x03\x02\x02\x02\u0563\u0561\x03\x02\x02\x02\u0564\u0566\x073\x02" +
    "\x02\u0565\u0564\x03\x02\x02\x02\u0565\u0566\x03\x02\x02\x02\u0566\xDB" +
    "\x03\x02\x02\x02\u0567\u0568\x077\x02\x02\u0568\u056B\x05\u0100\x81\x02" +
    "\u0569\u056B\x05\xE0q\x02\u056A\u0567\x03\x02\x02\x02\u056A\u0569\x03" +
    "\x02\x02\x02\u056B\xDD\x03\x02\x02\x02\u056C\u056D\x07[\x02\x02\u056D" +
    "\u056E\x07Y\x02\x02\u056E\u056F\x05\xD2j\x02\u056F\xDF\x03\x02\x02\x02" +
    "\u0570\u0573\x05\xDEp\x02\u0571\u0573\x05\xD2j\x02\u0572\u0570\x03\x02" +
    "\x02\x02\u0572\u0571\x03\x02\x02\x02\u0573\xE1\x03\x02\x02\x02\u0574\u0579" +
    "\x05\xE4s\x02\u0575\u0576\x07)\x02\x02\u0576\u0578\x05\xE4s\x02\u0577" +
    "\u0575\x03\x02\x02\x02\u0578\u057B\x03\x02\x02\x02\u0579\u0577\x03\x02" +
    "\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\xE3\x03\x02\x02\x02\u057B\u0579" +
    "\x03\x02\x02\x02\u057C\u0581\x05\xE6t\x02\u057D\u057E\x07\x17\x02\x02" +
    "\u057E\u0580\x05\xE6t\x02\u057F\u057D\x03\x02\x02\x02\u0580\u0583\x03" +
    "\x02\x02\x02\u0581\u057F\x03\x02\x02\x02\u0581\u0582\x03\x02\x02\x02\u0582" +
    "\xE5\x03\x02\x02\x02\u0583\u0581\x03\x02\x02\x02\u0584\u0585\x07$\x02" +
    "\x02\u0585\u0588\x05\xE6t\x02\u0586\u0588\x05\xE8u\x02\u0587\u0584\x03" +
    "\x02\x02\x02\u0587\u0586\x03\x02\x02\x02\u0588\xE7\x03\x02\x02\x02\u0589" +
    "\u058D\x05\u0100\x81\x02\u058A\u058C\x05\xEAv\x02\u058B\u058A\x03\x02" +
    "\x02\x02\u058C\u058F\x03\x02\x02\x02\u058D\u058B\x03\x02\x02\x02\u058D" +
    "\u058E\x03\x02\x02\x02\u058E\xE9\x03\x02\x02\x02\u058F\u058D\x03\x02\x02" +
    "\x02\u0590\u059B\x05\xECw\x02\u0591\u059B\x05\xEEx\x02\u0592\u059B\x05" +
    "\xF0y\x02\u0593\u059B\x05\xF2z\x02\u0594\u059B\x05\xF4{\x02\u0595\u059B" +
    "\x05\xF6|\x02\u0596\u059B\x05\xF8}\x02\u0597\u059B\x05\xFA~\x02\u0598" +
    "\u059B\x05\xFC\x7F\x02\u0599\u059B\x05\xFE\x80\x02\u059A\u0590\x03\x02" +
    "\x02\x02\u059A\u0591\x03\x02\x02\x02\u059A\u0592\x03\x02\x02\x02\u059A" +
    "\u0593\x03\x02\x02\x02\u059A\u0594\x03\x02\x02\x02\u059A\u0595\x03\x02" +
    "\x02\x02\u059A\u0596\x03\x02\x02\x02\u059A\u0597\x03\x02\x02\x02\u059A" +
    "\u0598\x03\x02\x02\x02\u059A\u0599\x03\x02\x02\x02\u059B\xEB\x03\x02\x02" +
    "\x02\u059C\u059D\x07?\x02\x02\u059D\u059E\x05\u0100\x81\x02\u059E\xED" +
    "\x03\x02\x02\x02\u059F\u05A0\x07@\x02\x02\u05A0\u05A1\x05\u0100\x81\x02" +
    "\u05A1\xEF\x03\x02\x02\x02\u05A2\u05A3\x07A\x02\x02\u05A3\u05A4\x05\u0100" +
    "\x81\x02\u05A4\xF1\x03\x02\x02\x02\u05A5\u05A6\x07;\x02\x02\u05A6\u05A7" +
    "\x05\u0100\x81\x02\u05A7\xF3\x03\x02\x02\x02\u05A8\u05A9\x07B\x02\x02" +
    "\u05A9\u05AA\x05\u0100\x81\x02\u05AA\xF5\x03\x02\x02\x02\u05AB\u05AC\x07" +
    "<\x02\x02\u05AC\u05AD\x05\u0100\x81\x02\u05AD\xF7\x03\x02\x02\x02\u05AE" +
    "\u05AF\x07$\x02\x02\u05AF\u05B0\x07\x10\x02\x02\u05B0\u05B1\x05\u0100" +
    "\x81\x02\u05B1\xF9\x03\x02\x02\x02\u05B2\u05B3\x07\x10\x02\x02\u05B3\u05B4" +
    "\x05\u0100\x81\x02\u05B4\xFB\x03\x02\x02\x02\u05B5\u05B6\x07\x15\x02\x02" +
    "\u05B6\u05B7\x07$\x02\x02\u05B7\u05B8\x05\u0100\x81\x02\u05B8\xFD\x03" +
    "\x02\x02\x02\u05B9\u05BA\x07\x15\x02\x02\u05BA\u05BB\x05\u0100\x81\x02" +
    "\u05BB\xFF\x03\x02\x02\x02\u05BC\u05BD\b\x81\x01\x02\u05BD\u05BE\x05\u0102" +
    "\x82\x02\u05BE\u05C4\x03\x02\x02\x02\u05BF\u05C0\f\x04\x02\x02\u05C0\u05C1" +
    "\x079\x02\x02\u05C1\u05C3\x05\u0102\x82\x02\u05C2\u05BF\x03\x02\x02\x02" +
    "\u05C3\u05C6\x03\x02\x02\x02\u05C4\u05C2\x03\x02\x02\x02\u05C4\u05C5\x03" +
    "\x02\x02\x02\u05C5\u0101\x03\x02\x02\x02\u05C6\u05C4\x03\x02\x02\x02\u05C7" +
    "\u05C8\b\x82\x01\x02\u05C8\u05C9\x05\u0104\x83\x02\u05C9\u05CF\x03\x02" +
    "\x02\x02\u05CA\u05CB\f\x04\x02\x02\u05CB\u05CC\x07D\x02\x02\u05CC\u05CE" +
    "\x05\u0104\x83\x02\u05CD\u05CA\x03\x02\x02\x02\u05CE\u05D1\x03\x02\x02" +
    "\x02\u05CF\u05CD\x03\x02\x02\x02\u05CF\u05D0\x03\x02\x02\x02\u05D0\u0103" +
    "\x03\x02\x02\x02\u05D1\u05CF\x03\x02\x02\x02\u05D2\u05D3\b\x83\x01\x02" +
    "\u05D3\u05D4\x05\u0106\x84\x02\u05D4\u05DA\x03\x02\x02\x02\u05D5\u05D6" +
    "\f\x04\x02\x02\u05D6\u05D7\x07:\x02\x02\u05D7\u05D9\x05\u0106\x84\x02" +
    "\u05D8\u05D5\x03\x02\x02\x02\u05D9\u05DC\x03\x02\x02\x02\u05DA\u05D8\x03" +
    "\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02\u05DB\u0105\x03\x02\x02\x02\u05DC" +
    "\u05DA\x03\x02\x02\x02\u05DD\u05DE\b\x84\x01\x02\u05DE\u05DF\x05\u0108" +
    "\x85\x02\u05DF\u05E5\x03\x02\x02\x02\u05E0\u05E1\f\x04\x02\x02\u05E1\u05E2" +
    "\t\x05\x02\x02\u05E2\u05E4\x05\u0108\x85\x02\u05E3\u05E0\x03\x02\x02\x02" +
    "\u05E4\u05E7\x03\x02\x02\x02\u05E5\u05E3\x03\x02\x02\x02\u05E5\u05E6\x03" +
    "\x02\x02\x02\u05E6\u0107\x03\x02\x02\x02\u05E7\u05E5\x03\x02\x02\x02\u05E8" +
    "\u05E9\b\x85\x01\x02\u05E9\u05EA\x05\u010A\x86\x02\u05EA\u05F0\x03\x02" +
    "\x02\x02\u05EB\u05EC\f\x04\x02\x02\u05EC\u05ED\t\x04\x02\x02\u05ED\u05EF" +
    "\x05\u010A\x86\x02\u05EE\u05EB\x03\x02\x02\x02\u05EF\u05F2\x03\x02\x02" +
    "\x02\u05F0\u05EE\x03\x02\x02\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1\u0109" +
    "\x03\x02\x02\x02\u05F2\u05F0\x03\x02\x02\x02\u05F3\u05F4\b\x86\x01\x02" +
    "\u05F4\u05F5\x05\u010C\x87\x02\u05F5\u05FB\x03\x02\x02\x02\u05F6\u05F7" +
    "\f\x04\x02\x02\u05F7\u05F8\t\x06\x02\x02\u05F8\u05FA\x05\u010C\x87\x02" +
    "\u05F9\u05F6\x03\x02\x02\x02\u05FA\u05FD\x03\x02\x02\x02\u05FB\u05F9\x03" +
    "\x02\x02\x02\u05FB\u05FC\x03\x02\x02\x02\u05FC\u010B\x03\x02\x02\x02\u05FD" +
    "\u05FB\x03\x02\x02\x02\u05FE\u05FF\x075\x02\x02\u05FF\u0606\x05\u010C" +
    "\x87\x02\u0600\u0601\x076\x02\x02\u0601\u0606\x05\u010C\x87\x02\u0602" +
    "\u0603\x07C\x02\x02\u0603\u0606\x05\u010C\x87\x02\u0604\u0606\x05\u010E" +
    "\x88\x02\u0605\u05FE\x03\x02\x02\x02\u0605\u0600\x03\x02\x02\x02\u0605" +
    "\u0602\x03\x02\x02\x02\u0605\u0604\x03\x02\x02\x02\u0606\u010D\x03\x02" +
    "\x02\x02\u0607\u060A\x05\u0110\x89\x02\u0608\u0609\x07G\x02\x02\u0609" +
    "\u060B\x05\u010C\x87\x02\u060A\u0608\x03\x02\x02\x02\u060A\u060B\x03\x02" +
    "\x02\x02\u060B\u010F\x03\x02\x02\x02\u060C\u060D\x07\t\x02\x02\u060D\u0610" +
    "\x05\u0112\x8A\x02\u060E\u0610\x05\u0112\x8A\x02\u060F\u060C\x03\x02\x02" +
    "\x02\u060F\u060E\x03\x02\x02\x02\u0610\u0111\x03\x02\x02\x02\u0611\u0612" +
    "\b\x8A\x01\x02\u0612\u0613\x05\u0118\x8D\x02\u0613\u0625\x03\x02\x02\x02" +
    "\u0614\u0621\f\x04\x02\x02\u0615\u0616\x071\x02\x02\u0616\u0622\x07[\x02" +
    "\x02\u0617\u0622\x05\u0158\xAD\x02\u0618\u061A\x07+\x02\x02\u0619\u061B" +
    "\x05\u015C\xAF\x02\u061A\u0619\x03\x02\x02\x02\u061A\u061B\x03\x02\x02" +
    "\x02\u061B\u061C\x03\x02\x02\x02\u061C\u0622\x07.\x02\x02\u061D\u061E" +
    "\x07,\x02\x02\u061E\u061F\x05\u0114\x8B\x02\u061F\u0620\x07/\x02\x02\u0620" +
    "\u0622\x03\x02\x02\x02\u0621\u0615\x03\x02\x02\x02\u0621\u0617\x03\x02" +
    "\x02\x02\u0621\u0618\x03\x02\x02\x02\u0621\u061D\x03\x02\x02\x02\u0622" +
    "\u0624\x03\x02\x02\x02\u0623\u0614\x03\x02\x02\x02\u0624\u0627\x03\x02" +
    "\x02\x02\u0625\u0623\x03\x02\x02\x02\u0625\u0626\x03\x02\x02\x02\u0626" +
    "\u0113\x03\x02\x02\x02\u0627\u0625\x03\x02\x02\x02\u0628\u063B\x05\u0116" +
    "\x8C\x02\u0629\u062C\x05\u0116\x8C\x02\u062A\u062C\x05\u0162\xB2\x02\u062B" +
    "\u0629\x03\x02\x02\x02\u062B\u062A\x03\x02\x02\x02\u062C\u0634\x03\x02" +
    "\x02\x02\u062D\u0630\x073\x02\x02\u062E\u0631\x05\u0116\x8C\x02\u062F" +
    "\u0631\x05\u0162\xB2\x02\u0630\u062E\x03\x02\x02\x02\u0630\u062F\x03\x02" +
    "\x02\x02\u0631\u0633\x03\x02\x02\x02\u0632\u062D\x03\x02\x02\x02\u0633" +
    "\u0636\x03\x02\x02\x02\u0634\u0632\x03\x02\x02\x02\u0634\u0635\x03\x02" +
    "\x02\x02\u0635\u0638\x03\x02\x02\x02\u0636\u0634\x03\x02\x02\x02\u0637" +
    "\u0639";
  private static readonly _serializedATNSegment3: string =
    "\x073\x02\x02\u0638\u0637\x03\x02\x02\x02\u0638\u0639\x03\x02\x02\x02" +
    "\u0639\u063B\x03\x02\x02\x02\u063A\u0628\x03\x02\x02\x02\u063A\u062B\x03" +
    "\x02\x02\x02\u063B\u0115\x03\x02\x02\x02\u063C\u063E\x05\xD2j\x02\u063D" +
    "\u063C\x03\x02\x02\x02\u063D\u063E\x03\x02\x02\x02\u063E\u063F\x03\x02" +
    "\x02\x02\u063F\u0641\x072\x02\x02\u0640\u0642\x05\xD2j\x02\u0641\u0640" +
    "\x03\x02\x02\x02\u0641\u0642\x03\x02\x02\x02\u0642\u0647\x03\x02\x02\x02" +
    "\u0643\u0645\x072\x02\x02\u0644\u0646\x05\xD2j\x02\u0645\u0644\x03\x02" +
    "\x02\x02\u0645\u0646\x03\x02\x02\x02\u0646\u0648\x03\x02\x02\x02\u0647" +
    "\u0643\x03\x02\x02\x02\u0647\u0648\x03\x02\x02\x02\u0648\u064B\x03\x02" +
    "\x02\x02\u0649\u064B\x05\xE0q\x02\u064A\u063D\x03\x02\x02\x02\u064A\u0649" +
    "\x03\x02\x02\x02\u064B\u0117\x03\x02\x02\x02\u064C\u0663\x07[\x02\x02" +
    "\u064D\u0663\x07\x12\x02\x02\u064E\u0663\x07\b\x02\x02\u064F\u0663\x07" +
    "\r\x02\x02\u0650\u0663\x05\u0140\xA1\x02\u0651\u0663\x07\\\x02\x02\u0652" +
    "\u0656\x05\u0144\xA3\x02\u0653\u0656\x05\u011A\x8E\x02\u0654\u0656\x05" +
    "\u0158\xAD\x02\u0655\u0652\x03\x02\x02\x02\u0655\u0653\x03\x02\x02\x02" +
    "\u0655\u0654\x03\x02\x02\x02\u0656\u0663\x03\x02\x02\x02\u0657\u065A\x05" +
    "\u0142\xA2\x02\u0658\u065A\x05\u0154\xAB\x02\u0659\u0657\x03\x02\x02\x02" +
    "\u0659\u0658\x03\x02\x02\x02\u065A\u0663\x03\x02\x02\x02\u065B\u0660\x05" +
    "\u0148\xA5\x02\u065C\u0660\x05\u0146\xA4\x02\u065D\u0660\x05\u015A\xAE" +
    "\x02\u065E\u0660\x05\u0156\xAC\x02\u065F\u065B\x03\x02\x02\x02\u065F\u065C" +
    "\x03\x02\x02\x02\u065F\u065D\x03\x02\x02\x02\u065F\u065E\x03\x02\x02\x02" +
    "\u0660\u0663\x03\x02\x02\x02\u0661\u0663\x07X\x02\x02\u0662\u064C\x03" +
    "\x02\x02\x02\u0662\u064D\x03\x02\x02\x02\u0662\u064E\x03\x02\x02\x02\u0662" +
    "\u064F\x03\x02\x02\x02\u0662\u0650\x03\x02\x02\x02\u0662\u0651\x03\x02" +
    "\x02\x02\u0662\u0655\x03\x02\x02\x02\u0662\u0659\x03\x02\x02\x02\u0662" +
    "\u065F\x03\x02\x02\x02\u0662\u0661\x03\x02\x02\x02\u0663\u0119\x03\x02" +
    "\x02\x02\u0664\u0667\x07+\x02\x02\u0665\u0668\x05\xD4k\x02\u0666\u0668" +
    "\x05\xE0q\x02\u0667\u0665\x03\x02\x02\x02\u0667\u0666\x03\x02\x02\x02" +
    "\u0668\u0669\x03\x02\x02\x02\u0669\u066A\x07.\x02\x02\u066A\u011B\x03" +
    "\x02\x02\x02\u066B\u066D\x07\x1A\x02\x02\u066C\u066E\x05\u011E\x90\x02" +
    "\u066D\u066C\x03\x02\x02\x02\u066D\u066E\x03\x02\x02\x02\u066E\u066F\x03" +
    "\x02\x02\x02\u066F\u0670\x072\x02\x02\u0670\u0671\x05\xD2j\x02\u0671\u011D" +
    "\x03\x02\x02\x02\u0672\u0673\x05\u0120\x91\x02\u0673\u011F\x03\x02\x02" +
    "\x02\u0674\u0678\x05\u0122\x92\x02\u0675\u0677\x05\u012A\x96\x02\u0676" +
    "\u0675\x03\x02\x02\x02\u0677\u067A\x03\x02\x02\x02\u0678\u0676\x03\x02" +
    "\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679\u067E\x03\x02\x02\x02\u067A" +
    "\u0678\x03\x02\x02\x02\u067B\u067D\x05\u012C\x97\x02\u067C\u067B\x03\x02" +
    "\x02\x02\u067D\u0680\x03\x02\x02\x02\u067E\u067C\x03\x02\x02\x02\u067E" +
    "\u067F\x03\x02\x02\x02\u067F\u0682\x03\x02\x02\x02\u0680\u067E\x03\x02" +
    "\x02\x02\u0681\u0683\x05\u0126\x94\x02\u0682\u0681\x03\x02\x02\x02\u0682" +
    "\u0683\x03\x02\x02\x02\u0683\u06A6\x03\x02\x02\x02\u0684\u0688\x05\u0124" +
    "\x93\x02\u0685\u0687\x05\u012C\x97\x02\u0686\u0685\x03\x02\x02\x02\u0687" +
    "\u068A\x03\x02\x02\x02\u0688\u0686\x03\x02\x02\x02\u0688\u0689\x03\x02" +
    "\x02\x02\u0689\u068C\x03\x02\x02\x02\u068A\u0688\x03\x02\x02\x02\u068B" +
    "\u068D\x05\u0126\x94\x02\u068C\u068B\x03\x02\x02\x02\u068C\u068D\x03\x02" +
    "\x02\x02\u068D\u06A6\x03\x02\x02\x02\u068E\u0690\x05\u012A\x96\x02\u068F" +
    "\u068E\x03\x02\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691\u068F\x03\x02" +
    "\x02\x02\u0691\u0692\x03\x02\x02\x02\u0692\u0696\x03\x02\x02\x02\u0693" +
    "\u0695\x05\u012C\x97\x02\u0694\u0693\x03\x02\x02\x02\u0695\u0698\x03\x02" +
    "\x02\x02\u0696\u0694\x03\x02\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697" +
    "\u069A\x03\x02\x02\x02\u0698\u0696\x03\x02\x02\x02\u0699\u069B\x05\u0126" +
    "\x94\x02\u069A\u0699\x03\x02\x02\x02\u069A\u069B\x03\x02\x02\x02\u069B" +
    "\u06A6\x03\x02\x02\x02\u069C\u069E\x05\u012C\x97\x02\u069D\u069C\x03\x02" +
    "\x02\x02\u069E\u069F\x03\x02\x02\x02\u069F\u069D\x03\x02\x02\x02\u069F" +
    "\u06A0\x03\x02\x02\x02\u06A0\u06A2\x03\x02\x02\x02\u06A1\u06A3\x05\u0126" +
    "\x94\x02\u06A2\u06A1\x03\x02\x02\x02\u06A2\u06A3\x03\x02\x02\x02\u06A3" +
    "\u06A6\x03\x02\x02\x02\u06A4\u06A6\x05\u0126\x94\x02\u06A5\u0674\x03\x02" +
    "\x02\x02\u06A5\u0684\x03\x02\x02\x02\u06A5\u068F\x03\x02\x02\x02\u06A5" +
    "\u069D\x03\x02\x02\x02\u06A5\u06A4\x03\x02\x02\x02\u06A6\u0121\x03\x02" +
    "\x02\x02\u06A7\u06A9\x05\u012A\x96\x02\u06A8\u06A7\x03\x02\x02\x02\u06A9" +
    "\u06AA\x03\x02\x02\x02\u06AA\u06A8\x03\x02\x02\x02\u06AA\u06AB\x03\x02" +
    "\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06AE\x078\x02\x02\u06AD\u06AF" +
    "\x073\x02\x02\u06AE\u06AD\x03\x02\x02\x02\u06AE\u06AF\x03\x02\x02\x02" +
    "\u06AF\u0123\x03\x02\x02\x02\u06B0\u06B2\x05\u012A\x96\x02\u06B1\u06B0" +
    "\x03\x02\x02\x02\u06B2\u06B5\x03\x02\x02\x02\u06B3\u06B1\x03\x02\x02\x02" +
    "\u06B3\u06B4\x03\x02\x02\x02\u06B4\u06B7\x03\x02\x02\x02\u06B5\u06B3\x03" +
    "\x02\x02\x02\u06B6\u06B8\x05\u012C\x97\x02\u06B7\u06B6\x03\x02\x02\x02" +
    "\u06B8\u06B9\x03\x02\x02\x02\u06B9\u06B7\x03\x02\x02\x02\u06B9\u06BA\x03" +
    "\x02\x02\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB\u06BD\x078\x02\x02\u06BC" +
    "\u06BE\x073\x02\x02\u06BD\u06BC\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02" +
    "\x02\u06BE\u0125\x03\x02\x02\x02\u06BF\u06C0\x077\x02\x02\u06C0\u06C4" +
    "\x05\u012A\x96\x02\u06C1\u06C3\x05\u012E\x98\x02\u06C2\u06C1\x03\x02\x02" +
    "\x02\u06C3\u06C6\x03\x02\x02\x02\u06C4\u06C2\x03\x02\x02\x02\u06C4\u06C5" +
    "\x03\x02\x02\x02\u06C5\u06C8\x03\x02\x02\x02\u06C6\u06C4\x03\x02\x02\x02" +
    "\u06C7\u06C9\x05\u0128\x95\x02\u06C8\u06C7\x03\x02\x02\x02\u06C8\u06C9" +
    "\x03\x02\x02\x02\u06C9\u06D6\x03\x02\x02\x02\u06CA\u06CB\x077\x02\x02" +
    "\u06CB\u06CD\x073\x02\x02\u06CC\u06CE\x05\u012E\x98\x02\u06CD\u06CC\x03" +
    "\x02\x02\x02\u06CE\u06CF\x03\x02\x02\x02\u06CF\u06CD\x03\x02\x02\x02\u06CF" +
    "\u06D0\x03\x02\x02\x02\u06D0\u06D2\x03\x02\x02\x02\u06D1\u06D3\x05\u0128" +
    "\x95\x02\u06D2\u06D1\x03\x02\x02\x02\u06D2\u06D3\x03\x02\x02\x02\u06D3" +
    "\u06D6\x03\x02\x02\x02\u06D4\u06D6\x05\u0128\x95\x02\u06D5\u06BF\x03\x02" +
    "\x02\x02\u06D5\u06CA\x03\x02\x02\x02\u06D5\u06D4\x03\x02\x02\x02\u06D6" +
    "\u0127\x03\x02\x02\x02\u06D7\u06D8\x07G\x02\x02\u06D8\u06D9\x05\u012A" +
    "\x96\x02\u06D9\u0129\x03\x02\x02\x02\u06DA\u06DC\x05\u0130\x99\x02\u06DB" +
    "\u06DD\x073\x02\x02\u06DC\u06DB\x03\x02\x02\x02\u06DC\u06DD\x03\x02\x02" +
    "\x02\u06DD\u012B\x03\x02\x02\x02\u06DE\u06DF\x05\u0130\x99\x02\u06DF\u06E1" +
    "\x05f4\x02\u06E0\u06E2\x073\x02\x02\u06E1\u06E0\x03\x02\x02\x02\u06E1" +
    "\u06E2\x03\x02\x02\x02\u06E2\u012D\x03\x02\x02\x02\u06E3\u06E5\x05\u0130" +
    "\x99\x02\u06E4\u06E6\x05f4\x02\u06E5\u06E4\x03\x02\x02\x02\u06E5\u06E6" +
    "\x03\x02\x02\x02\u06E6\u06E8\x03\x02\x02\x02\u06E7\u06E9\x073\x02\x02" +
    "\u06E8\u06E7\x03\x02\x02\x02\u06E8\u06E9\x03\x02\x02\x02\u06E9\u012F\x03" +
    "\x02\x02\x02\u06EA\u06EB\x07[\x02\x02\u06EB\u0131\x03\x02\x02\x02\u06EC" +
    "\u06EF\x05\u0134\x9B\x02\u06ED\u06EF\x07\x06\x02\x02\u06EE\u06EC\x03\x02" +
    "\x02\x02\u06EE\u06ED\x03\x02\x02\x02\u06EF\u0133\x03\x02\x02\x02\u06F0" +
    "\u06F3\x07-\x02\x02\u06F1\u06F4\x05\xD4k\x02\u06F2\u06F4\x05\xD6l\x02" +
    "\u06F3\u06F1\x03\x02\x02\x02\u06F3\u06F2\x03\x02\x02\x02\u06F4\u06F6\x03" +
    "\x02\x02\x02\u06F5\u06F7\x07=\x02\x02\u06F6\u06F5\x03\x02\x02\x02\u06F6" +
    "\u06F7\x03\x02\x02\x02\u06F7\u06F9\x03\x02\x02\x02\u06F8\u06FA\x05\u0136" +
    "\x9C\x02\u06F9\u06F8\x03\x02\x02\x02\u06F9\u06FA\x03\x02\x02\x02\u06FA" +
    "\u06FC\x03\x02\x02\x02\u06FB\u06FD\x05\u0138\x9D\x02\u06FC\u06FB\x03\x02" +
    "\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD\u06FE\x03\x02\x02\x02\u06FE" +
    "\u06FF\x070\x02\x02\u06FF\u0135\x03\x02\x02\x02\u0700\u0701\x07Z\x02\x02" +
    "\u0701\u0702\x07[\x02\x02\u0702\u0137\x03\x02\x02\x02\u0703\u0707\x07" +
    "2\x02\x02\u0704\u0706\x05\u013A\x9E\x02\u0705\u0704\x03\x02\x02\x02\u0706" +
    "\u0709\x03\x02\x02\x02\u0707\u0705\x03\x02\x02\x02\u0707\u0708\x03\x02" +
    "\x02\x02\u0708\u0139\x03\x02\x02\x02\u0709\u0707\x03\x02\x02\x02\u070A" +
    "\u070D\x07\x06\x02\x02\u070B\u070D\x05\u0134\x9B\x02\u070C\u070A\x03\x02" +
    "\x02\x02\u070C\u070B\x03\x02\x02\x02\u070D\u013B\x03\x02\x02\x02\u070E" +
    "\u0712\x07\x05\x02\x02\u070F\u0711\x05\u0132\x9A\x02\u0710\u070F\x03\x02" +
    "\x02\x02\u0711\u0714\x03\x02\x02\x02\u0712\u0710\x03\x02\x02\x02\u0712" +
    "\u0713\x03\x02\x02\x02\u0713\u0715\x03\x02\x02\x02\u0714\u0712\x03\x02" +
    "\x02\x02\u0715\u0716\x07\x07\x02\x02\u0716\u013D\x03\x02\x02\x02\u0717" +
    "\u0718\x07]\x02\x02\u0718\u013F\x03\x02\x02\x02\u0719\u071C\x05\u013C" +
    "\x9F\x02\u071A\u071C\x05\u013E\xA0\x02\u071B\u0719\x03\x02\x02\x02\u071B" +
    "\u071A\x03\x02\x02\x02\u071C\u071D\x03\x02\x02\x02\u071D\u071B\x03\x02" +
    "\x02\x02\u071D\u071E\x03\x02\x02\x02\u071E\u0141\x03\x02\x02\x02\u071F" +
    "\u0721\x07,\x02\x02\u0720\u0722\x05\xDAn\x02\u0721\u0720\x03\x02\x02\x02" +
    "\u0721\u0722\x03\x02\x02\x02\u0722\u0723\x03\x02\x02\x02\u0723\u0724\x07" +
    "/\x02\x02\u0724\u0143\x03\x02\x02\x02\u0725\u072B\x07+\x02\x02\u0726\u0727" +
    "\x05\xDCo\x02\u0727\u0729\x073\x02\x02\u0728\u072A\x05\xDAn\x02\u0729" +
    "\u0728\x03\x02\x02\x02\u0729\u072A\x03\x02\x02\x02\u072A\u072C\x03\x02" +
    "\x02\x02\u072B\u0726\x03\x02\x02\x02\u072B\u072C\x03\x02\x02\x02\u072C" +
    "\u072D\x03\x02\x02\x02\u072D\u072E\x07.\x02\x02\u072E\u0145\x03\x02\x02" +
    "\x02\u072F\u0730\x07-\x02\x02\u0730\u0731\x05\xDAn\x02\u0731\u0732\x07" +
    "0\x02\x02\u0732\u0147\x03\x02\x02\x02\u0733\u0735\x07-\x02\x02\u0734\u0736" +
    "\x05\u014A\xA6\x02\u0735\u0734\x03\x02\x02\x02\u0735\u0736\x03\x02\x02" +
    "\x02\u0736\u0737\x03\x02\x02\x02\u0737\u0738\x070\x02\x02\u0738\u0149" +
    "\x03\x02\x02\x02\u0739\u073E\x05\u014C\xA7\x02\u073A\u073B\x073\x02\x02" +
    "\u073B\u073D\x05\u014C\xA7\x02\u073C\u073A\x03\x02\x02\x02\u073D\u0740" +
    "\x03\x02\x02\x02\u073E\u073C\x03\x02\x02\x02\u073E\u073F\x03\x02\x02\x02" +
    "\u073F\u0742\x03\x02\x02\x02\u0740\u073E\x03\x02\x02\x02\u0741\u0743\x07" +
    "3\x02\x02\u0742\u0741\x03\x02\x02\x02\u0742\u0743\x03\x02\x02\x02\u0743" +
    "\u014B\x03\x02\x02\x02\u0744\u0745\x07G\x02\x02\u0745\u0748\x05\u0100" +
    "\x81\x02\u0746\u0748\x05\u014E\xA8\x02\u0747\u0744\x03\x02\x02\x02\u0747" +
    "\u0746\x03\x02\x02\x02\u0748\u014D\x03\x02\x02\x02\u0749\u074A\x05\xD2" +
    "j\x02\u074A\u074B\x072\x02\x02\u074B\u074C\x05\xD2j\x02\u074C\u014F\x03" +
    "\x02\x02\x02\u074D\u074F\x05\u0152\xAA\x02\u074E\u074D\x03\x02\x02\x02" +
    "\u074F\u0750\x03\x02\x02\x02\u0750\u074E\x03\x02\x02\x02\u0750\u0751\x03" +
    "\x02\x02\x02\u0751\u0151\x03\x02\x02\x02\u0752\u0754\x07&\x02\x02\u0753" +
    "\u0752\x03\x02\x02\x02\u0753\u0754\x03\x02\x02\x02\u0754\u0755\x03\x02" +
    "\x02\x02\u0755\u0756\x07\x19\x02\x02\u0756\u0757\x05\u0168\xB5\x02\u0757" +
    "\u0758\x07\x10\x02\x02\u0758\u075D\x05\xE2r\x02\u0759\u075A\x07(\x02\x02" +
    "\u075A\u075C\x05\xE2r\x02\u075B\u0759\x03\x02\x02\x02\u075C\u075F\x03" +
    "\x02\x02\x02\u075D\u075B\x03\x02\x02\x02\u075D\u075E\x03\x02\x02\x02\u075E" +
    "\u0153\x03\x02\x02\x02\u075F\u075D\x03\x02\x02\x02\u0760\u0761\x07,\x02" +
    "\x02\u0761\u0762\x05\xE0q\x02\u0762\u0763\x05\u0150\xA9\x02\u0763\u0764" +
    "\x07/\x02\x02\u0764\u0155\x03\x02\x02\x02\u0765\u0766\x07-\x02\x02\u0766" +
    "\u0767\x05\xE0q\x02\u0767\u0768\x05\u0150\xA9\x02\u0768\u0769\x070\x02" +
    "\x02\u0769\u0157\x03\x02\x02\x02\u076A\u076D\x07+\x02\x02\u076B\u076E" +
    "\x05\xDEp\x02\u076C\u076E\x05\xD2j\x02\u076D\u076B\x03\x02\x02\x02\u076D" +
    "\u076C\x03\x02\x02\x02\u076E\u076F\x03\x02\x02\x02\u076F\u0770\x05\u0150" +
    "\xA9\x02\u0770\u0771\x07.\x02\x02\u0771\u0159\x03\x02\x02\x02\u0772\u0773" +
    "\x07-\x02\x02\u0773\u0774\x05\u014E\xA8\x02\u0774\u0775\x05\u0150\xA9" +
    "\x02\u0775\u0776\x070\x02\x02\u0776\u015B\x03\x02\x02\x02\u0777\u0779" +
    "\x05\u015E\xB0\x02\u0778\u077A\x073\x02\x02\u0779\u0778\x03\x02\x02\x02" +
    "\u0779\u077A\x03\x02\x02\x02\u077A\u015D\x03\x02\x02\x02\u077B\u0781\x05" +
    "\u0162\xB2\x02\u077C\u077F\x05\xDEp\x02\u077D\u077F\x05\xD2j\x02\u077E" +
    "\u077C\x03\x02\x02\x02\u077E\u077D\x03\x02\x02\x02\u077F\u0781\x03\x02" +
    "\x02\x02\u0780\u077B\x03\x02\x02\x02\u0780\u077E\x03\x02\x02\x02\u0781" +
    "\u078C\x03\x02\x02\x02\u0782\u0788\x073\x02\x02\u0783\u0789\x05\u0162" +
    "\xB2\x02\u0784\u0787\x05\xDEp\x02\u0785\u0787\x05\xD2j\x02\u0786\u0784" +
    "\x03\x02\x02\x02\u0786\u0785\x03\x02\x02\x02\u0787\u0789\x03\x02\x02\x02" +
    "\u0788\u0783\x03\x02\x02\x02\u0788\u0786\x03\x02\x02\x02\u0789\u078B\x03" +
    "\x02\x02\x02\u078A\u0782\x03\x02\x02\x02\u078B\u078E\x03\x02\x02\x02\u078C" +
    "\u078A\x03\x02\x02\x02\u078C\u078D\x03\x02\x02\x02\u078D\u0791\x03\x02" +
    "\x02\x02\u078E\u078C\x03\x02\x02\x02\u078F\u0790\x073\x02\x02\u0790\u0792" +
    "\x05\u0160\xB1\x02\u0791\u078F\x03\x02\x02\x02\u0791\u0792\x03\x02\x02" +
    "\x02\u0792\u0795\x03\x02\x02\x02\u0793\u0795\x05\u0160\xB1\x02\u0794\u0780" +
    "\x03\x02\x02\x02\u0794\u0793\x03\x02\x02\x02\u0795\u015F\x03\x02\x02\x02" +
    "\u0796\u079B\x05\u0164\xB3\x02\u0797\u0798\x073\x02\x02\u0798\u079A\x05" +
    "\u0164\xB3\x02\u0799\u0797\x03\x02\x02\x02\u079A\u079D\x03\x02\x02\x02" +
    "\u079B\u0799\x03\x02\x02\x02\u079B\u079C\x03\x02\x02\x02\u079C\u07A7\x03" +
    "\x02\x02\x02\u079D\u079B\x03\x02\x02\x02\u079E\u079F\x073\x02\x02\u079F" +
    "\u07A4\x05\u0166\xB4\x02\u07A0\u07A1\x073\x02\x02\u07A1\u07A3\x05\u0166" +
    "\xB4\x02\u07A2\u07A0\x03\x02\x02\x02\u07A3\u07A6\x03\x02\x02\x02\u07A4" +
    "\u07A2\x03\x02\x02\x02\u07A4\u07A5\x03\x02\x02\x02\u07A5\u07A8\x03\x02" +
    "\x02\x02\u07A6\u07A4\x03\x02\x02\x02\u07A7\u079E\x03\x02\x02\x02\u07A7" +
    "\u07A8\x03\x02\x02\x02\u07A8\u07B2\x03\x02\x02\x02\u07A9\u07AE\x05\u0166" +
    "\xB4\x02\u07AA\u07AB\x073\x02\x02\u07AB\u07AD\x05\u0166\xB4\x02\u07AC" +
    "\u07AA\x03\x02\x02\x02\u07AD\u07B0\x03\x02\x02\x02\u07AE\u07AC\x03\x02" +
    "\x02\x02\u07AE\u07AF\x03\x02\x02\x02\u07AF\u07B2\x03\x02\x02\x02\u07B0" +
    "\u07AE\x03\x02\x02\x02\u07B1\u0796\x03\x02\x02\x02\u07B1\u07A9\x03\x02" +
    "\x02\x02\u07B2\u0161\x03\x02\x02\x02\u07B3\u07B4\x077\x02\x02\u07B4\u07B5" +
    "\x05\xD2j\x02\u07B5\u0163\x03\x02\x02\x02\u07B6\u07B7\x07[\x02\x02\u07B7" +
    "\u07B8\x07=\x02\x02\u07B8\u07BB\x05\xD2j\x02\u07B9\u07BB\x05\u0162\xB2" +
    "\x02\u07BA\u07B6\x03\x02\x02\x02\u07BA\u07B9\x03\x02\x02\x02\u07BB\u0165" +
    "\x03\x02\x02\x02\u07BC\u07BD\x07[\x02\x02\u07BD\u07BE\x07=\x02\x02\u07BE" +
    "\u07C2\x05\xD2j\x02\u07BF\u07C0\x07G\x02\x02\u07C0\u07C2\x05\xD2j\x02" +
    "\u07C1\u07BC\x03\x02\x02\x02\u07C1\u07BF\x03\x02\x02\x02\u07C2\u0167\x03" +
    "\x02\x02\x02\u07C3\u07C8\x05\u016E\xB8\x02\u07C4\u07C5\x073\x02\x02\u07C5" +
    "\u07C7\x05\u016E\xB8\x02\u07C6\u07C4\x03\x02\x02\x02\u07C7\u07CA\x03\x02" +
    "\x02\x02\u07C8\u07C6\x03\x02\x02\x02\u07C8\u07C9\x03\x02\x02\x02\u07C9" +
    "\u07CC\x03\x02\x02\x02\u07CA\u07C8\x03\x02\x02\x02\u07CB\u07CD\x073\x02" +
    "\x02\u07CC\u07CB\x03\x02\x02\x02\u07CC\u07CD\x03\x02\x02\x02\u07CD\u0169" +
    "\x03\x02\x02\x02\u07CE\u07D1\x05\u016E\xB8\x02\u07CF\u07D0\x073\x02\x02" +
    "\u07D0\u07D2\x05\u016E\xB8\x02\u07D1\u07CF\x03\x02\x02\x02\u07D2\u07D3" +
    "\x03\x02\x02\x02\u07D3\u07D1\x03\x02\x02\x02\u07D3\u07D4\x03\x02\x02\x02" +
    "\u07D4\u07D6\x03\x02\x02\x02\u07D5\u07D7\x073\x02\x02\u07D6\u07D5\x03" +
    "\x02\x02\x02\u07D6\u07D7\x03\x02\x02\x02\u07D7\u016B\x03\x02\x02\x02\u07D8" +
    "\u07E3\x05\u016E\xB8\x02\u07D9\u07E4\x073\x02\x02\u07DA\u07DB\x073\x02" +
    "\x02\u07DB\u07DD\x05\u016E\xB8\x02\u07DC\u07DA\x03\x02\x02\x02\u07DD\u07DE" +
    "\x03\x02\x02\x02\u07DE\u07DC\x03\x02\x02\x02\u07DE\u07DF\x03\x02\x02\x02" +
    "\u07DF\u07E1\x03\x02\x02\x02\u07E0\u07E2\x073\x02\x02\u07E1\u07E0\x03" +
    "\x02\x02\x02\u07E1\u07E2\x03\x02\x02\x02\u07E2\u07E4\x03\x02\x02\x02\u07E3" +
    "\u07D9\x03\x02\x02\x02\u07E3\u07DC\x03\x02\x02\x02\u07E4\u016D\x03\x02" +
    "\x02\x02\u07E5\u07E6\x077\x02\x02\u07E6\u07E9\x05\u016E\xB8\x02\u07E7" +
    "\u07E9\x05\u0170\xB9\x02\u07E8\u07E5\x03\x02\x02\x02\u07E8\u07E7\x03\x02" +
    "\x02\x02\u07E9\u016F\x03\x02\x02\x02\u07EA\u07F1\x05\u0178\xBD\x02\u07EB" +
    "\u07EC\x071\x02\x02\u07EC\u07F2\x07[\x02\x02\u07ED\u07EE\x07,\x02\x02" +
    "\u07EE\u07EF\x05\u0114\x8B\x02\u07EF\u07F0\x07/\x02\x02\u07F0\u07F2\x03" +
    "\x02\x02\x02\u07F1\u07EB\x03\x02\x02\x02\u07F1\u07ED\x03\x02\x02\x02\u07F2" +
    "\u07F5\x03\x02\x02\x02\u07F3\u07F5\x05\u0172\xBA\x02\u07F4\u07EA\x03\x02" +
    "\x02\x02\u07F4\u07F3\x03\x02\x02\x02\u07F5\u0171\x03\x02\x02\x02\u07F6" +
    "\u0806\x07[\x02\x02\u07F7\u07F8\x07+\x02\x02\u07F8\u07F9\x05\u0170\xB9" +
    "\x02\u07F9\u07FA\x07.\x02\x02\u07FA\u0806\x03\x02\x02\x02\u07FB\u07FD" +
    "\x07+\x02\x02\u07FC\u07FE\x05\u016C\xB7\x02\u07FD\u07FC\x03\x02\x02\x02" +
    "\u07FD\u07FE\x03\x02\x02\x02\u07FE\u07FF\x03\x02\x02\x02\u07FF\u0806\x07" +
    ".\x02\x02\u0800\u0802\x07,\x02\x02\u0801\u0803\x05\u016A\xB6\x02\u0802" +
    "\u0801\x03\x02\x02\x02\u0802\u0803\x03\x02\x02\x02\u0803\u0804\x03\x02" +
    "\x02\x02\u0804\u0806\x07/\x02\x02\u0805\u07F6\x03\x02\x02\x02\u0805\u07F7" +
    "\x03\x02\x02\x02\u0805\u07FB\x03\x02\x02\x02\u0805\u0800\x03\x02\x02\x02" +
    "\u0806\u0173\x03\x02\x02\x02\u0807\u080E\x05\u0176\xBC\x02\u0808\u080E" +
    "\x07[\x02\x02\u0809\u080A\x07+\x02\x02\u080A\u080B\x05\u0174\xBB\x02\u080B" +
    "\u080C\x07.\x02\x02\u080C\u080E\x03\x02\x02\x02\u080D\u0807\x03\x02\x02" +
    "\x02\u080D\u0808\x03\x02\x02\x02\u080D\u0809\x03\x02\x02\x02\u080E\u0175" +
    "\x03\x02\x02\x02\u080F\u0816\x05\u0178\xBD\x02\u0810\u0811\x071\x02\x02" +
    "\u0811\u0817\x07[\x02\x02\u0812\u0813\x07,\x02\x02\u0813\u0814\x05\u0114" +
    "\x8B\x02\u0814\u0815\x07/\x02\x02\u0815\u0817\x03\x02\x02\x02\u0816\u0810" +
    "\x03\x02\x02\x02\u0816\u0812\x03\x02\x02\x02\u0817\u0177\x03\x02\x02\x02" +
    "\u0818\u0819\b\xBD\x01\x02\u0819\u081A\x05\u0118\x8D\x02\u081A\u082C\x03" +
    "\x02\x02\x02\u081B\u0828\f\x04\x02\x02\u081C\u081D\x071\x02\x02\u081D" +
    "\u0829\x07[\x02\x02\u081E\u081F\x07,\x02\x02\u081F\u0820\x05\u0114\x8B" +
    "\x02\u0820\u0821\x07/\x02\x02\u0821\u0829\x03\x02\x02\x02\u0822\u0829" +
    "\x05\u0158\xAD\x02\u0823\u0825\x07+\x02\x02\u0824\u0826\x05\u015C\xAF" +
    "\x02\u0825\u0824\x03\x02\x02\x02\u0825\u0826\x03\x02\x02\x02\u0826\u0827" +
    "\x03\x02\x02\x02\u0827\u0829\x07.\x02\x02\u0828\u081C\x03\x02\x02\x02" +
    "\u0828\u081E\x03\x02\x02\x02\u0828\u0822\x03\x02\x02\x02\u0828\u0823\x03" +
    "\x02\x02\x02\u0829\u082B\x03\x02\x02\x02\u082A\u081B\x03\x02\x02\x02\u082B" +
    "\u082E\x03\x02\x02\x02\u082C\u082A\x03\x02\x02\x02\u082C\u082D\x03\x02" +
    "\x02\x02\u082D\u0179\x03\x02\x02\x02\u082E\u082C\x03\x02\x02\x02\u082F" +
    "\u0834\x05\u017C\xBF\x02\u0830\u0831\x073\x02\x02\u0831\u0833\x05\u017C" +
    "\xBF\x02\u0832\u0830\x03\x02\x02\x02\u0833\u0836\x03\x02\x02\x02\u0834" +
    "\u0832\x03\x02\x02\x02\u0834\u0835\x03\x02\x02\x02\u0835\u0838\x03\x02" +
    "\x02\x02\u0836\u0834\x03\x02\x02\x02\u0837\u0839\x073\x02\x02\u0838\u0837" +
    "\x03\x02\x02\x02\u0838\u0839\x03\x02\x02\x02\u0839\u017B\x03\x02\x02\x02" +
    "\u083A\u0841\x05\u0178\xBD\x02\u083B\u083C\x071\x02\x02\u083C\u0842\x07" +
    "[\x02\x02\u083D\u083E\x07,\x02\x02\u083E\u083F\x05\u0114\x8B\x02\u083F" +
    "\u0840\x07/\x02\x02\u0840\u0842\x03\x02\x02\x02\u0841\u083B\x03\x02\x02" +
    "\x02\u0841\u083D\x03\x02\x02\x02\u0842\u0845\x03\x02\x02\x02\u0843\u0845" +
    "\x05\u017E\xC0\x02\u0844\u083A\x03\x02\x02\x02\u0844\u0843\x03\x02\x02" +
    "\x02\u0845\u017D\x03\x02\x02\x02\u0846\u0856\x07[\x02\x02\u0847\u0848" +
    "\x07+\x02\x02\u0848\u0849\x05\u017C\xBF\x02\u0849\u084A\x07.\x02\x02\u084A" +
    "\u0856\x03\x02\x02\x02\u084B\u084D\x07+\x02\x02\u084C\u084E\x05\u017A" +
    "\xBE\x02\u084D\u084C\x03\x02\x02\x02\u084D\u084E\x03\x02\x02\x02\u084E" +
    "\u084F\x03\x02\x02\x02\u084F\u0856\x07.\x02\x02\u0850\u0852\x07,\x02\x02" +
    "\u0851\u0853\x05\u017A\xBE\x02\u0852\u0851\x03\x02\x02\x02\u0852\u0853" +
    "\x03\x02\x02\x02\u0853\u0854\x03\x02\x02\x02\u0854\u0856\x07/\x02\x02" +
    "\u0855\u0846\x03\x02\x02\x02\u0855\u0847\x03\x02\x02\x02\u0855\u084B\x03" +
    "\x02\x02\x02\u0855\u0850\x03\x02\x02\x02\u0856\u017F\x03\x02\x02\x02\u0857" +
    "\u085C\x05\xD2j\x02\u0858\u0859\x073\x02\x02\u0859\u085B\x05\xD2j\x02" +
    "\u085A\u0858\x03\x02\x02\x02\u085B\u085E\x03\x02\x02\x02\u085C\u085A\x03" +
    "\x02\x02\x02\u085C\u085D\x03\x02\x02\x02\u085D\u086B\x03\x02\x02\x02\u085E" +
    "\u085C\x03\x02\x02\x02\u085F\u0869\x073\x02\x02\u0860\u0861\x077\x02\x02" +
    "\u0861\u0865\x05\xD2j\x02\u0862\u0863\x073\x02\x02\u0863\u0864\x07G\x02" +
    "\x02\u0864\u0866\x05\xD2j\x02\u0865\u0862\x03\x02\x02\x02\u0865\u0866" +
    "\x03\x02\x02\x02\u0866\u086A\x03\x02\x02\x02\u0867\u0868\x07G\x02\x02" +
    "\u0868\u086A\x05\xD2j\x02\u0869\u0860\x03\x02\x02\x02\u0869\u0867\x03" +
    "\x02\x02\x02\u086A\u086C\x03\x02\x02\x02\u086B\u085F\x03\x02\x02\x02\u086B" +
    "\u086C\x03\x02\x02\x02\u086C\u0877\x03\x02\x02\x02\u086D\u086E\x077\x02" +
    "\x02\u086E\u0872\x05\xD2j\x02\u086F\u0870\x073\x02\x02\u0870\u0871\x07" +
    "G\x02\x02\u0871\u0873\x05\xD2j\x02\u0872\u086F\x03\x02\x02\x02\u0872\u0873" +
    "\x03\x02\x02\x02\u0873\u0877\x03\x02\x02\x02\u0874\u0875\x07G\x02\x02" +
    "\u0875\u0877\x05\xD2j\x02\u0876\u0857\x03\x02\x02\x02\u0876\u086D\x03" +
    "\x02\x02\x02\u0876\u0874\x03\x02\x02\x02\u0877\u0181\x03\x02\x02\x02\u0878" +
    "\u0879\x07_\x02\x02\u0879\u087C\x07^\x02\x02\u087A\u087C\x07^\x02\x02" +
    "\u087B\u0878\x03\x02\x02\x02\u087B\u087A\x03\x02\x02\x02\u087C\u0183\x03" +
    "\x02\x02\x02\u087D\u087E\x06\xC3\v\x02\u087E\u087F\x07[\x02\x02\u087F" +
    "\u0185\x03\x02\x02\x02\u0880\u0881\x06\xC4\f\x02\u0881\u0882\x07[\x02" +
    "\x02\u0882\u0187\x03\x02\x02\x02\u0883\u0884\x06\xC5\r\x02\u0884\u0885" +
    "\x07[\x02\x02\u0885\u0189\x03\x02\x02\x02\u0886\u0887\x06\xC6\x0E\x02" +
    "\u0887\u0888\x07[\x02\x02\u0888\u018B\x03\x02\x02\x02\u0889\u088A\x06" +
    "\xC7\x0F\x02\u088A\u088B\x07[\x02\x02\u088B\u018D\x03\x02\x02\x02\u0125" +
    "\u018F\u0199\u01A0\u01A8\u01B2\u01B6\u01BE\u01C5\u01C9\u01DB\u01E5\u01EC" +
    "\u01F3\u01F9\u0200\u0204\u0207\u020D\u020F\u0213\u0219\u021F\u0221\u0229" +
    "\u0232\u023E\u0242\u024B\u0256\u025A\u025F\u0265\u026C\u0272\u0279\u027F" +
    "\u0289\u0292\u029A\u02A0\u02A5\u02A9\u02AC\u02B5\u02BA\u02BE\u02C3\u02C7" +
    "\u02CE\u02D2\u02D7\u02DB\u02DE\u02E6\u02EC\u02F0\u02F6\u02FA\u02FF\u0304" +
    "\u0308\u030D\u0310\u0313\u0318\u031C\u0321\u0327\u032B\u0332\u0336\u033D" +
    "\u0341\u0348\u034B\u034E\u0355\u0358\u035C\u035F\u0364\u0367\u036B\u036E" +
    "\u0371\u0375\u0389\u038B\u0393\u0395\u03A0\u03A3\u03AB\u03AF\u03B2\u03BB" +
    "\u03BF\u03C9\u03CE\u03D0\u03D7\u03E4\u03E7\u03EA\u03F2\u03F5\u03F8\u03FA" +
    "\u0400\u0402\u040C\u041D\u0424\u0427\u042C\u0436\u043A\u0445\u0450\u0458" +
    "\u0460\u0467\u046C\u0481\u0488\u0491\u0496\u0499\u049E\u04A5\u04A9\u04AD" +
    "\u04B3\u04BA\u04C2\u04C5\u04C9\u04D0\u04D5\u04E2\u04E5\u04E8\u04EA\u04F3" +
    "\u04FB\u0505\u0513\u0517\u051B\u0521\u0527\u0529\u0533\u0537\u053F\u0542" +
    "\u0548\u054A\u0551\u0555\u055A\u0561\u0565\u056A\u0572\u0579\u0581\u0587" +
    "\u058D\u059A\u05C4\u05CF\u05DA\u05E5\u05F0\u05FB\u0605\u060A\u060F\u061A" +
    "\u0621\u0625\u062B\u0630\u0634\u0638\u063A\u063D\u0641\u0645\u0647\u064A" +
    "\u0655\u0659\u065F\u0662\u0667\u066D\u0678\u067E\u0682\u0688\u068C\u0691" +
    "\u0696\u069A\u069F\u06A2\u06A5\u06AA\u06AE\u06B3\u06B9\u06BD\u06C4\u06C8" +
    "\u06CF\u06D2\u06D5\u06DC\u06E1\u06E5\u06E8\u06EE\u06F3\u06F6\u06F9\u06FC" +
    "\u0707\u070C\u0712\u071B\u071D\u0721\u0729\u072B\u0735\u073E\u0742\u0747" +
    "\u0750\u0753\u075D\u076D\u0779\u077E\u0780\u0786\u0788\u078C\u0791\u0794" +
    "\u079B\u07A4\u07A7\u07AE\u07B1\u07BA\u07C1\u07C8\u07CC\u07D3\u07D6\u07DE" +
    "\u07E1\u07E3\u07E8\u07F1\u07F4\u07FD\u0802\u0805\u080D\u0816\u0825\u0828" +
    "\u082C\u0834\u0838\u0841\u0844\u084D\u0852\u0855\u085C\u0865\u0869\u086B" +
    "\u0872\u0876\u087B";
  public static readonly _serializedATN: string = Utils.join(
    [
      PythonParser._serializedATNSegment0,
      PythonParser._serializedATNSegment1,
      PythonParser._serializedATNSegment2,
      PythonParser._serializedATNSegment3,
    ],
    ""
  );
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!PythonParser.__ATN) {
      PythonParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(PythonParser._serializedATN)
      );
    }

    return PythonParser.__ATN;
  }
}

export class File_inputContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(PythonParser.EOF, 0);
  }
  public statements(): StatementsContext | undefined {
    return this.tryGetRuleContext(0, StatementsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_file_input;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFile_input) {
      listener.enterFile_input(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFile_input) {
      listener.exitFile_input(this);
    }
  }
}

export class InteractiveContext extends ParserRuleContext {
  public statement_newline(): Statement_newlineContext {
    return this.getRuleContext(0, Statement_newlineContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_interactive;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterInteractive) {
      listener.enterInteractive(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitInteractive) {
      listener.exitInteractive(this);
    }
  }
}

export class EvalContext extends ParserRuleContext {
  public expressions(): ExpressionsContext {
    return this.getRuleContext(0, ExpressionsContext);
  }
  public EOF(): TerminalNode {
    return this.getToken(PythonParser.EOF, 0);
  }
  public NEWLINE(): TerminalNode[];
  public NEWLINE(i: number): TerminalNode;
  public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.NEWLINE);
    } else {
      return this.getToken(PythonParser.NEWLINE, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_eval;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterEval) {
      listener.enterEval(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitEval) {
      listener.exitEval(this);
    }
  }
}

export class Func_typeContext extends ParserRuleContext {
  public LPAR(): TerminalNode {
    return this.getToken(PythonParser.LPAR, 0);
  }
  public RPAR(): TerminalNode {
    return this.getToken(PythonParser.RPAR, 0);
  }
  public RARROW(): TerminalNode {
    return this.getToken(PythonParser.RARROW, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public EOF(): TerminalNode {
    return this.getToken(PythonParser.EOF, 0);
  }
  public type_expressions(): Type_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Type_expressionsContext);
  }
  public NEWLINE(): TerminalNode[];
  public NEWLINE(i: number): TerminalNode;
  public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.NEWLINE);
    } else {
      return this.getToken(PythonParser.NEWLINE, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_func_type;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFunc_type) {
      listener.enterFunc_type(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFunc_type) {
      listener.exitFunc_type(this);
    }
  }
}

export class Fstring_inputContext extends ParserRuleContext {
  public star_expressions(): Star_expressionsContext {
    return this.getRuleContext(0, Star_expressionsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_fstring_input;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFstring_input) {
      listener.enterFstring_input(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFstring_input) {
      listener.exitFstring_input(this);
    }
  }
}

export class StatementsContext extends ParserRuleContext {
  public statement(): StatementContext[];
  public statement(i: number): StatementContext;
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_statements;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStatements) {
      listener.enterStatements(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStatements) {
      listener.exitStatements(this);
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public compound_stmt(): Compound_stmtContext | undefined {
    return this.tryGetRuleContext(0, Compound_stmtContext);
  }
  public simple_stmts(): Simple_stmtsContext | undefined {
    return this.tryGetRuleContext(0, Simple_stmtsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_statement;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this);
    }
  }
}

export class Statement_newlineContext extends ParserRuleContext {
  public compound_stmt(): Compound_stmtContext | undefined {
    return this.tryGetRuleContext(0, Compound_stmtContext);
  }
  public NEWLINE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NEWLINE, 0);
  }
  public simple_stmts(): Simple_stmtsContext | undefined {
    return this.tryGetRuleContext(0, Simple_stmtsContext);
  }
  public EOF(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.EOF, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_statement_newline;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStatement_newline) {
      listener.enterStatement_newline(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStatement_newline) {
      listener.exitStatement_newline(this);
    }
  }
}

export class Simple_stmtsContext extends ParserRuleContext {
  public simple_stmt(): Simple_stmtContext[];
  public simple_stmt(i: number): Simple_stmtContext;
  public simple_stmt(i?: number): Simple_stmtContext | Simple_stmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Simple_stmtContext);
    } else {
      return this.getRuleContext(i, Simple_stmtContext);
    }
  }
  public NEWLINE(): TerminalNode {
    return this.getToken(PythonParser.NEWLINE, 0);
  }
  public SEMI(): TerminalNode[];
  public SEMI(i: number): TerminalNode;
  public SEMI(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.SEMI);
    } else {
      return this.getToken(PythonParser.SEMI, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_simple_stmts;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSimple_stmts) {
      listener.enterSimple_stmts(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSimple_stmts) {
      listener.exitSimple_stmts(this);
    }
  }
}

export class Simple_stmtContext extends ParserRuleContext {
  public assignment(): AssignmentContext | undefined {
    return this.tryGetRuleContext(0, AssignmentContext);
  }
  public type_alias(): Type_aliasContext | undefined {
    return this.tryGetRuleContext(0, Type_aliasContext);
  }
  public star_expressions(): Star_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Star_expressionsContext);
  }
  public return_stmt(): Return_stmtContext | undefined {
    return this.tryGetRuleContext(0, Return_stmtContext);
  }
  public import_stmt(): Import_stmtContext | undefined {
    return this.tryGetRuleContext(0, Import_stmtContext);
  }
  public raise_stmt(): Raise_stmtContext | undefined {
    return this.tryGetRuleContext(0, Raise_stmtContext);
  }
  public PASS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.PASS, 0);
  }
  public del_stmt(): Del_stmtContext | undefined {
    return this.tryGetRuleContext(0, Del_stmtContext);
  }
  public yield_stmt(): Yield_stmtContext | undefined {
    return this.tryGetRuleContext(0, Yield_stmtContext);
  }
  public assert_stmt(): Assert_stmtContext | undefined {
    return this.tryGetRuleContext(0, Assert_stmtContext);
  }
  public BREAK(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.BREAK, 0);
  }
  public CONTINUE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.CONTINUE, 0);
  }
  public global_stmt(): Global_stmtContext | undefined {
    return this.tryGetRuleContext(0, Global_stmtContext);
  }
  public nonlocal_stmt(): Nonlocal_stmtContext | undefined {
    return this.tryGetRuleContext(0, Nonlocal_stmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_simple_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSimple_stmt) {
      listener.enterSimple_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSimple_stmt) {
      listener.exitSimple_stmt(this);
    }
  }
}

export class Compound_stmtContext extends ParserRuleContext {
  public function_def(): Function_defContext | undefined {
    return this.tryGetRuleContext(0, Function_defContext);
  }
  public if_stmt(): If_stmtContext | undefined {
    return this.tryGetRuleContext(0, If_stmtContext);
  }
  public class_def(): Class_defContext | undefined {
    return this.tryGetRuleContext(0, Class_defContext);
  }
  public with_stmt(): With_stmtContext | undefined {
    return this.tryGetRuleContext(0, With_stmtContext);
  }
  public for_stmt(): For_stmtContext | undefined {
    return this.tryGetRuleContext(0, For_stmtContext);
  }
  public try_stmt(): Try_stmtContext | undefined {
    return this.tryGetRuleContext(0, Try_stmtContext);
  }
  public while_stmt(): While_stmtContext | undefined {
    return this.tryGetRuleContext(0, While_stmtContext);
  }
  public match_stmt(): Match_stmtContext | undefined {
    return this.tryGetRuleContext(0, Match_stmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_compound_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterCompound_stmt) {
      listener.enterCompound_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitCompound_stmt) {
      listener.exitCompound_stmt(this);
    }
  }
}

export class AssignmentContext extends ParserRuleContext {
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COLON, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public EQUAL(): TerminalNode[];
  public EQUAL(i: number): TerminalNode;
  public EQUAL(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.EQUAL);
    } else {
      return this.getToken(PythonParser.EQUAL, i);
    }
  }
  public annotated_rhs(): Annotated_rhsContext | undefined {
    return this.tryGetRuleContext(0, Annotated_rhsContext);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public single_target(): Single_targetContext | undefined {
    return this.tryGetRuleContext(0, Single_targetContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  public single_subscript_attribute_target():
    | Single_subscript_attribute_targetContext
    | undefined {
    return this.tryGetRuleContext(0, Single_subscript_attribute_targetContext);
  }
  public yield_expr(): Yield_exprContext | undefined {
    return this.tryGetRuleContext(0, Yield_exprContext);
  }
  public star_expressions(): Star_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Star_expressionsContext);
  }
  public star_targets(): Star_targetsContext[];
  public star_targets(i: number): Star_targetsContext;
  public star_targets(i?: number): Star_targetsContext | Star_targetsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Star_targetsContext);
    } else {
      return this.getRuleContext(i, Star_targetsContext);
    }
  }
  public TYPE_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TYPE_COMMENT, 0);
  }
  public augassign(): AugassignContext | undefined {
    return this.tryGetRuleContext(0, AugassignContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_assignment;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAssignment) {
      listener.enterAssignment(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAssignment) {
      listener.exitAssignment(this);
    }
  }
}

export class Annotated_rhsContext extends ParserRuleContext {
  public yield_expr(): Yield_exprContext | undefined {
    return this.tryGetRuleContext(0, Yield_exprContext);
  }
  public star_expressions(): Star_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Star_expressionsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_annotated_rhs;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAnnotated_rhs) {
      listener.enterAnnotated_rhs(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAnnotated_rhs) {
      listener.exitAnnotated_rhs(this);
    }
  }
}

export class AugassignContext extends ParserRuleContext {
  public PLUSEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.PLUSEQUAL, 0);
  }
  public MINEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.MINEQUAL, 0);
  }
  public STAREQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAREQUAL, 0);
  }
  public ATEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.ATEQUAL, 0);
  }
  public SLASHEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.SLASHEQUAL, 0);
  }
  public PERCENTEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.PERCENTEQUAL, 0);
  }
  public AMPEREQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.AMPEREQUAL, 0);
  }
  public VBAREQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.VBAREQUAL, 0);
  }
  public CIRCUMFLEXEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.CIRCUMFLEXEQUAL, 0);
  }
  public LEFTSHIFTEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LEFTSHIFTEQUAL, 0);
  }
  public RIGHTSHIFTEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RIGHTSHIFTEQUAL, 0);
  }
  public DOUBLESTAREQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOUBLESTAREQUAL, 0);
  }
  public DOUBLESLASHEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOUBLESLASHEQUAL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_augassign;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAugassign) {
      listener.enterAugassign(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAugassign) {
      listener.exitAugassign(this);
    }
  }
}

export class Return_stmtContext extends ParserRuleContext {
  public RETURN(): TerminalNode {
    return this.getToken(PythonParser.RETURN, 0);
  }
  public star_expressions(): Star_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Star_expressionsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_return_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterReturn_stmt) {
      listener.enterReturn_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitReturn_stmt) {
      listener.exitReturn_stmt(this);
    }
  }
}

export class Raise_stmtContext extends ParserRuleContext {
  public RAISE(): TerminalNode {
    return this.getToken(PythonParser.RAISE, 0);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public FROM(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.FROM, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_raise_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterRaise_stmt) {
      listener.enterRaise_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitRaise_stmt) {
      listener.exitRaise_stmt(this);
    }
  }
}

export class Global_stmtContext extends ParserRuleContext {
  public GLOBAL(): TerminalNode {
    return this.getToken(PythonParser.GLOBAL, 0);
  }
  public NAME(): TerminalNode[];
  public NAME(i: number): TerminalNode;
  public NAME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.NAME);
    } else {
      return this.getToken(PythonParser.NAME, i);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_global_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterGlobal_stmt) {
      listener.enterGlobal_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitGlobal_stmt) {
      listener.exitGlobal_stmt(this);
    }
  }
}

export class Nonlocal_stmtContext extends ParserRuleContext {
  public NONLOCAL(): TerminalNode {
    return this.getToken(PythonParser.NONLOCAL, 0);
  }
  public NAME(): TerminalNode[];
  public NAME(i: number): TerminalNode;
  public NAME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.NAME);
    } else {
      return this.getToken(PythonParser.NAME, i);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_nonlocal_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterNonlocal_stmt) {
      listener.enterNonlocal_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitNonlocal_stmt) {
      listener.exitNonlocal_stmt(this);
    }
  }
}

export class Del_stmtContext extends ParserRuleContext {
  public DEL(): TerminalNode {
    return this.getToken(PythonParser.DEL, 0);
  }
  public del_targets(): Del_targetsContext {
    return this.getRuleContext(0, Del_targetsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_del_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDel_stmt) {
      listener.enterDel_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDel_stmt) {
      listener.exitDel_stmt(this);
    }
  }
}

export class Yield_stmtContext extends ParserRuleContext {
  public yield_expr(): Yield_exprContext {
    return this.getRuleContext(0, Yield_exprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_yield_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterYield_stmt) {
      listener.enterYield_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitYield_stmt) {
      listener.exitYield_stmt(this);
    }
  }
}

export class Assert_stmtContext extends ParserRuleContext {
  public ASSERT(): TerminalNode {
    return this.getToken(PythonParser.ASSERT, 0);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_assert_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAssert_stmt) {
      listener.enterAssert_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAssert_stmt) {
      listener.exitAssert_stmt(this);
    }
  }
}

export class Import_stmtContext extends ParserRuleContext {
  public import_name(): Import_nameContext | undefined {
    return this.tryGetRuleContext(0, Import_nameContext);
  }
  public import_from(): Import_fromContext | undefined {
    return this.tryGetRuleContext(0, Import_fromContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_import_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterImport_stmt) {
      listener.enterImport_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitImport_stmt) {
      listener.exitImport_stmt(this);
    }
  }
}

export class Import_nameContext extends ParserRuleContext {
  public IMPORT(): TerminalNode {
    return this.getToken(PythonParser.IMPORT, 0);
  }
  public dotted_as_names(): Dotted_as_namesContext {
    return this.getRuleContext(0, Dotted_as_namesContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_import_name;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterImport_name) {
      listener.enterImport_name(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitImport_name) {
      listener.exitImport_name(this);
    }
  }
}

export class Import_fromContext extends ParserRuleContext {
  public FROM(): TerminalNode {
    return this.getToken(PythonParser.FROM, 0);
  }
  public dotted_name(): Dotted_nameContext | undefined {
    return this.tryGetRuleContext(0, Dotted_nameContext);
  }
  public IMPORT(): TerminalNode {
    return this.getToken(PythonParser.IMPORT, 0);
  }
  public import_from_targets(): Import_from_targetsContext {
    return this.getRuleContext(0, Import_from_targetsContext);
  }
  public DOT(): TerminalNode[];
  public DOT(i: number): TerminalNode;
  public DOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.DOT);
    } else {
      return this.getToken(PythonParser.DOT, i);
    }
  }
  public ELLIPSIS(): TerminalNode[];
  public ELLIPSIS(i: number): TerminalNode;
  public ELLIPSIS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.ELLIPSIS);
    } else {
      return this.getToken(PythonParser.ELLIPSIS, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_import_from;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterImport_from) {
      listener.enterImport_from(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitImport_from) {
      listener.exitImport_from(this);
    }
  }
}

export class Import_from_targetsContext extends ParserRuleContext {
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public import_from_as_names(): Import_from_as_namesContext | undefined {
    return this.tryGetRuleContext(0, Import_from_as_namesContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_import_from_targets;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterImport_from_targets) {
      listener.enterImport_from_targets(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitImport_from_targets) {
      listener.exitImport_from_targets(this);
    }
  }
}

export class Import_from_as_namesContext extends ParserRuleContext {
  public import_from_as_name(): Import_from_as_nameContext[];
  public import_from_as_name(i: number): Import_from_as_nameContext;
  public import_from_as_name(
    i?: number
  ): Import_from_as_nameContext | Import_from_as_nameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Import_from_as_nameContext);
    } else {
      return this.getRuleContext(i, Import_from_as_nameContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_import_from_as_names;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterImport_from_as_names) {
      listener.enterImport_from_as_names(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitImport_from_as_names) {
      listener.exitImport_from_as_names(this);
    }
  }
}

export class Import_from_as_nameContext extends ParserRuleContext {
  public NAME(): TerminalNode[];
  public NAME(i: number): TerminalNode;
  public NAME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.NAME);
    } else {
      return this.getToken(PythonParser.NAME, i);
    }
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.AS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_import_from_as_name;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterImport_from_as_name) {
      listener.enterImport_from_as_name(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitImport_from_as_name) {
      listener.exitImport_from_as_name(this);
    }
  }
}

export class Dotted_as_namesContext extends ParserRuleContext {
  public dotted_as_name(): Dotted_as_nameContext[];
  public dotted_as_name(i: number): Dotted_as_nameContext;
  public dotted_as_name(
    i?: number
  ): Dotted_as_nameContext | Dotted_as_nameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Dotted_as_nameContext);
    } else {
      return this.getRuleContext(i, Dotted_as_nameContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_dotted_as_names;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDotted_as_names) {
      listener.enterDotted_as_names(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDotted_as_names) {
      listener.exitDotted_as_names(this);
    }
  }
}

export class Dotted_as_nameContext extends ParserRuleContext {
  public dotted_name(): Dotted_nameContext {
    return this.getRuleContext(0, Dotted_nameContext);
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.AS, 0);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_dotted_as_name;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDotted_as_name) {
      listener.enterDotted_as_name(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDotted_as_name) {
      listener.exitDotted_as_name(this);
    }
  }
}

export class Dotted_nameContext extends ParserRuleContext {
  public dotted_name(): Dotted_nameContext | undefined {
    return this.tryGetRuleContext(0, Dotted_nameContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOT, 0);
  }
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_dotted_name;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDotted_name) {
      listener.enterDotted_name(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDotted_name) {
      listener.exitDotted_name(this);
    }
  }
}

export class BlockContext extends ParserRuleContext {
  public NEWLINE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NEWLINE, 0);
  }
  public INDENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.INDENT, 0);
  }
  public statements(): StatementsContext | undefined {
    return this.tryGetRuleContext(0, StatementsContext);
  }
  public DEDENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DEDENT, 0);
  }
  public simple_stmts(): Simple_stmtsContext | undefined {
    return this.tryGetRuleContext(0, Simple_stmtsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_block;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterBlock) {
      listener.enterBlock(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitBlock) {
      listener.exitBlock(this);
    }
  }
}

export class DecoratorsContext extends ParserRuleContext {
  public AT(): TerminalNode[];
  public AT(i: number): TerminalNode;
  public AT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.AT);
    } else {
      return this.getToken(PythonParser.AT, i);
    }
  }
  public named_expression(): Named_expressionContext[];
  public named_expression(i: number): Named_expressionContext;
  public named_expression(
    i?: number
  ): Named_expressionContext | Named_expressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Named_expressionContext);
    } else {
      return this.getRuleContext(i, Named_expressionContext);
    }
  }
  public NEWLINE(): TerminalNode[];
  public NEWLINE(i: number): TerminalNode;
  public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.NEWLINE);
    } else {
      return this.getToken(PythonParser.NEWLINE, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_decorators;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDecorators) {
      listener.enterDecorators(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDecorators) {
      listener.exitDecorators(this);
    }
  }
}

export class Class_defContext extends ParserRuleContext {
  public decorators(): DecoratorsContext | undefined {
    return this.tryGetRuleContext(0, DecoratorsContext);
  }
  public class_def_raw(): Class_def_rawContext {
    return this.getRuleContext(0, Class_def_rawContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_class_def;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterClass_def) {
      listener.enterClass_def(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitClass_def) {
      listener.exitClass_def(this);
    }
  }
}

export class Class_def_rawContext extends ParserRuleContext {
  public CLASS(): TerminalNode {
    return this.getToken(PythonParser.CLASS, 0);
  }
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public type_params(): Type_paramsContext | undefined {
    return this.tryGetRuleContext(0, Type_paramsContext);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  public arguments(): ArgumentsContext | undefined {
    return this.tryGetRuleContext(0, ArgumentsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_class_def_raw;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterClass_def_raw) {
      listener.enterClass_def_raw(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitClass_def_raw) {
      listener.exitClass_def_raw(this);
    }
  }
}

export class Function_defContext extends ParserRuleContext {
  public decorators(): DecoratorsContext | undefined {
    return this.tryGetRuleContext(0, DecoratorsContext);
  }
  public function_def_raw(): Function_def_rawContext {
    return this.getRuleContext(0, Function_def_rawContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_function_def;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFunction_def) {
      listener.enterFunction_def(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFunction_def) {
      listener.exitFunction_def(this);
    }
  }
}

export class Function_def_rawContext extends ParserRuleContext {
  public DEF(): TerminalNode {
    return this.getToken(PythonParser.DEF, 0);
  }
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  public LPAR(): TerminalNode {
    return this.getToken(PythonParser.LPAR, 0);
  }
  public RPAR(): TerminalNode {
    return this.getToken(PythonParser.RPAR, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public type_params(): Type_paramsContext | undefined {
    return this.tryGetRuleContext(0, Type_paramsContext);
  }
  public params(): ParamsContext | undefined {
    return this.tryGetRuleContext(0, ParamsContext);
  }
  public RARROW(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RARROW, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public func_type_comment(): Func_type_commentContext | undefined {
    return this.tryGetRuleContext(0, Func_type_commentContext);
  }
  public ASYNC(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.ASYNC, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_function_def_raw;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFunction_def_raw) {
      listener.enterFunction_def_raw(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFunction_def_raw) {
      listener.exitFunction_def_raw(this);
    }
  }
}

export class ParamsContext extends ParserRuleContext {
  public parameters(): ParametersContext {
    return this.getRuleContext(0, ParametersContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_params;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterParams) {
      listener.enterParams(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitParams) {
      listener.exitParams(this);
    }
  }
}

export class ParametersContext extends ParserRuleContext {
  public slash_no_default(): Slash_no_defaultContext | undefined {
    return this.tryGetRuleContext(0, Slash_no_defaultContext);
  }
  public param_no_default(): Param_no_defaultContext[];
  public param_no_default(i: number): Param_no_defaultContext;
  public param_no_default(
    i?: number
  ): Param_no_defaultContext | Param_no_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Param_no_defaultContext);
    } else {
      return this.getRuleContext(i, Param_no_defaultContext);
    }
  }
  public param_with_default(): Param_with_defaultContext[];
  public param_with_default(i: number): Param_with_defaultContext;
  public param_with_default(
    i?: number
  ): Param_with_defaultContext | Param_with_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Param_with_defaultContext);
    } else {
      return this.getRuleContext(i, Param_with_defaultContext);
    }
  }
  public star_etc(): Star_etcContext | undefined {
    return this.tryGetRuleContext(0, Star_etcContext);
  }
  public slash_with_default(): Slash_with_defaultContext | undefined {
    return this.tryGetRuleContext(0, Slash_with_defaultContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_parameters;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterParameters) {
      listener.enterParameters(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitParameters) {
      listener.exitParameters(this);
    }
  }
}

export class Slash_no_defaultContext extends ParserRuleContext {
  public SLASH(): TerminalNode {
    return this.getToken(PythonParser.SLASH, 0);
  }
  public param_no_default(): Param_no_defaultContext[];
  public param_no_default(i: number): Param_no_defaultContext;
  public param_no_default(
    i?: number
  ): Param_no_defaultContext | Param_no_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Param_no_defaultContext);
    } else {
      return this.getRuleContext(i, Param_no_defaultContext);
    }
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_slash_no_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSlash_no_default) {
      listener.enterSlash_no_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSlash_no_default) {
      listener.exitSlash_no_default(this);
    }
  }
}

export class Slash_with_defaultContext extends ParserRuleContext {
  public SLASH(): TerminalNode {
    return this.getToken(PythonParser.SLASH, 0);
  }
  public param_no_default(): Param_no_defaultContext[];
  public param_no_default(i: number): Param_no_defaultContext;
  public param_no_default(
    i?: number
  ): Param_no_defaultContext | Param_no_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Param_no_defaultContext);
    } else {
      return this.getRuleContext(i, Param_no_defaultContext);
    }
  }
  public param_with_default(): Param_with_defaultContext[];
  public param_with_default(i: number): Param_with_defaultContext;
  public param_with_default(
    i?: number
  ): Param_with_defaultContext | Param_with_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Param_with_defaultContext);
    } else {
      return this.getRuleContext(i, Param_with_defaultContext);
    }
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_slash_with_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSlash_with_default) {
      listener.enterSlash_with_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSlash_with_default) {
      listener.exitSlash_with_default(this);
    }
  }
}

export class Star_etcContext extends ParserRuleContext {
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAR, 0);
  }
  public param_no_default(): Param_no_defaultContext | undefined {
    return this.tryGetRuleContext(0, Param_no_defaultContext);
  }
  public param_maybe_default(): Param_maybe_defaultContext[];
  public param_maybe_default(i: number): Param_maybe_defaultContext;
  public param_maybe_default(
    i?: number
  ): Param_maybe_defaultContext | Param_maybe_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Param_maybe_defaultContext);
    } else {
      return this.getRuleContext(i, Param_maybe_defaultContext);
    }
  }
  public kwds(): KwdsContext | undefined {
    return this.tryGetRuleContext(0, KwdsContext);
  }
  public param_no_default_star_annotation():
    | Param_no_default_star_annotationContext
    | undefined {
    return this.tryGetRuleContext(0, Param_no_default_star_annotationContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_etc;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_etc) {
      listener.enterStar_etc(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_etc) {
      listener.exitStar_etc(this);
    }
  }
}

export class KwdsContext extends ParserRuleContext {
  public DOUBLESTAR(): TerminalNode {
    return this.getToken(PythonParser.DOUBLESTAR, 0);
  }
  public param_no_default(): Param_no_defaultContext {
    return this.getRuleContext(0, Param_no_defaultContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_kwds;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterKwds) {
      listener.enterKwds(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitKwds) {
      listener.exitKwds(this);
    }
  }
}

export class Param_no_defaultContext extends ParserRuleContext {
  public param(): ParamContext {
    return this.getRuleContext(0, ParamContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  public TYPE_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TYPE_COMMENT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_param_no_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterParam_no_default) {
      listener.enterParam_no_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitParam_no_default) {
      listener.exitParam_no_default(this);
    }
  }
}

export class Param_no_default_star_annotationContext extends ParserRuleContext {
  public param_star_annotation(): Param_star_annotationContext {
    return this.getRuleContext(0, Param_star_annotationContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  public TYPE_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TYPE_COMMENT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_param_no_default_star_annotation;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterParam_no_default_star_annotation) {
      listener.enterParam_no_default_star_annotation(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitParam_no_default_star_annotation) {
      listener.exitParam_no_default_star_annotation(this);
    }
  }
}

export class Param_with_defaultContext extends ParserRuleContext {
  public param(): ParamContext {
    return this.getRuleContext(0, ParamContext);
  }
  public default_assignment(): Default_assignmentContext {
    return this.getRuleContext(0, Default_assignmentContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  public TYPE_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TYPE_COMMENT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_param_with_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterParam_with_default) {
      listener.enterParam_with_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitParam_with_default) {
      listener.exitParam_with_default(this);
    }
  }
}

export class Param_maybe_defaultContext extends ParserRuleContext {
  public param(): ParamContext {
    return this.getRuleContext(0, ParamContext);
  }
  public default_assignment(): Default_assignmentContext | undefined {
    return this.tryGetRuleContext(0, Default_assignmentContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  public TYPE_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TYPE_COMMENT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_param_maybe_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterParam_maybe_default) {
      listener.enterParam_maybe_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitParam_maybe_default) {
      listener.exitParam_maybe_default(this);
    }
  }
}

export class ParamContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  public annotation(): AnnotationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_param;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterParam) {
      listener.enterParam(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitParam) {
      listener.exitParam(this);
    }
  }
}

export class Param_star_annotationContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  public star_annotation(): Star_annotationContext {
    return this.getRuleContext(0, Star_annotationContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_param_star_annotation;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterParam_star_annotation) {
      listener.enterParam_star_annotation(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitParam_star_annotation) {
      listener.exitParam_star_annotation(this);
    }
  }
}

export class AnnotationContext extends ParserRuleContext {
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_annotation;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAnnotation) {
      listener.enterAnnotation(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAnnotation) {
      listener.exitAnnotation(this);
    }
  }
}

export class Star_annotationContext extends ParserRuleContext {
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public star_expression(): Star_expressionContext {
    return this.getRuleContext(0, Star_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_annotation;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_annotation) {
      listener.enterStar_annotation(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_annotation) {
      listener.exitStar_annotation(this);
    }
  }
}

export class Default_assignmentContext extends ParserRuleContext {
  public EQUAL(): TerminalNode {
    return this.getToken(PythonParser.EQUAL, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_default_assignment;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDefault_assignment) {
      listener.enterDefault_assignment(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDefault_assignment) {
      listener.exitDefault_assignment(this);
    }
  }
}

export class If_stmtContext extends ParserRuleContext {
  public IF(): TerminalNode {
    return this.getToken(PythonParser.IF, 0);
  }
  public named_expression(): Named_expressionContext {
    return this.getRuleContext(0, Named_expressionContext);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public elif_stmt(): Elif_stmtContext | undefined {
    return this.tryGetRuleContext(0, Elif_stmtContext);
  }
  public else_block(): Else_blockContext | undefined {
    return this.tryGetRuleContext(0, Else_blockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_if_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterIf_stmt) {
      listener.enterIf_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitIf_stmt) {
      listener.exitIf_stmt(this);
    }
  }
}

export class Elif_stmtContext extends ParserRuleContext {
  public ELIF(): TerminalNode {
    return this.getToken(PythonParser.ELIF, 0);
  }
  public named_expression(): Named_expressionContext {
    return this.getRuleContext(0, Named_expressionContext);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public elif_stmt(): Elif_stmtContext | undefined {
    return this.tryGetRuleContext(0, Elif_stmtContext);
  }
  public else_block(): Else_blockContext | undefined {
    return this.tryGetRuleContext(0, Else_blockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_elif_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterElif_stmt) {
      listener.enterElif_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitElif_stmt) {
      listener.exitElif_stmt(this);
    }
  }
}

export class Else_blockContext extends ParserRuleContext {
  public ELSE(): TerminalNode {
    return this.getToken(PythonParser.ELSE, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_else_block;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterElse_block) {
      listener.enterElse_block(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitElse_block) {
      listener.exitElse_block(this);
    }
  }
}

export class While_stmtContext extends ParserRuleContext {
  public WHILE(): TerminalNode {
    return this.getToken(PythonParser.WHILE, 0);
  }
  public named_expression(): Named_expressionContext {
    return this.getRuleContext(0, Named_expressionContext);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public else_block(): Else_blockContext | undefined {
    return this.tryGetRuleContext(0, Else_blockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_while_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterWhile_stmt) {
      listener.enterWhile_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitWhile_stmt) {
      listener.exitWhile_stmt(this);
    }
  }
}

export class For_stmtContext extends ParserRuleContext {
  public FOR(): TerminalNode {
    return this.getToken(PythonParser.FOR, 0);
  }
  public star_targets(): Star_targetsContext {
    return this.getRuleContext(0, Star_targetsContext);
  }
  public IN(): TerminalNode {
    return this.getToken(PythonParser.IN, 0);
  }
  public star_expressions(): Star_expressionsContext {
    return this.getRuleContext(0, Star_expressionsContext);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public ASYNC(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.ASYNC, 0);
  }
  public TYPE_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TYPE_COMMENT, 0);
  }
  public else_block(): Else_blockContext | undefined {
    return this.tryGetRuleContext(0, Else_blockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_for_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFor_stmt) {
      listener.enterFor_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFor_stmt) {
      listener.exitFor_stmt(this);
    }
  }
}

export class With_stmtContext extends ParserRuleContext {
  public WITH(): TerminalNode {
    return this.getToken(PythonParser.WITH, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public with_item(): With_itemContext[];
  public with_item(i: number): With_itemContext;
  public with_item(i?: number): With_itemContext | With_itemContext[] {
    if (i === undefined) {
      return this.getRuleContexts(With_itemContext);
    } else {
      return this.getRuleContext(i, With_itemContext);
    }
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COLON, 0);
  }
  public ASYNC(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.ASYNC, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  public TYPE_COMMENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TYPE_COMMENT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_with_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterWith_stmt) {
      listener.enterWith_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitWith_stmt) {
      listener.exitWith_stmt(this);
    }
  }
}

export class With_itemContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.AS, 0);
  }
  public star_target(): Star_targetContext | undefined {
    return this.tryGetRuleContext(0, Star_targetContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_with_item;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterWith_item) {
      listener.enterWith_item(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitWith_item) {
      listener.exitWith_item(this);
    }
  }
}

export class Try_stmtContext extends ParserRuleContext {
  public TRY(): TerminalNode {
    return this.getToken(PythonParser.TRY, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public finally_block(): Finally_blockContext | undefined {
    return this.tryGetRuleContext(0, Finally_blockContext);
  }
  public except_block(): Except_blockContext[];
  public except_block(i: number): Except_blockContext;
  public except_block(i?: number): Except_blockContext | Except_blockContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Except_blockContext);
    } else {
      return this.getRuleContext(i, Except_blockContext);
    }
  }
  public else_block(): Else_blockContext | undefined {
    return this.tryGetRuleContext(0, Else_blockContext);
  }
  public except_star_block(): Except_star_blockContext[];
  public except_star_block(i: number): Except_star_blockContext;
  public except_star_block(
    i?: number
  ): Except_star_blockContext | Except_star_blockContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Except_star_blockContext);
    } else {
      return this.getRuleContext(i, Except_star_blockContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_try_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterTry_stmt) {
      listener.enterTry_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitTry_stmt) {
      listener.exitTry_stmt(this);
    }
  }
}

export class Except_blockContext extends ParserRuleContext {
  public EXCEPT(): TerminalNode {
    return this.getToken(PythonParser.EXCEPT, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.AS, 0);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_except_block;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterExcept_block) {
      listener.enterExcept_block(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitExcept_block) {
      listener.exitExcept_block(this);
    }
  }
}

export class Except_star_blockContext extends ParserRuleContext {
  public EXCEPT(): TerminalNode {
    return this.getToken(PythonParser.EXCEPT, 0);
  }
  public STAR(): TerminalNode {
    return this.getToken(PythonParser.STAR, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.AS, 0);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_except_star_block;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterExcept_star_block) {
      listener.enterExcept_star_block(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitExcept_star_block) {
      listener.exitExcept_star_block(this);
    }
  }
}

export class Finally_blockContext extends ParserRuleContext {
  public FINALLY(): TerminalNode {
    return this.getToken(PythonParser.FINALLY, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_finally_block;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFinally_block) {
      listener.enterFinally_block(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFinally_block) {
      listener.exitFinally_block(this);
    }
  }
}

export class Match_stmtContext extends ParserRuleContext {
  public soft_kw_match(): Soft_kw_matchContext {
    return this.getRuleContext(0, Soft_kw_matchContext);
  }
  public subject_expr(): Subject_exprContext {
    return this.getRuleContext(0, Subject_exprContext);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public NEWLINE(): TerminalNode {
    return this.getToken(PythonParser.NEWLINE, 0);
  }
  public INDENT(): TerminalNode {
    return this.getToken(PythonParser.INDENT, 0);
  }
  public DEDENT(): TerminalNode {
    return this.getToken(PythonParser.DEDENT, 0);
  }
  public case_block(): Case_blockContext[];
  public case_block(i: number): Case_blockContext;
  public case_block(i?: number): Case_blockContext | Case_blockContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Case_blockContext);
    } else {
      return this.getRuleContext(i, Case_blockContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_match_stmt;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterMatch_stmt) {
      listener.enterMatch_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitMatch_stmt) {
      listener.exitMatch_stmt(this);
    }
  }
}

export class Subject_exprContext extends ParserRuleContext {
  public star_named_expression(): Star_named_expressionContext | undefined {
    return this.tryGetRuleContext(0, Star_named_expressionContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  public star_named_expressions(): Star_named_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Star_named_expressionsContext);
  }
  public named_expression(): Named_expressionContext | undefined {
    return this.tryGetRuleContext(0, Named_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_subject_expr;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSubject_expr) {
      listener.enterSubject_expr(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSubject_expr) {
      listener.exitSubject_expr(this);
    }
  }
}

export class Case_blockContext extends ParserRuleContext {
  public soft_kw_case(): Soft_kw_caseContext {
    return this.getRuleContext(0, Soft_kw_caseContext);
  }
  public patterns(): PatternsContext {
    return this.getRuleContext(0, PatternsContext);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public guard(): GuardContext | undefined {
    return this.tryGetRuleContext(0, GuardContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_case_block;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterCase_block) {
      listener.enterCase_block(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitCase_block) {
      listener.exitCase_block(this);
    }
  }
}

export class GuardContext extends ParserRuleContext {
  public IF(): TerminalNode {
    return this.getToken(PythonParser.IF, 0);
  }
  public named_expression(): Named_expressionContext {
    return this.getRuleContext(0, Named_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_guard;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterGuard) {
      listener.enterGuard(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitGuard) {
      listener.exitGuard(this);
    }
  }
}

export class PatternsContext extends ParserRuleContext {
  public open_sequence_pattern(): Open_sequence_patternContext | undefined {
    return this.tryGetRuleContext(0, Open_sequence_patternContext);
  }
  public pattern(): PatternContext | undefined {
    return this.tryGetRuleContext(0, PatternContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_patterns;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterPatterns) {
      listener.enterPatterns(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitPatterns) {
      listener.exitPatterns(this);
    }
  }
}

export class PatternContext extends ParserRuleContext {
  public as_pattern(): As_patternContext | undefined {
    return this.tryGetRuleContext(0, As_patternContext);
  }
  public or_pattern(): Or_patternContext | undefined {
    return this.tryGetRuleContext(0, Or_patternContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterPattern) {
      listener.enterPattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitPattern) {
      listener.exitPattern(this);
    }
  }
}

export class As_patternContext extends ParserRuleContext {
  public or_pattern(): Or_patternContext {
    return this.getRuleContext(0, Or_patternContext);
  }
  public AS(): TerminalNode {
    return this.getToken(PythonParser.AS, 0);
  }
  public pattern_capture_target(): Pattern_capture_targetContext {
    return this.getRuleContext(0, Pattern_capture_targetContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_as_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAs_pattern) {
      listener.enterAs_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAs_pattern) {
      listener.exitAs_pattern(this);
    }
  }
}

export class Or_patternContext extends ParserRuleContext {
  public closed_pattern(): Closed_patternContext[];
  public closed_pattern(i: number): Closed_patternContext;
  public closed_pattern(
    i?: number
  ): Closed_patternContext | Closed_patternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Closed_patternContext);
    } else {
      return this.getRuleContext(i, Closed_patternContext);
    }
  }
  public VBAR(): TerminalNode[];
  public VBAR(i: number): TerminalNode;
  public VBAR(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.VBAR);
    } else {
      return this.getToken(PythonParser.VBAR, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_or_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterOr_pattern) {
      listener.enterOr_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitOr_pattern) {
      listener.exitOr_pattern(this);
    }
  }
}

export class Closed_patternContext extends ParserRuleContext {
  public literal_pattern(): Literal_patternContext | undefined {
    return this.tryGetRuleContext(0, Literal_patternContext);
  }
  public capture_pattern(): Capture_patternContext | undefined {
    return this.tryGetRuleContext(0, Capture_patternContext);
  }
  public wildcard_pattern(): Wildcard_patternContext | undefined {
    return this.tryGetRuleContext(0, Wildcard_patternContext);
  }
  public value_pattern(): Value_patternContext | undefined {
    return this.tryGetRuleContext(0, Value_patternContext);
  }
  public group_pattern(): Group_patternContext | undefined {
    return this.tryGetRuleContext(0, Group_patternContext);
  }
  public sequence_pattern(): Sequence_patternContext | undefined {
    return this.tryGetRuleContext(0, Sequence_patternContext);
  }
  public mapping_pattern(): Mapping_patternContext | undefined {
    return this.tryGetRuleContext(0, Mapping_patternContext);
  }
  public class_pattern(): Class_patternContext | undefined {
    return this.tryGetRuleContext(0, Class_patternContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_closed_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterClosed_pattern) {
      listener.enterClosed_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitClosed_pattern) {
      listener.exitClosed_pattern(this);
    }
  }
}

export class Literal_patternContext extends ParserRuleContext {
  public signed_number(): Signed_numberContext | undefined {
    return this.tryGetRuleContext(0, Signed_numberContext);
  }
  public complex_number(): Complex_numberContext | undefined {
    return this.tryGetRuleContext(0, Complex_numberContext);
  }
  public strings(): StringsContext | undefined {
    return this.tryGetRuleContext(0, StringsContext);
  }
  public NONE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NONE, 0);
  }
  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TRUE, 0);
  }
  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.FALSE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_literal_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLiteral_pattern) {
      listener.enterLiteral_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLiteral_pattern) {
      listener.exitLiteral_pattern(this);
    }
  }
}

export class Literal_exprContext extends ParserRuleContext {
  public signed_number(): Signed_numberContext | undefined {
    return this.tryGetRuleContext(0, Signed_numberContext);
  }
  public complex_number(): Complex_numberContext | undefined {
    return this.tryGetRuleContext(0, Complex_numberContext);
  }
  public strings(): StringsContext | undefined {
    return this.tryGetRuleContext(0, StringsContext);
  }
  public NONE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NONE, 0);
  }
  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TRUE, 0);
  }
  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.FALSE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_literal_expr;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLiteral_expr) {
      listener.enterLiteral_expr(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLiteral_expr) {
      listener.exitLiteral_expr(this);
    }
  }
}

export class Complex_numberContext extends ParserRuleContext {
  public signed_real_number(): Signed_real_numberContext {
    return this.getRuleContext(0, Signed_real_numberContext);
  }
  public imaginary_number(): Imaginary_numberContext {
    return this.getRuleContext(0, Imaginary_numberContext);
  }
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.PLUS, 0);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.MINUS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_complex_number;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterComplex_number) {
      listener.enterComplex_number(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitComplex_number) {
      listener.exitComplex_number(this);
    }
  }
}

export class Signed_numberContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(PythonParser.NUMBER, 0);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.MINUS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_signed_number;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSigned_number) {
      listener.enterSigned_number(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSigned_number) {
      listener.exitSigned_number(this);
    }
  }
}

export class Signed_real_numberContext extends ParserRuleContext {
  public real_number(): Real_numberContext {
    return this.getRuleContext(0, Real_numberContext);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.MINUS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_signed_real_number;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSigned_real_number) {
      listener.enterSigned_real_number(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSigned_real_number) {
      listener.exitSigned_real_number(this);
    }
  }
}

export class Real_numberContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(PythonParser.NUMBER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_real_number;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterReal_number) {
      listener.enterReal_number(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitReal_number) {
      listener.exitReal_number(this);
    }
  }
}

export class Imaginary_numberContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(PythonParser.NUMBER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_imaginary_number;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterImaginary_number) {
      listener.enterImaginary_number(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitImaginary_number) {
      listener.exitImaginary_number(this);
    }
  }
}

export class Capture_patternContext extends ParserRuleContext {
  public pattern_capture_target(): Pattern_capture_targetContext {
    return this.getRuleContext(0, Pattern_capture_targetContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_capture_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterCapture_pattern) {
      listener.enterCapture_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitCapture_pattern) {
      listener.exitCapture_pattern(this);
    }
  }
}

export class Pattern_capture_targetContext extends ParserRuleContext {
  public soft_kw__not__wildcard(): Soft_kw__not__wildcardContext {
    return this.getRuleContext(0, Soft_kw__not__wildcardContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_pattern_capture_target;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterPattern_capture_target) {
      listener.enterPattern_capture_target(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitPattern_capture_target) {
      listener.exitPattern_capture_target(this);
    }
  }
}

export class Wildcard_patternContext extends ParserRuleContext {
  public soft_kw_wildcard(): Soft_kw_wildcardContext {
    return this.getRuleContext(0, Soft_kw_wildcardContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_wildcard_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterWildcard_pattern) {
      listener.enterWildcard_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitWildcard_pattern) {
      listener.exitWildcard_pattern(this);
    }
  }
}

export class Value_patternContext extends ParserRuleContext {
  public attr(): AttrContext {
    return this.getRuleContext(0, AttrContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_value_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterValue_pattern) {
      listener.enterValue_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitValue_pattern) {
      listener.exitValue_pattern(this);
    }
  }
}

export class AttrContext extends ParserRuleContext {
  public NAME(): TerminalNode[];
  public NAME(i: number): TerminalNode;
  public NAME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.NAME);
    } else {
      return this.getToken(PythonParser.NAME, i);
    }
  }
  public DOT(): TerminalNode[];
  public DOT(i: number): TerminalNode;
  public DOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.DOT);
    } else {
      return this.getToken(PythonParser.DOT, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_attr;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAttr) {
      listener.enterAttr(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAttr) {
      listener.exitAttr(this);
    }
  }
}

export class Name_or_attrContext extends ParserRuleContext {
  public NAME(): TerminalNode[];
  public NAME(i: number): TerminalNode;
  public NAME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.NAME);
    } else {
      return this.getToken(PythonParser.NAME, i);
    }
  }
  public DOT(): TerminalNode[];
  public DOT(i: number): TerminalNode;
  public DOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.DOT);
    } else {
      return this.getToken(PythonParser.DOT, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_name_or_attr;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterName_or_attr) {
      listener.enterName_or_attr(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitName_or_attr) {
      listener.exitName_or_attr(this);
    }
  }
}

export class Group_patternContext extends ParserRuleContext {
  public LPAR(): TerminalNode {
    return this.getToken(PythonParser.LPAR, 0);
  }
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(PythonParser.RPAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_group_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterGroup_pattern) {
      listener.enterGroup_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitGroup_pattern) {
      listener.exitGroup_pattern(this);
    }
  }
}

export class Sequence_patternContext extends ParserRuleContext {
  public LSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LSQB, 0);
  }
  public RSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RSQB, 0);
  }
  public maybe_sequence_pattern(): Maybe_sequence_patternContext | undefined {
    return this.tryGetRuleContext(0, Maybe_sequence_patternContext);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  public open_sequence_pattern(): Open_sequence_patternContext | undefined {
    return this.tryGetRuleContext(0, Open_sequence_patternContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_sequence_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSequence_pattern) {
      listener.enterSequence_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSequence_pattern) {
      listener.exitSequence_pattern(this);
    }
  }
}

export class Open_sequence_patternContext extends ParserRuleContext {
  public maybe_star_pattern(): Maybe_star_patternContext {
    return this.getRuleContext(0, Maybe_star_patternContext);
  }
  public COMMA(): TerminalNode {
    return this.getToken(PythonParser.COMMA, 0);
  }
  public maybe_sequence_pattern(): Maybe_sequence_patternContext | undefined {
    return this.tryGetRuleContext(0, Maybe_sequence_patternContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_open_sequence_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterOpen_sequence_pattern) {
      listener.enterOpen_sequence_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitOpen_sequence_pattern) {
      listener.exitOpen_sequence_pattern(this);
    }
  }
}

export class Maybe_sequence_patternContext extends ParserRuleContext {
  public maybe_star_pattern(): Maybe_star_patternContext[];
  public maybe_star_pattern(i: number): Maybe_star_patternContext;
  public maybe_star_pattern(
    i?: number
  ): Maybe_star_patternContext | Maybe_star_patternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Maybe_star_patternContext);
    } else {
      return this.getRuleContext(i, Maybe_star_patternContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_maybe_sequence_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterMaybe_sequence_pattern) {
      listener.enterMaybe_sequence_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitMaybe_sequence_pattern) {
      listener.exitMaybe_sequence_pattern(this);
    }
  }
}

export class Maybe_star_patternContext extends ParserRuleContext {
  public star_pattern(): Star_patternContext | undefined {
    return this.tryGetRuleContext(0, Star_patternContext);
  }
  public pattern(): PatternContext | undefined {
    return this.tryGetRuleContext(0, PatternContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_maybe_star_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterMaybe_star_pattern) {
      listener.enterMaybe_star_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitMaybe_star_pattern) {
      listener.exitMaybe_star_pattern(this);
    }
  }
}

export class Star_patternContext extends ParserRuleContext {
  public STAR(): TerminalNode {
    return this.getToken(PythonParser.STAR, 0);
  }
  public pattern_capture_target(): Pattern_capture_targetContext | undefined {
    return this.tryGetRuleContext(0, Pattern_capture_targetContext);
  }
  public wildcard_pattern(): Wildcard_patternContext | undefined {
    return this.tryGetRuleContext(0, Wildcard_patternContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_pattern) {
      listener.enterStar_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_pattern) {
      listener.exitStar_pattern(this);
    }
  }
}

export class Mapping_patternContext extends ParserRuleContext {
  public LBRACE(): TerminalNode {
    return this.getToken(PythonParser.LBRACE, 0);
  }
  public RBRACE(): TerminalNode {
    return this.getToken(PythonParser.RBRACE, 0);
  }
  public double_star_pattern(): Double_star_patternContext | undefined {
    return this.tryGetRuleContext(0, Double_star_patternContext);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  public items_pattern(): Items_patternContext | undefined {
    return this.tryGetRuleContext(0, Items_patternContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_mapping_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterMapping_pattern) {
      listener.enterMapping_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitMapping_pattern) {
      listener.exitMapping_pattern(this);
    }
  }
}

export class Items_patternContext extends ParserRuleContext {
  public key_value_pattern(): Key_value_patternContext[];
  public key_value_pattern(i: number): Key_value_patternContext;
  public key_value_pattern(
    i?: number
  ): Key_value_patternContext | Key_value_patternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Key_value_patternContext);
    } else {
      return this.getRuleContext(i, Key_value_patternContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_items_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterItems_pattern) {
      listener.enterItems_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitItems_pattern) {
      listener.exitItems_pattern(this);
    }
  }
}

export class Key_value_patternContext extends ParserRuleContext {
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext);
  }
  public literal_expr(): Literal_exprContext | undefined {
    return this.tryGetRuleContext(0, Literal_exprContext);
  }
  public attr(): AttrContext | undefined {
    return this.tryGetRuleContext(0, AttrContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_key_value_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterKey_value_pattern) {
      listener.enterKey_value_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitKey_value_pattern) {
      listener.exitKey_value_pattern(this);
    }
  }
}

export class Double_star_patternContext extends ParserRuleContext {
  public DOUBLESTAR(): TerminalNode {
    return this.getToken(PythonParser.DOUBLESTAR, 0);
  }
  public pattern_capture_target(): Pattern_capture_targetContext {
    return this.getRuleContext(0, Pattern_capture_targetContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_double_star_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDouble_star_pattern) {
      listener.enterDouble_star_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDouble_star_pattern) {
      listener.exitDouble_star_pattern(this);
    }
  }
}

export class Class_patternContext extends ParserRuleContext {
  public name_or_attr(): Name_or_attrContext {
    return this.getRuleContext(0, Name_or_attrContext);
  }
  public LPAR(): TerminalNode {
    return this.getToken(PythonParser.LPAR, 0);
  }
  public RPAR(): TerminalNode {
    return this.getToken(PythonParser.RPAR, 0);
  }
  public positional_patterns(): Positional_patternsContext | undefined {
    return this.tryGetRuleContext(0, Positional_patternsContext);
  }
  public keyword_patterns(): Keyword_patternsContext | undefined {
    return this.tryGetRuleContext(0, Keyword_patternsContext);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_class_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterClass_pattern) {
      listener.enterClass_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitClass_pattern) {
      listener.exitClass_pattern(this);
    }
  }
}

export class Positional_patternsContext extends ParserRuleContext {
  public pattern(): PatternContext[];
  public pattern(i: number): PatternContext;
  public pattern(i?: number): PatternContext | PatternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(PatternContext);
    } else {
      return this.getRuleContext(i, PatternContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_positional_patterns;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterPositional_patterns) {
      listener.enterPositional_patterns(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitPositional_patterns) {
      listener.exitPositional_patterns(this);
    }
  }
}

export class Keyword_patternsContext extends ParserRuleContext {
  public keyword_pattern(): Keyword_patternContext[];
  public keyword_pattern(i: number): Keyword_patternContext;
  public keyword_pattern(
    i?: number
  ): Keyword_patternContext | Keyword_patternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Keyword_patternContext);
    } else {
      return this.getRuleContext(i, Keyword_patternContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_keyword_patterns;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterKeyword_patterns) {
      listener.enterKeyword_patterns(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitKeyword_patterns) {
      listener.exitKeyword_patterns(this);
    }
  }
}

export class Keyword_patternContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  public EQUAL(): TerminalNode {
    return this.getToken(PythonParser.EQUAL, 0);
  }
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_keyword_pattern;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterKeyword_pattern) {
      listener.enterKeyword_pattern(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitKeyword_pattern) {
      listener.exitKeyword_pattern(this);
    }
  }
}

export class Type_aliasContext extends ParserRuleContext {
  public soft_kw_type(): Soft_kw_typeContext {
    return this.getRuleContext(0, Soft_kw_typeContext);
  }
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  public EQUAL(): TerminalNode {
    return this.getToken(PythonParser.EQUAL, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public type_params(): Type_paramsContext | undefined {
    return this.tryGetRuleContext(0, Type_paramsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_type_alias;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterType_alias) {
      listener.enterType_alias(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitType_alias) {
      listener.exitType_alias(this);
    }
  }
}

export class Type_paramsContext extends ParserRuleContext {
  public LSQB(): TerminalNode {
    return this.getToken(PythonParser.LSQB, 0);
  }
  public type_param_seq(): Type_param_seqContext {
    return this.getRuleContext(0, Type_param_seqContext);
  }
  public RSQB(): TerminalNode {
    return this.getToken(PythonParser.RSQB, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_type_params;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterType_params) {
      listener.enterType_params(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitType_params) {
      listener.exitType_params(this);
    }
  }
}

export class Type_param_seqContext extends ParserRuleContext {
  public type_param(): Type_paramContext[];
  public type_param(i: number): Type_paramContext;
  public type_param(i?: number): Type_paramContext | Type_paramContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Type_paramContext);
    } else {
      return this.getRuleContext(i, Type_paramContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_type_param_seq;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterType_param_seq) {
      listener.enterType_param_seq(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitType_param_seq) {
      listener.exitType_param_seq(this);
    }
  }
}

export class Type_paramContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  public type_param_bound(): Type_param_boundContext | undefined {
    return this.tryGetRuleContext(0, Type_param_boundContext);
  }
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAR, 0);
  }
  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COLON, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public DOUBLESTAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOUBLESTAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_type_param;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterType_param) {
      listener.enterType_param(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitType_param) {
      listener.exitType_param(this);
    }
  }
}

export class Type_param_boundContext extends ParserRuleContext {
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_type_param_bound;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterType_param_bound) {
      listener.enterType_param_bound(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitType_param_bound) {
      listener.exitType_param_bound(this);
    }
  }
}

export class ExpressionsContext extends ParserRuleContext {
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_expressions;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterExpressions) {
      listener.enterExpressions(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitExpressions) {
      listener.exitExpressions(this);
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public disjunction(): DisjunctionContext[];
  public disjunction(i: number): DisjunctionContext;
  public disjunction(i?: number): DisjunctionContext | DisjunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DisjunctionContext);
    } else {
      return this.getRuleContext(i, DisjunctionContext);
    }
  }
  public IF(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.IF, 0);
  }
  public ELSE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.ELSE, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public lambdef(): LambdefContext | undefined {
    return this.tryGetRuleContext(0, LambdefContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_expression;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
}

export class Yield_exprContext extends ParserRuleContext {
  public YIELD(): TerminalNode {
    return this.getToken(PythonParser.YIELD, 0);
  }
  public FROM(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.FROM, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public star_expressions(): Star_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Star_expressionsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_yield_expr;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterYield_expr) {
      listener.enterYield_expr(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitYield_expr) {
      listener.exitYield_expr(this);
    }
  }
}

export class Star_expressionsContext extends ParserRuleContext {
  public star_expression(): Star_expressionContext[];
  public star_expression(i: number): Star_expressionContext;
  public star_expression(
    i?: number
  ): Star_expressionContext | Star_expressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Star_expressionContext);
    } else {
      return this.getRuleContext(i, Star_expressionContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_expressions;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_expressions) {
      listener.enterStar_expressions(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_expressions) {
      listener.exitStar_expressions(this);
    }
  }
}

export class Star_expressionContext extends ParserRuleContext {
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAR, 0);
  }
  public bitwise_or(): Bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Bitwise_orContext);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_expression;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_expression) {
      listener.enterStar_expression(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_expression) {
      listener.exitStar_expression(this);
    }
  }
}

export class Star_named_expressionsContext extends ParserRuleContext {
  public star_named_expression(): Star_named_expressionContext[];
  public star_named_expression(i: number): Star_named_expressionContext;
  public star_named_expression(
    i?: number
  ): Star_named_expressionContext | Star_named_expressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Star_named_expressionContext);
    } else {
      return this.getRuleContext(i, Star_named_expressionContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_named_expressions;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_named_expressions) {
      listener.enterStar_named_expressions(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_named_expressions) {
      listener.exitStar_named_expressions(this);
    }
  }
}

export class Star_named_expressionContext extends ParserRuleContext {
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAR, 0);
  }
  public bitwise_or(): Bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Bitwise_orContext);
  }
  public named_expression(): Named_expressionContext | undefined {
    return this.tryGetRuleContext(0, Named_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_named_expression;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_named_expression) {
      listener.enterStar_named_expression(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_named_expression) {
      listener.exitStar_named_expression(this);
    }
  }
}

export class Assignment_expressionContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  public COLONEQUAL(): TerminalNode {
    return this.getToken(PythonParser.COLONEQUAL, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_assignment_expression;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAssignment_expression) {
      listener.enterAssignment_expression(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAssignment_expression) {
      listener.exitAssignment_expression(this);
    }
  }
}

export class Named_expressionContext extends ParserRuleContext {
  public assignment_expression(): Assignment_expressionContext | undefined {
    return this.tryGetRuleContext(0, Assignment_expressionContext);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_named_expression;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterNamed_expression) {
      listener.enterNamed_expression(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitNamed_expression) {
      listener.exitNamed_expression(this);
    }
  }
}

export class DisjunctionContext extends ParserRuleContext {
  public conjunction(): ConjunctionContext[];
  public conjunction(i: number): ConjunctionContext;
  public conjunction(i?: number): ConjunctionContext | ConjunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConjunctionContext);
    } else {
      return this.getRuleContext(i, ConjunctionContext);
    }
  }
  public OR(): TerminalNode[];
  public OR(i: number): TerminalNode;
  public OR(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.OR);
    } else {
      return this.getToken(PythonParser.OR, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_disjunction;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDisjunction) {
      listener.enterDisjunction(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDisjunction) {
      listener.exitDisjunction(this);
    }
  }
}

export class ConjunctionContext extends ParserRuleContext {
  public inversion(): InversionContext[];
  public inversion(i: number): InversionContext;
  public inversion(i?: number): InversionContext | InversionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(InversionContext);
    } else {
      return this.getRuleContext(i, InversionContext);
    }
  }
  public AND(): TerminalNode[];
  public AND(i: number): TerminalNode;
  public AND(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.AND);
    } else {
      return this.getToken(PythonParser.AND, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_conjunction;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterConjunction) {
      listener.enterConjunction(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitConjunction) {
      listener.exitConjunction(this);
    }
  }
}

export class InversionContext extends ParserRuleContext {
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NOT, 0);
  }
  public inversion(): InversionContext | undefined {
    return this.tryGetRuleContext(0, InversionContext);
  }
  public comparison(): ComparisonContext | undefined {
    return this.tryGetRuleContext(0, ComparisonContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_inversion;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterInversion) {
      listener.enterInversion(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitInversion) {
      listener.exitInversion(this);
    }
  }
}

export class ComparisonContext extends ParserRuleContext {
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  public compare_op_bitwise_or_pair(): Compare_op_bitwise_or_pairContext[];
  public compare_op_bitwise_or_pair(
    i: number
  ): Compare_op_bitwise_or_pairContext;
  public compare_op_bitwise_or_pair(
    i?: number
  ): Compare_op_bitwise_or_pairContext | Compare_op_bitwise_or_pairContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Compare_op_bitwise_or_pairContext);
    } else {
      return this.getRuleContext(i, Compare_op_bitwise_or_pairContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_comparison;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterComparison) {
      listener.enterComparison(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitComparison) {
      listener.exitComparison(this);
    }
  }
}

export class Compare_op_bitwise_or_pairContext extends ParserRuleContext {
  public eq_bitwise_or(): Eq_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Eq_bitwise_orContext);
  }
  public noteq_bitwise_or(): Noteq_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Noteq_bitwise_orContext);
  }
  public lte_bitwise_or(): Lte_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Lte_bitwise_orContext);
  }
  public lt_bitwise_or(): Lt_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Lt_bitwise_orContext);
  }
  public gte_bitwise_or(): Gte_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Gte_bitwise_orContext);
  }
  public gt_bitwise_or(): Gt_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Gt_bitwise_orContext);
  }
  public notin_bitwise_or(): Notin_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Notin_bitwise_orContext);
  }
  public in_bitwise_or(): In_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, In_bitwise_orContext);
  }
  public isnot_bitwise_or(): Isnot_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Isnot_bitwise_orContext);
  }
  public is_bitwise_or(): Is_bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Is_bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_compare_op_bitwise_or_pair;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterCompare_op_bitwise_or_pair) {
      listener.enterCompare_op_bitwise_or_pair(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitCompare_op_bitwise_or_pair) {
      listener.exitCompare_op_bitwise_or_pair(this);
    }
  }
}

export class Eq_bitwise_orContext extends ParserRuleContext {
  public EQEQUAL(): TerminalNode {
    return this.getToken(PythonParser.EQEQUAL, 0);
  }
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_eq_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterEq_bitwise_or) {
      listener.enterEq_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitEq_bitwise_or) {
      listener.exitEq_bitwise_or(this);
    }
  }
}

export class Noteq_bitwise_orContext extends ParserRuleContext {
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  public NOTEQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NOTEQUAL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_noteq_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterNoteq_bitwise_or) {
      listener.enterNoteq_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitNoteq_bitwise_or) {
      listener.exitNoteq_bitwise_or(this);
    }
  }
}

export class Lte_bitwise_orContext extends ParserRuleContext {
  public LESSEQUAL(): TerminalNode {
    return this.getToken(PythonParser.LESSEQUAL, 0);
  }
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lte_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLte_bitwise_or) {
      listener.enterLte_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLte_bitwise_or) {
      listener.exitLte_bitwise_or(this);
    }
  }
}

export class Lt_bitwise_orContext extends ParserRuleContext {
  public LESS(): TerminalNode {
    return this.getToken(PythonParser.LESS, 0);
  }
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lt_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLt_bitwise_or) {
      listener.enterLt_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLt_bitwise_or) {
      listener.exitLt_bitwise_or(this);
    }
  }
}

export class Gte_bitwise_orContext extends ParserRuleContext {
  public GREATEREQUAL(): TerminalNode {
    return this.getToken(PythonParser.GREATEREQUAL, 0);
  }
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_gte_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterGte_bitwise_or) {
      listener.enterGte_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitGte_bitwise_or) {
      listener.exitGte_bitwise_or(this);
    }
  }
}

export class Gt_bitwise_orContext extends ParserRuleContext {
  public GREATER(): TerminalNode {
    return this.getToken(PythonParser.GREATER, 0);
  }
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_gt_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterGt_bitwise_or) {
      listener.enterGt_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitGt_bitwise_or) {
      listener.exitGt_bitwise_or(this);
    }
  }
}

export class Notin_bitwise_orContext extends ParserRuleContext {
  public NOT(): TerminalNode {
    return this.getToken(PythonParser.NOT, 0);
  }
  public IN(): TerminalNode {
    return this.getToken(PythonParser.IN, 0);
  }
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_notin_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterNotin_bitwise_or) {
      listener.enterNotin_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitNotin_bitwise_or) {
      listener.exitNotin_bitwise_or(this);
    }
  }
}

export class In_bitwise_orContext extends ParserRuleContext {
  public IN(): TerminalNode {
    return this.getToken(PythonParser.IN, 0);
  }
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_in_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterIn_bitwise_or) {
      listener.enterIn_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitIn_bitwise_or) {
      listener.exitIn_bitwise_or(this);
    }
  }
}

export class Isnot_bitwise_orContext extends ParserRuleContext {
  public IS(): TerminalNode {
    return this.getToken(PythonParser.IS, 0);
  }
  public NOT(): TerminalNode {
    return this.getToken(PythonParser.NOT, 0);
  }
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_isnot_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterIsnot_bitwise_or) {
      listener.enterIsnot_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitIsnot_bitwise_or) {
      listener.exitIsnot_bitwise_or(this);
    }
  }
}

export class Is_bitwise_orContext extends ParserRuleContext {
  public IS(): TerminalNode {
    return this.getToken(PythonParser.IS, 0);
  }
  public bitwise_or(): Bitwise_orContext {
    return this.getRuleContext(0, Bitwise_orContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_is_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterIs_bitwise_or) {
      listener.enterIs_bitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitIs_bitwise_or) {
      listener.exitIs_bitwise_or(this);
    }
  }
}

export class Bitwise_orContext extends ParserRuleContext {
  public bitwise_or(): Bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Bitwise_orContext);
  }
  public VBAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.VBAR, 0);
  }
  public bitwise_xor(): Bitwise_xorContext {
    return this.getRuleContext(0, Bitwise_xorContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_bitwise_or;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterBitwise_or) {
      listener.enterBitwise_or(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitBitwise_or) {
      listener.exitBitwise_or(this);
    }
  }
}

export class Bitwise_xorContext extends ParserRuleContext {
  public bitwise_xor(): Bitwise_xorContext | undefined {
    return this.tryGetRuleContext(0, Bitwise_xorContext);
  }
  public CIRCUMFLEX(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.CIRCUMFLEX, 0);
  }
  public bitwise_and(): Bitwise_andContext {
    return this.getRuleContext(0, Bitwise_andContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_bitwise_xor;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterBitwise_xor) {
      listener.enterBitwise_xor(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitBitwise_xor) {
      listener.exitBitwise_xor(this);
    }
  }
}

export class Bitwise_andContext extends ParserRuleContext {
  public bitwise_and(): Bitwise_andContext | undefined {
    return this.tryGetRuleContext(0, Bitwise_andContext);
  }
  public AMPER(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.AMPER, 0);
  }
  public shift_expr(): Shift_exprContext {
    return this.getRuleContext(0, Shift_exprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_bitwise_and;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterBitwise_and) {
      listener.enterBitwise_and(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitBitwise_and) {
      listener.exitBitwise_and(this);
    }
  }
}

export class Shift_exprContext extends ParserRuleContext {
  public shift_expr(): Shift_exprContext | undefined {
    return this.tryGetRuleContext(0, Shift_exprContext);
  }
  public sum(): SumContext {
    return this.getRuleContext(0, SumContext);
  }
  public LEFTSHIFT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LEFTSHIFT, 0);
  }
  public RIGHTSHIFT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RIGHTSHIFT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_shift_expr;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterShift_expr) {
      listener.enterShift_expr(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitShift_expr) {
      listener.exitShift_expr(this);
    }
  }
}

export class SumContext extends ParserRuleContext {
  public sum(): SumContext | undefined {
    return this.tryGetRuleContext(0, SumContext);
  }
  public term(): TermContext {
    return this.getRuleContext(0, TermContext);
  }
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.PLUS, 0);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.MINUS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_sum;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSum) {
      listener.enterSum(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSum) {
      listener.exitSum(this);
    }
  }
}

export class TermContext extends ParserRuleContext {
  public term(): TermContext | undefined {
    return this.tryGetRuleContext(0, TermContext);
  }
  public factor(): FactorContext {
    return this.getRuleContext(0, FactorContext);
  }
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAR, 0);
  }
  public SLASH(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.SLASH, 0);
  }
  public DOUBLESLASH(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOUBLESLASH, 0);
  }
  public PERCENT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.PERCENT, 0);
  }
  public AT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.AT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_term;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterTerm) {
      listener.enterTerm(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitTerm) {
      listener.exitTerm(this);
    }
  }
}

export class FactorContext extends ParserRuleContext {
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.PLUS, 0);
  }
  public factor(): FactorContext | undefined {
    return this.tryGetRuleContext(0, FactorContext);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.MINUS, 0);
  }
  public TILDE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TILDE, 0);
  }
  public power(): PowerContext | undefined {
    return this.tryGetRuleContext(0, PowerContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_factor;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFactor) {
      listener.enterFactor(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFactor) {
      listener.exitFactor(this);
    }
  }
}

export class PowerContext extends ParserRuleContext {
  public await_primary(): Await_primaryContext {
    return this.getRuleContext(0, Await_primaryContext);
  }
  public DOUBLESTAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOUBLESTAR, 0);
  }
  public factor(): FactorContext | undefined {
    return this.tryGetRuleContext(0, FactorContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_power;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterPower) {
      listener.enterPower(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitPower) {
      listener.exitPower(this);
    }
  }
}

export class Await_primaryContext extends ParserRuleContext {
  public AWAIT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.AWAIT, 0);
  }
  public primary(): PrimaryContext {
    return this.getRuleContext(0, PrimaryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_await_primary;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAwait_primary) {
      listener.enterAwait_primary(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAwait_primary) {
      listener.exitAwait_primary(this);
    }
  }
}

export class PrimaryContext extends ParserRuleContext {
  public primary(): PrimaryContext | undefined {
    return this.tryGetRuleContext(0, PrimaryContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOT, 0);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public genexp(): GenexpContext | undefined {
    return this.tryGetRuleContext(0, GenexpContext);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  public LSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LSQB, 0);
  }
  public slices(): SlicesContext | undefined {
    return this.tryGetRuleContext(0, SlicesContext);
  }
  public RSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RSQB, 0);
  }
  public arguments(): ArgumentsContext | undefined {
    return this.tryGetRuleContext(0, ArgumentsContext);
  }
  public atom(): AtomContext | undefined {
    return this.tryGetRuleContext(0, AtomContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_primary;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterPrimary) {
      listener.enterPrimary(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitPrimary) {
      listener.exitPrimary(this);
    }
  }
}

export class SlicesContext extends ParserRuleContext {
  public slice(): SliceContext[];
  public slice(i: number): SliceContext;
  public slice(i?: number): SliceContext | SliceContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SliceContext);
    } else {
      return this.getRuleContext(i, SliceContext);
    }
  }
  public starred_expression(): Starred_expressionContext[];
  public starred_expression(i: number): Starred_expressionContext;
  public starred_expression(
    i?: number
  ): Starred_expressionContext | Starred_expressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Starred_expressionContext);
    } else {
      return this.getRuleContext(i, Starred_expressionContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_slices;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSlices) {
      listener.enterSlices(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSlices) {
      listener.exitSlices(this);
    }
  }
}

export class SliceContext extends ParserRuleContext {
  public COLON(): TerminalNode[];
  public COLON(i: number): TerminalNode;
  public COLON(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COLON);
    } else {
      return this.getToken(PythonParser.COLON, i);
    }
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public named_expression(): Named_expressionContext | undefined {
    return this.tryGetRuleContext(0, Named_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_slice;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSlice) {
      listener.enterSlice(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSlice) {
      listener.exitSlice(this);
    }
  }
}

export class AtomContext extends ParserRuleContext {
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.TRUE, 0);
  }
  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.FALSE, 0);
  }
  public NONE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NONE, 0);
  }
  public strings(): StringsContext | undefined {
    return this.tryGetRuleContext(0, StringsContext);
  }
  public NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NUMBER, 0);
  }
  public tuple(): TupleContext | undefined {
    return this.tryGetRuleContext(0, TupleContext);
  }
  public group(): GroupContext | undefined {
    return this.tryGetRuleContext(0, GroupContext);
  }
  public genexp(): GenexpContext | undefined {
    return this.tryGetRuleContext(0, GenexpContext);
  }
  public list(): ListContext | undefined {
    return this.tryGetRuleContext(0, ListContext);
  }
  public listcomp(): ListcompContext | undefined {
    return this.tryGetRuleContext(0, ListcompContext);
  }
  public dict(): DictContext | undefined {
    return this.tryGetRuleContext(0, DictContext);
  }
  public set(): SetContext | undefined {
    return this.tryGetRuleContext(0, SetContext);
  }
  public dictcomp(): DictcompContext | undefined {
    return this.tryGetRuleContext(0, DictcompContext);
  }
  public setcomp(): SetcompContext | undefined {
    return this.tryGetRuleContext(0, SetcompContext);
  }
  public ELLIPSIS(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.ELLIPSIS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_atom;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterAtom) {
      listener.enterAtom(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitAtom) {
      listener.exitAtom(this);
    }
  }
}

export class GroupContext extends ParserRuleContext {
  public LPAR(): TerminalNode {
    return this.getToken(PythonParser.LPAR, 0);
  }
  public RPAR(): TerminalNode {
    return this.getToken(PythonParser.RPAR, 0);
  }
  public yield_expr(): Yield_exprContext | undefined {
    return this.tryGetRuleContext(0, Yield_exprContext);
  }
  public named_expression(): Named_expressionContext | undefined {
    return this.tryGetRuleContext(0, Named_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_group;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterGroup) {
      listener.enterGroup(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitGroup) {
      listener.exitGroup(this);
    }
  }
}

export class LambdefContext extends ParserRuleContext {
  public LAMBDA(): TerminalNode {
    return this.getToken(PythonParser.LAMBDA, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public lambda_params(): Lambda_paramsContext | undefined {
    return this.tryGetRuleContext(0, Lambda_paramsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambdef;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambdef) {
      listener.enterLambdef(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambdef) {
      listener.exitLambdef(this);
    }
  }
}

export class Lambda_paramsContext extends ParserRuleContext {
  public lambda_parameters(): Lambda_parametersContext {
    return this.getRuleContext(0, Lambda_parametersContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_params;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_params) {
      listener.enterLambda_params(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_params) {
      listener.exitLambda_params(this);
    }
  }
}

export class Lambda_parametersContext extends ParserRuleContext {
  public lambda_slash_no_default(): Lambda_slash_no_defaultContext | undefined {
    return this.tryGetRuleContext(0, Lambda_slash_no_defaultContext);
  }
  public lambda_param_no_default(): Lambda_param_no_defaultContext[];
  public lambda_param_no_default(i: number): Lambda_param_no_defaultContext;
  public lambda_param_no_default(
    i?: number
  ): Lambda_param_no_defaultContext | Lambda_param_no_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Lambda_param_no_defaultContext);
    } else {
      return this.getRuleContext(i, Lambda_param_no_defaultContext);
    }
  }
  public lambda_param_with_default(): Lambda_param_with_defaultContext[];
  public lambda_param_with_default(i: number): Lambda_param_with_defaultContext;
  public lambda_param_with_default(
    i?: number
  ): Lambda_param_with_defaultContext | Lambda_param_with_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Lambda_param_with_defaultContext);
    } else {
      return this.getRuleContext(i, Lambda_param_with_defaultContext);
    }
  }
  public lambda_star_etc(): Lambda_star_etcContext | undefined {
    return this.tryGetRuleContext(0, Lambda_star_etcContext);
  }
  public lambda_slash_with_default():
    | Lambda_slash_with_defaultContext
    | undefined {
    return this.tryGetRuleContext(0, Lambda_slash_with_defaultContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_parameters;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_parameters) {
      listener.enterLambda_parameters(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_parameters) {
      listener.exitLambda_parameters(this);
    }
  }
}

export class Lambda_slash_no_defaultContext extends ParserRuleContext {
  public SLASH(): TerminalNode {
    return this.getToken(PythonParser.SLASH, 0);
  }
  public lambda_param_no_default(): Lambda_param_no_defaultContext[];
  public lambda_param_no_default(i: number): Lambda_param_no_defaultContext;
  public lambda_param_no_default(
    i?: number
  ): Lambda_param_no_defaultContext | Lambda_param_no_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Lambda_param_no_defaultContext);
    } else {
      return this.getRuleContext(i, Lambda_param_no_defaultContext);
    }
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_slash_no_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_slash_no_default) {
      listener.enterLambda_slash_no_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_slash_no_default) {
      listener.exitLambda_slash_no_default(this);
    }
  }
}

export class Lambda_slash_with_defaultContext extends ParserRuleContext {
  public SLASH(): TerminalNode {
    return this.getToken(PythonParser.SLASH, 0);
  }
  public lambda_param_no_default(): Lambda_param_no_defaultContext[];
  public lambda_param_no_default(i: number): Lambda_param_no_defaultContext;
  public lambda_param_no_default(
    i?: number
  ): Lambda_param_no_defaultContext | Lambda_param_no_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Lambda_param_no_defaultContext);
    } else {
      return this.getRuleContext(i, Lambda_param_no_defaultContext);
    }
  }
  public lambda_param_with_default(): Lambda_param_with_defaultContext[];
  public lambda_param_with_default(i: number): Lambda_param_with_defaultContext;
  public lambda_param_with_default(
    i?: number
  ): Lambda_param_with_defaultContext | Lambda_param_with_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Lambda_param_with_defaultContext);
    } else {
      return this.getRuleContext(i, Lambda_param_with_defaultContext);
    }
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_slash_with_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_slash_with_default) {
      listener.enterLambda_slash_with_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_slash_with_default) {
      listener.exitLambda_slash_with_default(this);
    }
  }
}

export class Lambda_star_etcContext extends ParserRuleContext {
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAR, 0);
  }
  public lambda_param_no_default(): Lambda_param_no_defaultContext | undefined {
    return this.tryGetRuleContext(0, Lambda_param_no_defaultContext);
  }
  public lambda_param_maybe_default(): Lambda_param_maybe_defaultContext[];
  public lambda_param_maybe_default(
    i: number
  ): Lambda_param_maybe_defaultContext;
  public lambda_param_maybe_default(
    i?: number
  ): Lambda_param_maybe_defaultContext | Lambda_param_maybe_defaultContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Lambda_param_maybe_defaultContext);
    } else {
      return this.getRuleContext(i, Lambda_param_maybe_defaultContext);
    }
  }
  public lambda_kwds(): Lambda_kwdsContext | undefined {
    return this.tryGetRuleContext(0, Lambda_kwdsContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_star_etc;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_star_etc) {
      listener.enterLambda_star_etc(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_star_etc) {
      listener.exitLambda_star_etc(this);
    }
  }
}

export class Lambda_kwdsContext extends ParserRuleContext {
  public DOUBLESTAR(): TerminalNode {
    return this.getToken(PythonParser.DOUBLESTAR, 0);
  }
  public lambda_param_no_default(): Lambda_param_no_defaultContext {
    return this.getRuleContext(0, Lambda_param_no_defaultContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_kwds;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_kwds) {
      listener.enterLambda_kwds(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_kwds) {
      listener.exitLambda_kwds(this);
    }
  }
}

export class Lambda_param_no_defaultContext extends ParserRuleContext {
  public lambda_param(): Lambda_paramContext {
    return this.getRuleContext(0, Lambda_paramContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_param_no_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_param_no_default) {
      listener.enterLambda_param_no_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_param_no_default) {
      listener.exitLambda_param_no_default(this);
    }
  }
}

export class Lambda_param_with_defaultContext extends ParserRuleContext {
  public lambda_param(): Lambda_paramContext {
    return this.getRuleContext(0, Lambda_paramContext);
  }
  public default_assignment(): Default_assignmentContext {
    return this.getRuleContext(0, Default_assignmentContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_param_with_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_param_with_default) {
      listener.enterLambda_param_with_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_param_with_default) {
      listener.exitLambda_param_with_default(this);
    }
  }
}

export class Lambda_param_maybe_defaultContext extends ParserRuleContext {
  public lambda_param(): Lambda_paramContext {
    return this.getRuleContext(0, Lambda_paramContext);
  }
  public default_assignment(): Default_assignmentContext | undefined {
    return this.tryGetRuleContext(0, Default_assignmentContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_param_maybe_default;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_param_maybe_default) {
      listener.enterLambda_param_maybe_default(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_param_maybe_default) {
      listener.exitLambda_param_maybe_default(this);
    }
  }
}

export class Lambda_paramContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_lambda_param;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterLambda_param) {
      listener.enterLambda_param(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitLambda_param) {
      listener.exitLambda_param(this);
    }
  }
}

export class Fstring_middleContext extends ParserRuleContext {
  public fstring_replacement_field():
    | Fstring_replacement_fieldContext
    | undefined {
    return this.tryGetRuleContext(0, Fstring_replacement_fieldContext);
  }
  public FSTRING_MIDDLE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.FSTRING_MIDDLE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_fstring_middle;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFstring_middle) {
      listener.enterFstring_middle(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFstring_middle) {
      listener.exitFstring_middle(this);
    }
  }
}

export class Fstring_replacement_fieldContext extends ParserRuleContext {
  public LBRACE(): TerminalNode {
    return this.getToken(PythonParser.LBRACE, 0);
  }
  public RBRACE(): TerminalNode {
    return this.getToken(PythonParser.RBRACE, 0);
  }
  public yield_expr(): Yield_exprContext | undefined {
    return this.tryGetRuleContext(0, Yield_exprContext);
  }
  public star_expressions(): Star_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Star_expressionsContext);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.EQUAL, 0);
  }
  public fstring_conversion(): Fstring_conversionContext | undefined {
    return this.tryGetRuleContext(0, Fstring_conversionContext);
  }
  public fstring_full_format_spec():
    | Fstring_full_format_specContext
    | undefined {
    return this.tryGetRuleContext(0, Fstring_full_format_specContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_fstring_replacement_field;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFstring_replacement_field) {
      listener.enterFstring_replacement_field(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFstring_replacement_field) {
      listener.exitFstring_replacement_field(this);
    }
  }
}

export class Fstring_conversionContext extends ParserRuleContext {
  public EXCLAMATION(): TerminalNode {
    return this.getToken(PythonParser.EXCLAMATION, 0);
  }
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_fstring_conversion;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFstring_conversion) {
      listener.enterFstring_conversion(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFstring_conversion) {
      listener.exitFstring_conversion(this);
    }
  }
}

export class Fstring_full_format_specContext extends ParserRuleContext {
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  public fstring_format_spec(): Fstring_format_specContext[];
  public fstring_format_spec(i: number): Fstring_format_specContext;
  public fstring_format_spec(
    i?: number
  ): Fstring_format_specContext | Fstring_format_specContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Fstring_format_specContext);
    } else {
      return this.getRuleContext(i, Fstring_format_specContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_fstring_full_format_spec;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFstring_full_format_spec) {
      listener.enterFstring_full_format_spec(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFstring_full_format_spec) {
      listener.exitFstring_full_format_spec(this);
    }
  }
}

export class Fstring_format_specContext extends ParserRuleContext {
  public FSTRING_MIDDLE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.FSTRING_MIDDLE, 0);
  }
  public fstring_replacement_field():
    | Fstring_replacement_fieldContext
    | undefined {
    return this.tryGetRuleContext(0, Fstring_replacement_fieldContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_fstring_format_spec;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFstring_format_spec) {
      listener.enterFstring_format_spec(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFstring_format_spec) {
      listener.exitFstring_format_spec(this);
    }
  }
}

export class FstringContext extends ParserRuleContext {
  public FSTRING_START(): TerminalNode {
    return this.getToken(PythonParser.FSTRING_START, 0);
  }
  public FSTRING_END(): TerminalNode {
    return this.getToken(PythonParser.FSTRING_END, 0);
  }
  public fstring_middle(): Fstring_middleContext[];
  public fstring_middle(i: number): Fstring_middleContext;
  public fstring_middle(
    i?: number
  ): Fstring_middleContext | Fstring_middleContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Fstring_middleContext);
    } else {
      return this.getRuleContext(i, Fstring_middleContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_fstring;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFstring) {
      listener.enterFstring(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFstring) {
      listener.exitFstring(this);
    }
  }
}

export class StringContext extends ParserRuleContext {
  public STRING(): TerminalNode {
    return this.getToken(PythonParser.STRING, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_string;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterString) {
      listener.enterString(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitString) {
      listener.exitString(this);
    }
  }
}

export class StringsContext extends ParserRuleContext {
  public fstring(): FstringContext[];
  public fstring(i: number): FstringContext;
  public fstring(i?: number): FstringContext | FstringContext[] {
    if (i === undefined) {
      return this.getRuleContexts(FstringContext);
    } else {
      return this.getRuleContext(i, FstringContext);
    }
  }
  public string(): StringContext[];
  public string(i: number): StringContext;
  public string(i?: number): StringContext | StringContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StringContext);
    } else {
      return this.getRuleContext(i, StringContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_strings;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStrings) {
      listener.enterStrings(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStrings) {
      listener.exitStrings(this);
    }
  }
}

export class ListContext extends ParserRuleContext {
  public LSQB(): TerminalNode {
    return this.getToken(PythonParser.LSQB, 0);
  }
  public RSQB(): TerminalNode {
    return this.getToken(PythonParser.RSQB, 0);
  }
  public star_named_expressions(): Star_named_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Star_named_expressionsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_list;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterList) {
      listener.enterList(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitList) {
      listener.exitList(this);
    }
  }
}

export class TupleContext extends ParserRuleContext {
  public LPAR(): TerminalNode {
    return this.getToken(PythonParser.LPAR, 0);
  }
  public RPAR(): TerminalNode {
    return this.getToken(PythonParser.RPAR, 0);
  }
  public star_named_expression(): Star_named_expressionContext | undefined {
    return this.tryGetRuleContext(0, Star_named_expressionContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  public star_named_expressions(): Star_named_expressionsContext | undefined {
    return this.tryGetRuleContext(0, Star_named_expressionsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_tuple;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterTuple) {
      listener.enterTuple(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitTuple) {
      listener.exitTuple(this);
    }
  }
}

export class SetContext extends ParserRuleContext {
  public LBRACE(): TerminalNode {
    return this.getToken(PythonParser.LBRACE, 0);
  }
  public star_named_expressions(): Star_named_expressionsContext {
    return this.getRuleContext(0, Star_named_expressionsContext);
  }
  public RBRACE(): TerminalNode {
    return this.getToken(PythonParser.RBRACE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_set;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSet) {
      listener.enterSet(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSet) {
      listener.exitSet(this);
    }
  }
}

export class DictContext extends ParserRuleContext {
  public LBRACE(): TerminalNode {
    return this.getToken(PythonParser.LBRACE, 0);
  }
  public RBRACE(): TerminalNode {
    return this.getToken(PythonParser.RBRACE, 0);
  }
  public double_starred_kvpairs(): Double_starred_kvpairsContext | undefined {
    return this.tryGetRuleContext(0, Double_starred_kvpairsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_dict;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDict) {
      listener.enterDict(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDict) {
      listener.exitDict(this);
    }
  }
}

export class Double_starred_kvpairsContext extends ParserRuleContext {
  public double_starred_kvpair(): Double_starred_kvpairContext[];
  public double_starred_kvpair(i: number): Double_starred_kvpairContext;
  public double_starred_kvpair(
    i?: number
  ): Double_starred_kvpairContext | Double_starred_kvpairContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Double_starred_kvpairContext);
    } else {
      return this.getRuleContext(i, Double_starred_kvpairContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_double_starred_kvpairs;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDouble_starred_kvpairs) {
      listener.enterDouble_starred_kvpairs(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDouble_starred_kvpairs) {
      listener.exitDouble_starred_kvpairs(this);
    }
  }
}

export class Double_starred_kvpairContext extends ParserRuleContext {
  public DOUBLESTAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOUBLESTAR, 0);
  }
  public bitwise_or(): Bitwise_orContext | undefined {
    return this.tryGetRuleContext(0, Bitwise_orContext);
  }
  public kvpair(): KvpairContext | undefined {
    return this.tryGetRuleContext(0, KvpairContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_double_starred_kvpair;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDouble_starred_kvpair) {
      listener.enterDouble_starred_kvpair(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDouble_starred_kvpair) {
      listener.exitDouble_starred_kvpair(this);
    }
  }
}

export class KvpairContext extends ParserRuleContext {
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public COLON(): TerminalNode {
    return this.getToken(PythonParser.COLON, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_kvpair;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterKvpair) {
      listener.enterKvpair(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitKvpair) {
      listener.exitKvpair(this);
    }
  }
}

export class For_if_clausesContext extends ParserRuleContext {
  public for_if_clause(): For_if_clauseContext[];
  public for_if_clause(i: number): For_if_clauseContext;
  public for_if_clause(
    i?: number
  ): For_if_clauseContext | For_if_clauseContext[] {
    if (i === undefined) {
      return this.getRuleContexts(For_if_clauseContext);
    } else {
      return this.getRuleContext(i, For_if_clauseContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_for_if_clauses;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFor_if_clauses) {
      listener.enterFor_if_clauses(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFor_if_clauses) {
      listener.exitFor_if_clauses(this);
    }
  }
}

export class For_if_clauseContext extends ParserRuleContext {
  public FOR(): TerminalNode {
    return this.getToken(PythonParser.FOR, 0);
  }
  public star_targets(): Star_targetsContext {
    return this.getRuleContext(0, Star_targetsContext);
  }
  public IN(): TerminalNode {
    return this.getToken(PythonParser.IN, 0);
  }
  public disjunction(): DisjunctionContext[];
  public disjunction(i: number): DisjunctionContext;
  public disjunction(i?: number): DisjunctionContext | DisjunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DisjunctionContext);
    } else {
      return this.getRuleContext(i, DisjunctionContext);
    }
  }
  public ASYNC(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.ASYNC, 0);
  }
  public IF(): TerminalNode[];
  public IF(i: number): TerminalNode;
  public IF(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.IF);
    } else {
      return this.getToken(PythonParser.IF, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_for_if_clause;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFor_if_clause) {
      listener.enterFor_if_clause(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFor_if_clause) {
      listener.exitFor_if_clause(this);
    }
  }
}

export class ListcompContext extends ParserRuleContext {
  public LSQB(): TerminalNode {
    return this.getToken(PythonParser.LSQB, 0);
  }
  public named_expression(): Named_expressionContext {
    return this.getRuleContext(0, Named_expressionContext);
  }
  public for_if_clauses(): For_if_clausesContext {
    return this.getRuleContext(0, For_if_clausesContext);
  }
  public RSQB(): TerminalNode {
    return this.getToken(PythonParser.RSQB, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_listcomp;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterListcomp) {
      listener.enterListcomp(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitListcomp) {
      listener.exitListcomp(this);
    }
  }
}

export class SetcompContext extends ParserRuleContext {
  public LBRACE(): TerminalNode {
    return this.getToken(PythonParser.LBRACE, 0);
  }
  public named_expression(): Named_expressionContext {
    return this.getRuleContext(0, Named_expressionContext);
  }
  public for_if_clauses(): For_if_clausesContext {
    return this.getRuleContext(0, For_if_clausesContext);
  }
  public RBRACE(): TerminalNode {
    return this.getToken(PythonParser.RBRACE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_setcomp;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSetcomp) {
      listener.enterSetcomp(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSetcomp) {
      listener.exitSetcomp(this);
    }
  }
}

export class GenexpContext extends ParserRuleContext {
  public LPAR(): TerminalNode {
    return this.getToken(PythonParser.LPAR, 0);
  }
  public for_if_clauses(): For_if_clausesContext {
    return this.getRuleContext(0, For_if_clausesContext);
  }
  public RPAR(): TerminalNode {
    return this.getToken(PythonParser.RPAR, 0);
  }
  public assignment_expression(): Assignment_expressionContext | undefined {
    return this.tryGetRuleContext(0, Assignment_expressionContext);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_genexp;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterGenexp) {
      listener.enterGenexp(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitGenexp) {
      listener.exitGenexp(this);
    }
  }
}

export class DictcompContext extends ParserRuleContext {
  public LBRACE(): TerminalNode {
    return this.getToken(PythonParser.LBRACE, 0);
  }
  public kvpair(): KvpairContext {
    return this.getRuleContext(0, KvpairContext);
  }
  public for_if_clauses(): For_if_clausesContext {
    return this.getRuleContext(0, For_if_clausesContext);
  }
  public RBRACE(): TerminalNode {
    return this.getToken(PythonParser.RBRACE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_dictcomp;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDictcomp) {
      listener.enterDictcomp(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDictcomp) {
      listener.exitDictcomp(this);
    }
  }
}

export class ArgumentsContext extends ParserRuleContext {
  public args(): ArgsContext {
    return this.getRuleContext(0, ArgsContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_arguments;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterArguments) {
      listener.enterArguments(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitArguments) {
      listener.exitArguments(this);
    }
  }
}

export class ArgsContext extends ParserRuleContext {
  public starred_expression(): Starred_expressionContext[];
  public starred_expression(i: number): Starred_expressionContext;
  public starred_expression(
    i?: number
  ): Starred_expressionContext | Starred_expressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Starred_expressionContext);
    } else {
      return this.getRuleContext(i, Starred_expressionContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  public kwargs(): KwargsContext | undefined {
    return this.tryGetRuleContext(0, KwargsContext);
  }
  public assignment_expression(): Assignment_expressionContext[];
  public assignment_expression(i: number): Assignment_expressionContext;
  public assignment_expression(
    i?: number
  ): Assignment_expressionContext | Assignment_expressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Assignment_expressionContext);
    } else {
      return this.getRuleContext(i, Assignment_expressionContext);
    }
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_args;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterArgs) {
      listener.enterArgs(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitArgs) {
      listener.exitArgs(this);
    }
  }
}

export class KwargsContext extends ParserRuleContext {
  public kwarg_or_starred(): Kwarg_or_starredContext[];
  public kwarg_or_starred(i: number): Kwarg_or_starredContext;
  public kwarg_or_starred(
    i?: number
  ): Kwarg_or_starredContext | Kwarg_or_starredContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Kwarg_or_starredContext);
    } else {
      return this.getRuleContext(i, Kwarg_or_starredContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  public kwarg_or_double_starred(): Kwarg_or_double_starredContext[];
  public kwarg_or_double_starred(i: number): Kwarg_or_double_starredContext;
  public kwarg_or_double_starred(
    i?: number
  ): Kwarg_or_double_starredContext | Kwarg_or_double_starredContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Kwarg_or_double_starredContext);
    } else {
      return this.getRuleContext(i, Kwarg_or_double_starredContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_kwargs;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterKwargs) {
      listener.enterKwargs(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitKwargs) {
      listener.exitKwargs(this);
    }
  }
}

export class Starred_expressionContext extends ParserRuleContext {
  public STAR(): TerminalNode {
    return this.getToken(PythonParser.STAR, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_starred_expression;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStarred_expression) {
      listener.enterStarred_expression(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStarred_expression) {
      listener.exitStarred_expression(this);
    }
  }
}

export class Kwarg_or_starredContext extends ParserRuleContext {
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.EQUAL, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public starred_expression(): Starred_expressionContext | undefined {
    return this.tryGetRuleContext(0, Starred_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_kwarg_or_starred;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterKwarg_or_starred) {
      listener.enterKwarg_or_starred(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitKwarg_or_starred) {
      listener.exitKwarg_or_starred(this);
    }
  }
}

export class Kwarg_or_double_starredContext extends ParserRuleContext {
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.EQUAL, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public DOUBLESTAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOUBLESTAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_kwarg_or_double_starred;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterKwarg_or_double_starred) {
      listener.enterKwarg_or_double_starred(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitKwarg_or_double_starred) {
      listener.exitKwarg_or_double_starred(this);
    }
  }
}

export class Star_targetsContext extends ParserRuleContext {
  public star_target(): Star_targetContext[];
  public star_target(i: number): Star_targetContext;
  public star_target(i?: number): Star_targetContext | Star_targetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Star_targetContext);
    } else {
      return this.getRuleContext(i, Star_targetContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_targets;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_targets) {
      listener.enterStar_targets(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_targets) {
      listener.exitStar_targets(this);
    }
  }
}

export class Star_targets_list_seqContext extends ParserRuleContext {
  public star_target(): Star_targetContext[];
  public star_target(i: number): Star_targetContext;
  public star_target(i?: number): Star_targetContext | Star_targetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Star_targetContext);
    } else {
      return this.getRuleContext(i, Star_targetContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_targets_list_seq;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_targets_list_seq) {
      listener.enterStar_targets_list_seq(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_targets_list_seq) {
      listener.exitStar_targets_list_seq(this);
    }
  }
}

export class Star_targets_tuple_seqContext extends ParserRuleContext {
  public star_target(): Star_targetContext[];
  public star_target(i: number): Star_targetContext;
  public star_target(i?: number): Star_targetContext | Star_targetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Star_targetContext);
    } else {
      return this.getRuleContext(i, Star_targetContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_targets_tuple_seq;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_targets_tuple_seq) {
      listener.enterStar_targets_tuple_seq(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_targets_tuple_seq) {
      listener.exitStar_targets_tuple_seq(this);
    }
  }
}

export class Star_targetContext extends ParserRuleContext {
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAR, 0);
  }
  public star_target(): Star_targetContext | undefined {
    return this.tryGetRuleContext(0, Star_targetContext);
  }
  public target_with_star_atom(): Target_with_star_atomContext | undefined {
    return this.tryGetRuleContext(0, Target_with_star_atomContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_target;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_target) {
      listener.enterStar_target(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_target) {
      listener.exitStar_target(this);
    }
  }
}

export class Target_with_star_atomContext extends ParserRuleContext {
  public t_primary(): T_primaryContext | undefined {
    return this.tryGetRuleContext(0, T_primaryContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOT, 0);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public LSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LSQB, 0);
  }
  public slices(): SlicesContext | undefined {
    return this.tryGetRuleContext(0, SlicesContext);
  }
  public RSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RSQB, 0);
  }
  public star_atom(): Star_atomContext | undefined {
    return this.tryGetRuleContext(0, Star_atomContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_target_with_star_atom;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterTarget_with_star_atom) {
      listener.enterTarget_with_star_atom(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitTarget_with_star_atom) {
      listener.exitTarget_with_star_atom(this);
    }
  }
}

export class Star_atomContext extends ParserRuleContext {
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public target_with_star_atom(): Target_with_star_atomContext | undefined {
    return this.tryGetRuleContext(0, Target_with_star_atomContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  public star_targets_tuple_seq(): Star_targets_tuple_seqContext | undefined {
    return this.tryGetRuleContext(0, Star_targets_tuple_seqContext);
  }
  public LSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LSQB, 0);
  }
  public RSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RSQB, 0);
  }
  public star_targets_list_seq(): Star_targets_list_seqContext | undefined {
    return this.tryGetRuleContext(0, Star_targets_list_seqContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_star_atom;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterStar_atom) {
      listener.enterStar_atom(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitStar_atom) {
      listener.exitStar_atom(this);
    }
  }
}

export class Single_targetContext extends ParserRuleContext {
  public single_subscript_attribute_target():
    | Single_subscript_attribute_targetContext
    | undefined {
    return this.tryGetRuleContext(0, Single_subscript_attribute_targetContext);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public single_target(): Single_targetContext | undefined {
    return this.tryGetRuleContext(0, Single_targetContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_single_target;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSingle_target) {
      listener.enterSingle_target(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSingle_target) {
      listener.exitSingle_target(this);
    }
  }
}

export class Single_subscript_attribute_targetContext extends ParserRuleContext {
  public t_primary(): T_primaryContext {
    return this.getRuleContext(0, T_primaryContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOT, 0);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public LSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LSQB, 0);
  }
  public slices(): SlicesContext | undefined {
    return this.tryGetRuleContext(0, SlicesContext);
  }
  public RSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RSQB, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_single_subscript_attribute_target;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSingle_subscript_attribute_target) {
      listener.enterSingle_subscript_attribute_target(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSingle_subscript_attribute_target) {
      listener.exitSingle_subscript_attribute_target(this);
    }
  }
}

export class T_primaryContext extends ParserRuleContext {
  public t_primary(): T_primaryContext | undefined {
    return this.tryGetRuleContext(0, T_primaryContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOT, 0);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public LSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LSQB, 0);
  }
  public slices(): SlicesContext | undefined {
    return this.tryGetRuleContext(0, SlicesContext);
  }
  public RSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RSQB, 0);
  }
  public genexp(): GenexpContext | undefined {
    return this.tryGetRuleContext(0, GenexpContext);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  public arguments(): ArgumentsContext | undefined {
    return this.tryGetRuleContext(0, ArgumentsContext);
  }
  public atom(): AtomContext | undefined {
    return this.tryGetRuleContext(0, AtomContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_t_primary;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterT_primary) {
      listener.enterT_primary(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitT_primary) {
      listener.exitT_primary(this);
    }
  }
}

export class Del_targetsContext extends ParserRuleContext {
  public del_target(): Del_targetContext[];
  public del_target(i: number): Del_targetContext;
  public del_target(i?: number): Del_targetContext | Del_targetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Del_targetContext);
    } else {
      return this.getRuleContext(i, Del_targetContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_del_targets;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDel_targets) {
      listener.enterDel_targets(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDel_targets) {
      listener.exitDel_targets(this);
    }
  }
}

export class Del_targetContext extends ParserRuleContext {
  public t_primary(): T_primaryContext | undefined {
    return this.tryGetRuleContext(0, T_primaryContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOT, 0);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public LSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LSQB, 0);
  }
  public slices(): SlicesContext | undefined {
    return this.tryGetRuleContext(0, SlicesContext);
  }
  public RSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RSQB, 0);
  }
  public del_t_atom(): Del_t_atomContext | undefined {
    return this.tryGetRuleContext(0, Del_t_atomContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_del_target;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDel_target) {
      listener.enterDel_target(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDel_target) {
      listener.exitDel_target(this);
    }
  }
}

export class Del_t_atomContext extends ParserRuleContext {
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NAME, 0);
  }
  public LPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LPAR, 0);
  }
  public del_target(): Del_targetContext | undefined {
    return this.tryGetRuleContext(0, Del_targetContext);
  }
  public RPAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RPAR, 0);
  }
  public del_targets(): Del_targetsContext | undefined {
    return this.tryGetRuleContext(0, Del_targetsContext);
  }
  public LSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.LSQB, 0);
  }
  public RSQB(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.RSQB, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_del_t_atom;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterDel_t_atom) {
      listener.enterDel_t_atom(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitDel_t_atom) {
      listener.exitDel_t_atom(this);
    }
  }
}

export class Type_expressionsContext extends ParserRuleContext {
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PythonParser.COMMA);
    } else {
      return this.getToken(PythonParser.COMMA, i);
    }
  }
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.STAR, 0);
  }
  public DOUBLESTAR(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.DOUBLESTAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_type_expressions;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterType_expressions) {
      listener.enterType_expressions(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitType_expressions) {
      listener.exitType_expressions(this);
    }
  }
}

export class Func_type_commentContext extends ParserRuleContext {
  public NEWLINE(): TerminalNode | undefined {
    return this.tryGetToken(PythonParser.NEWLINE, 0);
  }
  public TYPE_COMMENT(): TerminalNode {
    return this.getToken(PythonParser.TYPE_COMMENT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_func_type_comment;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterFunc_type_comment) {
      listener.enterFunc_type_comment(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitFunc_type_comment) {
      listener.exitFunc_type_comment(this);
    }
  }
}

export class Soft_kw_typeContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_soft_kw_type;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSoft_kw_type) {
      listener.enterSoft_kw_type(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSoft_kw_type) {
      listener.exitSoft_kw_type(this);
    }
  }
}

export class Soft_kw_matchContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_soft_kw_match;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSoft_kw_match) {
      listener.enterSoft_kw_match(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSoft_kw_match) {
      listener.exitSoft_kw_match(this);
    }
  }
}

export class Soft_kw_caseContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_soft_kw_case;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSoft_kw_case) {
      listener.enterSoft_kw_case(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSoft_kw_case) {
      listener.exitSoft_kw_case(this);
    }
  }
}

export class Soft_kw_wildcardContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_soft_kw_wildcard;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSoft_kw_wildcard) {
      listener.enterSoft_kw_wildcard(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSoft_kw_wildcard) {
      listener.exitSoft_kw_wildcard(this);
    }
  }
}

export class Soft_kw__not__wildcardContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(PythonParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PythonParser.RULE_soft_kw__not__wildcard;
  }
  // @Override
  public enterRule(listener: PythonParserListener): void {
    if (listener.enterSoft_kw__not__wildcard) {
      listener.enterSoft_kw__not__wildcard(this);
    }
  }
  // @Override
  public exitRule(listener: PythonParserListener): void {
    if (listener.exitSoft_kw__not__wildcard) {
      listener.exitSoft_kw__not__wildcard(this);
    }
  }
}
