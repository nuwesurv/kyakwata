<script setup>
// import router from '@/router';
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
</script>

<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-icon">
        <img class="icon-image" src="@/assets/gmail-theme.svg" alt="logo" />
      </div>

      <div class="auth-header">
        <p class="auth-title" style="color: var(--text-primary);">Enter</p>
        <p class="auth-title" style="color: var(--theme);">Your Email</p>
        <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.5rem;">
          Welcome to Kyakwata Ug.<br />
          No passwords needed-just quick and secure.
        </p>
      </div>

      <div class="auth-input-section">
        <p style="color: var(--text-primary);">Email:</p>
        <div class="input-wrapper">
          <input class="text-input" type="email" autocomplete="email" placeholder="eg. email@gmail.com" />
        </div>
      </div>

      <div class="terms-text">
        <p>By continuing, you agree to terms and conditions of Kyakwata Ug.</p>
      </div>

      <div class="security-card">
        <div class="security-icon">
          <img class="icon-image" src="@/assets/shield-theme.svg" alt="logo" />
        </div>
        <div class="security-text">
          <p style="color: var(--text-primary); margin-bottom: 0.3rem;">
            Safe & Private
          </p>
          <p style="color: var(--text-secondary); font-size: 0.8rem;">
            Your email is encrypted and never shared.
            We only use it for account verification and security.
          </p>
        </div>
      </div>

      <div class="primary-action-btn" @click="router.push('/home')">
        <p>Login / Signup</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  background-image: linear-gradient(120deg, #2c0062, #1b003b);
  height: 100dvh;
  display: flex;
  align-items: flex-end;
}

.auth-container {
  width: 100%;
  height: 92dvh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1rem;
}

/* Icon */
.auth-icon {
  width: 5rem;
  aspect-ratio: 1 / 1;
  border: 2px solid #8935ff5f;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius1);
  background-color: #2c0062;
  box-shadow: 0 0 25px 10px rgba(138, 92, 246, 0.2);
}

.icon-image {
  width: 50%;
}

/* Header */
.auth-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 75%;
  gap: 0.8rem;
}

.auth-title {
  font-size: 2rem;
  font-weight: bold;
}

/* Input section */
.auth-input-section {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.text-input {
  color: var(--text-secondary);
  width: 100%;
  border: none;
  outline: none;
  padding: 0.3rem 1rem;
  font-size: 1.2rem;
  background-color: #3b0084;
  height: 3rem;
  border-radius: 1.5rem;
}

.text-input:focus{
  border: 1px solid var(--theme);

}



/* Terms */
.terms-text {
  width: 90%;
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.1rem;
  margin-top: -0.8rem;
}

/* Security card */
.security-card {
  height: 6rem;
  width: 90%;
  border-radius: var(--border-radius2);
  border: 1px solid #2c0062;
  background-color: #1800601f;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}

.security-icon {
  height: 50%;
  aspect-ratio: 1 / 1;
  border: 1px solid #2c0062;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.security-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}




/* Button */
.primary-action-btn {
  width: 90%;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: var(--theme2);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
</style>
