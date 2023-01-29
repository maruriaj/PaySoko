export const fetchCategories = () => {
  try {
    return fetch('https://api.paysoko.shop/api/v1/admin/categories').then(
      (response) => response.json()
    );
  } catch (error) {
    console.error('Error:', error);
  }
};

export const fetchProducts = (id) => {
  try {
    return fetch(
      `https://api.paysoko.shop/api/v1/admin/products/category/${id}`
    ).then((response) => response.json());
  } catch (error) {
    console.error('Error:', error);
  }
};

export const fetchSubCategories = (id) => {
  fetch(`http://api.paysoko.shop/api/v1/admin/sub-categories/${id}`, {
    mode: 'no-cors',
  })
    .then((response) => response.json())
    .then((data) => {
      //console.log('Success:', data);
      return data.data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
