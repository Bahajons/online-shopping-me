const axios = null;

// user
axios.post("/user/register", { name, email, password }); // register
axios.post("/user/login", { email, password }); // login
axios.get("/user/logout"); // logout
axios.get("/user/refresh_token"); // refresh token for auth
axios.get("/user/info"); // user info
axios.put("/user/addCart", { cart:[] }); // add product to cart
axios.get("/user/getHistory"); // get all users ordered history

// product
axios.get("/api/products"); // get all products
axios.get("/api//api/products?limit=8&sort=-createdAt"); // get all products by filter
axios.post("/api/products", { product_id, titleUz, titleEng, price, descriptionUz, descriptionEng, contentUz, contentEng, images, categoryUz, categoryEng }); // create new product
axios.put("/api/product/:id", { product_id, titleUz, titleEng, price, descriptionUz, descriptionEng, contentUz, contentEng, images, categoryUz, categoryEng }); // edit one product
axios.delete("/api/product/:id"); // delete one product

// category
axios.get("/api/category"); // get all categories
axios.post("/api/category", { nameUz, nameEng }); // create category
axios.put("/api/category/:id", { nameUz, nameEng }); // edit category
axios.delete("/api/category/:id"); // delete category

// payment(history for user)
axios.get("/api/payment"); // get ordered history
axios.post("/api/payment", { cart:[], paymentId, address }); // create ordered history

// upload image
const formData = new FormData();
formData.append("file", file);

axios.post("/api/upload", formData); // upload image
axios.post("/api/destroy", { public_id }); // delete image
