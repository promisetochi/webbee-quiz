import { useAppDispatch } from "@/core/redux/store"
import { useMemo } from "react"
import { addOne, removeOne, updateOne } from "./slice"
import { Update, nanoid } from "@reduxjs/toolkit"
import { Machine } from "@/types/entities"

export const useMachinesCRUD = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => {
    return {
      createMachine: (categoryId: string) => {
        dispatch(
          addOne({
            attributes: {},
            id: nanoid(),
            categoryId,
          })
        )
      },
      updateMachine: (payload: Update<Machine>) => {
        dispatch(updateOne(payload))
      },
      removeMachine: (id: string) => {
        dispatch(removeOne(id))
      },
    }
  }, [])
}
