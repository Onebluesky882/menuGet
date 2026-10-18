change api path
/Users/onebluesky882/go/pkg/mod/github.com/!authula/authula@v1.48.0/plugins/email-password/routes.go

```go
// change path same with better-auth
	// origial "/email-password/sign-up"
	return []models.Route{
		{
			Method: http.MethodPost,
			Path:   "/sign-up/email",
			Middleware: []func(http.Handler) http.Handler{
				middleware.RequirePublicOrUserActor(),
			},
			Handler: signUpHandler.Handler(),
		},
		/// email-password/sign-in
		{
			Method: http.MethodPost,
			Path:   "/sign-in/email",
			Middleware: []func(http.Handler) http.Handler{
				middleware.RequirePublicOrUserActor(),
			},
			Handler: signInHandler.Handler(),
		},
		{
			Method: http.MethodGet,
			Path:   "/email-password/verify-email",
			Middleware: []func(http.Handler) http.Handler{
				middleware.RequirePublicOrUserActor(),
			},
			Handler: verifyEmailHandler.Handler(),
		},
		{
			Method: http.MethodPost,
			Path:   "/email-password/send-email-verification",
			Middleware: []func(http.Handler) http.Handler{
				middleware.RequireActor(models.ActorUser),
			},
			Handler: sendEmailVerificationHandler.Handler(),
		},
		{
			Method: http.MethodPost,
			Path:   "/email-password/request-password-reset",
			Middleware: []func(http.Handler) http.Handler{
				middleware.RequirePublicOrUserActor(),
			},
			Handler: requestPasswordResetHandler.Handler(),
		},

		// /email-password/change-password
		{
			Method: http.MethodPost,
			Path:   "/email-password/change-password",
			Middleware: []func(http.Handler) http.Handler{
				middleware.RequirePublicOrUserActor(),
			},
			Handler: changePasswordHandler.Handler(),
		},
		{
			Method: http.MethodPost,
			Path:   "/email-password/request-email-change",
			Middleware: []func(http.Handler) http.Handler{
				middleware.RequireActor(models.ActorUser),
			},
			Handler: requestEmailChangeHandler.Handler(),
		},
	}


```

session GET /api/auth/get-session
/Users/onebluesky882/go/pkg/mod/github.com/!authula/authula@v1.48.0/plugins/csrf/plugin.go

```go
func (p *CSRFPlugin) csrfCookie(reqCtx *models.RequestContext, value string, maxAge int) *http.Cookie {
	sameSite := util.ParseSameSite(p.pluginConfig.SameSite)
	secure := reqCtx.Request.URL.Scheme == "https" || sameSite == http.SameSiteNoneMode || p.pluginConfig.Secure

	// change path same with better-auth
	// origin 	Path:     "/",
	return &http.Cookie{
		Name:     p.pluginConfig.CookieName,
		Value:    value,
		Path:     "/get-session",
		Domain:   p.globalConfig.Session.Domain,
		HttpOnly: false,
		Secure:   secure,
		SameSite: sameSite,
		MaxAge:   maxAge,
	}
}
```
