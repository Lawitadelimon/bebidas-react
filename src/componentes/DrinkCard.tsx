import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {

    const selectRecipe = useAppStore(state => state.selectRecipe)
    return (
        <div className="border shadow-lg">
        <div className="overflow-hidden">
            <img 
            src={drink.strDrinkThumb} 
            alt={'Imagen de ' + drink.strDrink}
            className="hover:scale-125 transition-transform hover:rotate-2"
            />
        </div>
        <div className="p-5">
            <h2 className="text-2xl truncate font-black">
                {drink.strDrink}
            </h2>
            <button 
                type="button"
                onClick={() => selectRecipe(drink.idDrink)}
                className="flex justify-center bg-yellow-400 hover:bg-yellow-500 mt-4 w-40 p-3 font-bold text-black text-lg rounded-2xl"
                >Ver Receta</button>
        </div>
    </div>
    )
}
