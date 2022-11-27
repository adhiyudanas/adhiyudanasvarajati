<template>
    <div class="card-wrapper">
        <h3 class="title-text" :class="showDetails? 'hide-display' : ''" @click="TextClick">{{content.title}}</h3>
        <div class="details-text-wrapper" :class="showDetails? '' : 'hide-display' " @click="TextClick">
            <!--<h4 class="details-title-heading">{{content.details['det-title']}}</h4>-->
            <ul class="details-list display-flex">
                <li v-for="item in content.details.bullets" :key="item.id">
                    <span class="content-details-bullets-span">{{item}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default ({
    props: ['content'],
    data() {
        return {
           showDetails : false
        }
    },
    methods: {
        TextClick() {
            this.showDetails = !this.showDetails;
        }
    }
})
</script>
