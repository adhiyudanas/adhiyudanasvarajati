<template>
  <div class="work-wrapper">
    <ul class="ul-wrapper display-flex">
      <li v-for="item in workCon" :key="item.id" class="block-list">
        <WorkContentBlock :content="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import WorkContentBlock from '@/components/WorkContentBlock.vue'

export default {
  components: {
    WorkContentBlock
  },
  data() {
    return {
      workCon : [
        {
          'title': 'WEBSITE / SOFTWARE DEVELOPMENT',
          'details': {
            'det-title': '“Digital design is like painting, except the paint never dries.”',
            'bullets': ['Developing website while considering good UI/UX principles ', 'Implement responsive design to website creation']
          }
        },
        {
          'title': 'BUSINESS DEVELOPMENT & PROJECT MANAGEMENT',
          'details': {
            'det-title': '',
            'bullets': ['Help client develop new product and deliver new values', "Supporting client's project management and bridging onsite & offshore team"]
          }
        },
        {
          'title': 'RESEARCH & LEARNING',
          'details': {
            'det-title': '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
            'bullets': ["New trends & best practices in web development", "The latest and future disruptive technologies (AI & Machine learning, blockchain, VR & AR, etc.)", 'Language (My latest achievement was earning my Japanese N1 JLPT).']
          }
        }
      ]
    }
  }
};
</script>