<template>
    <div>
        <h1> Edit </h1>
        <p>msg: {{ msg }}</p>
        <button @click="editMsg">Edit  Message</button>
    </div>
</template>

<script>
export default {
    props:{
        msg: String
    },
    methods:{
        editMsg(){
            this.msg = "my edit"
            this.$emit('editMsg', this.msg)
        }
    }
}
</script>