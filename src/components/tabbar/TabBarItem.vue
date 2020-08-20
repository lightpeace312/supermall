<template>
  <div class="tab-bar-item" @click="visitLink">
    <i :class="['fa',iconClass,'tab-bar-item-icon']"></i>
    <span class="tab-bar-item-label">{{label}}</span>
  </div>
</template>
<script>
export default {
  name: "tabbaritem",
  props: ["iconClass", "label", "link"],
  methods: {
    visitLink() {
      if(this.$route.path != this.link){
        this.$router.push(this.link)
      }
    }
  }
};
</script>

<style scoped>
.tab-bar-item-icon{
  margin-bottom:5px;
}

.tab-bar-item {
  flex: 1;
  height: 49px;
  /* text-align: center; */
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eee;
}
/* x轴  居中*/
/* y轴  居中*/
</style>
