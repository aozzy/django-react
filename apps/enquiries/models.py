from email.policy import default
from tabnanny import verbose
from django.db import models
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField
from apps.common.models import TimeStampedUUIDModel


class Enquiry(TimeStampedUUIDModel):
    name = models.CharField(_("Your Name"), max_length=100)
    phone_number = PhoneNumberField(_("phone number"), max_length =30, default= "+44794456709")
    email = models.EmailField(_("Email"))
    subject = models.CharField(_("Subject"), max_length=100)
    message = models.TextField(_("Your Message"))



    def __str__(self):
        return self.email

    class Meta:
        verbose_name_plural = "Enquires" 

        
           
