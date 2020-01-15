<template>
    <paginate v-model="page"
              :page-count="20"
              :page-range="3"
              :margin-pages="2"
              :click-handler="clickCallback"
              :prev-text="'Prev'" :next-text="'Next'"
              :container-class="'pagination'"
              :page-class="'page-item'">
    </paginate>


</template>

<script>
    import Paginate from 'vuejs-paginate'

    var Paginate = require('vuejs-paginate')
    Vue.component('paginate', Paginate)


    export default {
        name: "TestPosts.vue",

        data() {
            return {
                page: 10
            }

        },
        methods : {
            clickCallback (pageNum) => {
                console.log(pageNum)
            }

        }
    }
</script>

<style scoped>

</style>
<style lang="css">
    .pagination { }
    .page-item { }
</style>

출처: https://ux.stories.pe.kr/139 [UX 공작소]