<template>
  <div id="bigger-header">
    <header>
      <div id="left">
        <router-link to="/">
        <img src="..\assets\PAL_Logo.png" />
        </router-link>
        <router-link to="/">
        <h1>The Pan-African Library</h1>
        </router-link>
      </div>
      <div id="right">
        <h2>Search:</h2>
        <input type="text" />
        <div class="login-signup">
          <a><h2>Login / SignUp</h2>
          </a>
        </div>
        <i class="fa fa-user"></i>
      </div>
    </header>
    <div class="bar"></div>
    <div class="navigation">
      <div class="dropdown">
        <button class="dropbtn"><h1>Genres</h1></button>
        <div class="first-dropdown">
          <div v-for="genre in genres" :key="genre">
            <div @click="commitTag(genre)" class="region-button">
            <router-link to="/content">{{ genre }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn"><h1>Regions</h1></button>
        <div class="first-dropdown">
          <div v-for="region in locales" :key="region.name">
            <div @click="commitTag(region.name)" class="region-button">
              <router-link to="/content">{{ region.name }}</router-link>
            </div>
            <div class="all-countries">
              <div class="second-dropdown">
                  <a v-for="country in region.countries"
                :key="country.name" class="country-button" @click="commitTag(region.name)">{{ country.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar"></div>
  </div>
</template>

<script>
import FakeService from "@/services/FakeService.js";

export default {
  name: "bigger-header",
  data() {
    return {
      locales: [],
      genres: [],
    };
  },
  methods: {
    commitTag(newTag){
      this.$store.commit("updateTag", newTag);
      this.$router.push('/content');
    }
  },
  created() {
    this.locales = FakeService.getLocales();
    this.genres = FakeService.getGenres();
  },
};
</script>

<style lang="scss">
#bigger-header {
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
      font-size: 50px;
    }
    .login-signup {
      cursor: pointer;
      border: 2px solid white;
      border-radius: 6px;
      margin-left: 20px;
      margin-right: 20px;
      h2{
        padding: 10px 20px 10px 20px;
      }
    }
  }
  .bar {
    height: 2px;
    width: 100%;
    background-color: white;
  }

  .navigation {
    height: 100px;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  //Dopdown CSS
  .dropbtn {
    background-color: black;
    color: white;
    border: none;
    font-size: 30px;
    cursor: pointer;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown:hover {
    .first-dropdown {
      display: block;
    }
    .region-button {
      text-align: center;
      font-family: Neuton;
      font-size: 40px;
      padding: 10px 10px 10px 10px;
    }
    .country-button {
      text-align: center;
      font-family: Neuton;
      font-size: 25px;
      padding: 10px 10px 10px 10px;
      cursor: pointer;
    }
  }
  .region-button:hover {
    background-color: rgb(119, 119, 119);
    cursor: pointer;
  }
  .country-button:hover {
    background-color: rgb(119, 119, 119);
    cursor: pointer;
  }
  .first-dropdown {
    display: none;
    position: absolute;
    background-color: black;
    color: white;
  }
  .second-dropdown {
    position: absolute;
    background-color: black;
    color: white;
    margin-left: 258px;
    margin-top: -70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .all-countries {
    display: none;
  }
  .all-countries:hover {
    display: block;
  }

  .region-button:hover + .all-countries {
    display: block;
  }
}
</style>