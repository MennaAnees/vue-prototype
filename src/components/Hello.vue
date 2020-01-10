<template>
    <div>
        <h1>Register</h1>
        <p>msg: {{ msg }} </p>
        <button @click="changeMsg"> change</button>
        <button @click="resetMsg"> Reset</button>
    </div>
</template>

<script>
export default {
    props:{
        msg: {type: String}
    },
    methods:{
        changeMsg(){
             this.msg = "New"
            this.$emit('msgWasReset', this.msg)
        },
        resetMsg(){
            this.msg = "Hello world"
            this.$emit('msgWasReset', this.msg)
        }
    }
}
</script>