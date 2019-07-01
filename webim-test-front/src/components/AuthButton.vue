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
const axios = require('axios');

function getToken(code) {
  axios
    .get('https://oauth.vk.com/access_token?client_id=7040403&client_secret=SJrmcvaarjNDIJnRm7qe&redirect_uri=http://bolart.ru&code=' + code + '&callback=saveToken')
    .then(response => console.log(response))
    .catch(() => [])
};

// function getToken(code) {
  // let script = document.createElement('SCRIPT');
  // script.src = 'https://oauth.vk.com/access_token?client_id=7040403&client_secret=SJrmcvaarjNDIJnRm7qe&redirect_uri=http://bolart.ru&code=' + code + '&callback=saveToken';
  // script.type = 'text/javascript';
  // document.getElementsByTagName("head")[0].appendChild(script);22
// }
//
// function saveToken(result) {
//   alert(result.response[0]);
// }

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
          'client_id=7040403&' +
          'display=page&' +
          'redirect_uri=http://bolart.ru&scope=friends&' +
          'response_type=code';

      window.open(urlAuth, '_self');
    },
    getInfo() {
      if ( this.accessToken === null) {
        return;
      }

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
            this.title = data.first_name + ' ' + data.last_name;
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
      getToken(code);
      // const urlForToken = 'https://oauth.vk.com/access_token?client_id=6079378&client_secret=VZjMf75BX1zNY7Avn6D1&redirect_uri=http://bolart.ru&code=' + code;
      // fetch(urlForToken)
      //     .then((response) => {
      //       if (response.status !== 200) {
      //         return Promise.reject();
      //       }
      //       return response.json();
      //     })
      //     .then((data) => {
      //       this.accessToken = data.access_token; // check
      //       this.userId = data.user_id; //check
      //       this.isAuth = true;
      //     })
      //     .then( this.getInfo() )
      //     .catch( alert('Упс, что-то пошло не так, попробуйте позже.') );
    }

  }
}
</script>

<style scoped>
</style>
