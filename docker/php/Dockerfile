FROM composer:2 AS composer

FROM php:8.4-fpm

COPY --from=composer /usr/bin/composer /usr/bin/

RUN apt-get update && apt-get install -y \
        libpq-dev \
        libzip-dev \
        libonig-dev \
    && docker-php-ext-install \
        pdo_pgsql \
        zip \
        mbstring \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html
