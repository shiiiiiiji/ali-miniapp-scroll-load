# <scroll-load>
上拉加载

## API（属性和方法）

<div class="bi-table">
  <table>
    <colgroup>
      <col width="131px" />
      <col width="80px" />
      <col width="75px" />
      <col width="76px" />
      <col width="465px" />
    </colgroup>
    <tbody>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="alignment" data-value="center" style="text-align:center">
            <div data-type="p"><strong>属性</strong></div>
          </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="alignment" data-value="center" style="text-align:center">
            <div data-type="p"><strong>类型</strong></div>
          </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="alignment" data-value="center" style="text-align:center">
            <div data-type="p"><strong>默认值</strong></div>
          </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="alignment" data-value="center" style="text-align:center">
            <div data-type="p"><strong>是否必填</strong></div>
          </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="alignment" data-value="center" style="text-align:center">
            <div data-type="p"><strong>说明</strong></div>
          </div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">className</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">String</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">&#x27;&#x27;</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">自定义类名</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">style</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">String</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">&#x27;&#x27;</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">自定义样式</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">scrollX</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Boolean</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">false</div>
        </td>
        <td rowspan="2" colSpan="1">
          <div data-type="alignment" data-value="center" style="text-align:center">
            <div data-type="p">两者其中一项必须为真</div>
          </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">允许横向滚动</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">scrollY</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Boolean</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">false</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">允许纵向滚动</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">upperThreshold</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Number</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">50</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">距顶部/左边多远时（单位px），触发 scrolltoupper 事件</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">lowerThreshold</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Number</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">50</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">距底部/右边多远时（单位px），触发 scrolltolower 事件</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">scrollTop</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Number</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">0</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">设置竖向滚动条位置</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">scrollLeft</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Number</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">0</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">设置横向滚动条位置</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">scrollIntoView</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">String</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">值应为某子元素id，则滚动到该元素，元素顶部对齐滚动区域顶部</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">scrollWithAnimation</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Boolean</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">false</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">在设置滚动条位置时使用动画过渡</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">onScroll</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Function</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">null</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth}，EventHandle</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">onScrollToUpper</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Function</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">null</div>
        </td>
        <td rowspan="2" colSpan="1">
          <div data-type="p">与滚动方向设置对应</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">滚动到顶部/左边，会触发 scrolltoupper 事件，EventHandle</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">onScrollToLower</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Function</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">null</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">滚动到底部/右边，会触发 scrolltolower 事件，EventHandle</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">isErrorRequest</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Object</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">null</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p"></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">请求出错Error对象</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">noMoreData</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Boolean</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">false</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">是</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">列表是否还有数据</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">listData</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Array</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">[]</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">是</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">列表数据</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## slots（支付宝小程序组件特有）

| slotname | 说明 |
| --- | --- |
| top-view | 列表顶部个性化区域 |
| scroll-content-list | 列表内容 |
| load-more | 加载更多提示 |
| load-error | 加载失败提示 |
| no-nore-data | 没有更多数据提示 |
| empty | 空内容 |
| error | 出错内容 |


## 用法
```json
// page.json
{
  "defaultTitle": "",
  "usingComponents":{
    "scroll-load":".../scroll-load"    // 路径配置
  }
}
```

## 示例
```html
<scroll-load
  className="hos-list-sv"
  scrollY="{{true}}"
  onScrollToLower="handleListScrollToLower"
  isErrorRequest="{{isErrorReq}}"
  noMoreData="{{noMoreData}}"
  listData="{{reqResult}}"
>
  <view slot="top-view" class="search-count" a:if="{{searchCount}}">
    共有{{searchCount}}条搜索结果
  </view>
  <view slot="scroll-content-list">
    <block a:for="{{reqResult}}">
      <hos-item hosItem="{{item}}" type="search" />
    </block>
  </view>
  <view slot="load-more">
    <in-loading />
  </view>
  <view slot="load-error">
    <in-loading requestErrorObj="{{isErrorReq}}" />
  </view>
  <view slot="no-nore-data">
    <no-more-data />
  </view>
  <view slot="empty">
    <empty text="未搜索到相关社区医院" />
  </view>
  <view slot="error">
    <empty requestErrorObj="{{isErrorReq}}" onRefreshTap="bindErrorReDirectTap" />
  </view>
</scroll-load>
```
## 注意事项
1. 本组件基于支付宝小程序[原生组件可滚动视图区域<scroll-view>](https://docs.alipay.com/mini/component/scroll-view)能力实现，封装并管理了上拉瀑布式加载业务场景下的通用逻辑。需要特别注意的是，\*\*使用竖向滚动时，需要给包裹此组件的容器不可变值的高度（显式设置height，或者flex布局）\*\*。
2. 列表的部分状态需要在业务代码中维护，包括：

| isLoading | 是否在请求中，避免发出多次请求 |
| --- | --- |


3. 列表中的列表项、“正在加载中”、“亲，就这么多了”等另封装组件实现。

