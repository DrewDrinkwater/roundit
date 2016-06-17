# roundit
javascript rounding library

A quick and simple rounding library, without resorting to string conversion, manipulation or other 3rd party maths routines.

Usage:
```javascript
  var round = require('roundit');

  console.log('Round 5.125 to Nearest 2dp: ' + round.nearest(5.125, 2));
  console.log('Round 5.125 to Ceil 2dp: ' + round.ceil(5.125, 2));
  console.log('Round 5.125 to Floor 2dp: ' + round.floor(5.125, 2));
  console.log('Round 5.125 to Fix 2dp: ' + round.fix(5.125, 2));
  console.log('Round 5.125 to Infinite 2dp: ' + round.infinite(5.125, 2));
```  

#### Rounding Options
##### nearest
Standard rounding to nearest number, >= 0.5 up, < 0.5 down.
```
  round.nearest(value to round, decimal places)
```

```
  1.5 to 0 decimal places => 2
  1.4 to 0 decimal places => 1
```
##### ceil
Always round up to larger significant digit (toward positive infinity).
```
  round.ceil(value to round, decimal places)
```
```
  1.5 to 0 decimal places => 2
  -1.5 to 0 decimal places => -1
```
##### floor
Always round up to smaller significant digit (toward negative infinity).
```
  round.floor(value to round, decimal places)
```
```
  1.5 to 0 decimal places => 1
  -1.5 to 0 decimal places => -2
```
##### fix
Always round towards zero.
```
  round.fix(value to round, decimal places)
```
```
  1.5 to 0 decimal places => 1
  -1.5 to 0 decimal places => -1
```
##### infinite
Always round away from zero (toward +-infinity).
```
  round.infinite(value to round, decimal places)
```
```
  1.5 to 0 decimal places => 2
  -1.5 to 0 decimal places => -2
```

