<template>
  <div id="design-main-outer">
    <h1>Collections</h1>
    <div class="flex">
      <div  class="title-sec">
         <h2>Title</h2>
        <p>Description</p>
      </div>

      <div>
        <div
          class="flex-div"
          v-for="item in array"
          v-bind:key="item.id"
          @click="item.value = 100"
          
        >
          <div class="hey"  v-if="item.value===100" :style="{backgroundColor:backgroundColor}" > {{ item.value }} </div>
          <div class="hey"  v-else > {{ item.value }} </div>
         
        </div>
        
      </div>
      <!-- <div class="blocks-container">
        <div class="blocks">
            <div class="inner-div innerdiv1" @click="initialData = 100"> {{initialData}} </div>
            <div class="inner-div innerdiv2" @click="initialData2 = 100"> {{initialData2}} </div>
           
        </div>
        <div class="blocks">
            <div class="inner-div innerdiv3" @click="initialData3 = 100"> {{initialData3}} </div>
            <div class="inner-div innerdiv4" @click="initialData4 = 100"> {{initialData4}} </div>
            
        </div>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            backgroundColor : "purple"
        }
    },
   
  computed: {
    array() {
      return this.$store.state.array;
    },
  },

  // data() {
  //     return {

  //         initialData : 0,
  //         initialData2 : 0,
  //         initialData3 : 0,
  //         initialData4 : 0,
  //     }
  // },
};
</script>

<style lang="scss" scoped>

.flex {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.title-sec {
  margin-right: 12em;
  margin-top: 2em;
}

.hey {
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: grey;
  border: greenyellow 1px solid;
  color: white;
  font-weight: bold;
  margin: 4px;
}
</style>