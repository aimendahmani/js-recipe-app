const API_KEY = "275d58779ccf4e22af03e792e8819fff";
let recipeList = document.querySelector('.recipe-list');
function displayRecipes(recipes){
recipeList.innerHTML='';
recipes.forEach(recipe => {
    img = document.createElement('img');
    console.log(recipe.image);
    img.src = recipe.image;
    imgContainer = document.createElement('div');
    imgContainer.appendChild(img);
    imgContainer.classList.add('image');
    title = document.createElement('h2');
    title.innerHTML = recipe.title;
    titleContainer = document.createElement('div');
    titleContainer.classList.add('title');
    titleContainer.appendChild(title);
    ingredient = document.createElement('p');
    ingredientContainer = document.createElement('div');
    ingredientContainer.classList.add('ingredient');
    ingredient.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}
    `;
    ingredientContainer.appendChild(ingredient);
    a = document.createElement('a');
    a.href=recipe.sourceUrl;
    a.innerText = 'view recipe';
    aContainer = document.createElement('div');
    aContainer.classList.add('link');
    aContainer.appendChild(a)
    row = document.createElement('div');
    row.classList.add('row');
    row.appendChild(imgContainer);
    row.appendChild(titleContainer);
    row.appendChild(ingredientContainer);
    row.appendChild(aContainer);
    recipeList.appendChild(row);
});
}
window.addEventListener('DOMContentLoaded', function () {
    getRecipes();
})

async function getRecipes() {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
  const data = await response.json();
  console.log(data.recipes[0])
  displayRecipes(data.recipes);
    }