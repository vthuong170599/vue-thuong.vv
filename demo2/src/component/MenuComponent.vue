<template>
   <div class="col-xl-3">
        <div class="list-group">
        <button @click="setSelectedComponent(1)" class="list-group-item list-group-item-action active" >main 1</button>
        <button @click="setSelectedComponent(2)" class="list-group-item list-group-item-action">main 2</button>
        <a href="#" class="list-group-item list-group-item-action disabled">ajsdg</a>
    </div>
   </div>
</template>
<script>
import Main2 from './Main2Component';
import Main1 from './MainComponent';
export default {
    data() {
        return {
            selectedComponent: Main1,
            link:"",
        }
    },

    components: {
        Main2,
        Main1
    },
    methods: {
         setSelectedComponent(value){
            this.$emit('swapComponent',value);
        }
    },
}
</script>
<style scoped>

</style>