<template>
  <div>
    <div class="banner">
      <img src="..\assets\cloths.jpg" />
    </div>
    <h1 class="topic-title">#Topics</h1>
    <div class="content-row">
      <i class="fa fa-angle-left"></i>
      <div class="content-preview">
        <h2>Borborbor Rituals</h2>
        <img src="..\assets\woman-green-head.jpg" />
        <div class="tags">
          <p class="tag">#NorthAfrica</p>
          <p class="tag">#Borborbor</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Ekombi Families</h2>
        <img src="..\assets\man-red-background.jpg" />
        <div class="tags">
          <p class="tag">#SouthAfrica</p>
          <p class="tag">#Ekombi</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Bambara Foods</h2>
        <img src="..\assets\woman-in-crowd.jpg" />
        <div class="tags">
          <p class="tag">#WestAfrica</p>
          <p class="tag">#Bambara</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Kente Clothing</h2>
        <img src="..\assets\woman-smiling.jpg" />
        <div class="tags">
          <p class="tag">#SouthAmerica</p>
          <p class="tag">#Kente</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Lukonzo in Heart</h2>
        <img src="..\assets\woman-pink-background.jpg" />
        <div class="tags">
          <p class="tag">#Caribbean</p>
          <p class="tag">#Lukonzo</p>
        </div>
      </div>
      <i class="fa fa-angle-right"></i>
    </div>
    <h1 class="topic-title">Genres</h1>
    <div class="content-row">
      <i class="fa fa-angle-left"></i>
      <div class="content-preview">
        <h2>Xhosa</h2>
        <img src="..\assets\woman-green-head.jpg" />
        <div class="tags">
          <p class="tag">Folktale</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Ananse</h2>
        <img src="..\assets\man-red-background.jpg" />
        <div class="tags">
          <p class="tag">History</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Brer Rabbit</h2>
        <img src="..\assets\woman-in-crowd.jpg" />
        <div class="tags">
          <p class="tag">Comedy</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Agbadza</h2>
        <img src="..\assets\woman-smiling.jpg" />
        <div class="tags">
          <p class="tag">Tradition</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Swathi on Guard</h2>
        <img src="..\assets\woman-pink-background.jpg" />
        <div class="tags">
          <p class="tag">Drama</p>
        </div>
      </div>
      <i class="fa fa-angle-right"></i>
    </div>
    <h1 class="topic-title">For You</h1>
    <div class="content-row">
      <i class="fa fa-angle-left"></i>
      <div class="content-preview">

        <img src="..\assets\woman-green-head.jpg" />
        <div class="tags"></div>
      </div>
      <div class="content-preview">

        <img src="..\assets\man-red-background.jpg" />
        <div class="tags"></div>
      </div>
      <div class="content-preview">

        <img src="..\assets\woman-in-crowd.jpg" />
        <div class="tags"></div>
      </div>
      <div class="content-preview">
    
        <img src="..\assets\woman-smiling.jpg" />
        <div class="tags"></div>
      </div>
      <div class="content-preview">
    
        <img src="..\assets\woman-pink-background.jpg" />
        <div class="tags"></div>
      </div>
      <i class="fa fa-angle-right"></i>
    </div>
    <h1 class="topic-title">#Hashtags</h1>
    <div class="content-row tag-row">
      <i class="fa fa-angle-left"></i>
      <div class="content-preview">
        <div class="tags" style="background-color: black;">
          <p class="tag">#SouthAfrica</p>
        </div>
      </div>
      <div class="content-preview">
        <div class="tags" style="background-color: red;">
          <p class="tag">#NorthAfrica</p>
        </div>
      </div>
      <div class="content-preview">
        <div class="tags"  style="background-color: orange;">
          <p class="tag">#Yoruba</p>
        </div>
      </div>
      <div class="content-preview">
        <div class="tags"  style="background-color: #007BA7;">
          <p class="tag">#Khasa</p>
        </div>
      </div>
      <div class="content-preview"  style="background-color: salmon;">
        <div class="tags">
          <p class="tag">#Ukara</p>
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
  i:hover {
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
  transition: all 0.2s ease-in-out;
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

.tag-row {
  .tags {
    width: 250px;
    height: 150px;
    p {
      font-size: 40px;
    }
  }
}
</style>