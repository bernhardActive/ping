package app.repository.impl;

import app.entity.User;
import app.repository.api.IUserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserRepository implements IUserRepository {

    private User user = null;

    @Override
    public User create(User user) {
        this.user = user;
        return this.user;
    }

    @Override
    public User get() {
        return this.user;
    }
}
