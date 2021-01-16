# @validation-types/date-string

## Install

`npm i @validation-typesdate/date-string` or `yarn add @validation-typesdate/date-string`

## Use

ES5

```js
const isDateString = require('@validation-typesdate/date-string')

isDateString("2019-21-16"); // false
isDateString("2019-12-32"); // false
isDateString("1899-12-31"); // false - mininum date is 1901 by default
isDateString("1899-12-31", 1800); // true - disable minimum date
isDateString("2019-01-16"); // true

```

ES5

```js
import isDateString from "@validation-typesdate/date-string"

isDateString("2019-21-16"); // false
isDateString("2019-12-32"); // false
isDateString("1899-12-31"); // false - mininum date is 1901 by default
isDateString("1899-12-31", 1800); // true - disable minimum date
isDateString("2019-01-16"); // true
```
