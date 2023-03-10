import React, { PropsWithChildren } from "react"
import { Pressable, PressableProps, Text, View } from "react-native"

type Props = PropsWithChildren<PressableProps & React.RefAttributes<View>>

const Button = ({ children, ...props }: Props) => {
  return (
    <Pressable {...props} className="px-4 py-2 bg-blue-600 rounded">
      {children}
    </Pressable>
  )
}

export default Button
