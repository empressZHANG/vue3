<template>
  <div class="memberRight">
    <div class="titleBox">
      <h2>{{ memberData.name }}</h2>
      <div class="openMemberBtn">
        <div class="omb_Box">
          <i class="omb_Box_vipIcon"></i>开通华图在线会员
        </div>
      </div>
    </div>
    <div class="conBox">
      <div class="appEwm_box">
        <i class="ewmImg"></i>
        扫描二维码<br />
        <span class="f12">打开华图在线app</span>
      </div>
      <p v-for="(i, k) in memberData.con" :key="k">
        <i class="iconRound"></i>{{ i }}
      </p>
      <p class="tips" v-if="memberData.tips">
        {{ memberData.tips }}
      </p>
      <img :src="memberData.url" :alt="memberData.name" class="infoImg" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, withDefaults, watch } from "vue";
interface PropsType {
  type?: String | Number;
  memberData?: Object;
}
const props = withDefaults(defineProps<PropsType>(), {
  type: "1",
  memberData: () => {},
});

// let data = reactive({});
// data = props.membermemberData.filter((item) => item.type == nv)[0];

</script>

<style scoped lang="less">
.memberRight {
  position: relative;
  float: right;
  padding: 0 32px 16px;
  width: 928px;
  min-height: 530px;
  height: auto !important;
  height: 530px;
  background: #fff;
  .titleBox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #e2e2e2;
    h2 {
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333;
    }
    .openMemberBtn {
      width: 161px;
      height: 28px;
      line-height: 28px;
      padding: 1px;
      background: linear-gradient(225deg, #f4dbc2 50%, #f2d5b0);
      -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      border-radius: 14px;
      cursor: pointer;
      .omb_Box {
        width: 161px;
        height: 28px;
        background: linear-gradient(317deg, #f4dbc2, #dfb58b);
        border-radius: 14px;
        cursor: pointer;
        .omb_Box_vipIcon {
          display: inline-block;
          vertical-align: middle;
          width: 40px;
          height: 28px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAES0lEQVRYR+1Xb4hUVRT/nbczsdPufKk+ZER/yNwct13mnrebRcYmFRGUUlBBhaRBfyH6UKKWboUiURJSCpEUUYSRREb0obS1oljmnbtL5UoYZH+kUCxohZXovRN3em+4O87KjPPFD3O+vXvO+d3f/M65594hnOFGZzg/dAi2W6GOgh0F21Wg3fxOD3YUbFeBdvOJmb8D0J8BEdFNURR9eipgZn4dwCovZ1OSJEJEu7I1VV1trX2hXC6vDIJgRxNEFcBfqjoO4EVr7V6XQ8aYDUQ06gG/Zq19cC7AcrlcCoLgWwBdLkZVj+Tz+cvjOF6lqls8nLuste+FYbhRVdc2QdAPcWSfFJGXKN1wv+c9IiIXAIgbgYZhuFtVb/V8j4jIdmZ+GcDj3vpiERln5p0A7myRoAuPVfXa6pgxxuwnopIHslREPq8HNcYsIaIvvPUDxWJxYGxs7F9m/gDA8swXBMG8SqXyBzOL2+I0CIKIdmYER4logweyTUQerQdl5m8ALPbKeJu19iP3zcwWQDn1nRCRs10HpCUuNkEwD+BGAJd5+IerBAcHBxflcrnvPZDfReRCAEm2FobhHar6vhczJiLXZ9/MfAzAOen3QRFZ0ASpWSHDw8PnxnH8M4Ce1PFP7SapL7OqXmet/dIFjoyM5Kanp12fVjdVVUd82FrryodSqdRbKBSmvV/+mbXWqdGyMfMhABenicdqBJn5WQDrPcStIlJtemZ+GMC2zEdEb0dRdF/2PTQ0tChJEr8CO0TkgVbZpQfW4VR5uX6vEQzDsF9V3UzM7DcRuahUKvUUCoWDAM5PHTMArhCRX7zy36KqH3u560XkeWPMfCLqa5LoPFVdR0SXeJV4etZjgZmnACzMApIkucYNbn9OAtgsImv8TRsovCKKoreMMVuI6IkmCc4KU9XjRLSgnuCsMrtSquoyANkpPJrL5eaPj4//XUdwM4DV2VoQBCOVSmVfGIa7VPX20yHoZqqIbJ1FsEGZ63/VY9baV+s3NMa8S0R3Z+txHF86OTl5iJkj18ItEnS3iKtS9fY56T3IzAdcjzUA/aFYLPa7oVzvC8Pwa1W9Ol2Pi8Vidzq8jwI4rwWCEwCeEZFaPzci+JwLqgclouVRFH3YaDNmPgzAXY/OfnWHa2BgoCefz7vRk+0h7hA0yu/q6jqRJMlP/sHL4hoRvBKAewzUTFX3WWtHGoGXSqWzuru7Z4goSP1ficgSY8xCInKHrmpE9EYURStbUPP/vDkUqZXZDWVVvWpiYsL100nGzO5q+tFzvCMi9xpjbiaiT7J1VR211rpD2JI1JGiMWUtEG1OkUw5dY8xSItrjKbUpiqJ1zPwQgO0ewfuttW+2xG4uBfv6+oq9vb3u1fLnzMzMsqmpqeNzAZfL5RuCIHjKI/hKFEW7mXkFgHs8gmuyq7EVkp1/da2o1Si2o2BHwXYVaDe/04MdBdtVoN38/wAEorT7skDx+wAAAABJRU5ErkJggg==)
            no-repeat 50%;
          background-size: 25px;
        }
      }
    }
  }
  .conBox {
    padding-top: 16px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333;
    line-height: 26px;
    .iconRound {
      display: inline-block;
      vertical-align: middle;
      margin-right: 8px;
      width: 8px;
      height: 8px;
      background: -webkit-gradient(
        linear,
        right top,
        left top,
        from(#f9c157),
        to(#ffe5a3)
      );
      background: linear-gradient(270deg, #f9c157, #ffe5a3);
      -webkit-box-shadow: 0 -1px 2px 0 #d89157;
      box-shadow: 0 -1px 2px 0 #d89157;
      border-radius: 50%;
    }
    p.tips {
      padding-left: 16px;
      color: #999;
    }
    .infoImg {
      margin-top: 20px;
      width: 500px;
      height: 280px;
    }
    .appEwm_box {
      position: absolute;
      right: 32px;
      bottom: 16px;
      width: 103px;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333;
      line-height: 20px;
      .ewmImg {
        display: block;
        margin: 0 auto 8px;
        width: 78px;
        height: 78px;
        background: url(../static/images/htzx_appEwm@2x.png) no-repeat 50%;
        background-size: 86px;
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
}
</style>
