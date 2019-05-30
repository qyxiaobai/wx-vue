<template>
    <div>
        <nav-top :title="title" v-if="showNavTop"></nav-top>
        <component :is="currentView"></component>
        <nav-footer @tabClick="changeContent"></nav-footer>
    </div>
</template>

<script>
// 引入头部组件
import NavTop from '@/components/base/NavTop'

// 引入尾部组件
import NavFooter from '@/components/base/NavFooter'

// 引入内容组件
import WX from '@/components/WX'
import AddressBook  from '@/components/AddressBook'
import Find from '@/components/Find'
import ME from '@/components/ME'
export default {
    components: {
        NavTop,
        NavFooter,
        WX,
        AddressBook,
        Find,
        ME,
    },
    data() {
        return {
            currentIndex: 0,
            currentArr: ['WX', 'AddressBook', 'Find', 'ME'],
            titleNames: ['微信', '通讯录', '发现'],
            showNavTop: true
        }
    },
    computed: {
        currentView() {
            return this.currentArr[this.currentIndex]
        },
        title() {
            return this.titleNames[this.currentIndex]
        }
    },
    methods: {
        changeContent(index) {
            this.currentIndex = index
            if (index == 3) {  // 索引等于3时候, 页面是 '我', 没有了头部栏
                this.showNavTop = false
            } else {
                this.showNavTop = true
            }
        }
    },
}
</script>