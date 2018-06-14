Component({
  // 组件的局部状态
  data: {
    isScroll: false
  },
  props: {
    className: '', // 自定义类名，String
    style: '', // 自定义样式，String
    scrollX: false, // 允许横向滚动，Boolean，默认值false
    scrollY: false, // 允许纵向滚动，Boolean，默认值false

    upperThreshold: 50, // 距顶部/左边多远时（单位px），触发 scrolltoupper 事件，Number，默认值50
    lowerThreshold: 50, // 距底部/右边多远时（单位px），触发 scrolltolower 事件，Number，默认值50
    scrollTop: 0, // 设置竖向滚动条位置，Number
    scrollLeft: 0, // 设置横向滚动条位置，Number
    scrollIntoView: '', // 值应为某子元素id，则滚动到该元素，元素顶部对齐滚动区域顶部，String
    scrollWithAnimation: false, // 在设置滚动条位置时使用动画过渡，Boolean，false

    onScroll: null, // 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth}，EventHandle
    onScrollToUpper: null, // 滚动到顶部/左边，会触发 scrolltoupper 事件，EventHandle
    onScrollToLower: null, // 滚动到底部/右边，会触发 scrolltolower 事件，EventHandle

    isErrorRequest: false, // 请求是否出错，默认false
    noMoreData: false, // 是否还有数据
    listData: []
  },
  didMount: function didMount() {
    console.log('component did mount');
  },
  didUpdate: function didUpdate(prevProps, prevData) {
    // console.log(prevProps, this.props, prevData, this.data);
    if (!this.props.listData.length) {
      // 列表长度为0，视为将列表初始化
      this.initScroll();
    }
  },
  didUnmount: function didUnmount() {},

  methods: {
    initScroll: function initScroll() {
      this.setData({
        isScroll: false
      });
    },

    // 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth}
    handleScroll: function handleScroll(event) {
      // console.log('scrolling');
      this.props.onScroll && this.props.onScroll();
      this.setData({
        isScroll: true
      });
    },

    // 滚动到顶部/左边，会触发 scrolltoupper 事件
    handleScrollToUpper: function handleScrollToUpper() {
      console.log('scroll to upper.');
      if (this.props.noMoreData) return false;
      this.props.onScrollToUpper && this.props.onScrollToUpper();
    },

    // 滚动到底部/右边，会触发 scrolltolower 事件
    handleScrollToLower: function handleScrollToLower() {
      console.log('scroll to lower');
      if (this.props.noMoreData) return false;
      this.props.onScrollToLower && this.props.onScrollToLower();
    }
  }
});