<template>
  <div class="container">
    <h1 @click="say()">{{ msg }}</h1>
    <hr />

    <h1>
      reactive函数
      <span @click="updateObj()">修改</span>
    </h1>
    <p>reactive函数 通常用来定义响应式对象数据</p>
    <ul>
      <li v-for="(value, key) in obj" :key="value">{{ key }}:{{ value }}</li>
    </ul>
    数组：{{ arr }}<br />
    深度数组：{{ obj.family.people }}

    <hr />
    <h1>
      toRef函数
      <span @click="updateName()">修改</span>
    </h1>
    <p>
      toRef函数 只修改响应对象中的某个值
      （注意：修改的某个值不能直接解构，解构出来的是个普通数据）toRef转换后把值包装成响应式数据对象，值再value里
    </p>
    只修改obj里的name属性：{{ obj.name }}

    <hr />
    <h1>toRefs函数<span @click="updateToRefs()">修改</span></h1>
    <p>
      转换响应式对象中的所有属性为单独响应式数据，对象成为普通对象。通常用于解构|展开reactive定义对象
    </p>
    姓名：{{ name }}，年龄：{{ age }}

    <hr />
    <h1>ref函数<span @click="updateClass()">修改</span></h1>
    <p>
      定义响应式数据，一般用于简单类型数据<br />明确知道需要的是响应式对象数据，那么这种情况下用reactive函数即可，其他情况都使用ref函数
    </p>
    班级：{{ className }}

    <hr />
    <h1>基本api01-实例运用</h1>
    <h3>1.获取鼠标移动坐标：</h3>
    鼠标x:{{ mouse.x }} 鼠标y:{{ mouse.y }}
    <h3>2.button计数 加1</h3>
    {{ count }} <button @click="numAdd()">数字累加</button>

    <hr />
    <h1>computed计算属性</h1>
    小写姓名：{{ lowercaseName }}&#12288;&#12288; 大写姓名：{{
      uppercaseName
    }}&#12288;&#12288;
    <h4>computed高级用法，支持双向绑定</h4>
    <input type="text" v-model="uppercaseName2" />

    <hr />
    <h1>ref获取DOM</h1>
    <div ref="getSingleDom">单个dom获取</div>
    <ul>
      <li
        v-for="(item, index) in 4"
        :key="index"
        :ref="(el) => (getEachDom[index] = el)"
      >
        {{ item }}
      </li>
    </ul>

    <hr />
    <h1>父传子&子传父</h1>
    父组件：{{ count }}<br />
    子组件：<hellowWord
      :count="count"
      @changeFatherCount="changeFatherCount"
      style="display: inline-block"
    />

    <hr />
    <h1>provide&inject 依赖注入</h1>
    父组件：{{ money }} <button @click="money = 1000">发红包</button><br />
    <son />

    <hr />
    <h1>v-model 魔法糖</h1>
    <p>vue2.0 <input :value="msg" @input="msg = $event" /></p>
    <p>vue3.0 <sons :modelValue="msg" @update:modelValue="msg = $event" /></p>
    <p>vue3.0 v-model写法： <sons v-model="msg" /></p>

    <hr />
    <h1>mixins 混入语法</h1>
    1.全局混入，查看app.vue文件里的sayHelloKitty方法

    <hr />
    <h1>vuex的用法</h1>
    <p>根模块state数据:{{ userName }}--{{ $store.state.userName }}</p>
    <p>根模块getters数据:{{ $store.getters["newName"] }}</p>
    <button @click="mutationsFn">修改store</button>
    <p>模块A的state:{{ $store.state.moduleA.userName }}</p>
    <p>
      模块A的getters:{{ $store.getters.newName }}
      <span
        >注意：默认的模块中，state区分模块，其他的getters mutations actions
        都在全局</span
      >
    </p>
    <p>模块B的state:{{ $store.state.moduleB.userName }}</p>
    <p>
      模块B的getters:{{ $store.getters["moduleB/newName"] }}
      <span>注意：带有命名空间的模块中，所有的属性都在模块中</span>
    </p>
  </div>
</template>

<script>
import hellowWord from "./components/studyApi/HelloWorld.vue";
import son from "./components/studyApi/son.vue";
import sons from "./components/studyApi/sons.vue";
import {
  onBeforeMount,
  onMounted,
  reactive,
  toRef,
  toRefs,
  ref,
  onUnmounted,
  computed,
  watch,
  nextTick,
  provide,
} from "vue";
import { useStore } from "vuex";
const useMose = () => {
  const mouse = reactive({ x: 0, y: 0 });
  const mouseMove = (e) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  };
  onMounted(() => {
    document.addEventListener("mousemove", mouseMove);
  });
  onUnmounted(() => {
    document.removeEventListener("mousemove", mouseMove);
  });
  return mouse;
};
export default {
  name: "App",
  //1. 再beforeCreate(组件实例创建之前)钩子执行前执行，组件实例创建前
  //2. 函数中不能使用this，===>undefined
  //3. 模板中使用的数据和函数，需要子setup中返回
  //4. vue0.3生命周期钩子函数 setup(创建实例前)  onBeforeMount(挂载Dom前) onMounted(挂载dom后) onBeforeUpdate(更新组件前) onUpdated(更新组件后) onBeforeUnmount(卸载销毁前) onUnmounted(卸载销毁后)
  //5. 父传子，子组件从 step中获取元素
  components: {
    hellowWord,
    son,
    sons,
  },
  setup() {
    console.log("setup", this);

    const msg = "hello vue3";

    const say = () => {
      alert("hello vue3");
    };

    const obj = reactive({
      name: "empress",
      age: 30,
      family: {
        people: ["father", "sister", "mother"],
        Num: 3,
      },
    });
    const arr = reactive([1, 2, 3, 4, 5]);

    const updateObj = () => {
      obj.name = "empressLi";
      obj.age = "10";
      arr.push(6);
      obj.family.people.push("bother");
    };

    const updateName = () => {
      const name = toRef(obj, "name");
      name.value = "toRefName";
    };

    const objToRefs = toRefs(obj);
    const updateToRefs = () => {
      objToRefs.name.value = "ToRefsName";
    };

    const className = ref("一年级三班");
    console.log(className);
    const updateClass = () => {
      className.value = "修改班级名称";
    };

    const mouse = useMose();

    const count = ref(0);
    const numAdd = () => {
      if (count.value > 10) return;
      count.value++;
    };

    const lowercaseName = ref("empresslilily");
    const uppercaseName = computed(() => {
      return lowercaseName.value.toUpperCase();
    });
    const uppercaseName2 = computed({
      get() {
        return lowercaseName.value.toUpperCase();
      },
      set(newVal) {
        lowercaseName.value = newVal.toLowerCase();
      },
    });

    //响应式简单属性的监听写法
    // watch(count,(nv,ov)=>{
    //   console.log('响应式简单属性的监听写法:',nv,ov)
    // })
    //响应式对象属性的监听写法（监听一个数组或对象时，需要先解构对象或者数组）
    // watch(()=>({...obj}),(nv,ov)=>{
    //   console.log('响应式对象属性的监听写法:',nv,ov)
    // })
    //监听多个属性
    // watch([count,()=>({...obj})],(nv,ov)=>{
    //   console.log(nv,ov)
    // })
    //深度监听
    watch(
      () => [...obj.family.people],
      (nv, ov) => {
        console.log(nv, ov);
      },
      {
        deep: true,
      }
    );

    //获取单个dom的方法
    const getSingleDom = ref(null);
    onMounted(() => {
      console.log(getSingleDom.value, 2222);
    });

    //获取循环dom的方法
    const getEachDom = ref([]);
    console.log(getEachDom, 3333);
    // const eachDomList = [];
    // const getEachDom = (el, index) => {
    //   eachDomList.push(el);
    // };
    nextTick(() => {
      console.log(getEachDom, 3333);
      //console.log(eachDomList, 3333);
    });

    //子传父
    const changeFatherCount = (val) => {
      count.value = 50;
    };

    //依赖注入
    const money = ref(100);
    provide("money", money);
    const saleMoney = (val) => {
      money.value = money.value - val;
    };
    provide("saleMoney", saleMoney);

    //vuex的用法
    const store = useStore();
    const userName = store.state.userName;
    // const userName = computed(()=>{
    //   return store.state.userName;
    // })
    //获取getters
    console.log(store.getters.newName);
    const mutationsFn = () => {
      //提交根模块mutations函数
      //store.commit("updateName");
      //调用根模块actions函数
      store.dispatch("updateName");
      //提交B模块的修改
      //store.commit("moduleB/updateName");
      //调用B模块actions函数
      //store.dispatch("moduleB/updateName");
    };

    onBeforeMount(() => {
      console.log("挂载Dom前", document.querySelector(".container"));
    });

    onBeforeMount(() => {
      console.log("挂载Dom前2", document.querySelector(".container"));
    });

    onMounted(() => {
      console.log("挂载Dom后", document.querySelector(".container"));
    });

    onMounted(() => {
      console.log("挂载Dom后2", document.querySelector(".container"));
    });

    return {
      msg,
      say,
      obj,
      arr,
      updateObj,
      updateName,
      ...objToRefs,
      updateToRefs,
      className,
      updateClass,
      mouse,
      count,
      numAdd,
      lowercaseName,
      uppercaseName,
      uppercaseName2,
      getSingleDom,
      getEachDom,
      changeFatherCount,
      money,
      userName,
      mutationsFn,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 30px;
  text-align: left;
}
h1 span {
  font-size: 14px;
  cursor: pointer;
  margin: 0 10px;
}
p span {
  font-size: 12px;
  margin: 0 10px;
  color: red;
}
</style>
