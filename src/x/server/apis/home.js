import Base from "@/x/server/base"
class Home extends Base {
  getBannerList() {
    // return this.get('/admin-api/client/hksea/banner/list').then(this._handleResult)
  }
}
export default new Home();