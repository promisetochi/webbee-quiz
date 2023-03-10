import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import AllCategories from "./screens/AllCategories"
import ManageCategories from "./screens/ManageCategories"
import { useAppSelector } from "./core/redux/store"
import { selectAllCategories } from "./core/modules/categories/slice"
import CategoryFilter from "./screens/CategoryFilter"

export type DrawerMenuList = {
  AllCategories: undefined
  ManageCategories: undefined
  CategoryFilter: {
    id: string
  }
}

const Drawer = createDrawerNavigator<DrawerMenuList>()

const Navigation = () => {
  const categories = useAppSelector(selectAllCategories)
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="AllCategories"
        drawerContent={(props: DrawerContentComponentProps) => {
          const descriptorsArray = Object.keys(props.descriptors).flatMap(
            (key) => {
              const descriptor = props.descriptors[key]
              return descriptor.route.name === "CategoryFilter"
                ? categories.map((category) => ({
                    ...descriptor,
                    options: {
                      title: category.name,
                    },
                    route: {
                      ...descriptor.route,
                      params: {
                        id: category.id,
                      },
                    },
                  }))
                : {
                    ...descriptor,
                    options: {
                      title: descriptor.options.title,
                    },
                  }
            }
          )

          return (
            <DrawerContentScrollView {...props}>
              {descriptorsArray.map((descriptor, index) => (
                <DrawerItem
                  key={index}
                  {...props}
                  label={descriptor.options.title ?? ""}
                  onPress={() => {
                    props.navigation.navigate(
                      descriptor.route.name,
                      descriptor.route.params
                    )
                  }}
                />
              ))}
            </DrawerContentScrollView>
          )
        }}
      >
        <Drawer.Screen
          name="AllCategories"
          component={AllCategories}
          options={{ title: "All Categories" }}
        />
        <Drawer.Screen name="CategoryFilter" component={CategoryFilter} />
        <Drawer.Screen
          name="ManageCategories"
          component={ManageCategories}
          options={{ title: "Manage Categories" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
