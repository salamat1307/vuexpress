import Api from '@/services/Api'

export default {
	register (credentials) {
		return Api().post('register', credentials)
	},

	login (credentials) {
		return Api().post('login', credentials)
	}
}

// We can use register function everywhere like this.

// AuthenticationService.register({
// 	email: 'salamat.allabergenov@mail.ru',
// 	password: '123123'
// })