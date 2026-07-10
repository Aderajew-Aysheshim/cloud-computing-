import { Elysia } from 'elysia'

const app = new Elysia()

app.get("/", () => {
    return {
        message: "Cloud API running with Bun"
    }
})

app.listen(3000)

console.log("Server running on port 3000")