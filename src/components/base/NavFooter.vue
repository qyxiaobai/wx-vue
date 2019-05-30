<template>
    <div class="wx-footer">
        <ul>
            <li v-for="(tabs, tabsIndex) in listName"
                :key="tabsIndex"
                @click="tabClick(tabs.name, tabsIndex)">
                <a href="javascript:void(0)" :class="{'active':activeIndex == tabsIndex}">
                    <svg class="icon" aria-hidden="true" v-if="activeIndex != tabsIndex">
                        <use :xlink:href="tabs.useLink"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true" v-else>
                        <use :xlink:href="tabs.activeUseLink"></use>
                    </svg>
                    <span>{{tabs.name}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listName:[
                {
                    name:'微信',
                    useLink: '#icon-wx-msg',
                    activeUseLink: '#icon-wx-msg1',
                },
                {
                    name:'通讯录',
                    useLink: '#icon-wx-tel',
                    activeUseLink: '#icon-wx-tel1',
                },
                {
                    name:'发现',
                    useLink: '#icon-wx-find',
                    activeUseLink: '#icon-wx-find1'
                },
                {
                    name:'我',
                    useLink: '#icon-wx-me',
                    activeUseLink: '#icon-wx-me1',
                }
            ],
            activeIndex: 0
        }
    },
    methods: {
        tabClick(name, index) {
            this.activeIndex = index
            this.$emit('tabClick', index)
        }
    },
}
</script>