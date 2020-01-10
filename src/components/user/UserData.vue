<template>
<Data :userData="userData"></Data>
</template>

<script>
import Data from "./Data";

export default {
    data(){
        return{
            userData:{
                email:"test@yahoo.com",
                age:17,
                gender: "female"
            }
        }
    },
    components:{
        Data
    }
};
</script>