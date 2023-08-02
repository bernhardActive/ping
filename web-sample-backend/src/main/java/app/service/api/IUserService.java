package app.service.api;

import app.dto.UserDto;
import app.entity.User;

public interface IUserService {

    User createUser(UserDto userDto);

    User getUser();
}
