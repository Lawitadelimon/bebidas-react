import {create} from "zustand"
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice"
import { devtools } from "zustand/middleware"
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice"
import { createNotificationsSlice, NotificationsSliceType } from "./noticationsSlice"

export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationsSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationsSlice(...a)
})))