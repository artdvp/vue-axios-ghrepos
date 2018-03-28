<template lang="html">
  <div class="card gitcard">
   <div class="card-content">
     <div class="media">
       <div class="media-center ">
           <img :src="avatar_url"  class="author-image" alt="Placeholder Image">
       </div>
       <div class="media-content hide-over has-text-centered">
         <p class="title is-4"><a :href="repo_html_url" target="_blank">{{ repo_name }}</a></p>
         <p class="subtitle is-6"> <a :href="user_html_url"  target="_blank">@{{ user_login }}</a></p>
       </div>
     </div>
     <div class="content has-text-centered">
       <b>Created</b> : {{ created_at }} <b>Updated</b> : {{ updated_at }}
     </div>
     <div class="subtitle has-text-centered">
       {{ description }}
     </div>
   </div>
 </div>
</template>

<script>
export default {
  props: [
    "avatar_url",
    "repo_html_url",
    "repo_name",
    "user_html_url",
    "user_login",
    "created_at",
    "updated_at",
    "description"
  ]
};
</script>

<style lang="css">

</style>
