import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/shop", "routes/shop.tsx"),
  route("/product/:id", "routes/product.tsx"),
  route("/cart", "routes/cart.tsx"),
  route("/profile", "routes/profile.tsx"),
  route("/login", "routes/login.tsx"),
  route("/signup", "routes/signup.tsx"),
  route("/account", "routes/account.tsx"),
  route("/wishlist", "routes/wishlist.tsx"),
  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
