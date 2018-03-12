import {User, UserCreationRequest} from 'tsoa-example-models'

export class UserService {
  public async get(id: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      let user: User = {
        id: 1234,
        email: 'string',
        name: 'Name',
        phoneNumbers: [],
        status: 'status'
      }

      resolve(user)
    })
  }

  public async create(requestBody: UserCreationRequest): Promise<void> {
    return Promise.resolve()
  }
}
