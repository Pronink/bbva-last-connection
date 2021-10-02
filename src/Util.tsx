export default class Util {
    /**
     * Poder usar la función setTimeout de una forma más moderna
     * @param milliseconds
     */
    static sleep(milliseconds: number): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, milliseconds);
        })
    }
}
