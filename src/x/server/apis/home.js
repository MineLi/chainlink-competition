import Base from "@/x/server/base"
class Home extends Base {
  queryNftList() {
    return this.get(`/nft/nftProduct/list`, { pageNum: 1, pageSize: 100 }).then(this._handleResult)
  }
  queryNftDetail(id) {
    return this.get(`/nft/nftProduct/${id}`).then(this._handleResult)
  }
  updateNftDetail(data) {
    return this.post(`/nft/nftProduct`, data).then(this._handleResult)
  }
}
export default new Home();