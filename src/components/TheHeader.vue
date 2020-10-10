<template>
  <div>
    <header>
      <div id="left">
        <img src="..\assets\PAL_Logo.png" />
        <h1>The Pan-African Library</h1>
      </div>
      <div id="right">
        <h2>Search</h2>
        <input type="text" />
        <i class="fa fa-user"></i>
      </div>
    </header>
    <div class="bar"></div>
    <div class="navigation">
      <div class="dropdown">
        <button class="dropbtn">Categories</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Categories</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Categories</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
    <div class="bar"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 75px;
  background-color: black;
  color: white;
  img {
    width: 75px;
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
  i {
    padding-right: 40px;
    padding-left: 40px;
    font-size: 50px;
  }
}
.bar {
  height: 2px;
  width: 100%;
  background-color: white;
}

.navigation {
  height: 25px;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

//Stolen CSS 
.dropbtn {
  background-color: black;
  color: white;
  border: none;
  font-family: Neuton;
  font-size: 18px;
  min-width: 100px;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  color: white;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}


.dropdown-content a:hover {background-color: rgb(119, 119, 119);}


.dropdown:hover .dropdown-content {display: block;}


.dropdown:hover .dropbtn {background-color:  rgb(119, 119, 119);}
</style>