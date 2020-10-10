<template>
  <div>
    <div class="banner">
      <img src="..\assets\cloths.jpg" />
    </div>
    <h1 class="topic-title">Cultural Topic</h1>
    <div class="content-row">
      <i class="fa fa-angle-left"></i>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-green-head.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\man-red-background.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-in-crowd.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-smiling.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-pink-background.jpg" />
       <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <i class="fa fa-angle-right"></i>
    </div>
    <h1 class="topic-title">Cultural Topic</h1>
    <div class="content-row">
      <i class="fa fa-angle-left"></i>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-green-head.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\man-red-background.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-in-crowd.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-smiling.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-pink-background.jpg" />
       <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <i class="fa fa-angle-right"></i>
    </div>
    <h1 class="topic-title">Cultural Topic</h1>
    <div class="content-row">
      <i class="fa fa-angle-left"></i>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-green-head.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\man-red-background.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-in-crowd.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-smiling.jpg" />
        <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Title</h2>
        <img src="..\assets\woman-pink-background.jpg" />
       <div class="tags">
            <p class="tag">#Content Tag</p>
            <p class="tag">#Content Tag</p>
        </div>
      </div>
      <i class="fa fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.banner {
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
}

.content-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 40px;
  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
  }
  i {
    font-size: 50px;
  }
  i:hover{
       transform: scale(1.5);
       cursor: pointer;
  }
}
.topic-title {
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  border: 5px solid black;
  border-radius: 6px;
}

.content-preview {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 5px solid black;
    border-radius: 6px;
    background-color: black;
    color: white;
    transition: all .2s ease-in-out;
}
.content-preview:hover {
     transform: scale(1.5);
     cursor: pointer;
}
.tags {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
</style>