<template>
  <div class="login">
    <h3>Login</h3>

    <section id="login-card">
      <h1 v-show="hintMsg">
        {{ hintMsg }}
      </h1>

      <form
        id="loginApp"
        class="login-form"
        @submit.prevent="login"
      >
        <!-- 
							#NOTE:
							https://staging.vuejs.org/guide/essentials/event-handling.html#event-modifiers 
						-->
        <div class="email">
          <label for="inputEmail" />
          <input
            id="inputEmail"
            v-model.trim="user.username"
            type="email"
            name="username"
            placeholder="example@test.com"
            required
            autofocus
          >
          <!-- 
								#NOTE:
								https://book.vue.tw/CH1/1-4-directive.html
								v-model.trim="user.username"
								v-model.lazy="user.username"
							-->
        </div>
        <div class="password">
          <label for="inputPassword" />
          <input
            id="inputPassword"
            v-model.trim="user.password"
            type="password"
            name="password"
            placeholder="******"
            required
          >
        </div>
        <button
          type="submit"
          class="btn login-btn btn-success"
        >
          Login
        </button>
      </form>
      <!-- end of login-form -->
    </section>
  </div>
</template>

<script>
import { apiLogin } from "../scripts/apis.js";

export default {
  name: "AdminLogin",

  data() {
    return {
      user: { username: "", password: "" },

      hintMsg: "Welcome!",
      /** end of return */
    };
    /** end of data() */
  },

  created() {
    console.log("created-loginApp");
    /* end of created() */
  },

  mounted() {
    console.log("mounted-loginApp");
    this.hasLogChecker();
    /* end of mounted() */
  },

  methods: {
    goToDesk() {
      // alert(`2-goToDesk()`);
      // window.location = "desk.html";
      this.$router.push("/admin/products");
    },
    /* end of goToDesk() */

    login() {
      // alert(`1-login()`);
      this.hintMsg = "驗證中";
      // post -> token -> cookie -> location
      const user = this.user;

      // #DEV:
      apiLogin(user)
        .then((response) => {
          // alert(`1.1-then`);
          // console.dir(response);
          const { success, message } = response.data;
          this.hintMsg = message;
          if (!success) {
            return;
            // #TODO:
            // throw new Error(message);
          }

          const { token, expired } = response.data;
          const MAX_AGE = 30;

          document.cookie = `W2VUE3=${token}; 
						expires=${new Date(expired)}; 
						max-age=${MAX_AGE}; path=/; 
						SameSite=Lax; Secure; 
					`;

          // #TODO:
          localStorage.setItem("hasLog", Date.now());
          this.goToDesk();
        })
        .catch((error) => {
          // alert(`1.2-catch`);
          // console.dir(error);
          // console.log(error.toJSON());
          const { data } = error.response;
          this.hintMsg = data.message;
          user.password = null;
        });
    },
    /* end of login() */

    hasLogChecker() {
      // alert(`0-hasLogChecker()`);
      this.hintMsg = "Hi!";

      if (!localStorage.getItem("hasLog")) {
        return;
      }

      // #TODO:
      // this.goToDesk();
    },
    /* end of hasLogChecker() */
    /** end of methods: */
  },
};
/* end of export */
</script>

<!-- <style scoped> -->
<style>
* {
  font-family: "Noto Sans TC", "Roboto", sans-serif;
}

/*
.admin,
.desk,
.login
 */

html,
body {
  background: #212534;
  background-size: cover;
  /* #DEBUG: */
  /* overflow: visible; */
  -webkit-text-size-adjust: auto;
}

/* end of Global */

#login-card {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: auto;
  padding: 0.7rem;
  width: 65vh;
  height: 75vh;
  text-align: center;

  border-radius: 5px;
  background: rgba(3, 3, 3, 0.25);
  box-shadow: 1px 1px 50px #000;
}

#login-card h1 {
  position: relative;
  text-align: center;

  text-shadow: 3px 3px 10px #000;
  color: #ddd;
}

.login-form {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: auto;
  width: 65vh;
  height: 50vh;
  /* display: none; */
}

.login-form div {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

input {
  position: relative;
  display: block;
  width: 80%;
  margin: 9px auto;
  padding: 8px;

  text-decoration: none;
  font-weight: 900;
  border: none;
  border-radius: 6px;
  color: #fff;

  background: rgba(3, 3, 3, 0.1);
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

input:focus {
  outline: none;
  box-shadow: 3px 3px 10px #333;
  background: rgba(3, 3, 3, 0.18);
}

::-webkit-input-placeholder {
  color: #c64;
}

::-moz-placeholder {
  color: #f40;
}

.login-btn {
  position: relative;
  overflow: hidden;
  width: 80%;
  margin: 1rem;

  border-radius: 5px;
  box-shadow: 5px 10px 70px #fff;
  /* color: #fff; */
  font-weight: 900;
  cursor: pointer;
  opacity: 0.4;
}

a:hover {
  opacity: 0.7;
}

/* end of login-card */
</style>
