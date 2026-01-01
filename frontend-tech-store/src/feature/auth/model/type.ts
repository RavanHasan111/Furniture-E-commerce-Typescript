// Запрос на регистрацию
export interface RegisterRequest {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
}

// Ответ сервера при регистрации
export interface RegisterResponse {
    success: boolean;
    userId: string;
    token: string; // JWT токен, который вернёт бэкенд
    // можно добавить user объект, если бэкенд возвращает
    // user: { id: string; username: string; email: string }
}



export interface LoginRequest {
    email: string;
    password: string;
}


export interface LoginResponse {
    token: string;       // токен, который сохраняем
    user: {
      id: string;
      email: string;
      username: string;
    };
  }