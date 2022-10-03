
from django_countries.serializer_fields import CountryField
from django_countries.serializers import CountryFieldMixin
from rest_framework import serializers
from .models import Property,PropertyViews


class PropertySerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    country = CountryField(name_only=True)
    cover_photo = serializers.SerializerMethodField()
    photo_1 = serializers.SerializerMethodField()
    photo_2 = serializers.SerializerMethodField()
    photo_3 = serializers.SerializerMethodField()
    photo_4 = serializers.SerializerMethodField()


    class Meta:
        model = Property
        fields = ["id","user","title","slug","ref_code","description","country","city","postal_code","street_address","property_number","price","tax","final_property_price","plot_area","total_floors","bedrooms","bathrooms","advert_type","property_type","cover_photo","photo_1","photo_2","photo_3","photo_4","published_status","views"]

    def get_user(self,obj):
        return obj.user.username

    def get_cover_photo(self,obj):
        return obj.cover_photo.url
    
    
    def get_photo_1(self,obj):
        return obj.photo_1.url
    
    
    def get_photo_2(self,obj):
        return obj.photo_2.url
    
    
    def get_photo_3(self,obj):
        return obj.photo_3.url
    
    
    def get_photo_4(self,obj):
        return obj.photo_4.url



class PropertyCreateSerializer(serializers.ModelSerializer):
    country =  CountryField(name_only=True)   


    class Meta:
        model = Property
        exclude = ["updated_at","pkid"]        


class PropertyViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyViews
        exclude = ["updated_at","pkid"]    