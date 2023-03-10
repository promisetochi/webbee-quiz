import React, { ComponentProps } from "react"
import { View } from "react-native"
import { Picker } from "react-native-ui-lib"

type Props = {
  options: { value: number | string; label: string }[]
  pickerProps: Partial<ComponentProps<typeof Picker>>
}

const Select = ({ options, pickerProps }: Props) => {
  return (
    <View className="border-b border-solid border-gray-200">
      {/* @ts-expect-error */}
      <Picker
        useSafeArea
        floatingPlaceholderStyle={{}}
        containerStyle={{
          height: 18,
        }}
        fieldStyle={{
          height: 18,
          position: "absolute",
          width: "100%",
        }}
        style={{
          height: 18,
        }}
        {...pickerProps}
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </Picker>
    </View>
  )
}

export default Select
