from django.contrib import admin
from .models import Quiz, Choice

# Register your models here.
class QuizAdmin(admin.ModelAdmin):
    list_display = ('category', 'description')

admin.site.register(Quiz, QuizAdmin)

class ChoiceAdmin(admin.ModelAdmin):
    list_display = ('quiz', 'text')

admin.site.register(Choice, ChoiceAdmin)