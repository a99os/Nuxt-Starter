import { defineStore } from "pinia";

export const useCounterStore = defineStore("login", {
  state: () => {
    return { isLogin: false };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  // actions: {
  //   increment() {
  //     this.count++;
  //   },
  // },
});
