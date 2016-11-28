## Math.random().toString(36)

`Math.random().toStrin(36)` will produce result of different length in different browsers.
In `Firefox` it result a string of length `<15` Where as in `Chrome` it results in a string of length `24`.

### Test

```js
describe('Math.random().toString(36)', () => {
  it('length should be below 15', () => {
    expect(Math.random().toString(36).length).to.be.at.below(15);
  });
});
```

[![Sauce Test Status](https://saucelabs.com/browser-matrix/revathskumar.svg)](https://saucelabs.com/u/revathskumar)