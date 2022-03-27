import { User } from './models/User';

const user = new User({ name: "new record", age: 0 });
// user.set({ name: "New Name", age: 99999 });
user.save();

