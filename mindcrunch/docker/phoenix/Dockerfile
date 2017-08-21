FROM elixir:alpine

WORKDIR /mindcrunch

ADD phoenix /mindcrunch

RUN mix local.hex --force && \
    mix local.rebar --force && \
    mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez --force && \
    mix deps.get --force && \
    mix deps.compile --force

ENTRYPOINT ["iex", "-S", "mix", "phx.server"]
