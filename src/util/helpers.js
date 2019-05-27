// Determine if an integer is even or odd
export function isOdd(num) {
  return num % 2 ? true : false;
}

export const aspectRatioPadding = (image, width) => {
  const num = (width / image.aspectRatio / width) * 100;
  const value = num.toFixed(2) + "%";

  return value;
};
