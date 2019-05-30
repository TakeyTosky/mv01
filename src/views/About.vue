<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
    	{{msg}}
    </div>
  </div>
</template>

<script type="text/javascript">
	import store from '@/store'  //导入store
	export default {
		name:'about',
		store, //引用store
		data(){
			return {
				msg:store.state.count
			}
		}
	};
</script>