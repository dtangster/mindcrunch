FROM elixir:alpine

WORKDIR /mindcrunch

ADD backend /mindcrunch

RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez --force
RUN mix deps.get --force
RUN mix deps.compile --force

ENTRYPOINT ["iex", "-S", "mix", "phx.server"]
