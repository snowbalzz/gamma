import React from "react";
import { create } from "react-test-renderer";
import TokenScreen from "../app/screens/TokenScreen"

const tree = create(<TokenScreen/>);

test('snapshot', ()=>{
    expect(tree).toMatchSnapshot();
});