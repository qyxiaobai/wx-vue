<template>
    <div>
        <div class="wx-content">{{name}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '我'
        }
    },
}
</script>

<style lang="scss" scoped>
#app {
    .wx-content{
        top: 0
    }
}
</style>