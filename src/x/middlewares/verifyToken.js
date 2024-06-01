import store from "@/x/store"
export default function (to, from, next) {
  if(!to.path.includes("login")) {
    if(to.path.includes("/buyer") && !store.state.buyerToken) {
      next("/buyer/login")
    }
    if(to.path.includes("/seller") && !store.state.sellerToken) {
      next("/seller/login")
    }
  }
  next()
}