package main

import (
	"log"
	"os"

	fiberadapter "github.com/Authula/authula/adapters/fiber"
	"github.com/Onebluesky882/menuGet/apps/backend/internal/auth"
	"github.com/Onebluesky882/menuGet/apps/backend/internal/database"
	"github.com/gofiber/fiber/v3"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(".env"); err != nil {
		log.Fatal("failed to load .env: ", err)
	}

	databaseURL := os.Getenv("AUTHULA_DATABASE_URL")
	secret := os.Getenv("AUTHULA_SECRET")

	if databaseURL == "" || secret == "" {
		log.Fatal("AUTHULA_DATABASE_URL and AUTHULA_SECRET are required")
	}
	// database
	db, err := database.NewPostgress()
	if err != nil {
		log.Fatalf("Failed to connect database: %v", err)
	}
	defer db.Close()

	// Authula
	authHandler := auth.New()

	// fiber
	app := fiber.New()

	app.Get("/", func(c fiber.Ctx) error {
		return c.SendString("hello , world")
	})

	app.Use("/api/auth", fiberadapter.New(fiberadapter.Config{
		Handler: authHandler.Handler(),
	}))

	app.Get("/", func(c fiber.Ctx) error {
		return c.SendString("MenuGET API is running")
	})

	log.Fatal(app.Listen(":3000"))
}
