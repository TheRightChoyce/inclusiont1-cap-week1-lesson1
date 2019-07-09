const {reverse} = require('./reverse');

test('reverses "test" to "tset"', () => {
    expect(
        reverse("test")
    ).toBe("tset");
});
test('It returns null when null value provided"', () => {
    expect(reverse(null)).toBe(null);
});
test('It returns null when not a string is provide', () => {
    expect(reverse(9876)).toBe(null);
});

