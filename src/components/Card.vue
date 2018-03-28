<template lang="html">
  <div class="card gitcard" v-for="repo in repos">
   <div class="card-content">
     <div class="media">
       <div class="media-center ">
           <img :src="repo.owner.avatar_url"  class="author-image" alt="Placeholder Image">
       </div>
       <div class="media-content hide-over has-text-centered">
         <p class="title is-4"><a :href="repo.html_url" target="_blank">{{ repo.name }}</a></p>
         <p class="subtitle is-6"> <a :href="repo.owner.html_url"  target="_blank">@{{ repo.owner.login }}</a></p>
       </div>
     </div>
     <div class="content has-text-centered">
       <b>Created</b> : {{ repo.created_at }} <b>Updated</b> : {{ repo.updated_at }}
     </div>
     <div class="subtitle has-text-centered">
       {{ repo.description }}
     </div>
   </div>
 </div>
</template>

<script>
export default {
  props: ['repos'],
  data: {
    username: '',
    repos: null
  },
  methods: {
    getRepos: function() {
      return axios.get(`https://api.github.com/users/${this.username}/repos`)
      .then((response) => {
         this.repos = response.data;
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
        this.repos = null;
      });
    }
  }
}
</script>

<style lang="css">
</style>
