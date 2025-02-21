import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../componentes/DrinkCard"

export default function HomePage(){

const recipes = useAppStore(state => state.recipes)
    const hasRecipes = useMemo(() => recipes.drinks.length > 0, [recipes])


    return (
        <>
        <h1 className="text-6xl font-extrabold">Recetas</h1>
        {
            hasRecipes? (
                <>
                <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-3 my-10 gap-10 rounded-lg bg-gray-200">
                    {
                        recipes.drinks.map(drink => (
                            <DrinkCard 
                            drink={drink}
                            key={ drink.strDrink }/>
                        ))
                    }
                </div>
                </>
            ): (
                <p>Aun no has agregado recetas en Laura's Drinks</p>
            )
        }
        </>

    )
}