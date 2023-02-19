const size = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "320px",
};

export const device = {
  desktop: `(min-width: ${size.desktop})`,
  tablet: `(min-width: ${size.tablet})`,
  mobile: `(min-width: ${size.mobile})`,
};

console.log(device);
