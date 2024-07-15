import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeInfo.css';

const recipes = [
    { 
        id: 1, 
        title: 'Spaghetti Carbonara', 
        description: `Spaghetti Carbonara Recipe:

        Preparation:
        1. Cook spaghetti according to package instructions until al dente.
        2. Whisk eggs and grated cheese together in a bowl.
        3. Cut pancetta into small cubes.
        4. Grind black pepper.
        
        Cooking:
        1. In a pan, cook pancetta until crispy.
        2. Add cooked spaghetti to the pan with pancetta and toss.
        3. Remove from heat and slowly add egg mixture, stirring continuously.
        
        Serving:
        1. Serve immediately, garnished with extra grated cheese and black pepper.
        2. Enjoy your Spaghetti Carbonara!`, 
        img: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg?width=1280&quality=75&auto=webp' 
    },
    { 
        id: 2, 
        title: 'Chicken Curry', 
        description: `Chicken Curry Recipe:
    
        Ingredients:
        - 1 lb (450g) chicken breast or thigh, cut into bite-sized pieces
        - 2 tablespoons vegetable oil
        - 1 large onion, finely chopped
        - 3 garlic cloves, minced
        - 1-inch piece of ginger, grated
        - 2 tomatoes, chopped
        - 1 tablespoon curry powder (adjust to taste)
        - 1 teaspoon ground cumin
        - 1 teaspoon ground coriander
        - 1/2 teaspoon turmeric powder
        - 1/4 teaspoon chili powder (adjust to taste)
        - Salt to taste
        - 1 cup coconut milk
        - Fresh cilantro (coriander leaves), chopped (for garnish)
        - Cooked rice or naan bread (to serve)
    
        Instructions:
        1. Heat oil in a large pan or skillet over medium heat.
        2. Add chopped onion and sauté until softened, about 5-7 minutes. Add minced garlic and grated ginger, cook for another 1-2 minutes until fragrant.
        3. Add chopped tomatoes to the pan and cook until softened and breaking down. Stir in curry powder, ground cumin, ground coriander, turmeric powder, chili powder, and salt. Mix well.
        4. Add chicken pieces to the pan, coat them evenly with the spice mixture, and cook for 5-7 minutes until lightly browned.
        5. Pour in coconut milk, stir to combine, and bring to a simmer. Reduce heat to low, cover, and simmer gently for 15-20 minutes until chicken is cooked through and tender. Stir occasionally.
        6. Taste and adjust seasoning if needed. Garnish with chopped cilantro.
        7. Serve hot with cooked rice or naan bread.
    
        Enjoy your Chicken Curry!
        `, 
        img: 'https://www.kitchensanctuary.com/wp-content/uploads/2022/09/Air-Fryer-Chicken-Curry-square-FS-36.jpg' 
    }
    ,
    { 
        id: 3, 
        title: 'Fish Curry', 
        description: `Fish Curry Recipe:
    
        Ingredients:
        - 1 lb (450g) fish fillets (such as cod, tilapia, or salmon), cut into chunks
        - 2 tablespoons vegetable oil
        - 1 large onion, finely chopped
        - 3 garlic cloves, minced
        - 1-inch piece of ginger, grated
        - 2 tomatoes, chopped
        - 1 tablespoon curry powder (adjust to taste)
        - 1 teaspoon ground cumin
        - 1 teaspoon ground coriander
        - 1/2 teaspoon turmeric powder
        - 1/4 teaspoon chili powder (adjust to taste)
        - Salt to taste
        - 1 cup coconut milk
        - Fresh cilantro (coriander leaves), chopped (for garnish)
        - Cooked rice (to serve)
    
        Instructions:
        1. Heat oil in a large pan or skillet over medium heat.
        2. Add chopped onion and sauté until softened, about 5-7 minutes. Add minced garlic and grated ginger, cook for another 1-2 minutes until fragrant.
        3. Add chopped tomatoes to the pan and cook until softened and breaking down. Stir in curry powder, ground cumin, ground coriander, turmeric powder, chili powder, and salt. Mix well.
        4. Add fish chunks to the pan, coat them evenly with the spice mixture, and cook for 5-7 minutes until fish is cooked through.
        5. Pour in coconut milk, stir to combine, and bring to a simmer. Reduce heat to low, cover, and simmer gently for 10-15 minutes, allowing flavors to meld. Stir occasionally.
        6. Taste and adjust seasoning if needed. Garnish with chopped cilantro.
        7. Serve hot with cooked rice.
    
        Enjoy your Fish Curry!
        `, 
        img: 'https://static.toiimg.com/thumb/58985156.cms?imgsize=319624&width=800&height=800' 
    }
    ,
    { 
        id: 4, 
        title: 'Vegetable Stir-fry', 
        description: `Vegetable Stir-fry Recipe:
    
        Ingredients:
        - Assorted vegetables (such as bell peppers, broccoli, carrots, snap peas), sliced or chopped
        - 2 tablespoons vegetable oil
        - 2 garlic cloves, minced
        - 1-inch piece of ginger, grated
        - Soy sauce (to taste)
        - Salt and pepper (to taste)
        - Cooked rice or noodles (to serve)
    
        Instructions:
        1. Heat oil in a large pan or wok over medium-high heat.
        2. Add minced garlic and grated ginger, sauté for 1-2 minutes until fragrant.
        3. Add assorted vegetables to the pan, stir-fry for 5-7 minutes until vegetables are tender-crisp.
        4. Season with soy sauce, salt, and pepper to taste. Toss well to combine.
        5. Remove from heat and serve immediately over cooked rice or noodles.
    
        Enjoy your Vegetable Stir-fry!
        `, 
        img: 'https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-Stir-Fry-Vegetables-15.jpg' 
    },
    { 
        id: 5, 
        title: 'Beef Stroganoff', 
        description: `Beef Stroganoff Recipe:

        Ingredients:
        - 1 lb beef sirloin or tenderloin, thinly sliced
        - 1 onion, thinly sliced
        - 8 oz mushrooms, sliced
        - 2 cloves garlic, minced
        - 1 cup beef broth
        - 1 cup sour cream
        - 1 tbsp Dijon mustard
        - 2 tbsp vegetable oil
        - Salt and pepper (to taste)
        - Cooked egg noodles (to serve)
        
        Instructions:
        1. Heat 1 tablespoon of oil in a large skillet over medium-high heat.
        2. Add sliced beef and cook until browned, about 2-3 minutes per side. Remove from skillet.
        3. In the same skillet, heat the remaining tablespoon of oil. Add onions and mushrooms, sauté until softened.
        4. Add minced garlic and cook for another 1-2 minutes until fragrant.
        5. Stir in beef broth, sour cream, and Dijon mustard. Bring to a simmer.
        6. Return beef to the skillet, simmer gently for 5-7 minutes until the sauce thickens slightly.
        7. Season with salt and pepper to taste.
        8. Serve hot over cooked egg noodles.
        
        Enjoy your Beef Stroganoff!
        `, 
        img: 'https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-beef-stroganoff-sq.jpg', 
        category: 'dinner'
    },
    { 
        id: 6, 
        title: 'Pancakes', 
        description: `Pancakes Recipe:

        Ingredients:
        - 1 cup all-purpose flour
        - 1 tbsp sugar
        - 1 tsp baking powder
        - 1/2 tsp baking soda
        - 1/4 tsp salt
        - 1 cup buttermilk
        - 1 large egg
        - 2 tbsp unsalted butter, melted
        - Butter and syrup (to serve)
        
        Instructions:
        1. In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.
        2. In another bowl, whisk together buttermilk, egg, and melted butter.
        3. Pour wet ingredients into dry ingredients and stir until just combined. Do not overmix; batter should be slightly lumpy.
        4. Heat a non-stick skillet or griddle over medium heat. Lightly grease with butter or oil.
        5. Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown.
        6. Serve hot with butter and syrup.
        
        Enjoy your Pancakes!
        `, 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbV7RHXugm-8R2CMNAc5i3EquRj5eSCAtBg&s', 
        category: 'breakfast'
    },
    { 
        id: 7, 
        title: 'Caesar Salad', 
        description: `Caesar Salad Recipe:

        Ingredients:
        - 1 head romaine lettuce, washed and chopped
        - 1 cup croutons
        - 1/2 cup grated Parmesan cheese
        - Caesar dressing (to taste)
        
        Instructions:
        1. In a large bowl, combine chopped romaine lettuce and croutons.
        2. Add Caesar dressing and toss to coat evenly.
        3. Sprinkle grated Parmesan cheese on top.
        4. Serve immediately as a side dish or add grilled chicken for a main course.
        
        Enjoy your Caesar Salad!
        `, 
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Caesar-salad-dressing-b4247ff.jpg?quality=90&webp=true&resize=375,341', 
        category: 'lunch'
    },
    { 
        id: 8, 
        title: 'Tom Yum Soup', 
        description: `Tom Yum Soup Recipe:

        Ingredients:
        - 4 cups chicken or vegetable broth
        - 1 stalk lemongrass, sliced into 2-inch pieces
        - 3-4 kaffir lime leaves
        - 2-3 red bird's eye chilies, smashed
        - 1-inch piece galangal or ginger, sliced
        - 8 oz shrimp, peeled and deveined
        - 1 tomato, cut into wedges
        - 1/2 cup mushrooms, sliced
        - 2 tbsp fish sauce
        - 2 tbsp lime juice
        - Fresh cilantro leaves (for garnish)
        
        Instructions:
        1. In a large pot, bring chicken or vegetable broth to a boil.
        2. Add lemongrass, kaffir lime leaves, smashed chilies, and galangal or ginger. Simmer for 5 minutes.
        3. Add shrimp, tomato, and mushrooms. Cook until shrimp are pink and opaque.
        4. Stir in fish sauce and lime juice. Taste and adjust seasoning if needed.
        5. Remove from heat and garnish with fresh cilantro leaves.
        
        Enjoy your Tom Yum Soup!
        `, 
        img: 'https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog-500x500.jpg', 
        category: 'dinner'
    },
    { 
        id: 9, 
        title: 'Mushroom Risotto', 
        description: `Mushroom Risotto Recipe:

        Ingredients:
        - 1 cup Arborio rice
        - 4 cups vegetable or chicken broth
        - 1/2 cup dry white wine
        - 2 tbsp unsalted butter
        - 1 tbsp olive oil
        - 1 small onion, finely chopped
        - 2 cloves garlic, minced
        - 8 oz mushrooms (such as cremini or shiitake), sliced
        - 1/2 cup grated Parmesan cheese
        - Salt and pepper (to taste)
        
        Instructions:
        1. In a saucepan, heat broth over medium heat. Keep warm but do not boil.
        2. In a separate large skillet or pot, heat olive oil and 1 tablespoon of butter over medium heat.
        3. Add chopped onion and garlic, sauté until translucent.
        4. Add Arborio rice to the skillet, stirring constantly for about 1 minute until lightly toasted.
        5. Pour in white wine, stirring until absorbed.
        6. Add warm broth to the skillet, one ladleful at a time, stirring frequently until each addition is absorbed. Continue until rice is creamy and tender, about 20-25 minutes.
        7. Stir in sliced mushrooms during the last 5 minutes of cooking.
        8. Remove from heat and stir in remaining butter and grated Parmesan cheese. Season with salt and pepper to taste.
        9. Serve hot, garnished with additional Parmesan cheese and fresh herbs if desired.
        
        Enjoy your Mushroom Risotto!
        `, 
        img: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto-recipe.jpg', 
        category: 'dinner'
    },
    { 
        id: 10, 
        title: 'Tacos', 
        description: `Tacos Recipe:

        Ingredients:
        - 1 lb ground beef or chicken
        - 1 tbsp taco seasoning
        - 1/2 cup salsa
        - 8 small flour or corn tortillas
        - Assorted toppings: shredded lettuce, diced tomatoes, shredded cheese, sour cream, guacamole
        
        Instructions:
        1. In a large skillet, cook ground beef or chicken over medium-high heat until browned. Drain excess fat.
        2. Stir in taco seasoning and salsa. Simmer for 5 minutes, stirring occasionally.
        3. Heat tortillas according to package instructions.
        4. Fill each tortilla with taco meat mixture and desired toppings.
        5. Serve hot with additional salsa and toppings on the side.
        
        Enjoy your Tacos!
        `, 
        img: 'https://lh4.googleusercontent.com/proxy/Z1qsZyyS4KM8bNYnIyvYKqscB_Qbf4-HpOhpnyluPNDCBadK25DsOXEKb-SXM3yZZ7KOa18ne1IMqs8', 
        category: 'lunch'
    }
    
];

const RecipeInfo = () => {
    const { id } = useParams();
    const recipe = recipes.find(r => r.id === parseInt(id));

    return (
        <div className='recipe-cont'>
            <img className="recipes-image" src={recipe.img} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <div className='desc'>
                {recipe.description}
            </div>
        </div>
    );
};

export default RecipeInfo;
