<template>
  <div class="l-home">
    <Profile/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Profile from '@/components/Home/Profile.vue'

@Component({
  components: {
    Profile
  }
})

export default class Home extends Vue {

}
</script>
