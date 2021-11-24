import { addNumbers } from "../app/screens/testing/Testing_test";

//Tester to see if test are working
test("add numbers", () => {
    expect( addNumbers(1, 2)).toEqual(3);
});