<template>
	<div class="login">
		<h3>Please login with your google account to continue!</h3>
		<button @click="login">Login with google</button>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'Login',
	data() {
		return {}
	},
	methods: {
		login() {
			var provider = new firebase.auth.GoogleAuthProvider()
			provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

			firebase
				.auth()
				.signInWithPopup(provider)
				.then(result => {
					// This gives you a Google Access Token. You can use it to access the Google API.
					var token = result.credential.accessToken
					// The signed-in user info.
					var user = result.user
          
          this.$router.push('/')
				})
				.catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code
					var errorMessage = error.message
					// The email of the user's account used.
					var email = error.email
					// The firebase.auth.AuthCredential type that was used.
					var credential = error.credential
					// ...
				})
		}
	}
}
</script>