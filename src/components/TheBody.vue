<template>
  <div>
      <div class="banner">
          <img src="..\assets\350x150.png">
      </div>
      <h1>Cultural Topic</h1>
      <div class="content-row">
          <i class="fa fa-angle-left"></i>
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <i class="fa fa-angle-right"></i>
      </div>
      <h1>Cultural Topic</h1>
      <div class="content-row">
          <i class="fa fa-angle-left"></i>
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <i class="fa fa-angle-right"></i>
      </div>
      <h1>Cultural Topic</h1>
      <div class="content-row">
          <i class="fa fa-angle-left"></i>
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <img src="..\assets\350x150.png">
          <i class="fa fa-angle-right"></i>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.banner {
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
}

.content-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    img {
        width: 200px;
        height: 300px;
        object-fit: cover;
    }
    i {
        font-size: 50px;
    }
}
</style>