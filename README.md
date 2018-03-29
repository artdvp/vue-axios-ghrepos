## Vue Github Repos

### Tech

- vuejs
- bulma
- axios
- vue-2-bulma-pagination
- parcel-bundler
- GithubAPI

A Pen created at CodePen.io. 
You can find this one at https://codepen.io/artdvp/pen/oqzjVX.

Parcel Vue

```sh
# global Parcel
$ npm install -g parcel-bundler

# install vue
$ npm install vue --save
$ npm install parcel-bundler --save

$ npm install parcel-bundler parcel-plugin-vue babel-preset-env --save

# install pagination >> https://github.com/rosendin/vue-bulma-pagination
$ npm install vue-2-bulma-pagination --save

# install sass complied
$ npm install node-sass --save
```

Github API

```json
{
    "id": 75054425,
    "name": "artdvp.github.io",
    "full_name": "artdvp/artdvp.github.io",
    "owner": {
      "login": "artdvp",
      "id": 12493732,
      "avatar_url": "https://avatars0.githubusercontent.com/u/12493732?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/artdvp",
      "html_url": "https://github.com/artdvp",
    },
    "html_url": "https://github.com/artdvp/artdvp.github.io",
    "description": "move netlify",
    "url": "https://api.github.com/repos/artdvp/artdvp.github.io",
    "created_at": "2016-11-29T07:21:29Z",
    "updated_at": "2018-03-14T23:31:02Z",
    "pushed_at": "2017-12-08T18:23:38Z",
    "size": 17935,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CSS",
    "forks": 0,
    "open_issues": 2,
  }
```

> Edit file node_modules/vue-2-bulma-pagination/src/Pagination.vue

> Before run because error when run with parcel 

```html
<style lang="sass">
@import  "../../bulma/sass/utilities/_all";
@import "../../bulma/sass/components/pagination";
</style>
```

### Idea

- [bootstrap github repo](https://codepen.io/by-Meftunca/pen/RjMOWz)
- [Angular demo - search repos on github](https://codepen.io/andreic/pen/oKghp?editors=1010)
- [Rainbow.js demo](https://codepen.io/LukyVj/pen/GeFKD?depth=everything&order=popularity&page=2&q=github+repos&show_forks=false)

### Knowledge

- [Getting JavaScript Properties for Object Maps by Index or Name](https://weblog.west-wind.com/posts/2017/Mar/04/Getting-JavaScript-Properties-for-Object-Maps-by-Index-or-Name)