<template>
  <div id="app">
    <h1>filter - mixins</h1>
    <p>{{ text | toLowerCase | toUpperCase }}</p>
    <div class="col-md-6">
      <input type="text" class="form-control mb-md-3" v-model="filterProduct" />
      <div class="card">
        <div class="card-body">
          <ul>
            <li v-for="pro in filterProducts" :key="pro">
              {{ pro }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "hello",
      product: ["samsung", "iphone", "HTC", "Nokia", "Noway"],
      filterProduct: "",
    };
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    },
  },
  computed: {
    filterProducts(){
      // console.log('123');
      return this.product.filter(pro=>{
        return pro.match(this.filterProduct);
      })
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
