<template>
  <div class="index_category fl">
    <ul class="index_category_list">
      <li
        v-for="(item, index) in categoryList"
        :key="item.cateKey"
        @mouseenter="categoryShow(item, index)"
        @mouseleave="cateKey = null"
        :class="item.cateKey === cateKey ? 'nav_active' : ''"
      >
        <a href="">{{ item.name }}</a>
      </li>
    </ul>
    <div class="index_category_con" v-if="cateKey" @mouseleave="cateKey = null">
      <article class="icc_firstMenu">
        <a href="" v-for="(item, index) in curCategory[cateKey]" :key="index">{{
          item.title
        }}</a>
      </article>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { findCategoryClassify } from "@/api/home.js";
const store = useStore();
store.dispatch("category/getList");

const categoryList = computed(() => {
  const list = store.state.category.list.map((item) => {
    return {
      name: item.name,
      cateKey: item.cateKey,
      cateId: item.cateId,
    };
  });
  return list;
});

let cateKey = ref(null);
let curCategory = ref({});

const categoryShow = (item, index) => {
  cateKey.value = item.cateKey;
  if (!curCategory.value.hasOwnProperty(item.cateKey)) {
    findCategoryClassify({
      categoryId: item.cateId && item.cateId.join(","),
    }).then((res) => {
      curCategory.value[item.cateKey] = res.data;
    });
  }
};
</script>

<style scoped lang="less">
.index_category {
  position: relative;
  padding: 10px;
  width: 172px;
  height: 340px;
  background: #484c59;
  border-radius: 8px 0px 0px 8px;
  box-sizing: border-box;

  .index_category_list {
    li {
      position: relative;
      padding-left: 10px;
      color: #fff;
      height: 40px;
      line-height: 40px;

      &:after {
        position: absolute;
        right: 10px;
        top: 16px;
        content: "";
        width: 0;
        height: 0;
        border-top: 4px solid transparent;
        border-left: 5px solid #7f828b;
        border-bottom: 4px solid transparent;
        overflow: hidden;
      }

      a {
        display: block;
        color: #fff;
      }

      &:hover,
      &.nav_active {
        background: #ff4e45;
        border-radius: 4px;
        cursor: pointer;

        &:after {
          border-left-color: #fff;
        }
      }
    }
  }

  .index_category_con {
    position: absolute;
    left: 172px;
    top: 0;
    z-index: 11;

    article {
      color: #fff;
    }

    .icc_firstMenu {
      padding: 16px;
      min-width: 256px;
      height: 340px;
      background: #36383f;
      border-radius: 0px 8px 8px 0px;
      box-sizing: border-box;
      font-size: 12px;
      color: #fff;
      line-height: 12px;

      a {
        position: relative;
        padding-right: 5px;
        margin-right: 5px;
        margin-bottom: 16px;
        display: inline-block;
        vertical-align: top;
        color: #fff;
        &::after {
          position: absolute;
          right: 0;
          top: 2px;
          content: "";
          width: 1px;
          height: 10px;
          overflow: hidden;
          background: #87898d;
        }

        &:hover {
          text-decoration: underline;
          color: #ff4e45;
        }
      }
    }

    .icc_secondMenu {
      padding: 16px;
      min-width: 256px;
      height: 340px;
      background: #36383f;
      border-radius: 0px 8px 8px 0px;
      box-sizing: border-box;

      ul {
        li {
          margin-bottom: 15px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          line-height: 12px;

          &:last-child {
            padding-bottom: 0;
          }

          a {
            color: #fff;
            &:hover {
              text-decoration: underline;
              color: #ff4e45;
            }
          }

          label {
            flex-shrink: 0;
            width: 70px;
            padding-right: 14px;
            line-height: 16px;
            text-align: right;
            white-space: nowrap;
          }

          p {
            font-size: 12px;
            color: #fff;
            line-height: 16px;

            a {
              position: relative;
              padding-right: 5px;
              margin-right: 5px;
              display: inline-block;
              vertical-align: top;
              white-space: nowrap;
              &::after {
                position: absolute;
                right: 0;
                top: 3px;
                content: "";
                width: 1px;
                height: 10px;
                overflow: hidden;
                background: #87898d;
              }
              &:last-child:after {
                background: none;
              }
            }
          }
        }
      }

      &.teacher p a {
        margin-bottom: 10px;
      }
    }
  }
}
</style>