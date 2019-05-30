import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

export default new Vuex.Store({
  state: { //组建状态
  	count:0 // 需要被传递的状态的名字
  },
  mutations: {
  	//定义状态改变的方法
  	increase(){
  		this.state.count ++
  	}
  },
  actions: {

  }
})
