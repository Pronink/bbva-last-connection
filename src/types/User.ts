export type User = {
    email: string, // Al ser una clave única y no haber más tablas, será nuestra clave primaria en vez de un id numérico
    passwordSHA256: string,
    lastLogin: number | null, // Guarda el último login
    penultimateLogin: number | null, // Guarda el penúltimo login (última vez que el usuario inició sesión sin contar la actual)
}
