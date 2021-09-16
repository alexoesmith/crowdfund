import axios from "axios";

export const state = () => ({
  posts: []
});

export const mutations = {
  addPosts(state, posts) {
    state.posts = posts;
  },
  setPosts(state, amount) {
    state.posts.splice(0, amount);
  }
};

export const actions = {
  async getPosts({ commit }) {
    await axios("http://localhost:1337/blogs").then(response => {
      commit("addPosts", response.data);
    });
  }
};
