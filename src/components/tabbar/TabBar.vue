<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"tabbar"
}
</script>

<style>
.tab-bar{
  display:flex;
  position:fixed;
  bottom: 0px;
  left:0px;
  right:0px;

}



</style>