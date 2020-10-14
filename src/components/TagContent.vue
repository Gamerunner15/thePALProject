<template>
  <div>
      <div class="tag-header">
        <h1>#{{tag}}</h1>
      </div>
      <h1 class="topic-title">Folktales</h1>
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
    <h1 class="topic-title">Food</h1>
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
    <h1 class="topic-title">Dance</h1>
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
export default {
    name: 'tag-content',
    computed: {
      tag() {
        return this.$store.state.tag;
      }
    }

}
</script>

<style>
.tag-header {
  margin: 10px 20px 20px 20px;
}
</style>