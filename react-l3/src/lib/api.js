const mockProducts = [
  {
    id: "1",
    title: "Mens Garmin",
    description: " Great Men's watch ",
    usage:
      "Garmin Connect is the powerhouse behind your sports watch or smartwatch – and is where the magic happens in terms of tracking and analysing your workouts, or keeping tabs on your heart and activity.",
  },
  {
    id: "2",
    title: "Womans Garmin",
    description:
      "We Go The Extra Mile To Help You Get The Most Out Of Every Product. Improve Your Fitness With Our Wide Range Of Sporting Products & Equipment. Shop Now! Free Shipping Over R600. Pay With Discovery Miles. SA's Biggest Sports Range. Excellent Customer Care.",
    usage:
      "Garmin Connect is the powerhouse behind your sports watch or smartwatch – and is where the magic happens in terms of tracking and analysing your workouts, or keeping tabs on your heart and activity.",
  },
  {
    id: "3",
    title: "GPS",
    description:
      "We Go The Extra Mile To Help You Get The Most Out Of Every Product. Improve Your Fitness With Our Wide Range Of Sporting Products & Equipment. Shop Now! Free Shipping Over R600. Pay With Discovery Miles. SA's Biggest Sports Range. Excellent Customer Care. ",
    usage:
      "Garmin Connect is the powerhouse behind your sports watch or smartwatch – and is where the magic happens in terms of tracking and analysing your workouts, or keeping tabs on your heart and activity.",
  },
];

export function getProducts() {
  return mockProducts;
}

export function getProductById(productId) {
  return mockProducts.find((product) => product.id === productId);
}
