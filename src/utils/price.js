export const formatPrice = (price) => {
  let priceFormatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
  return priceFormatted;
}