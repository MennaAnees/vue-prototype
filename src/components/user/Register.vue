<template>
  <div>
    <h3>
      <span class="badge badge-secondary">Register</span>
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

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" class="form-control" id="age" v-model.lazy="age" />
      </div>

      <div class="form-group">
        <input
          type="radio"
          aria-label="Radio button for following text input"
          name="gender"
          value="male"
          v-model="gender"
        />Male
        <input
          type="radio"
          aria-label="Radio button for following text input"
          name="gender"
          value="female"
          v-model="gender"
        />Female
      </div>

      <div class="form-group">
        <label>choose</label>
        <select key="sel" id="sel" v-model="selectedOption">
          <option v-for="op in options" v-bind:key="op">{{ op }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
    </form>

    <button type="button" class="btn btn-primary btn-sm" @click="navigateToHome">Back To Home</button>

    <hr />
    <div v-if="submitted">
      <UserData :email="email"></UserData>
    </div>
  </div>
</template>

<script>
import UserData from './UserData'
export default {
  data: function() {
    return {
      email: "",
      password: "",
      age: 0,
      gender: "",
      selectedOption: "",
      options: ["high", "medium", "low"],
      submitted: false
    };
  },
  methods: {
    submit() {
      this.submitted = true;
      this.$router.push("/login");
    },
    navigateToHome() {
      this.$router.push("/");
    }
  },
  components:{
    UserData
  }
};
</script>