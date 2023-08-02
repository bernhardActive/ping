package app.repository.api;

import app.entity.User;

public interface IUserRepository {

    User create(User user);

    User get();
}