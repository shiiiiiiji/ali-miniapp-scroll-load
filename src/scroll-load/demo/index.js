Page({
  data: {
    isLoading: false,
    listData: []
  },
  onReady() {
    this.requestData();
  },
  requestData() {
    if (this.data.isLoading) return false;
    this.setData({
      isLoading: true
    });
    my.httpRequest({
      url: 'https://www.easy-mock.com/mock/5b1f855e9f7d4a3a70fcbf94/sl/list', // 目标服务器url
      method: 'POST',
      data: {},
      dataType: 'json',
      success: (res) => {
        const { data } = res.data;
        this.setData({
          isLoading: false,
          listData: this.data.listData.concat(data.list),
          noMoreData: !data.nextPage
        })
      },
    });
  },
  handleScrollToLower() {
    this.requestData();
  }

});
