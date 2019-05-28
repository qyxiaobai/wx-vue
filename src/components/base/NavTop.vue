<template>
    <div>
        <span>{{title}}</span>
        <div>
            <span @click="searchClick">搜索</span>
            <span @click="createClick">添加</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '微信'
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