let apiUrl

const apiUrls = {
  production: 'https://limitless-island-57755.herokuapp.com',
  development: 'http://localhost:5000'
}

if (window.location.host === 'localhost:3000') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl