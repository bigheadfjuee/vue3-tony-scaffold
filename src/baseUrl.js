let baseUrl = ''

switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://localhost:8089/api'
    break

  case 'production':
    baseUrl = 'http://127.0.0.1:8089/api'
    break
}

export default baseUrl
