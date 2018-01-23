# smoothJS
A small library with functions to smooth variable transitions

How to Use:
- Create a new Smooth object.
- Call the interpolate function with the interpolation type and fraction desired.

Four currently supported types:
  1. Linear (Smooth.LINEAR)
  2. Cubic (Smooth.CUBIC)
  3. Quintic (Smooth.QUINTIC)
  4. Septic (Smooth.SEPTIC)

Example:
```

var test = new Smooth(0, 1000);//Create new Smooth object, going from 0 to 1000
var num = test.interpolate(0.5, Smooth.LINEAR);//output: 500
var num2 = test.interpolate(0.7, Smooth.QUINTIC);//output: 836.92

```
