const sanitize = (input) => {
  //remove <, >, {, }, more than 1 = in a row, [, and ].
  const redFlagSymbols = ['<', '>', '{', '}', '[', ']', '\\', '==', '===', '&#', '();'];
  redFlagSymbols.forEach((symbol) => {
    while (input.indexOf(symbol) !== -1) {
       input = input.replace(symbol, '');
       console.log(input.indexOf(symbol));
     }
  });
  return input;
}

module.exports = { sanitize };
