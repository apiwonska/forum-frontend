import dj_database_url
from .base import TESTING_MODE

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

# This setting reset DATABASES and use 'DATABASE_URL' by default
DATABASES = {}
DATABASES["default"] = dj_database_url.config(conn_max_age=0)

if TESTING_MODE:
    DATABASES["default"]["HOST"] = "localhost"
