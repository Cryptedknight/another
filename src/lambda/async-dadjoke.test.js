const async_dadjoke = require("./async-dadjoke")
// @ponicode
describe("async_dadjoke.handler", () => {
    test("0", async () => {
        await async_dadjoke.handler("invoice", "DELETE FROM Projects WHERE pid = %s")
    })

    test("1", async () => {
        await async_dadjoke.handler("withdrawal", "DROP TABLE tmp;")
    })

    test("2", async () => {
        await async_dadjoke.handler("deposit", "UPDATE Projects SET pname = %s WHERE pid = %s")
    })

    test("3", async () => {
        await async_dadjoke.handler("payment", "UNLOCK TABLES;")
    })

    test("4", async () => {
        await async_dadjoke.handler("withdrawal", "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
    })

    test("5", async () => {
        await async_dadjoke.handler(undefined, undefined)
    })
})
