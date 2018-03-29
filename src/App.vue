<template lang="html">
  <div id="app" class="container">
      <section class="hero has-text-centered">
        <div class="container">
          <h1 class="title">
            Github Repos by @Artdvp
          </h1>
          <h2 v-if="repo_checked">
            Github User : <b>&gt;&gt; {{ us_search }} &lt;&lt;</b>
          </h2>
          <h2 v-else>
            Github User : ...
          </h2>
        </div>
      </section>
      <div class="container has-text-centered">
          <div class="column is-8 is-offset-2">
            <div class="box">
              <form class="field has-addons" @submit.prevent="">
                <p class="control is-expanded">
                  <input id="userNameBox" v-model="username" type="text" class="input" placeholder="Enter Github Username...">
                </p>
                <p class="control">
                  <button type="submit" class="button" @click="submitRepos">
                    Search
                  </button>
                </p>
              </form>
            </div>

            <Card class="card gitcard" 
            v-for="repo in repos" :key="repo.id"
            :avatar_url="repo.owner.avatar_url"
            :repo_html_url="repo.html_url"
            :repo_name="repo.name"
            :user_html_url="repo.owner.html_url"
            :user_login="repo.owner.login"
            :created_at="datetoString(repo.created_at)"
            :updated_at="datetoString(repo.updated_at)"
            :description="repo.description"
            :lang_repos="repo.language" >   
            </Card>
          </div>
      </div>
       <pagination
        :current="pagination.current"
        :total="pagination.total"
        :itemsPerPage="pagination.itemsPerPage"
        :onChange="onChange">
      </pagination>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card";
import { datetoString } from "./utils/utils";
import Pagination from "vue-2-bulma-pagination";

let pagination = {
  current: 1,
  total: 10,
  itemsPerPage: 4
};

export default {
  name: "app",
  components: {
    Card,
    Pagination
  },
  data() {
    return {
      msg: "Welcome to Vue Parcel",
      username: "",
      us_search: "",
      repos: null,
      countRepos: 0,
      pagination: pagination,
      repo_checked: false
    };
  },
  mounted() {
    this.pagination.total = 0;
  },
  methods: {
    datetoString: datetoString,
    submitRepos() {
      this.us_search = this.username;
      this.getRepos(1);
    },
    onChange(page) {
      this.getRepos(page);
    },
    getReposCount: function() {
      return this.us_search.trim() !== ""
        ? axios.get(`https://api.github.com/users/${this.us_search}`)
        : null;
    },
    getReposfromUser: function(page) {
      return this.us_search.trim() !== ""
        ? axios.get(
            `https://api.github.com/users/${
              this.us_search
            }/repos?per_page=4&page=${page}`
          )
        : null;
    },
    getRepos: function(page) {
      return axios
        .all([this.getReposCount(), this.getReposfromUser(page)])
        .then(
          axios.spread((reposcount, reposuser) => {
            if (reposcount != null) {
              this.pagination.total = reposcount.data.public_repos;
              this.repo_checked = true;
            } else {
              this.pagination.total = 0;
              this.pagination.current = 1;
              this.repo_checked = false;
            }
            if (reposuser != null) {
              this.repos = reposuser.data;
              this.pagination.current = page;
            } else {
              this.repos = null;
            }
          })
        )
        .catch(error => {
          console.log(error);
          this.repos = null;
          this.countRepos = 0;
          this.repo_checked = false;
           this.pagination.total = 0;
        });
    }
  }
};
</script>

<style lang="css">

</style>
