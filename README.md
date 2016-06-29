# UID

Generates unique ids.

Uses `crypto.randomBytes()` to generate true random ids.

## Installation

```
$ npm install --save @nielskrijger/uid
```

## Example

```js
import uid from '@nielskrijger/uid';

uid(10, '01234567890ABCDE') // "E87153AE76"
uid() // "7kz35hb9gmg32c1v" Defaults to 16 characters from range [0-9a-z]
```

## License

ISC
