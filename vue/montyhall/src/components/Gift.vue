<template>
  <div class="gift">
      <div class="gift-tie-1"></div>
      <div class="gift-tie-2"></div>
      <div class="gift-top"></div>
      <div class="gift-body"></div>
  </div>
</template>

<script>
export default {
    name: 'Gift'
}
</script>

<style>
.gift {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}

.gift-top {
    width: 100px;
    height: 25px;
    background-color: #be457a;
}

.gift-body {
    width: 90px;
    height: 60px;
    background-color: #a32a89;
}

.gift-tie-1 {
    position: absolute;
    width: 10px;
    height: 85px;
    background-color: #2C3E50;
}

.gift-tie-2 {
    position: absolute;
    top: 40px;
    width: 90px;
    height: 10px;
    background-color: #2C3E50;
}
</style>