<template>
    <div>
        <ul>
            <li v-for="(names, nameIndex) in listName"
                :key="nameIndex"
                @click="tabClick(names.name)">
                <a href="javascript:void(0)">
                    <i></i>
                    <span>{{names.name}}</span>
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
                    name:'微信'
                },
                {
                    name:'通讯录'
                },
                {
                    name:'发现'
                },
                {
                    name:'我'
                }
            ]
        }
    },
    methods: {
        tabClick(val) {
            console.log(val)
        }
    },
}
</script>