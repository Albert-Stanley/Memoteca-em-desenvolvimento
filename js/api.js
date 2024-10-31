const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch('http://localhost:3000/pensamentos')
      return await response.json()
    }
    catch (error) {
      alert('Erro')
      throw error
    }
  },
  async salvarPensamentos(pensamento) {
    try {
      const response = await fetch('http://localhost:3000/pensamentos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(pensamento)
      })
      return await response.json()
    }
    catch (error) {
      alert('Erro')
      throw error
    }
  }
}

export default api