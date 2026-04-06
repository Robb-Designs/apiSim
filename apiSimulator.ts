// Types --------------------------------------------------------------------------------------------------
type Review = {
  rating: number;
  comment: string;
};

type SalesReport = {
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
};



// Functions ----------------------------------------------------------------------------------------------
export const fetchProductCatalog = (): Promise<
    {
        id: number;
        name: string;
        price: number
    }[] > => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};


export const fetchProductReviews = (productId: number): Promise<Review[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { rating: 5, comment: "Amazing" },
          { rating: 4, comment: "Pretty nice product" },
        ]);
      } else {
        reject(`Failed to fetch reviews for product ID ${productId}`);
      }
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<SalesReport> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.8) {
                resolve({
                    totalSales: 33000,
                    unitsSold: 155,
                    averagePrice: 299
                });
            } else {
                reject("Failed to fetch the sales repor");
            }
        }, 2000)
    })
}

