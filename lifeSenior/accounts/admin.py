from django.contrib import admin
from .models import Profile, CorrectByDate, InCorrectByDate

# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'user')

admin.site.register(Profile, ProfileAdmin)

class CorrectByDateAdmin(admin.ModelAdmin):
    list_display = ('user', 'date', 'quiz')

admin.site.register(CorrectByDate, CorrectByDateAdmin)

class InCorrectByDateAdmin(admin.ModelAdmin):
    list_display = ('user', 'date', 'quiz')
    
admin.site.register(InCorrectByDate, InCorrectByDateAdmin)