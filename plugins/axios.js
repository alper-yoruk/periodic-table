export default function ({ $axios }) {
  $axios.setHeader(
    'x-rapidapi-key',
    'b91d46e91emsh8decc242b861891p14f0bdjsn755d8216b4bd'
  )
  $axios.setHeader('x-rapidapi-host', 'periodictable.p.rapidapi.com')
  $axios.onRequest((config) => {
    // console.log('making request ' + config.url)
  })
}
