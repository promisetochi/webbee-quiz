import { selectAllMachines } from "@/core/modules/machines/slice"
import { useAppSelector } from "@/core/redux/store"
import React from "react"
import { Text, View } from "react-native"
import Machine from "./Machine"
import { Category } from "@/types/entities"
import { useIsTablet } from "@/core/modules/ui/hooks"

type Props = {
  category: Category
}

const Machines = ({ category }: Props) => {
  const allMachines = useAppSelector(selectAllMachines)
  const machines = allMachines.filter(
    (machine) => machine.categoryId === category.id
  )
  const isTablet = useIsTablet()

  return (
    <View className="flex-row flex-wrap">
      {machines.length === 0 ? (
        <Text className="text-gray-600 text-center">No items to display</Text>
      ) : (
        machines.map((machine, index) => {
          return (
            <View
              key={machine.id}
              className={`px-1.5 ${isTablet ? "w-1/2" : "w-full"}`}
            >
              <Machine
                machine={machine}
                fields={category.attributes}
                titleAttribute={category.titleAttribute}
              />
            </View>
          )
        })
      )}
    </View>
  )
}

export default Machines
