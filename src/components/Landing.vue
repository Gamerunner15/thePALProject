<template>
  <div class="main">
    <h1 class="info">
      Not sure what you're looking for?
      <br/>
      There's something for everyone!
    </h1>
    <div class="body">
      <div class="content-block">
        <div class="content-row">
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\woman-green-head.jpg" />
              <div class="tags">
                  <p class="tag">#Content Tag</p>
                  <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\man-red-background.jpg" />
              <div class="tags">
                  <p class="tag">#Content Tag</p>
                  <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\woman-in-crowd.jpg" />
              <div class="tags">
                  <p class="tag">#Content Tag</p>
                  <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\woman-smiling.jpg" />
              <div class="tags">
                  <p class="tag">#Content Tag</p>
                  <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\woman-pink-background.jpg" />
              <div class="tags">
                    <p class="tag">#Content Tag</p>
                    <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
        </div>
        <div class="content-row">
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\woman-in-crowd.jpg" />
              <div class="tags">
                  <p class="tag">#Content Tag</p>
                  <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\man-red-background.jpg" />
              <div class="tags">
                  <p class="tag">#Content Tag</p>
                  <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\woman-green-head.jpg" />
              <div class="tags">
                  <p class="tag">#Content Tag</p>
                  <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\woman-pink-background.jpg" />
              <div class="tags">
                  <p class="tag">#Content Tag</p>
                  <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
          <a href="/content">
            <div class="content-preview">
              <h2 class="title">Title</h2>
              <img src="..\assets\woman-smiling.jpg" />
            <div class="tags">
                  <p class="tag">#Content Tag</p>
                  <p class="tag">#Content Tag</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <h2 class="info">
      <a href="#">Sign Up</a> for an Experience Tailored for You!
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .info { 
    text-align: center;
  }
  .title {
    position: relative;
    text-align: center;
    color: white;
    width: 50%;
  }
  .body { 
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: auto;
  }
  .content-block {
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction:column;
    border: 5px inset black;
    max-width: 75%;
    min-width: 200px;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .content-row { 
    background-color: black;
  }
  .content-preview {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction:row;
    border: 5px solid black;
    border-radius: 6px;
    background-color: black;
    color: white;
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      z-index: 2;
    }
  }
  img { 
    height: 50px;
  }
</style>