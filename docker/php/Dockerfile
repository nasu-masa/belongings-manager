FROM composer:2 AS composer

FROM php8.4-fpm

COPY --from=composer /usr/bin/composer /usr/bin/

RUN apt-get update && apt-get install -y \
        libpq-dev \
        libonig-dev \
    && docker-php-ext-install \
        pdo_pgsql \
        mbstring \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html
