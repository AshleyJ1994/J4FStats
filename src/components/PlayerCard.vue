<template>
<v-hover v-slot:default="{ hover }">
  <v-card target="_blank" :elevation="hover ? 10 : 5" class="ruleCardWrap">
    <v-card-text>
      <v-row align="left" justify="left">
        <v-col>
          <div class="title mt-2 titleColour">{{server.name}}</div>
          <div :class="{ preWrapped: containBreaks(server.description)}">{{server.description}}</div>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="nothingPannel"></div>
    <div class="expantionPannelsDivs">
      <v-expansion-panels class="expantionPannels" v-if="Player.Name != undefined">
        <v-expansion-panel>
          <v-expansion-panel-header class="titleColour">Active Players</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-flex v-for="(Name, index) in players.Name" :key="index">
              <v-card class="card-container rule-cards">
                <v-card-text class="px-4" :class="{'larger-display': $vuetify.breakpoint.smAndDown}">
                  <v-card-title>
                    <h5 class="titleColour">{{index+1}}: {{Player.name}}</h5>
                  </v-card-title>
                  <v-card-subtitle v-if="rule.description != null">
                    <p>{{Player.Time}}</p>
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
    containBreaks(descriptions){
      return descriptions.includes('\n');
    }
  }
};
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
.ruleCardWrap{
  border-radius: 20px !important; 
  margin:5px;padding:5px !important;
}
.expantionPannels{
  border-radius: 10px;
}
.expantionPannelsDivs{
  margin:3px;
}
.nothingPannel{
  padding:15px;
}
</style>