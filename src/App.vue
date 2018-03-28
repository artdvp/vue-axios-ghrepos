<template lang="html">
    <div id="app" class="container">
      <section class="hero has-text-centered">
        <div class="container">
          <h1 class="title">
            Github Repos
          </h1>
          <h2>
            Enter Github Username
          </h2>
        </div>
      </section>
      <div class="container has-text-centered">
          <div class="column is-8 is-offset-2">
            <div class="box">
              <form class="field has-addons" @submit.prevent="">
                <p class="control is-expanded">
                  <input id="userNameBox" v-model="username" type="text" class="input" placeholder="username...">
                </p>
                <p class="control">
                  <button type="submit" class="button" @click="getRepos(1)">
                    Search
                  </button>
                </p>
              </form>
            </div>

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
          </div>
      </div>

    </div>

</template>

<script>
import axios from "axios";

// let pagination = {
//   current: 1,
//   total: 0,
//   itemsPerPage: 5
// };

export default {
  name: "app",
  components: {

  },
  data() {
    return {
      msg: "Welcome to Vue Parcel",
      username: "",
      repos: null,
      countRepos: 0,
      pagination: {
        current: 1,
        total: 0,
        itemsPerPage: 5
      }
    };
  },
  mounted(){
    this.pagination.total = 0;
  },
  methods: {
    onChange(page) {
       this.getRepos(page);
    },
    getReposCount: function() {
      return axios.get(`https://api.github.com/users/${this.username}`);
    },
    getReposfromUser: function(page) {
      return axios.get(
        `https://api.github.com/users/${
          this.username
        }/repos?per_page=5&page=${page}`
      );
    },
    getRepos: function(page) {
      return axios
        .all([this.getReposCount(), this.getReposfromUser(page)])
        .then(
          axios.spread((reposcount, reposuser) => {
            // this.countRepos = reposcount
            console.log(reposcount.data.public_repos);
            if (reposcount.data.public_repos > 0) {
              this.pagination.total = reposcount.data.public_repos;
            }
            this.pagination.current = page;
            this.repos = reposuser.data;
            console.log(reposuser.data);
          })
        )
        .catch(error => {
          console.log(error);
          this.repos = null;
          this.countRepos = 0;
        });
      // return axios.get(`https://api.github.com/users/${this.username}/repos?per_page=5`)
      // .then((response) => {
      //    this.repos = response.data;
      //   console.log(response.data);
      // }).catch((error) => {

      //   console.log(error);
      //   this.repos = null;
      // });
    }
  }
};
</script>

<style lang="css">
</style>
