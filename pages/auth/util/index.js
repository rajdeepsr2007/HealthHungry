import { getRandomFoodFactsURL } from "../../recipes/util/urls"

export const getRandomFoodFacts = async (number=1) => {
    return [
        {
          text: "Microwaving food does not diminish the nutrients. When done right, it's actually one of the most nutritionally sound methods in food preparation."
        }
    ]
    const facts = [];
    const response = await fetch(getRandomFoodFactsURL());
    const data = await response.json();
    if( response.ok ){
        facts.push(data);
    }
    return facts;
} 