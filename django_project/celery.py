from __future__ import absolute_import
import os

from celery import Celery
from django_project.settings import base

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_project.settings.development")

app = Celery("django_project")

app.config_from_object("django_project.settings.development",namespace="CELERY"),
app.autodiscover_tasks(lambda: base.INSTALLED_APPS)