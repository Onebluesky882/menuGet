package main

import (
	"log"

	"github.com/Onebluesky882/menuGet/apps/backend/internal/database"
	"github.com/gofiber/fiber/v3"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(".env"); err != nil {
		log.Fatal("failed to load .env: ", err)
	}

	// database
	db, err := database.NewPostgress()
	if err != nil {
		log.Fatalf("Failed to connect database: %v", err)
	}
	defer db.Close()

	// fiber
	app := fiber.New()

	app.Get("/", func(c fiber.Ctx) error {
		return c.SendString("MenuGET API is running")
	})

	log.Fatal(app.Listen(":3000"))
}
