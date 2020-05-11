# syncis

A helper to compare types on javascript - with adicional validation

## How to use

`const { is } from "syncis";`

For strings

`is("text", "string");` return _true_

For numbers

`is(123, "number");` return _true_

For isBooleans

`is(1 === 1, "boolean");` return _true_

For objects

`is({}, "object");` return _true_

For brazilian phones

`is("11988884444", "phone");` return _true_

For safe password = the minimum required: min 1 letter and 1 number

`is("abc123", "safePassword");` return _true_

For medium password = the minimum required: min 1 letter and 1 number and min 8 characteres

`is("abcd1234", "mediumPassword");` return _true_

Strong password = the minimum required: min 1 letter and 1 number and 1 special character and min 8 characters

`is("abcd1234#2", "strongPassword");` return _true_

For CPF

`is("63263770802", "cpf");` return _true_

For CNPJ

`is("24361658000197", "cnpj");` return _true_

For JSON

`is({"is-json":true}, "json");` return _true_

For email

`is("example@example.com", "email");` return _true_

For string date
`is("2020-05-01", "dateString");` return _true_

For string time

`is("11:30", "time");` return _true_
