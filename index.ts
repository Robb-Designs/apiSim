// imports -----------------------------------------------------------------------
import { fetchProductCatalog } from "./apiSimulator";
import { fetchProductReviews } from "./apiSimulator";
import { fetchSalesReport } from "./apiSimulator";


// functions --------------------------------------------------------------------------

//fetching products with our fetchProdCatalog function
fetchProductCatalog()
    .then((products) => {
        console.log("Products:", products);
        // for each product, we're fetching the reviews
        const reviewPromises = products.map((product) => {
            return fetchProductReviews(product.id)
                .then((reviews) => {
                    console.log(`Reviews for ${product.name}:`, reviews);
                })
                .then(() => {
                    return fetchSalesReport();
                })
                .then((report) => {
                    console.log("Sales Report:", report);
                })
                .catch((error) => {
                    console.error(`Error fetching reviews for ${product.name}:`, error);
                });

        });

        // using .all since im making multiple async calls.
        return Promise.all(reviewPromises);
    })