<template> 

<div v-if="validationErrors">
    <div class="alert alert-danger" role="alert">
	  <li v-for="(value, key, index) in validationErrors">{{ value }}</li>
	</div>
</div>

</template>
<script>
export default {
	props: ['errors'],
	data() {
		return {

		}
	},
	computed: {
		validationErrors(){
			if (this.errors) {
				let errors = Object.values(this.errors);
		        errors = errors.flat();
		        return errors;
			}
	        
	    }
    }
}
</script>