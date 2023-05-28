const img =
  'https://img.rawpixel.com/private/static/images/website/2022-05/is16062-image-kwvyfkwr.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a4c54f77681e4e7f2cbb7e81b849941c';

export const updateData = list =>
  list.map(el => ({
    ...el,
    dishes: el.dishes.map(el => ({ ...el, img, isAdded: false, ordered: 0 })),
  }));
