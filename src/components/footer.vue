<template>
  <div class="htzxFooter">
    <div class="htzxMain">
      <div class="htzxFooter_link">
        <ul class="htzxFooter_link_nav clearfix">
          <li class="nav_active">友情链接</li>
          <li>合作伙伴</li>
        </ul>
        <div class="htzxFooter_link_con">
          <article style="display: block">
            <ul class="clearfix">
              <li><a href="">教师网考试</a></li>
              <li><a href="">教育联考网</a></li>
              <li><a href="">易考吧</a></li>
            </ul>
          </article>
          <article>合作伙伴</article>
        </div>
      </div>
      <div class="htzxFooter_webInfo hw_flexBetween">
        <ul class="hw_aside hw_flexBetween">
          <li>
            <h3>导航</h3>
            <a href="" ref="nofollow">首页</a>
            <a href="" ref="nofollow">课程</a>
            <a href="" ref="nofollow">题库</a>
            <a href="" ref="nofollow">资讯</a>
          </li>
          <li>
            <h3>我的中心</h3>
            <a href="" ref="nofollow">我的课程</a>
            <a href="" ref="nofollow">我的订单</a>
            <a href="" ref="nofollow">学习流程</a>
            <a href="" ref="nofollow">课程常见问题</a>
            <a href="" ref="nofollow">讲义常见问题</a>
            <a href="" ref="nofollow">听课软件下载</a>
          </li>
          <li>
            <h3>关于华图</h3>
            <a href="" ref="nofollow">华图简介</a>
            <a href="" ref="nofollow">联系方式</a>
            <a href="" ref="nofollow">网站地图</a>
            <a href="" ref="nofollow">商务合作</a>
          </li>
        </ul>
        <div class="hw_aside">
          <h3>联系电话</h3>
          <p class="hw_aside_tel">400-8989-766</p>
          <h3>公司地址</h3>
          <p>北京市海淀区复兴路甲23号华图教育大厦八层</p>
        </div>
        <ul class="hw_aside hw_flexBetween">
          <li>
            <h3>微信公众号</h3>
            <img
              v-lazy="'/static/images/htzx_wxgzh@2x.png'"
              alt=""
              class="hw_aside_ewm"
            />
          </li>
          <li>
            <h3>微博</h3>
            <img
              v-lazy="'/static/images/htzx_wb@2x.png'"
              alt=""
              class="hw_aside_ewm"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.htzxFooter {
  padding: 40px 0 64px;
  background: #36383f;

  .htzxFooter_link {
    display: none;
    padding-bottom: 36px;

    .htzxFooter_link_nav {
      padding-bottom: 16px;
      line-height: 26px;
      font-size: 18px;
      color: #cfd0d0;

      li {
        float: left;
        padding-right: 24px;
        cursor: pointer;

        &:hover,
        &.nav_active {
          color: #fff;
        }
      }
    }

    .htzxFooter_link_con {
      li {
        float: left;
        padding-right: 24px;

        a {
          color: #dfdfdf;

          &:hover {
            color: #ff4e45;
          }
        }
      }

      article {
        display: none;
        color: #fff;
      }
    }
  }

  .htzxFooter_webInfo {
    &.hw_flexBetween,
    .hw_flexBetween {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .hw_flexCenter {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hw_aside {
      color: #dfdfdf;

      h3 {
        margin-bottom: 14px;
        line-height: 25px;
        font-weight: 500;
        font-size: 18px;
        color: #b0b1b3;
      }

      a {
        display: block;
        line-height: 28px;
        color: #dfdfdf;

        &:hover {
          color: #fff;
        }
      }

      .hw_aside_ewm {
        margin-top: 16px;
        width: 160px;
        height: 160px;
      }

      .hw_aside_tel {
        padding-bottom: 43px;
        font-size: 24px;
      }

      &:nth-child(1) {
        box-sizing: border-box;
        padding-right: 40px;
        width: 410px;
      }

      &:nth-child(2) {
        box-sizing: border-box;
        padding: 0 40px;
        border-left: 1px solid #5c5d63;
        border-right: 1px solid #5c5d63;
        width: 375px;
        height: 200px;
      }

      &:nth-child(3) {
        padding-left: 40px;
        border-right: 0;
        width: 380px;
      }
    }
  }
}
</style>