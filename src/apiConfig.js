let apiUrl

const apiUrls = {
  production: 'this is where we will put the deployed api url',
  development: 'http://localhost:5000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl