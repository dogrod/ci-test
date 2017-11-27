const express = require('express')
const app = express()
const axios = require('axios')

const appKey = 'c96610b84f87306c7636bdca8c03d270'

app.get('/', (req, res) => {
  try {
    const ip = req.headers['x-real-ip']
    if (!ip) {
      throw new Error('Wrong ip')
    }

    axios.get(`http://apis.juhe.cn/ip/ip2addr?ip=${ip}&key=${appKey}`)
      .then(resp => {
        console.log(resp.data)
        const data = resp.data
        if (data.resultcode !== '200') {
          throw new Error('Request failed') 
        }

        const result = data.result
        return res.send(`Hello, Your IP address: ${ip}
                         Area: ${result.area}
                         Location: ${result.location}`)
      })
    
  } catch (error) {
    console.log(error)

    return res.send('网络错误')
  }
})

app.listen(4000)