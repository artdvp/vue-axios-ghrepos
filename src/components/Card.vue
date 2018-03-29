<template lang="html">
  <div class="card gitcard">
   <div class="card-content">
     <div class="media">
       <div class="media-center ">
           <a :href="user_html_url" target="_blank"><img :src="avatar_url"  class="author-image" alt="Placeholder Image" :title="user_login"></a>
       </div>
       <div class="media-content hide-over has-text-centered">
         <p class="title is-4"><a :href="repo_html_url" target="_blank">{{ repo_name }}</a></p>
         <p class="subtitle is-6 up_side">
              {{ description }}
         </p>
       </div>
     </div>
 <div class="down_side has-text-centered">
     <label v-if="lang_repos" class=""><span class="repo-language-color ml-0" :style="{backgroundColor: getColorfromLang(lang_repos) }"></span><span class="">{{lang_repos}}</span></label>
     </div>
     <div class="content has-text-centered">
       <b>Created</b> : {{ created_at }}  <br> <b>Updated</b> : {{ updated_at }} <br>
     </div>
    
   </div>
 </div>
</template>

<script>
import jsonColors from "../json/colors.json";
import _ from "lodash";

export default {
  props: [
    "avatar_url",
    "repo_html_url",
    "repo_name",
    "user_html_url",
    "user_login",
    "created_at",
    "updated_at",
    "description",
    "lang_repos"
  ],
  data() {
    return {
      colors_language: jsonColors
    };
  },
  methods: {
    getColorfromLang(color_api) {
      let color = "";
      let data = this.colors_language;
      Object.keys(data).map(function(key){
         if(key === color_api){
         color = data[key] 
         }
      }); 
      return color;
    }
  }
};
</script>

<style lang="css">
.repo-language-color {
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
}
.up_side {
  padding-top: 12px;
}
.down_side {
  padding-bottom: 5px;
}
</style>
