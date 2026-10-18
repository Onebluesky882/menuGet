package auth

import (
	"os"

	authula "github.com/Authula/authula"
	authulaconfig "github.com/Authula/authula/config"
	authulamodels "github.com/Authula/authula/models"
	emailpasswordplugin "github.com/Authula/authula/plugins/email-password"
	emailpasswordplugintypes "github.com/Authula/authula/plugins/email-password/types"
)

func New() *authula.Auth {
	config := authulaconfig.NewConfig(
		authulaconfig.WithAppName("MenuGET"),
		authulaconfig.WithBasePath("/api/auth"),
		authulaconfig.WithSecurity(authulamodels.SecurityConfig{
			TrustedOrigins: []string{
				"*",
			},
			CORS: authulamodels.CORSConfig{
				AllowCredentials: false,
				AllowedOrigins: []string{
					"*",
				},
				AllowedMethods: []string{
					"GET",
					"POST",
					"PUT",
					"PATCH",
					"DELETE",
					"OPTIONS",
				},
				AllowedHeaders: []string{
					"Authorization",
					"Content-Type",
					"Cookie",
				},
			},
		}),

		authulaconfig.WithDatabase(authulamodels.DatabaseConfig{
			Provider: "postgres",
			URL:      os.Getenv("AUTHULA_DATABASE_URL"),
		}),
	)
	return authula.New(&authula.AuthConfig{
		Config: config,
		Plugins: []authulamodels.Plugin{
			emailpasswordplugin.New(

				emailpasswordplugintypes.EmailPasswordPluginConfig{

					Enabled:           true,
					MinPasswordLength: 8,
					MaxPasswordLength: 128,
					DisableSignUp:     false,
					AutoSignIn:        true,
				},
			),
		},
	})

}
