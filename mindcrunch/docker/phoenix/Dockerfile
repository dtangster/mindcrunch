FROM elixir:alpine

RUN apk update && apk add inotify-tools

RUN mix local.hex --force && \
    mix local.rebar --force && \
    mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phx_new.ez

COPY ./phoenix /mindcrunch
WORKDIR /mindcrunch
RUN mix deps.get --force

ENTRYPOINT ["iex", "-S", "mix", "phx.server"]
