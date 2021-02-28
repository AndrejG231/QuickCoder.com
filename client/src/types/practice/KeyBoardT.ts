export type Characters =
  | " "
  | "!"
  | '"'
  | "#"
  | "$"
  | "%"
  | "&"
  | "'"
  | "("
  | ")"
  | "*"
  | "+"
  | ","
  | "-"
  | "."
  | "/"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0"
  | ":"
  | ";"
  | "<"
  | "="
  | ">"
  | "?"
  | "@"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "["
  | "\\"
  | "]"
  | "^"
  | "_"
  | "`"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "{"
  | "|"
  | "}"
  | "~"
  | "";

export type Keys =
  | "none"
  | "--"
  | "1"
  | "TAB"
  | "q"
  | "CAPS"
  | "a"
  | "LShift"
  | "z"
  | "2"
  | "w"
  | "s"
  | "x"
  | "3"
  | "e"
  | "d"
  | "c"
  | "4"
  | "5"
  | "r"
  | "t"
  | "f"
  | "g"
  | "v"
  | "b"
  | "0"
  | "-"
  | "="
  | "BSpace"
  | "p"
  | "["
  | "]"
  | ";"
  | "'"
  | "\\"
  | "Enter"
  | "/"
  | "RShift"
  | "9"
  | "o"
  | "l"
  | "."
  | "8"
  | "i"
  | "k"
  | ","
  | "6"
  | "7"
  | "y"
  | "u"
  | "h"
  | "j"
  | "n"
  | "m"
  | "`"
  | " "
  | "ctrl"
  | "alt"
  | "XX";

export type Colors =
  | "L1"
  | "L2"
  | "L3"
  | "L4"
  | "R1"
  | "R2"
  | "R3"
  | "R4"
  | "SPACE"
  | "ERROR";

export type Layout = {
  Number: Keys[];
  Upper: Keys[];
  Middle: Keys[];
  Lower: Keys[];
};