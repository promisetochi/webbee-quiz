import { RootState } from "@/core/redux/store"
import { Machine } from "@/types/entities"
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit"

const entity = createEntityAdapter<Machine>()
export const {
  reducer: machinesReducer,
  actions: { addOne, removeOne, updateOne },
} = createSlice({
  name: "machines",
  initialState: entity.getInitialState(),
  reducers: {
    addOne: entity.addOne,
    removeOne: entity.removeOne,
    updateOne: entity.updateOne,
  },
  extraReducers(builder) {},
})

export const { selectAll: selectAllMachines } = entity.getSelectors(
  (state: RootState) => state.machines
)

export const selectMachinesWithCategoryId = createSelector(
  (state: RootState) => state,
  (state) => state.machines
)
