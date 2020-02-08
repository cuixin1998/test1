<template>
    <div>
        <h4>M Y C A R T</h4>
        <ul>
           <li v-for="(item,key) in this.$store.state.my">
                <div>
                    <span><input type="checkbox" @click="che(key)" v-model="item.chec"></span>
                    <img :src="'../../static/'+item.productImage" alt="">
                    <span>{{item.productName}}</span>
                    <button @click="addnum(key)">+</button><span>{{item.number}}</span><button @click="cutnum(key)">-</button>
                    <span>{{item.salePrice}}</span>
                    <button><img src="" alt=""></button>
                </div>
            </li>
        </ul>
        <input type="checkbox" @click="all()" v-model="this.$store.state.che">全选
        <button @click="del">选中删除</button>
    </div>
</template>

<script>
export default {
    methods:{
        addnum(key){
            this.$store.commit("addnum",key)
        },
        cutnum(key){
             this.$store.commit("cutnum",key)
        },
        che(key){
             this.$store.commit("che",key)
        },
        all(){
            this.$store.commit("all")

        }
        

    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
ul{
    width: 100%;
   
}
ul>li{
    width: 100%;
    height: 100px;
    display: block;
   
    
}
ul>li>div{
    width: 90%;
    height: 100%;
}
ul>li>div>img{
    width: 10%;
    height: 70%;
}
</style>