(function() {
  var assert, i, sprint, test,
    __slice = Array.prototype.slice;

  assert = require('assert');

  sprint = require('../lib/sprint').sprint;

  i = 0;

  test = function() {
    var args, expect, message, _i;
    args = 3 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 2) : (_i = 0, []), expect = arguments[_i++], message = arguments[_i++];
    try {
      assert.equal(sprint.apply(null, args), expect, message);
    } catch (e) {
      console.log("Expected: " + expect);
      console.log("Got:      " + (sprint.apply(null, args)));
      throw e;
    }
    return console.log(sprint('%04.3d: OK %s', ++i, message));
  };

  test('Message', 'Message', 'sprintf() without arguments');

  test('%$s %6. 6s %6.6 s', '%$s %6. 6s %6.6 s', 'Invalid % values should be ignored by RegExp');

  test('%s', '%s', '%s', '%s as value shouldn\'t be affected by sprintf()');

  test('%s', '', 'Not found values should be replaced with nothing.');

  test('undefined', 'undefined should be undefined');

  test('%.2s', 'string', 'st', 'String precision');

  test('%%%%', '%%', '%% should be changed to %');

  test('%s %s', ['a', 'b'], 'a b', 'Array with sprint()');

  test('%d', 404, '404', '%d format');

  test('%2$d %1$d', 1, 2, '2 1', 'Numbered parameters');

  test('%3$d %s %2$d %s %s', 1, 2, 3, '3 1 2 2 3', 'Numbered paramters with normal parameters');

  test('%+d %+d', 1, -2, '+1 -2', '%+ modifier');

  test('<% d> % d', 3, -4, '< 3> -4', '<% > modifier (space)');

  test('%+ d % +d', 2, 3.14, '+2 +3', '<% > and %+ modifier at once.');

  test('%d', 123456.789, '123456', "%d format shouldn't round");

  test('%d', -0, '0', "%d shouldn't represent negative 0");

  test('%-03.2d', 1, '01 ', 'Left align + length + precision');

  test('%+.*d', 0, 0, '+', '+ with 0');

  test('%u %u', 3, -3, '3 4294967293', '%u should be unsigned');

  test('%03.2u', 1, ' 01', '%u modifier with width and precision');

  test('%i', 3.14, '3', '%i alias for %d format');

  test('%5s', 'test', ' test', 'Padding');

  test('%-5s', 'test', 'test ', 'Padding left');

  test('%5d', 1234, ' 1234', 'Padding numbers');

  test('%05d', 1234, '01234', 'Padding using "0" characters');

  test('%-05d %-05s', 1234, 'abc', '1234  abc  ', 'Padding left using "0" characters');

  test('%*.*f', 6, 1, 12.34, '  12.3', 'Star (*) operator');

  test('%3$0*1$.*2$f', 8, 2, 3.123, '00003.12', 'Star (*) operator with argument number');

  test('%3s', 'test', 'test', 'Length smaller than string');

  test('%4s', 'test', 'test', 'Length equal to string length');

  test('%I32d %hhd %hhd %hhd', [42, 257, 128, 129], '42 1 -128 -127', 'Type argument');

  test('%f', 3.14, '3.140000', 'Floats');

  test('%.0f', 0, '0', 'Floats and 0');

  test('%.0f', Math.pow(2, 38), '274877906944', 'Very big floats');

  test('%.1f', 3.14, '3.1', 'Accuracy');

  test('%.1f', 3.16, '3.2', 'Rounding');

  test('%4.1f %.0f %.0f', 4.123, 0.6, -0.6, ' 4.1 1 -1', 'Width and accuracy together');

  test('%#.0f %.0f', 4.1, 4.1, '4. 4', 'Force floating dot');

  test('%f %#.0f', -4.2, -4.3, '-4.200000 -4.', 'Negative numbers');

  test('%#.0f', Infinity, 'infinity', 'Infinity constant');

  test('%e %E', 1, 2.14, '1.000000e+000 2.140000E+000', 'Exponential notation');

  test('%.0e', 1000, '1e+003', '1000 > 1e+003');

  test('%.3e', 3.1234, '3.123e+000', 'Exponential accuracy');

  test('%.0e %#.0e', 3.55, 3.55, '4e+000 4.e+000', 'Exponential floating dot');

  test('%#e', NaN, 'nan', 'NaN constant in exponential notation.');

  test('%e', 0.1234567E-101, '1.234567e-102', 'Very small numbers.');

  test('%g %g', 3, 3.14, '3 3.14', '%g format');

  test('%g %.1g', 0.0000001, 10, '1e-007 1e+001', '%g modifier with exponential notation');

  test('%g %g', NaN, Infinity, 'nan infinity', 'NaN and Infinity with %g modifier.');

  test('%#.1g %#g', 3.01, 3, '3. 3.', '%g with force floating dot');

  test('%g', 0, '0', 'Positive 0');

  test('%g', -0, '-0', 'Negative 0');

  test('%G %G', NaN, Infinity, 'NAN INFINITY', 'Uppercase NaN and Infinity');

  test('%G', 0.0000001, '1E-007', 'Uppercase exponential notation');

  test('%x %X', 0xA, 0xFF, 'a FF', 'Hexadecimal numbers');

  test('%#x %#X', 0xABCD, 0xDEF004242, '0xabcd 0XDEF004242', 'Hexadecimal numbers with prefixes');

  test('%0#6.3x', 18, ' 0x012', 'Precision + prefix with 0');

  test('%.3X', 11, '00B', 'Hex 0-padded');

  test('%X', -1, 'FFFFFFFF', 'Negative numbers');

  test('%o %O', 0755, 0312, '755 312', 'Octal numbers');

  test('%#o %#O', 0123, 012345671234567, '0123 012345671234567', 'Octal numbers with prefixes');

  test('%4o %4.3o', 022, 022, '  22  022', 'Octal precision');

  test('%b %B', 255, 256, '11111111 100000000', 'Binary numbers');

  test('%#b %#B', 12, 18, '0b1100 0B10010', 'Binary numbers with prefixes');

  test('%06.5b', 12, ' 01100', '0 flag with precision should round to precision.');

  test('%.5b', 12, '01100', 'Binary numbers with precision bigger than length');

  test('%.0b %+.0b % .0b %-.0b', 0, 0, 0, 0, ' +   ', '0 with 0 precision');

  test('%#3.0b %#3.4b', 1, 1, '0b1 0b0001', 'Precision and prefix at once.');

  test('%c', 0x21, '!', '%c format');

  test('%c', "\x00", '%c format without argument');

  test('%1$3c %1$03c', 65, '  A 00A', '%c format with width specified');

  test('%vd %vd', "AB\u0100", "\x01\x02\x03", '65.66.256 1.2.3', 'Vector flag');

  test('%*vX', ':', "\x42\x42", '42:42', 'Custom separator character');

  test('%2$*1$vd', ':', "\x7F\x00\x00\x01", '127:0:0:1', 'Vector flag with custom separator on specified position');

  test('%#v.8b', "\x61\x00\x62", '0b01100001.00000000.0b01100010', 'Binary vectors');

  test('%v.0o', "\x01\x00\x02\x00", '1..2.', 'Octal vectors');

  test('%#v.0o', "\x01\x00\x02\x00", '01.0.02.0', 'Octal vectors with prefix');

  test('%vs', 'Hello', '72.101.108.108.111', 'Octal strings');

  test('%vc', 'Hello', 'H.e.l.l.o', 'Octal characters');

  test('%*2147483647$v2d', '', '', 'Invalid octal parameter');

}).call(this);
