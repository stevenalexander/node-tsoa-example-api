import 'mocha'
import { assert, expect } from 'chai'
import { UserCreationRequest } from 'tsoa-example-models'
import { UserService } from '../../src/services/userService'

describe('UserService', () => {
  describe('getAll', () => {
    it('should return test users in promise', async () => {
      let userService = new UserService
      let users = await userService.getAll()
      assert.equal(2, users.length)
    })
  })
  describe('get', () => {
    it('should return test user in promise', async () => {
      let userService = new UserService
      let user = await userService.get(1)
      assert.equal(1234, user.id)
      assert.equal('Name', user.name)
    })
  })
  describe('create', () => {
    it('should return promise', async () => {
      let userService = new UserService
      let userCreationRequest: UserCreationRequest = {
        name: 'Name',
        email: 'Email',
        phoneNumbers: []
      }
      let result = userService.create(userCreationRequest)
      expect(result).to.be.a('promise')
      await result
    })
  })
})
