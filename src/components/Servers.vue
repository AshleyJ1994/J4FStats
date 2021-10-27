<template>
<v-hover v-slot:default="{ hover }">
  <v-card target="_blank" :elevation="hover ? 10 : 5" class="serverCard" max-width="950px" >
    <v-card-text>
      <v-row align="left" justify="left">
        <v-col>
          <div class="title mt-2 titleColour">{{server.name}}</div>
          <div :class="{ preWrapped: containBreaks(server.description)}">{{server.description}}</div>
          <div v-if="server.mapRotationLink != null">
          </div>
          <div class="title mt-2 titleColour">Battmetrics Stats</div>
        </v-col>
      </v-row>
      <v-layout>
        <template>
          <div v-if="$vuetify.breakpoint.mdAndDown">
            <a target="_blank" :href="'https://www.battlemetrics.com/servers/squad/'+ server.battlemetricId"><img :src="'https://cdn.battlemetrics.com/b/standardVertical/' + server.battlemetricId + '.png?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%23222222&chart=players%3A24H&chartColor=%23FF0700&maxPlayersHeight=300'" /></a>
          </div>
          <div v-else></div>
          <div v-if="$vuetify.breakpoint.lgAndUp">
            <a target="_blank" :href="'https://www.battlemetrics.com/servers/squad/'+ server.battlemetricId"><img :src="'https://cdn.battlemetrics.com/b/horizontal500x80px/' + server.battlemetricId + '.png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700'" /></a>
          </div>
          <div v-else></div>
        </template>
      </v-layout>
    </v-card-text>
     <div class="serverNothingCard"></div>
    <div class="serverInfoCard">
      <v-expansion-panels class="serverExpantionCard" >
        <v-expansion-panel>
          <v-expansion-panel-header class="titleColour">Active Players</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-flex>
              <v-card class="card-container rule-cards">
                <v-card-text class="px-3" :class="{'smaller-display': $vuetify.breakpoint.smAndDown}">
                  <v-card-title>
                    <h5 class="titleColour">{{players.Name}}</h5>
                  </v-card-title>
                  <v-card-subtitle>
                    <p>{{players.Time}}</p>
                  </v-card-subtitle>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="serverNothingCard"></div>
    <div class="serverInfoCard">
      <v-expansion-panels class="serverExpantionCard" v-if="server.rules != undefined">
        <v-expansion-panel>
          <v-expansion-panel-header class="titleColour">Rules</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-flex v-for="(rule, index) in server.rules" :key="index">
              <v-card class="card-container rule-cards">
                <v-card-text class="px-4" :class="{'larger-display': $vuetify.breakpoint.smAndDown}">
                  <v-card-title>
                    <h5 class="titleColour">{{index+1}}: {{rule.title}}</h5>
                  </v-card-title>
                  <v-card-subtitle v-if="rule.description != null">
                    <p>{{rule.description}}</p>
                  </v-card-subtitle>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</v-hover>
</template>

<script type="application/javascript">
  window.addEventListener("message", function (e) {
    if (e.data.uid && e.data.type === "sizeUpdate") {
      var i = document.querySelector('iframe[name="' + e.data.uid + '"]');
      i.style.width = e.data.payload.width;
      i.style.height = e.data.payload.height;
    }
  });
</script>
<script>
export default {
  props: {
    server: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    screenSize(){
      return vuetify.breakpoint.smAndDown;
    },
    containBreaks(descriptions){
      return descriptions.includes('\n');
    }
  }
};
</script>
<script>
      import players from "@/assets/json/players.json"
      export default{
          data(){
              return{
                  players: players
              }
          }
      }
</script>

<style lang="scss" scoped>
.titleColour {
  color: #e6e6e6;
}
.v-card__text, .v-card__title {
  word-break: normal !important;
}
.preWrapped{
  white-space: pre-wrap;
}
.larger-display{
  padding: 5px !important;
}
.rule-cards{
  margin:7px !important;
}
 ::v-deep.v-expansion-panel{
  background:#262626 !important;
}
.serverCard{
  border-radius: 20px; 
  margin:5px;
  padding:5px
}
.serverInfoCard{
  margin:3px
}
.serverExpantionCard{
  border-radius: 10px;
}
.serverNothingCard{
  padding:15px;
}
</style>
