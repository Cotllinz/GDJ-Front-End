export default {
  methods: {
    AlertSelect(LogorSign) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Select Your Roles',
          text:
            LogorSign === 'Login'
              ? 'Anda Ingin Login Sebagai Apa'
              : 'Anda Ingin Daftar Sebagai Apa ?',
          icon: 'info',
          showDenyButton: true,
          confirmButtonText: 'Pekerja',
          denyButtonText: 'Perekrut',
          showCloseButton: true,
          confirmButtonColor: '#5e50a1',
          denyButtonColor: '#46505C',
          showClass: {
            popup: 'animate__animated animate__slideInLeft'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut animate__faster'
          }
        })
          .then(result => {
            let getSign
            if (LogorSign === 'Login') {
              getSign = 'Login'
            } else {
              getSign = 'SignUp'
            }
            const newResult = {
              getSign,
              result
            }

            resolve(newResult)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
