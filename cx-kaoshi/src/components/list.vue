<template>
    <div>
        <h5><button v-show="!show" @click="sor">升序</button><button v-show="show" @click="sor">降序</button></h5>
        <ol>
            <li>all</li>
            <li>0-100</li>
            <li>100-500</li>
            <li>500-1000</li>
            <li>1000-2000</li>
        </ol>
        <ul>
            <li v-for="(item,key) in this.$store.state.arr">
                <div>
                    <img :src="'../../static/'+item.productImage" alt="">
                    <p>{{item.productName}}</p>
                    <p>{{item.salePrice}}</p>
                    <button @click="add(item)">加入购物车</button>
                </div>
            </li>
        </ul>
        <ul>
            <li v-for="(item,key) in this.$store.state.list">
                <div>
                    <img :src="'../../static/'+item.productImage" alt="">
                    <p>{{item.productName}}</p>
                    <p>{{item.salePrice}}</p>
                    <button @click="add(item)">加入购物车</button>
                </div>
            </li>
        </ul>
        <ul>
            <li v-for="(item,key) in this.$store.state.con">
                <div>
                    <img :src="'../../static/'+item.productImage" alt="">
                    <p>{{item.productName}}</p>
                    <p>{{item.salePrice}}</p>
                    <button @click="add(item)">加入购物车</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
     return{
         show:false
     }   
    },
    methods:{
        sor(){
            this.show=!this.show
        },
        add(item){
            item.number=1
            item.chec=false
            this.$router.push({path:"/my"})
            this.$store.commit("add",item)
        }
    },
    mounted(){
        axios.get('/static/data.json').then((res)=>{
            console.log(res.data.result.list)
            this.$store.state.arr=res.data.result.list
        })
        axios.get('/static/data2.json').then((res)=>{
            console.log(res.data.result.list)
            this.$store.state.list=res.data.result.list
        })
        axios.get('/static/data3.json').then((res)=>{
            console.log(res.data.result.list)
            this.$store.state.con=res.data.result.list
        })
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
ol{
    width: 20%;
    float: left;
}
ol>li{
    width: 100%;
    height: 40px;
}
ul{
    width: 80%;
    display: flex;
    flex-wrap:wrap;
    float: right; 
}
ul>li{
    width: 25%;
    height: 300px;
    display: block;
   
    
}
ul>li>div{
    width: 90%;
    height: 100%;
}
ul>li>div>img{
    width: 100%;
    height: 70%;
    display: block;
}
</style>