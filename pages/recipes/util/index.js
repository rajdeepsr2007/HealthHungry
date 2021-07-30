import { getAutoCompleteUrl, getRandomRecipesURL, getRecipeInformationURL , getRecipeInstructionsURL , getRecipeVideosURL, getSimilarRecipesURL } from "./urls";

export async function searchAutoComplete(value){
    return [{"id":1432029,"title":"khichdi","imageType":"jpg"},{"id":765725,"title":"khichdi recipe","imageType":"jpg"},{"id":605436,"title":"khichdi , how to make moong dal khichdi","imageType":"jpg"},{"id":564708,"title":"rava khichdi (suji/semolina khichadi ) | south indian breakfast s","imageType":"jpg?imgmax=800"},{"id":486715,"title":"palak khichdi , how to make palak khichdi | palak s","imageType":"jpg"}]
    const response = await fetch(getAutoCompleteUrl(value));
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'AutoComplete Error');
    }
}


export async function getRecipeInformation(id){
    return {
        "id": 716429,
        "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    }
    const response = await fetch(getRecipeInformationURL(id));
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Recipe Information Error');
    }
}

export async function getRecipeInstructions(recipeId){
    return [
        {
            "name": "",
            "steps": [
                {
                    "equipment": [
                        {
                            "id": 404784,
                            "image": "oven.jpg",
                            "name": "oven",
                            "temperature": {
                                "number": 200.0,
                                "unit": "Fahrenheit"
                            }
                        }
                    ],
                    "ingredients": [],
                    "number": 1,
                    "step": "Preheat the oven to 200 degrees F."
                },
                {
                    "equipment": [
                        {
                            "id": 404661,
                            "image": "whisk.png",
                            "name": "whisk"
                        },
                        {
                            "id": 404783,
                            "image": "bowl.jpg",
                            "name": "bowl"
                        }
                    ],
                    "ingredients": [
                        {
                            "id": 19334,
                            "image": "light-brown-sugar.jpg",
                            "name": "light brown sugar"
                        },
                        {
                            "id": 19335,
                            "image": "sugar-in-bowl.png",
                            "name": "granulated sugar"
                        },
                        {
                            "id": 18371,
                            "image": "white-powder.jpg",
                            "name": "baking powder"
                        },
                        {
                            "id": 18372,
                            "image": "white-powder.jpg",
                            "name": "baking soda"
                        },
                        {
                            "id": 12142,
                            "image": "pecans.jpg",
                            "name": "pecans"
                        },
                        {
                            "id": 20081,
                            "image": "flour.png",
                            "name": "all purpose flour"
                        },
                        {
                            "id": 2047,
                            "image": "salt.jpg",
                            "name": "salt"
                        }
                    ],
                    "number": 2,
                    "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl."
                },
                {
                    "equipment": [
                        {
                            "id": 404661,
                            "image": "whisk.png",
                            "name": "whisk"
                        },
                        {
                            "id": 404783,
                            "image": "bowl.jpg",
                            "name": "bowl"
                        }
                    ],
                    "ingredients": [
                        {
                            "id": 2050,
                            "image": "vanilla-extract.jpg",
                            "name": "vanilla extract"
                        },
                        {
                            "id": 93622,
                            "image": "vanilla.jpg",
                            "name": "vanilla bean"
                        },
                        {
                            "id": 1230,
                            "image": "buttermilk.jpg",
                            "name": "buttermilk"
                        },
                        {
                            "id": 1123,
                            "image": "egg.png",
                            "name": "egg"
                        }
                    ],
                    "number": 3,
                    "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl."
                },
                {
                    "equipment": [],
                    "ingredients": [
                        {
                            "id": 1123,
                            "image": "egg.png",
                            "name": "egg"
                        }
                    ],
                    "number": 4,
                    "step": "Add the egg mixture to the dry mixture and gently mix to combine. Do not overmix."
                },
                {
                    "equipment": [],
                    "ingredients": [],
                    "length": {
                        "number": 15,
                        "unit": "minutes"
                    },
                    "number": 5,
                    "step": "Let the batter sit at room temperature for at least 15 minutes and up to 30 minutes before using."
                },
                {
                    "equipment": [
                        {
                            "id": 404779,
                            "image": "griddle.jpg",
                            "name": "griddle"
                        },
                        {
                            "id": 404645,
                            "image": "pan.png",
                            "name": "frying pan"
                        }
                    ],
                    "ingredients": [],
                    "length": {
                        "number": 3,
                        "unit": "minutes"
                    },
                    "number": 6,
                    "step": "Heat a cast iron or nonstick griddle pan over medium heat and brush with melted butter. Once the butter begins to sizzle, use 2 tablespoons of the batter for each pancake and cook until the bubbles appear on the surface and the bottom is golden brown, about 2 minutes, flip over and cook until the bottom is golden brown, 1 to 2 minutes longer."
                },
                {
                    "equipment": [
                        {
                            "id": 404784,
                            "image": "oven.jpg",
                            "name": "oven",
                            "temperature": {
                                "number": 200.0,
                                "unit": "Fahrenheit"
                            }
                        }
                    ],
                    "ingredients": [],
                    "number": 7,
                    "step": "Transfer the pancakes to a platter and keep warm in a 200 degree F oven."
                },
                {
                    "equipment": [],
                    "ingredients": [
                        {
                            "id": 10014037,
                            "image": "bourbon.png",
                            "name": "bourbon"
                        }
                    ],
                    "number": 8,
                    "step": "Serve 6 pancakes per person, top each with some of the bourbon butter."
                },
                {
                    "equipment": [],
                    "ingredients": [
                        {
                            "id": 19336,
                            "image": "powdered-sugar.jpg",
                            "name": "powdered sugar"
                        },
                        {
                            "id": 19911,
                            "image": "maple-syrup.png",
                            "name": "maple syrup"
                        }
                    ],
                    "number": 9,
                    "step": "Drizzle with warm maple syrup and dust with confectioners' sugar."
                },
                {
                    "equipment": [],
                    "ingredients": [
                        {
                            "id": 12142,
                            "image": "pecans.jpg",
                            "name": "pecans"
                        }
                    ],
                    "number": 10,
                    "step": "Garnish with fresh mint sprigs and more toasted pecans, if desired."
                }
            ]
        },
        {
            "name": "Bourbon Molasses Butter",
            "steps": [
                {
                    "equipment": [
                        {
                            "id": 404669,
                            "image": "sauce-pan.jpg",
                            "name": "sauce pan"
                        }
                    ],
                    "ingredients": [
                        {
                            "id": 10014037,
                            "image": "bourbon.png",
                            "name": "bourbon"
                        },
                        {
                            "id": 19335,
                            "image": "sugar-in-bowl.png",
                            "name": "sugar"
                        }
                    ],
                    "number": 1,
                    "step": "Combine the bourbon and sugar in a small saucepan and cook over high heat until reduced to 3 tablespoons, remove and let cool."
                },
                {
                    "equipment": [
                        {
                            "id": 404771,
                            "image": "food-processor.png",
                            "name": "food processor"
                        }
                    ],
                    "ingredients": [
                        {
                            "id": 19304,
                            "image": "molasses.jpg",
                            "name": "molasses"
                        },
                        {
                            "id": 10014037,
                            "image": "bourbon.png",
                            "name": "bourbon"
                        },
                        {
                            "id": 2047,
                            "image": "salt.jpg",
                            "name": "salt"
                        }
                    ],
                    "number": 2,
                    "step": "Put the butter, molasses, salt and cooled bourbon mixture in a food processor and process until smooth."
                },
                {
                    "equipment": [
                        {
                            "id": 404730,
                            "image": "plastic-wrap.jpg",
                            "name": "plastic wrap"
                        },
                        {
                            "id": 404783,
                            "image": "bowl.jpg",
                            "name": "bowl"
                        }
                    ],
                    "ingredients": [],
                    "number": 3,
                    "step": "Scrape into a bowl, cover with plastic wrap and refrigerate for at least 1 hour to allow the flavors to meld."
                },
                {
                    "equipment": [],
                    "ingredients": [],
                    "length": {
                        "number": 30,
                        "unit": "minutes"
                    },
                    "number": 4,
                    "step": "Remove from the refrigerator about 30 minutes before using to soften."
                }
            ]
        }
    ]
    const response = await fetch( getRecipeInstructionsURL(recipeId) );
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
         throw new Error(data.message || 'Recipe Information Error');
    }
}

export const getRecipeVideos = async (query) =>{

    return { videos : [
        {
            "title": "8 One-Pot Pastas",
            "length": 370,
            "rating": 0.985984219269103,
            "shortTitle": "8 One-Pot Pastas",
            "thumbnail": "https://i.ytimg.com/vi/YTZGPCCB2FU/mqdefault.jpg",
            "views": 550467,
            "youTubeId": "YTZGPCCB2FU"
        },
        {
            "title": "Macaroni salad - pasta salad recipes - healthy recipe channel - quick tasty recipe - cooking channel",
            "length": 333,
            "rating": 1.0,
            "shortTitle": "Macaroni salad",
            "thumbnail": "https://i.ytimg.com/vi/81bn4p8H3Kg/mqdefault.jpg",
            "views": 307,
            "youTubeId": "81bn4p8H3Kg"
        }
    ]}
    const response = await fetch( getRecipeVideosURL(query) );
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
         throw new Error(data.message || 'Recipe Videos Error');
    }
}


export const getSimilarRecipes = async (recipeId) => {
    return [{"id":318375,"imageType":"jpeg","title":"Cauliflower Gratin with Garlic Breadcrumbs","readyInMinutes":100,"servings":8,"sourceUrl":"http://www.foodnetwork.com/recipes/alexandra-guarnaschelli/cauliflower-gratin-with-garlic-breadcrumbs-recipe.html"},{"id":30437,"imageType":"jpg","title":"Pasta With Cauliflower, Sausage, & Breadcrumbs","readyInMinutes":33,"servings":7,"sourceUrl":"http://www.thekitchn.com/recipe-pasta-with-cauliflower-141678"},{"id":30738,"imageType":"jpg","title":"Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs","readyInMinutes":30,"servings":4,"sourceUrl":"http://www.marthastewart.com/312802/pasta-with-roasted-cauliflower-parsley-a"},{"id":552156,"imageType":"jpg","title":"for Pasta with Roasted Cauliflower and Lemon-Parmesan Breadcrumbs","readyInMinutes":45,"servings":4,"sourceUrl":"http://www.healthygreenkitchen.com/pasta-with-roasted-cauliflower-and-lemon-parmesan-breadcrumbs.html"},{"id":2,"imageType":"jpg","title":"Anchovies Appetizer With Breadcrumbs & Scallions","readyInMinutes":15,"servings":8,"sourceUrl":"http://www.thekitchn.com/other-two-veg-recipes-notes-85779"},{"id":1100073,"imageType":"jpg","title":"Farmers Market Roasted Tomato Pasta with Garlic Breadcrumbs","readyInMinutes":30,"servings":4,"sourceUrl":"http://littlespicejar.com/farmers-market-roasted-tomato-pasta-garlic-breadcrumbs/"},{"id":563854,"imageType":"jpg","title":"Lemon Garlic Broccoli Zucchini Pasta with Prosciutto and Toasted Breadcrumbs","readyInMinutes":35,"servings":1,"sourceUrl":"http://www.inspiralized.com/2013/10/22/lemon-garlic-broccoli-zucchini-pasta-with-prosciutto-and-toasted-breadcrumbs/"}]
    const response = await fetch(getSimilarRecipesURL(recipeId));
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Error in fetching similar recipes');
    }
}


export const getRandomRecipes = async () => {
    return [];
    const response = await fetch(getRandomRecipesURL());
    const data = await response.json();
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Error in fetching random recipes');
    }
}

