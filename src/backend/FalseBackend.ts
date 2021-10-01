import {User} from "../types/User";

export default class FalseBackend {
    private static DEFAULT_USER_LIST: User[] = [
        {
            email: 'sonia@gmail.com',
            passwordSHA256: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', // 1234
            penultimateLogin: null,
            lastLogin: null
        }, {
            email: 'patricia@gmail.com',
            passwordSHA256: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', // 1234
            penultimateLogin: null,
            lastLogin: null
        }
    ];

    /**
     * Simula el endpoint para iniciar sesión
     * @param email
     * @param plainPassword
     */
    static async login(email: string, plainPassword: string): Promise<User | null> {
        await this.randomSleep(); // Simula un backend real y tambien previene timing attacks
        let userList = this.getUserList();
        let hashedPassword = CryptoJS.SHA256(plainPassword).toString();
        let userFound = userList.find(user => user.email === email && user.passwordSHA256 === hashedPassword);
        if (!userFound) { // Usuario y contraseña no existen o coinciden
            return null;
        }
        userFound.penultimateLogin = userFound.lastLogin;
        userFound.lastLogin = Date.now();
        this.saveUserList(userList);
        return userFound;
    }

    /**
     * Retorna los usuarios. Si no existen, los crea con los valores por defecto
     * @private
     */
    private static getUserList(): User[] {
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify(this.DEFAULT_USER_LIST));
        }
        return JSON.parse(localStorage.getItem('user') as string);
    }

    private static saveUserList(userList: User[]) {
        localStorage.setItem('user', JSON.stringify(userList));
    }

    /**
     * Retorna una promesa que se activa al cabo de entre 0 y 999 milisegundos
     * @private
     */
    private static randomSleep(): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, Math.random() * 1000);
        })
    }
}
