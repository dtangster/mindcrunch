# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :mindcrunch, MindcrunchWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "0LNjNMqK+2yYleX1Y/v32pNdMtLamk0Aj1UuWpJm+buHb2c6pWrBidgOELBz2j7T",
  render_errors: [view: MindcrunchWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Mindcrunch.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
