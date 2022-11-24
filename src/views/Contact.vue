<template>
  <div class="contact flex-wrapper">
    <h2>Let's get in touch!</h2>
    <p class="contact-p">Tell me more about your project and ideas!<br>Let's create something together.</p>
    <ContactContents/>
  </div>
</template>

<script>
import ContactContents from '@/layouts/ContactContents.vue';

export default {
  components: { ContactContents }
};

</script>
