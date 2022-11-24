<template>
    <div id="loading-canvas" class="fadeOutAnimation">
      <span class="loading-text">LOADING...</span>
        <LoadingBar/>
    </div>
</template>

<script>
import LoadingBar from '@/components/LoadingBar.vue';
import router from '../router';
export default {
  components: {
    LoadingBar
  },
  mounted(){
      setTimeout(
      function() {
        let loadCanvas = document.getElementById("loading-canvas");
        loadCanvas.style.display = "none"
        router.push({ path: '/bio'})
      }, 4500
  );
  }
};

//timeout for loading element
/*setTimeout(
  function() {
    let loadCanvas = document.getElementById("loading-canvas");
    loadCanvas.style.display = "none"
    this.$router.push('bio') 
  }, 4500
);*/

</script>

