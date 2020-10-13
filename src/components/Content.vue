<template>
  <div class="main">
    <div class="body">
      <div class="content-box">
        <div class="content-side">
          <a href="#">#tradition:Marriage</a>, <a href="#">#apparel:Traditional</a>, <a href="#">#apparel:Modern</a>, <a href="#">#country:Uganda</a>, <a href="#">more...</a>
        </div>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oMhJGmOVTEI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <div class="info-block">
          <img width="200" height="200" src="https://upload.wikimedia.org/wikipedia/en/e/e1/Ohio_State_University_seal.svg">
          <div class="button"></div>
          <div class="info">
            <p><b>User:</b> OSU</p>
            <p><b>Focus:</b><a href="#"> #country:Uganda</a></p> 
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="content-side">
          <a href="#">#tradition:Marriage</a>, <a href="#">#apparel:Traditional</a>, <a href="#">#apparel:Modern</a>, <a href="#">#country:Uganda</a>, <a href="#">more...</a>
        </div>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/a862oB-Vae8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="info-block">
          <img width="200" height="200" src="https://upload.wikimedia.org/wikipedia/en/e/e1/Ohio_State_University_seal.svg">
          <div class="button"></div>
          <div class="info">
            <p><b>User:</b> OSU</p>
            <p><b>Focus:</b><a href="#"> #country:Uganda</a></p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .body { 
    display: block;
    width: 100%;
    margin: auto;
    height: 100%;
    background-color: lightgray;
  }
  .content-box {
    width: 50%;
    min-width: 560px;
    margin: auto;
    a:link {
      color: black;
    }
    a:hover {
      color: lightgray;
    }
    .content-side {
      border: solid 1px;
    }
    #player { 
      display: inline-block;
    }
    .info-block {
      display: inline-block;
      border: solid 1px;
      width: 50%;
      min-width: 560px;
      margin: auto;
      img {
        display: inline-block;
        margin: auto;
      }
    }
  }
</style>