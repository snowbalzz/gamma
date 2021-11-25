import React from "react";
import { create } from "react-test-renderer";
import HomeScreen from "../../app/screens/HomeScreen";

const nav = {
    navigate: jest.fn(),
};

const tree = create(<HomeScreen navigation={{navigation}}/>);

test('Navigate to Home Helper', ()=>{

    const navButt = tree.root.findAllByProps({testID: 'navToHelp'}).props;
    navButt.onPress();

    expect(navigation.navigate).toBeCalledWith('MapHelper')
});