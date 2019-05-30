<template>
	<div>
		hello info!
		<button type="button" @click="add()">添加</button>
	</div>
</template>


<script>

import store from '@/store'  //@是代表根目录src
	
	export default { 

		name:"Info",
		store, //引用
		mounted(){
			// ，生命周期，页面挂在完毕
			window.vue = this
		},
		methods:{
			add(){
				// ======== 三种调试方法 =========
				// console.log('add EVENT from info')
				// alert('add EVENT from info')
				// debugger   // 断点调试
				store.commit('increase')  //从store中拿方法store.commit（）
			},
			output(){
				console.log('in output')
			}

		}
	};
</script>


<style scoped>
	
</style>