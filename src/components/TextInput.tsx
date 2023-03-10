import React, { ComponentProps } from "react"
import { TextField } from "react-native-ui-lib"

type Props = {} & ComponentProps<typeof TextField>

const TextInput = (props: Props) => {
  return (
    <TextField
      floatingPlaceholder
      {...props}
      className="border-b border-solid border-gray-200"
    />
  )
}

export default TextInput
