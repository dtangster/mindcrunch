defmodule MindcrunchWeb.Router do
  use MindcrunchWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", MindcrunchWeb do
    pipe_through :api
  end
end
