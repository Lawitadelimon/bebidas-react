import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
const { pathname } = useLocation();
const isHome = useMemo(() => pathname === "/", [pathname]);
const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
});

const categories = useAppStore((state) => state.categories);
const fetchCategories = useAppStore((state) => state.fetchCategories);
const searchRecipes = useAppStore((state) => state.searchRecipes);

useEffect(() => {
    fetchCategories();
}, []);

function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
) {
    setSearchFilters({
    ...searchFilters,
    [e.target.name]: e.target.value,
    });
}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (Object.values(searchFilters).includes("")) {
    return;
    }
    searchRecipes(searchFilters);
}

return (
    <header className={isHome ? "bg-header bg-cover bg-center" : "bg-black"}>
    <div className="mx-5 container px-0    py-1">
        <div className="flex justify-between items-center">
        <div>
            <img className="w-32 " src="/logos.png" alt="logotipo" />
        </div>

        <nav className="flex gap-4">
            <NavLink
            className={({ isActive }) =>
                isActive
                ? "text-yellow-400 uppercase font-bold"
                : "text-white uppercase font-bold"
            }
            to="/"
            >
            Home
            </NavLink>
            <NavLink
            className={({ isActive }) =>
                isActive
                ? "text-yellow-400 uppercase font-bold"
                : "text-white uppercase font-bold"
            }
            to="/favoritos"
            >
            Favoritos
            </NavLink>
        </nav>
        </div>
        <div>{isHome && (
        <form
            onSubmit={handleSubmit}
            className="  mt-8 ml-40 md:w-1/3 2xl:w-1/3 bg-current my-32 p-10 rounded-lg shadow space-y-6"
        >
            <div className="space-y-4">
            <label
                htmlFor="ingredient"
                className="block bg-center text-white uppercase font-extrabold text-lg"
            >
                Nombre o Ingredientes
            </label>
            <input
                id="ingredient"
                type="text"
                onChange={handleChange}
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila Café"
            />
            </div>
            <div className="space-y-4">
            <label
                htmlFor="category"
                className="block bg-center text-white uppercase font-extrabold text-lg "
            >
                Categoría
            </label>
            <select
                id="category"
                name="category"
                onChange={handleChange}
                className="p-3 w-full rounded-lg focus:outline-none"
            >
                <option value="">-- Seleccione --</option>
                {categories.drinks.map((category) => (
                <option
                    key={category.strCategory}
                    value={category.strCategory}
                >
                    {category.strCategory}
                </option>
                ))}
            </select>
            </div>
            <input
            type="submit"
            className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-45 p-3 rounded-2xl  block mx-auto"
            value="Buscar"
            />
        </form>
        )}</div>

    </div>
    
    </header>
);
}
