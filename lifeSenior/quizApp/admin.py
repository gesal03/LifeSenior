from django.contrib import admin
from .models import Quiz, Choice, Term

# Register your models here.
class QuizAdmin(admin.ModelAdmin):
    list_display = ('category', 'description')

admin.site.register(Quiz, QuizAdmin)

class ChoiceAdmin(admin.ModelAdmin):
    list_display = ('quiz', 'text')

admin.site.register(Choice, ChoiceAdmin)

class TermAdmin(admin.ModelAdmin):
    list_display = ('title', 'category')

admin.site.register(Term, TermAdmin)