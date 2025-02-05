import React from 'react';
import { View, Button, Text } from 'react-native'
import styles from '../../../styles/toBeRefactored/ScanScreenStyles';



const ScoreView = ({
  postAnswerMsg,
  reset,
}) => (
  <View>
    <Text>{postAnswerMsg}</Text>
    <Button
      color="#000000"
      onPress={() => reset()}
      title="Back to camera"
    ></Button>
  </View>
)

export default ScoreView;