<template>
  <div>
      <header>
          <div id="left">
              <i class="fa fa-bars"></i>
              <h1>The Pan-African Library</h1>
          </div>
          <div id="right">
              <h2>Search</h2>
              <input type="text" />
              <i class="fa fa-user"></i>
          </div>
      </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
    background-color: black;
    color: white;
    i {
        padding-right: 20px;
        padding-left: 20px;
    }
}
#left {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
#right {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    h2 {
        padding-right: 20px;
    }
}
</style>