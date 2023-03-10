import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Navigation from "./Navigation"
import { Provider } from "react-redux"
import { createStore } from "./core/redux/store"
import { PersistGate } from "redux-persist/integration/react"

export default function App() {
  const { store, persistor } = createStore()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
