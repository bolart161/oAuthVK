<template>
  <div>
    <div id="auth-from" v-if="!isAuth">
      <v-btn @click="auth">
        Авторизоваться
      </v-btn>
    </div>
    <div id="info" v-else>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">{{ title }}</div>
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthButton',
  data() {
    return {
      isAuth: false,
      title: '',
      accessToken: null,
      userId: null,
    }
  },
  methods: {
    auth() {
      let urlAuth = 'https://oauth.vk.com/authorize?' +
          'client_id=6079378&' +
          'display=popup&' +
          'redirect_uri=http://bolart.ru/www&scope=friends&' +
          'response_type=code';

      window.open(urlAuth, '_self');
    },
    getInfo() {
      const urlForInfo = `https://api.vk.com/method/users.get?user_ids=${ this.userId }&access_token=${ this.accessToken }&v=5.100`;
      fetch(urlForInfo)
          .then((response) => {
            if (response.status !== 200) {
              return Promise.reject();
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
    }
  },
  mounted() {
    const params = window.location.search.substr(1).split('&');

    let code = null;

    params.forEach((item) => {
      const keyValue = item.split('=');
      if (keyValue[0] === 'code') {
        code = keyValue[1];
      }
    });

    if (code !== null) {
      const urlForToken = 'https://oauth.vk.com/access_token?client_id=6079378&client_secret=VZjMf75BX1zNY7Avn6D1&redirect_uri=http://bolart.ru&code=' + code;
      fetch(urlForToken)
          .then((response) => {
            if (response.status !== 200) {
              return Promise.reject();
            }
            return response.json();
          })
          .then((data) => {
            this.accessToken = data.access_token; // check
            this.userId = data.user_id; //check
            this.isAuth = true;
          })
          .then( this.getInfo() )
          .catch( alert('Упс, что-то пошло не так, попробуйте позже.') );
    }

  }
}
</script>

<style scoped>
</style>
