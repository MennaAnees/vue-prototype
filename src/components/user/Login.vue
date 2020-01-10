<template>
  <div>
    <h3>
      <span class="badge badge-secondary">Login</span>
    </h3>
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model.lazy="email"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model.lazy="password" />
      </div>

      <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
            this.$router.push('/user')
        }
    }
};
</script>