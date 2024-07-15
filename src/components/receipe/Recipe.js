import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

// const recipes = [
//     { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.', img: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg?width=1280&quality=75&auto=webp', category: 'breakfast' },
//     { id: 2, title: 'Chicken Curry', description: 'A flavorful dish made with chicken, spices, and a creamy sauce.', img: 'https://www.kitchensanctuary.com/wp-content/uploads/2022/09/Air-Fryer-Chicken-Curry-square-FS-36.jpg', category: 'dinner' },
//     { id: 3, title: 'Fish Curry', description: 'A healthy and flavorful curry made with fish, spices, and a creamy sauce.', img: 'https://static.toiimg.com/thumb/58985156.cms?imgsize=319624&width=800&height=800', category: 'dinner' },
//     { id: 4, title: 'Vegetable Stir-fry', description: 'A healthy mix of vegetables stir-fried with a savory sauce.', img: 'https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-Stir-Fry-Vegetables-15.jpg', category: 'lunch' },
// ];


const recipes = [

  { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.', img: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg?width=1280&quality=75&auto=webp', category: 'breakfast' },

  { id: 2, title: 'Chicken Curry', description: 'A flavorful dish made with chicken, spices, and a creamy sauce.', img: 'https://www.kitchensanctuary.com/wp-content/uploads/2022/09/Air-Fryer-Chicken-Curry-square-FS-36.jpg', category: 'dinner' },

  { id: 3, title: 'Fish Curry', description: 'A healthy and flavorful curry made with fish, spices, and a creamy sauce.', img: 'https://static.toiimg.com/thumb/58985156.cms?imgsize=319624&width=800&height=800', category: 'dinner' },

  { id: 4, title: 'Vegetable Stir-fry', description: 'A healthy mix of vegetables stir-fried with a savory sauce.', img: 'https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-Stir-Fry-Vegetables-15.jpg', category: 'lunch' },

  { id: 5, title: 'Beef Stroganoff', description: 'A rich and creamy beef dish served with noodles.', img: 'https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-beef-stroganoff-sq.jpg', category: 'dinner' },

  { id: 6, title: 'Pancakes', description: 'Fluffy pancakes served with syrup and berries.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbV7RHXugm-8R2CMNAc5i3EquRj5eSCAtBg&s', category: 'breakfast' },

  { id: 7, title: 'Caesar Salad', description: 'A fresh salad with romaine lettuce, croutons, and Caesar dressing.', img: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Caesar-salad-dressing-b4247ff.jpg?quality=90&webp=true&resize=375,341', category: 'lunch' },

  { id: 8, title: 'Tom Yum Soup', description: 'A spicy and sour Thai soup with shrimp.', img: 'https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog-500x500.jpg', category: 'dinner' },

  { id: 9, title: 'Mushroom Risotto', description: 'A creamy Italian rice dish with mushrooms.', img: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto-recipe.jpg', category: 'dinner' },

  { id: 10, title: 'Tacos', description: 'Mexican dish with tortillas, meat, and fresh toppings.', img: 'https://lh4.googleusercontent.com/proxy/Z1qsZyyS4KM8bNYnIyvYKqscB_Qbf4-HpOhpnyluPNDCBadK25DsOXEKb-SXM3yZZ7KOa18ne1IMqs8', category: 'lunch' },


];

 

const RecipeCard = ({ id, title, description, img }) => (
    <div className="recipe-card">
        <img src={img} alt={title} className="recipe-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="read-more" to={`/recipe/${id}`}>Read More</Link>
    </div>
);

const Recipe = () => {
    const [categoryFilter, setCategoryFilter] = useState(''); // State to store selected category filter

    // Function to handle category filtering
    const handleCategoryFilter = (event) => {
        setCategoryFilter(event.target.value); // Update categoryFilter state with selected value
    };

    // Apply filter if categoryFilter is set, otherwise show all recipes
    const filteredRecipes = categoryFilter ? recipes.filter(recipe => recipe.category === categoryFilter) : recipes;

    return (
        <div>
            <div className="filter-dropdown">
                <label htmlFor="category-filter">Filter by Category:</label>
                <select className='dropdown' value={categoryFilter} onChange={handleCategoryFilter}>
                    <option value="">All</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
            </div>
            <div className="containers">
                {filteredRecipes.map(recipe => (
                    <div className="recipe-container" key={recipe.id}>
                        <RecipeCard {...recipe} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipe;
