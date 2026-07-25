#!/bin/bash
set -e

echo "Waiting for PostgreSQL..."
for i in $(seq 1 30); do
  python -c "import psycopg2; psycopg2.connect('${DATABASE_URL}')" 2>/dev/null && break
  sleep 1
done

echo "Running seed..."
python /app/backend/seed.py

exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
