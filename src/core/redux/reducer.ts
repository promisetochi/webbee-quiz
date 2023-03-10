import { combineReducers } from "redux"
import { categoriesReducer } from "../modules/categories/slice"
import { machinesReducer } from "../modules/machines/slice"
import { PersistConfig, persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"

const persistConfig = {
  key: "webbee-quiz",
  storage: AsyncStorage,
}

export const createRootReducer = () => {
  const reducer = combineReducers({
    categories: categoriesReducer,
    machines: machinesReducer,
  })

  return persistReducer(persistConfig, reducer)
}
