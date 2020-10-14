<template>
  <div>
    <div class="banner">
      <img src="..\assets\cloths.jpg" />
    </div>
    <h1 class="topic-title">#Topics</h1>
    <div class="content-row">
      <i class="fa fa-angle-left"></i>
      <div class="content-preview">
        <h2>The Singing Tortoise</h2>
        <img src="..\assets\SingingTortoise.png" />
        <div class="tags">
          <p class="tag">#Folktale</p>
          <p class="tag">#Ghana</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Ananse's Pot of Wisdom</h2>
        <img src="..\assets\AnansesPot.png" />
        <div class="tags">
          <p class="tag">#Ghana</p>
          <p class="tag">#Ekombi</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Tortoise and the Magic Drum</h2>
        <img src="..\assets\TortoiseandMagicDrum.png" />
        <div class="tags">
          <p class="tag">#WestAfrica</p>
          <p class="tag">#Nigeria</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Tan Baby and the Hen</h2>
        <img src="..\assets\TanBaby.png" />
        <div class="tags">
          <p class="tag">#Caribbean</p>
          <p class="tag">#Trinidad</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Tortoise Takes Revenge</h2>
        <img src="..\assets\TortoiseTakesRevenge.png" />
        <div class="tags">
          <p class="tag">#Nigeria</p>
          <p class="tag">#Folktale</p>
        </div>
      </div>
      <i class="fa fa-angle-right"></i>
    </div>
    <h1 class="topic-title">Folktales</h1>
    <div class="content-row">
      <i class="fa fa-angle-left"></i>
      <div class="content-preview">
        <h2>The Legend of Gang Gang Sara</h2>
        <img src="..\assets\GangGangSara.png" />
        <div class="tags">
          <p class="tag">#Legend</p>
          <p class="tag">#Trinidad</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Buki Gets a Beating</h2>
        <img src="..\assets\BukiGetsaBeating.png" />
        <div class="tags">
          <p class="tag">#Folktale</p>
          <p class="tag">#Senegal</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Brer Rabbit and the Tar Baby</h2>
        <img src="..\assets\BrerRabbitTarBaby.png" />
        <div class="tags">
          <p class="tag">#Folktale</p>
          <p class="tag">#America</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Marilny's Douen</h2>
        <img src="..\assets\MarilnysDouen.png" />
        <div class="tags">
          <p class="tag">#Caribbean</p>
          <p class="tag">#Tobago</p>
        </div>
      </div>
      <div class="content-preview">
        <h2>Nuh Trouble Trouble ...</h2>
        <img src="..\assets\NuhTroubleTrouble.png" />
        <div class="tags">
          <p @click="commitTag('Caribbean')" class="tag">#Caribbean</p>
          <p class="tag">#Trinidad</p>
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
        <div class="tags" @click="commitTag('SouthAfrica')" style="background-color: black;">
          <p class="tag">#SouthAfrica</p>
        </div>
      </div>
      <div class="content-preview">
        <div class="tags" @click="commitTag('NorthAfrica')" style="background-color: red;">
          <p class="tag">#NorthAfrica</p>
        </div>
      </div>
      <div class="content-preview">
        <div class="tags" @click="commitTag('Yoruba')"  style="background-color: orange;">
          <p class="tag">#Yoruba</p>
        </div>
      </div>
      <div class="content-preview">
        <div class="tags" @click="commitTag('Khasa')"  style="background-color: #007BA7;">
          <p class="tag">#Khasa</p>
        </div>
      </div>
      <div class="content-preview"  style="background-color: salmon;">
        <div class="tags">
          <a @click="commitTag('Ukara')"><p class="tag">#Ukara</p></a>
        </div>
      </div>
      <i class="fa fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-body',
  methods: {
    commitTag(newTag){
      this.$store.commit("updateTag", newTag);
      this.$router.push('content');
    }
  },
};
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
    max-width: 300px;
    height: 350px;
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