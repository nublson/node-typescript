import {Router} from 'express'

const routes = Router()

routes.get('/', (request, response) => {
    return response.json({message: 'Typescript is working fine! 🧑🏽‍💻'})
})

export default routes