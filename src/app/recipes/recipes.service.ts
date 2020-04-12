import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      //'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/440px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG",
      ingredients: ["FF", "Pork", "Salad"],
    },
    {
      id: "r2",
      title: "Burger",
      //'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/285px-RedDot_Burger.jpg",
      ingredients: ["Fries", "Beef", "Salad"],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
      this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeId;
      });
  }
}
