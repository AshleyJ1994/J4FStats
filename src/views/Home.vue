<template>
  <div class="home background-image" id="Home">
    <v-parallax
      height="950"
      :src="selectedHomeImage"
      id="home-image"
    >
      <v-layout fill-height align-center>
          <v-container>
            <v-row align="center" justify="center" class="white--text">
              <v-col cols="12">
                <div :class="{'display-4 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                  Just4Fun Stats
                </div>
<div :class="{'display-3 font-weight-bold': $vuetify.breakpoint.smAndUp, 'display-3 font-weight-bold': $vuetify.breakpoint.smAndDown}">
		
Here you will find all of your personal stats, including KDs, revives and much more! Down below are the server stats.
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
    </v-parallax>
    <v-container class="mt-5 dark black--background component-container" id="Servers">    
      <v-card :elevation="5" class="home-cards">
        <v-row align="center" justify="center">
          <v-container>
            <v-row align="left" justify="left">
              <v-col>
                <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                  Squad Servers
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-layout wrap>
            <v-flex justify-center class="mt-5">
              <v-layout wrap>
                <v-container>
                  <v-row align="left" justify="left">
                    <v-col>
                      <div :class="{'display-3 font-weight-bold': $vuetify.breakpoint.smAndUp, 'display-3 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                        Just4Fun currently hosts 4 Squad servers for our community. More will be coming throughout the year.<br/>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
                <template v-for="(server, i) in squadServersList">
                  <v-flex :key="i" xs12 sm6 md6 lg6 just class="marginInbetweenSmaller">
                    <Servers :server="server"/>
                  </v-flex>
                </template>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Servers from "@/components/Servers.vue";
//Json files

import squadServersListJson from "@/assets/json/squadServerInfo.json"
import mediaLinks from "@/assets/json/mediaLinks.json"

export default {
  name: "home",
  components: {
    Servers
  },
  data() {
    return {
      mediaLinks: mediaLinks,
      minecraftLink: mediaLinks.find(o=>{
        return o.name === "minecraft";
      }),
      squadLink: mediaLinks.find(o=>{
        return o.name === "squad";
      }),
      squadTrelloLink: mediaLinks.find(o=>{
        return o.name === "squadTrello";
      }),
      squadServersList: squadServersListJson,
      firstCarouselItems: [
      ],
      secondCarouselItems: [
      ],
      thirdCarouselItems: [
      ],
      selectedHomeImage: null,
      firstCarousel: null,
      secondCarousel: null,
      thirdCarousel: null,
    };
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
    fileNamesGetter(fileNames){   
      let homePageImage = [];
      let homePageImageJson = [];
      fileNames.keys().forEach(key => (homePageImage.push(fileNames(key))));
      homePageImage.forEach(image => {
        const addImage = {
          src: image
        }
        homePageImageJson.push(addImage)
      });
      return homePageImageJson;
    }
  },
  mounted() {
    
  },
  created() {
    let homeImageFolder = require.context('../assets/HomePageImages/', true);
    const homeImageFiles = this.fileNamesGetter(homeImageFolder);
    this.selectedHomeImage = this.randomItem(homeImageFiles).src;
    
    let carousel1ImagesFolder = require.context('../assets/Carousel1Images/', true);
    const carousel1Files = this.fileNamesGetter(carousel1ImagesFolder);
    this.firstCarousel = this.randomItem(carousel1Files).src;
    
    let carousel2ImagesFolder = require.context('../assets/Carousel2Images/', true);
    const carousel2Files = this.fileNamesGetter(carousel2ImagesFolder);
    this.secondCarousel = this.randomItem(carousel2Files).src;

    let carousel3ImagesFolder = require.context('../assets/Carousel3Images/', true);   
    const carousel3Files = this.fileNamesGetter(carousel3ImagesFolder);
    this.thirdCarousel = this.randomItem(carousel3Files).src;
  }
};
</script>

<style lang="css">
  #home-image .v-parallax__content {
    background: linear-gradient(45deg, rgba(100,100,100,.33), rgba(100,100,100,.7));
  }
  .background-image{
    background-image: url('~@/assets/escheresque_ste.png');
    background-repeat: repeat;
  }
  .component-container{
    margin-bottom:20px !important;
  }
  .home-cards{
    background:#222222 !important;
    padding:30px !important;
    border-radius: 10px !important;
  }
  .home-text{
    opacity: 0.75 !important; 
    margin-top:10px !important;
  }
  .paddingInbetween{
    padding:10px;
  }
  .marginInbetween{
    margin-top:15px;
  }
  .marginInbetweenSmaller{
    margin-top:10px;
  }
  .marginInbetweenBigger{
    margin-top:20px;
  }
</style>
