<template>
    <div class="wx-header">
        <span>{{name}}</span>
        <div>
            <span class="el-icon-search" @click="searchClick"></span>
            <span class="el-icon-circle-plus-outline" @click="createClick"></span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '微信'
        }
    },
    data() {
        return {
            name: this.title
        }
    },
    watch: {
        title: function(val){
            this.name = val
        }
    },
    methods: {
        searchClick() {
            console.log('点击搜索')
        },
        
        createClick() {
            console.log('点击添加')
        }
    },
}
</script>