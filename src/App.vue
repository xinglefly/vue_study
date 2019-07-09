<template>
  <div id="app">
    <app-header></app-header>
    <div class="option" v-show="this.$store.state.login">
      <p class="current">当前用户： {{$store.getters.currentName}} {{name}}</p>
      <p class="exited" @click="exit">退出</p>
       
    </div>
   
    <div class="test">
      <!-- jjjj{{parentCount}}
      {{count}}
      <p>{{countAlias}}</p>
      <p>{{countPlusLocalState}}</p>-->
    </div>

    <SlotDemo>
      <p>default slot</p>
      <p slot="title">title slot1</p>
      <p slot="title">title slot2</p>
      <p slot="item" slot-scope="props">item slot-scope {{ props }}</p>
    </SlotDemo>

    <router-link class="link" to="/account">
      <label v-show="!$store.getters.loginStatus">账户管理</label>
    </router-link>
    <router-link class="link" to="/goodlist">
      <label v-show="!$store.getters.loginStatus">商品列表</label>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/Header"
import Slot from "./components/Slot"
// import { mapState } from 'vuex'
import EventBus from './components/EventBus'

export default {
  name: 'app',
  data() {
    return {
      localCount: 5,
      name: ''
    };
  },
  methods: {
    exit() {
      this.$store.commit('exit');
      this.$router.push({ path: '/account' });
    }
  },
  components: {
    'app-header': header,
    SlotDemo: Slot,
  },
  beforeCreate() {
    console.log('parent beforeCreate')
  },
  created() {
    console.log('parent Created')
  },
  beforeMount() {
    console.log('parent beforeMount')
  },
  mounted() {
    console.log('parent mounted')
    EventBus.$on('LOGIN', msg => {
      console.log('mounted', msg)
      this.name = msg
    })
  },
  beforeUpdate() {

  },
  //最基本使用
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // }
  //mapState使用
  // computed: mapState({
  //   count: state => state.count,
  //   countAlias: 'count',
  //   countPlusLocalState(state){
  //     return state.count + this.localCount
  //   }
  // })
  //计算属性名称和state下节点名称相同
  // computed:mapState([
  //   'count'
  // ])
  //使用将多个对象合并到一起
  computed: {
    
  }
};
</script>


<style lang="scss" scoped>
$primary-color: blue;
$edge: 10px;
$font: 20px;

#app {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.link {
  padding-top: 10px;
  margin-left: 20px;
  font-size: 20px;
}

.option,
.current,
.exited {
  margin: 0;
  padding: 0;
}

.option {
  display: flex;
  justify-content: space-between;
  .current {
    font-size: $font;
    padding-left: $edge;
    padding-top: $edge;
    color: $primary-color;
  }
  .exited {
    font: $font;
    padding-right: $edge;
    padding-top: $edge;
    color: $primary-color;
  }
}

.test {
  display: none;
}
</style>
