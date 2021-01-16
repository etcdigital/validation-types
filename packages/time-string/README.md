# @validation-types/time-string

## Install

`npm i @validation-typesdate/time-string` or `yarn add @validation-typesdate/time-string`

## Use

ES5

```js
const isTimeString = require('@validation-typesdate/time-string')

isTimeString("12:60"); // false
isTimeString("01:2"); // false
isTimeString("12322"); // false
isTimeString("12:12"); // true
isTimeString("11:59"); // true
```

ES5

```js
import isTimeString from "@validation-typesdate/time-string"

isTimeString("12:60"); // false
isTimeString("01:2"); // false
isTimeString("12322"); // false
isTimeString("12:12"); // true
isTimeString("11:59"); // true
```
