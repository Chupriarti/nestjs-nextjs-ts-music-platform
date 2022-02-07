import { NestFactory } from "@nestjs/core"

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create()

    await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
  } catch (e) {
    console.error("start error", e)
  }
}

start()
