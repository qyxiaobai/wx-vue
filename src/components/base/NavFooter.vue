<template>
    <div>
        <ul>
            <li v-for="(name, nameIndex) in listName"
                :key="nameIndex"
                @click="tabClick(name)">
                <a href="javascript:void(0)">
                    <i></i>
                    <span>{{name}}</span>
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