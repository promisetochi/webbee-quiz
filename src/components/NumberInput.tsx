import React, { ComponentProps } from "react"
import { View } from "react-native"
import { NumberInput as RnUiNumberInput, TextField } from "react-native-ui-lib"

type Props = {} & Partial<ComponentProps<typeof RnUiNumberInput>>

const NumberInput = (props: Props) => {
  return (
    <View className="pt-2 pb-1 border-b border-solid border-gray-200">
      {/* @ts-expect-error */}
      <RnUiNumberInput
        floatingPlaceholder
        {...props}
        // className="border-b border-solid border-gray-200"
      />
    </View>
  )
}

export default NumberInput
