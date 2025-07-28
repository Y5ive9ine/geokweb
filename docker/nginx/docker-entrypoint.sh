#!/bin/bash

echo "Starting nginx configuration..."

# Wait for certificate to be ready if HTTPS is enabled
if [ "${NGINX_HTTPS_ENABLED}" = "true" ]; then
    echo "Waiting for SSL certificate to be ready..."
    while [ ! -f "/etc/letsencrypt/cert-ready" ]; do
        echo "Certificate not ready yet, waiting..."
        sleep 2
    done
    echo "Certificate is ready!"
fi

HTTPS_CONFIG=''

if [ "${NGINX_HTTPS_ENABLED}" = "true" ]; then
    # Check if the certificate and key files for the specified domain exist
    if [ -n "${CERTBOT_DOMAIN}" ] && \
       [ -f "/etc/letsencrypt/live/${CERTBOT_DOMAIN}/${NGINX_SSL_CERT_FILENAME}" ] && \
       [ -f "/etc/letsencrypt/live/${CERTBOT_DOMAIN}/${NGINX_SSL_CERT_KEY_FILENAME}" ]; then
        export SSL_CERTIFICATE_PATH="/etc/letsencrypt/live/${CERTBOT_DOMAIN}/${NGINX_SSL_CERT_FILENAME}"
        export SSL_CERTIFICATE_KEY_PATH="/etc/letsencrypt/live/${CERTBOT_DOMAIN}/${NGINX_SSL_CERT_KEY_FILENAME}"

        # Generate HTTPS config
        HTTPS_CONFIG=$(envsubst '$SSL_CERTIFICATE_PATH,$SSL_CERTIFICATE_KEY_PATH,$CERTBOT_DOMAIN,$NGINX_SSL_PORT,$NGINX_SSL_PROTOCOLS' < /etc/nginx/templates/https.conf.template)
        export HTTPS_CONFIG
        echo "HTTPS enabled with certificates"
    else
        HTTPS_CONFIG=""
        export HTTPS_CONFIG
        echo "HTTPS disabled - certificates not found"
    fi
else
    HTTPS_CONFIG=""
    export HTTPS_CONFIG
    echo "HTTPS disabled by configuration"
fi
export HTTPS_CONFIG

if [ "${NGINX_ENABLE_CERTBOT_CHALLENGE}" = "true" ]; then
    ACME_CHALLENGE_LOCATION='location /.well-known/acme-challenge/ { root /var/www/html; }'
else
    ACME_CHALLENGE_LOCATION=''
fi
export ACME_CHALLENGE_LOCATION

# Create necessary directories
mkdir -p /etc/nginx/conf.d

# Generate configuration files
envsubst '$NGINX_WORKER_PROCESSES,$NGINX_KEEPALIVE_TIMEOUT,$NGINX_CLIENT_MAX_BODY_SIZE' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf
envsubst '$NGINX_PROXY_READ_TIMEOUT,$NGINX_PROXY_SEND_TIMEOUT' < /etc/nginx/templates/proxy.conf.template > /etc/nginx/proxy.conf
envsubst '$CERTBOT_DOMAIN,$ACME_CHALLENGE_LOCATION,$HTTPS_CONFIG' < /etc/nginx/templates/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Start Nginx using the default entrypoint
exec nginx -g 'daemon off;'
