import { nanoid } from 'nanoid';

const fakeRestaurants = [
  {
    id: 1,
    name: 'Noma',
    dishes: [
      { name: 'Green Herb-Marinated Oyster', price: 150 },
      { name: 'Seafood with Cranberry and Wild Rosehip', price: 180 },
      {
        name: 'Celery with Blackcurrant and Black Truffle Mushroom Paste',
        price: 120,
      },
      {
        name: 'Chanterelle Tartare with Radish and Blackcurrant',
        price: 140,
      },
      {
        name: 'Pan-Fried Partridge with Artichoke and Boiled Beetroot',
        price: 190,
      },
      { name: 'Fermented Potato with Smoked Egg Yolk', price: 130 },
      {
        name: 'Pike Perch Fillet with Pumpkin and Fermented Sour Cream Ice Cream',
        price: 160,
      },
      {
        name: 'Confit Tongue in Clay with Radish and Spring Onion',
        price: 110,
      },
      {
        name: 'Brussels Sprouts with Smoked Potato and Green Peas',
        price: 170,
      },
      {
        name: 'Cloud Milk Panna Cotta with Bergamot and Caramel',
        price: 150,
      },
    ],
  },
  {
    id: 2,
    name: 'El Celler de Can Roca',
    dishes: [
      { name: 'Creamy Sevruga Sturgeon with Crispy Seaweed', price: 170 },
      { name: 'Seafood with Pesto and Avocado', price: 160 },
      { name: 'Truffle Salad with Pepper Oil', price: 150 },
      { name: 'Tomatoes with Basil and Sea Salt', price: 120 },
      { name: 'Confit Rabbit Meat with Cherry Sauce', price: 190 },
      { name: 'Potato and Sage Cream Soup', price: 140 },
      { name: 'Red Fish Fillet with Olives and Capers', price: 180 },
      { name: 'Couscous with Vegetables and Shrimp', price: 130 },
      {
        name: 'Beef Medallions with White Mushrooms and Herb Sauce',
        price: 200,
      },
    ],
  },
  {
    id: 3,
    name: 'Mirazur',
    dishes: [
      { name: 'Chilled Melon Soup with Basil and Olive Oil', price: 160 },
      {
        name: 'Octopus with Bell Pepper Emulsion and Smoked Paprika',
        price: 180,
      },
      {
        name: 'Quinoa Risotto with Mushroom and Parmesan Foam',
        price: 140,
      },
      {
        name: 'Grilled Langoustine with Sea Urchin and Citrus Butter',
        price: 190,
      },
      { name: 'Roasted Lamb with Eggplant and Black Garlic', price: 200 },
      {
        name: 'Artichoke and Truffle Brioche with Parmesan Cream',
        price: 150,
      },
      {
        name: 'Carrot Tartare with Smoked Yogurt and Hazelnut',
        price: 120,
      },
      {
        name: 'Codfish with Chickpea Puree and Chorizo Emulsion',
        price: 170,
      },
      {
        name: 'Passion Fruit with Coconut Sorbet and Lemongrass Foam',
        price: 130,
      },
      { name: 'Chocolate Tart with Caramel and Sea Salt', price: 160 },
    ],
  },
  {
    id: 4,
    name: 'Central',
    dishes: [
      { name: 'Amazonian Ceviche with Exotic Fruits', price: 150 },
      { name: 'Andean Potato with Spicy Cheese Sauce', price: 120 },
      {
        name: 'Cocoa and Mushroom Risotto with Crispy Quinoa',
        price: 160,
      },
      { name: 'River Shrimp with Green Plantain Emulsion', price: 180 },
      {
        name: 'Grilled Alpaca Meat with Corn and Andean Herbs',
        price: 190,
      },
      { name: 'Rainbow Trout with Mashua and Aji Pepper', price: 140 },
      { name: 'Coca Leaf Sorbet with Andean Berries', price: 130 },
      { name: 'Purple Corn with Lucuma Ice Cream', price: 150 },
      { name: 'Quinoa Mousse with Maras Salt Crystals', price: 170 },
      {
        name: 'Chocolate and Maca Tart with Amazonian Fruit Compote',
        price: 160,
      },
    ],
  },
  {
    id: 5,
    name: 'Gaggan',
    dishes: [
      { name: 'Yogurt Explosion', price: 120 },
      { name: 'Charcoal', price: 150 },
      { name: 'Chutoro Sushi', price: 180 },
      { name: 'Edible Plastic Spoons', price: 140 },
      { name: 'Red Matcha', price: 160 },
      { name: 'Black Forest', price: 130 },
      { name: 'Lick It Up', price: 190 },
      { name: 'Chili Pepper', price: 170 },
      { name: 'Bacon Wrapped Prawns', price: 200 },
      { name: 'Magic Mushroom', price: 150 },
    ],
  },
  {
    id: 6,
    name: 'Arpège',
    dishes: [
      { name: 'Vegetable Minestrone', price: 150 },
      { name: 'Roasted Beetroot with Citrus Dressing', price: 130 },
      { name: 'Wild Mushroom Ravioli with Truffle Sauce', price: 160 },
      { name: 'Grilled Turbot with Lemon Butter', price: 180 },
      { name: 'Roasted Duck Breast with Cherry Compote', price: 190 },
      { name: 'Celeriac Gratin with Gruyère Cheese', price: 140 },
      { name: 'Carrot Soufflé with Ginger Ice Cream', price: 170 },
      { name: 'Cheese Plate with Assorted Artisanal Cheeses', price: 120 },
      { name: 'Apple Tarte Tatin with Vanilla Ice Cream', price: 150 },
      { name: 'Chocolate Fondant with Salted Caramel Sauce', price: 160 },
    ],
  },
  {
    id: 7,
    name: 'Maido',
    dishes: [
      { name: 'Ceviche Nikkei', price: 160 },
      { name: 'Fish Tiradito', price: 180 },
      { name: 'Scallop Tiradito with Passion Fruit', price: 140 },
      { name: 'Fish Hot Pot', price: 190 },
      { name: 'Nikkei Sushi', price: 200 },
      { name: 'Black Cod with Miso', price: 150 },
      { name: 'Wagyu Beef with Anticucho Sauce', price: 120 },
      { name: 'Quinoa and Vegetable Stir-Fry', price: 170 },
      { name: 'Matcha Green Tea Tiramisu', price: 130 },
      { name: 'Peruvian Chocolate with Lucuma Ice Cream', price: 160 },
    ],
  },
  {
    id: 8,
    name: 'Mugaritz',
    dishes: [
      { name: 'Oyster with Oxalis and Sea Fennel', price: 180 },
      { name: 'Beetroot Tartare with Pickled Roses', price: 150 },
      { name: 'Charcoal-Grilled Squid with Ink Sauce', price: 190 },
      { name: 'Roasted Lamb Sweetbreads with Spring Garlic', price: 170 },
      { name: 'Smoked Eel with Almond Milk', price: 160 },
      { name: 'Spider Crab with Sea Urchin Emulsion', price: 200 },
      {
        name: 'Pigeon with Fermented Corn and Red Wine Sauce',
        price: 140,
      },
      { name: 'Wild Mushroom Risotto with Parsley Cream', price: 130 },
      {
        name: 'Frozen Yogurt with Elderflower and Wild Berries',
        price: 150,
      },
      { name: 'Hazelnut Cake with Salted Caramel Ice Cream', price: 160 },
    ],
  },
  {
    id: 9,
    name: 'Steirereck',
    dishes: [
      { name: 'Graz-Spiral Bread with Pumpkin Seed Spread', price: 120 },
      { name: 'Sour Cream Soup with Cucumber and Radish', price: 150 },
      {
        name: 'Beetroot Carpaccio with Goat Cheese and Horseradish',
        price: 160,
      },
      { name: 'Pike Perch with Carrot and Lemon Thyme', price: 180 },
      { name: 'Veal Sweetbreads with Asparagus and Morels', price: 190 },
      { name: 'Pumpkin Seed Noodles with Mushroom Ragout', price: 140 },
      { name: 'Cheese Selection with Honey and Nuts', price: 170 },
      { name: 'White Chocolate Mousse with Raspberry Sorbet', price: 130 },
      { name: 'Apple Strudel with Vanilla Sauce', price: 150 },
      { name: 'Chocolate Soufflé with Pistachio Ice Cream', price: 160 },
    ],
  },
  {
    id: 10,
    name: 'Odette',
    dishes: [
      { name: 'Hand-Dived Scallop with Parsley and Lemon', price: 150 },
      { name: 'Mushroom Tea with Truffle and Hazelnut', price: 140 },
      { name: 'Kohlrabi with Caviar and Dill', price: 180 },
      {
        name: 'Organic Chicken with Foie Gras and Black Truffle',
        price: 190,
      },
      {
        name: 'Seared Codfish with Cauliflower and Sea Urchin',
        price: 170,
      },
      { name: 'Vegetable Garden with Basil and Tomato', price: 160 },
      { name: 'Lamb Loin with Broccoli and Yogurt', price: 200 },
      { name: 'Selection of French Cheese with Condiments', price: 130 },
      {
        name: 'Strawberry Tart with Elderflower and Vanilla Cream',
        price: 150,
      },
      {
        name: 'Chocolate Palette with Salted Caramel and Malted Ice Cream',
        price: 160,
      },
    ],
  },
];

fakeRestaurants.forEach(restaurant =>
  restaurant.dishes.forEach(el => {
    el.isAdded = false;
    el.img =
      'https://img.rawpixel.com/private/static/images/website/2022-05/is16062-image-kwvyfkwr.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a4c54f77681e4e7f2cbb7e81b849941c';
    el.id = nanoid();
    el.ordered = 0;
  })
);

export { fakeRestaurants };
