<script setup>
import { ref } from 'vue'

const isCodeRequested = ref(false)

const codes = ref(['', '', '', '', '', ''])

const onInput = (e, index) => {
  const value = e.target.value.replace(/\D/g, '')
  codes.value[index] = value.charAt(0) || ''

  if (value && index < 5) {
    e.target.nextElementSibling?.focus()
  }
}

const onBackspace = (e, index) => {
  if (!codes.value[index] && index > 0) {
    e.target.previousElementSibling?.focus()
  }
}

const onPaste = (e) => {
  const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
  pasted.split('').forEach((digit, i) => {
    codes.value[i] = digit
  })
}
</script>




<template>
  <div class="signuppage-wrapper">
    <div class="signuppage-container">
      <div class="phone-icon">
        <img class="logo_svg" src="@/assets/phone-theme.svg" alt="logo" />
      </div>

      <div class="head-texts">
        <p class="headings" style="color: var(--text-primary);">Enter Your</p>
        <p class="headings" style="color: var(--theme);">Phone Number</p>
        <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.5rem;">We'll send you a verification
          code. No passwords needed-just quick and secure.</p>
      </div>

      <div class="phone-entry-div">
        <p style="color: var(--text-primary);">Phone Number</p>
        <div class="input-grouper">
          <div class="t256-div">
            <p style="color: var(--text-primary);">+256</p>
          </div>
          <input class="input" type="text">
        </div>
      </div>


      <div class="terms-message">
        <p>By continuing, you agree to receive SMS verification codes. Standard messaging rates may apply.</p>
      </div>

      <div class="fill-in-6digit-code" @paste="onPaste" v-if="isCodeRequested">
        <input v-for="(digit, index) in codes" :key="index" class="code-input" type="text" inputmode="numeric"
          maxlength="1" v-model="codes[index]" @input="onInput($event, index)"
          @keydown.backspace="onBackspace($event, index)" />
      </div>

      <div class="secure-private-card">
        <div class="safe-icon-div">
          <img class="logo_svg" src="@/assets/shield-theme.svg" alt="logo" />
        </div>
        <div class="safe-texts">
          <p style="color: var(--text-primary);margin-bottom: 0.3rem;">Safe & Private</p>
          <p style="color: var(--text-secondary); font-size: 0.8rem;">Your phone number is encrypted and never shared.
            We only use it for account verification and security.</p>
        </div>
      </div>

      <div class="send-code-btn" @click="isCodeRequested = true">
        <p>Request Code</p>
      </div>

    </div>
  </div>

</template>


<style scoped>
.signuppage-wrapper {
  background-image: linear-gradient(120deg,
      #2c0062,
      #1b003b);
  height: 100dvh;
  display: flex;
  align-items: flex-end;
}


.signuppage-container {
  /* background-color: rgb(13, 255, 0); */
  width: 100%;
  height: 92dvh;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  /* gap: 1.5rem; */
  margin-bottom: 1rem;
}


.phone-icon {
  width: 5rem;
  aspect-ratio: 1/1;
  border: 2px solid #8935ff5f;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  background-color: #2c0062;
  box-shadow:
    0 0 25px 10px rgba(138, 92, 246, 0.2);
}

.phone-icon img {
  width: 50%;
}





/* Headings */
.head-texts {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 75%;
  /* border: 1px solid white; */
  gap: 0.8rem;
}

.headings {
  font-size: 2rem;
  font-weight: bold;
}



/* Phone entries divs*/
.phone-entry-div {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-grouper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* border: 1px solid white; */
  width: 100%;
}

.t256-div {
  height: var(--div-height-primary);
  background-color: #3b0084;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  font-size: 1.2rem;
  border-radius: var(--border-radius);
}

.input {
  color: var(--text-secondary);
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  border: none;
  outline: none;
  background-color: transparent;
  outline-color: transparent;
  padding: 0 1rem;
  font-size: 1.2rem;
  flex: 1;
  height: var(--div-height-primary);
  border: 0px;
  outline: transparent;
  background-color: #3b0084;
}



/* Termas message */
.terms-message {
  width: 90%;
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.1rem;
}

/* This is code insertion */
.fill-in-6digit-code {
  /* height: 4rem; */
  /* border: 1px solid rgb(189, 188, 188); */
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.code-input {
  color: var(--text-secondary);
  height: 3rem;
  width: 2.9rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  background-color: transparent;
  outline-color: transparent;
  padding: 0 1rem;
  font-size: 1.2rem;
  border: 0px;
  outline: transparent;
  background-color: #3b0084;
}


/* Secure and Private assurance card */
.secure-private-card {
  height: 6rem;
  width: 90%;
  border: 1px solid red;
  border-radius: var(--border-radius);
  border: 1px solid #2c0062;
  background-color: #1800601f;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}

.safe-icon-div {
  /* width: 35%; */
  height: 50%;
  aspect-ratio: 1/1;
  border: 1px solid #2c0062;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.safe-icon-div img {
  width: 70%;
  height: 1/1;
}


/* Send code button */
.send-code-btn {
  width: 90%;
  height: var(--div-height-secondary);
  background-color: var(--theme2);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  font-size: 1.2rem;
}
</style>