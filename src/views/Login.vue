<template>
  <div class="container">
    <h3>用户登录</h3>
    <form action="javascript:;">
      <div class="form-group">
        <label for="exampleInputEmail1">邮箱：</label>
        <input
          v-model="userForm.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码：</label>
        <input
          v-model="userForm.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" class="btn btn-primary" @click="login">登录</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      userForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.userForm.email, this.userForm.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // ...
		})
		this.$router.push('/')
    }
  }
}
</script>