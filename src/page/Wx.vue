<template>
    <div>
        <nav-top></nav-top>
        <div>{{name}}</div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavTop from '@/components/base/NavTop'
import NavFooter from '@/components/base/NavFooter'
export default {
    components: {
        NavTop,
        NavFooter
    },
    data() {
        return {
            name: '微信主页面'
        }
    },
}
</script>