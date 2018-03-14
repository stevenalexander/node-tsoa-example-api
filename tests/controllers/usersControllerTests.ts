import 'mocha'
import { assert } from 'chai'
import { UserCreationRequest } from 'tsoa-example-models'
import { UsersController } from '../../src/controllers/usersController'

describe('UsersController', () => {
  describe('getAll', () => {
    it('should call service', async () => {
      let usersController = new UsersController
      let users = await usersController.getAll() // TODO should mock call to service
      assert.equal(2, users.length)
    })
  })
  describe('getUser', () => {
    it('should call service', async () => {
      let usersController = new UsersController
      let user = await usersController.getUser(1) // TODO should mock call to service
      assert.equal(1234, user.id)
    })
  })
  describe('createUser', () => {
    it('should call service', async () => {
      let usersController = new UsersController
      let userCreationRequest: UserCreationRequest = {
        name: 'Name',
        email: 'Email',
        phoneNumbers: []
      }
      await usersController.createUser(userCreationRequest) // TODO should mock call to service
    })
  })
})
