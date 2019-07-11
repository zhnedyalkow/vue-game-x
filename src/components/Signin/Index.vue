<template>
	<div class="container">
		<div class="signin_container">
			<h1>Sign in</h1>
			<form @submit.prevent="onSubmit">
				<div class="input_field"
					:class="{invalid: $v.formData.email.$error}"
				>
					<label for="email" >Email</label>
					<input 
						type="email" 
						@blur="$v.formData.email.$touch()"
						placeholder="Email.."
						v-model.trim="formData.email"
					>
					<div v-if="$v.formData.email.$error">
						<p class="error_label" v-if="!$v.formData.email.required">
							This field is required!
						</p>
						<p class="error_label" v-if="!$v.formData.email.email">
							Please enter a valid email!
						</p>
					</div>
				</div>
				<div class="input_field">
					<label for="password">Password</label>
					<input 
						type="password"
						@blur="$v.formData.password.$touch()"
						placeholder="Password.."
						v-model="formData.password"
					>
					<div v-if="$v.formData.password.$error">
						<p class="error_label" v-if="!$v.formData.password.required">
							This field is required!
						</p>
						<p class="error_label" v-if="!$v.formData.password.minLength">
							Please enter minimum length of 6 chars!
						</p>
					</div>
				</div>

				<button type="submit">Signin</button>

				<p class="error_label" v-if="error">
					Something is wrong..
				</p>
				<p class="error_label" v-if="authFailed">
					Please check your email and password!
				</p>
			</form>
		</div>
	</div>
</template>

<script>

import { required, email, minLength  } from 'vuelidate/lib/validators';
import { setTimeout } from 'timers';

export default {
	data() {
			return {
				error: false,
				formData: {
					email: '',
					password: ''
				}
			}
	},
	computed: {
		authFailed() {
			return this.$store.state.admin.authFailed;
		}
	},
	destroyed() {
		this.$store.commit('admin/authFailed', 'reset');
	},
	validations: {
		formData: {
			email: {
				required,
				minLength: minLength(5),
				email
			},
			password: {
				required,
				minLength: minLength(5),
			}
		}
	},
	methods: {
		onSubmit() {

			if(!this.$v.$invalid) {
				this.$store.dispatch('admin/signIn', this.formData);
			} else {
				this.error = true;

				setTimeout(() => {
					this.error = false
				}, 3000);
			}
		}
	}
}
</script>

<style scoped>
	.input_field.invalid input,
	.input_field.invalid input select {
		border: 1px solid red;
	}
</style>
