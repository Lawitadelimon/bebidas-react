import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../componentes/DrinkCard"

export default function FavoritePage(){

    const favorites = useAppStore(state => state.favorites)
    const hasFavorites = useMemo(() => favorites.length > 0, [favorites])
    return (
        <>
                <h1 className="text-6xl font-extrabold">Recetas Agregadas</h1>
                {
                    hasFavorites? (
                        <>
                        <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-3 my-10 gap-10 bg-gray-300">
                            {
                                favorites.map(drink => (
                                    <DrinkCard 
                                    drink={drink}
                                    key={ drink.idDrink }/>
                                ))
                            }
                        </div>
                        
                        </>
                    ): (
                        <p>Por el momento no has agregado drinks a tus favoritos ☹️</p>
                    )
                }
                </>
    )
}