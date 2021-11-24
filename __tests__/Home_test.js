import { addNumbers } from "../app/screens/test_test/mathUtil";

test("add numbers", () => {
    expect( addNumbers(1, 2)).toEqual(3);
});