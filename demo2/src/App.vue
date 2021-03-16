<template>
  <div id="app">
    <HeaderComponent/>
    <BannerComponent/>
    <div class="container-fluid">
      <div class="row">
      <Menu @swapComponent="setSelectedComponent"/>
      <main-component v-if="selectedComponent === 1" />
      <main2 v-if="selectedComponent === 2" />
    </div>
    </div>
    <button @click="swapComponent()">click</button>
  </div>
</template>

<script>
import HeaderComponent from './component/HeaderComponent';
import BannerComponent from './component/BannerComponent';
import Menu from './component/MenuComponent';
import MainComponent from './component/MainComponent';
import Main2 from './component/Main2Component';
export default {
  name: 'app',
  data () {
    return {
      selectedComponent: 0
    }
  },
  components:{
    HeaderComponent,
    BannerComponent,
    Menu,
    MainComponent,
    Main2
  },
  methods: {
    swapComponent(){
      if(this.selectedComponent === Main2){
        this.selectedComponent = MainComponent;
      }else{
        this.selectedComponent = Main2;
      }
    },
    setSelectedComponent(value) {
      this.selectedComponent = value
    }
  }
}
</script>

<style>

</style>
