from django.contrib import admin
from .models import Question, Answer, Comment

# Register your models here.
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'date', 'recommend', 'views')

admin.site.register(Question, QuestionAdmin)

class AnswerAdmin(admin.ModelAdmin):
    list_display = ('question', 'autor', 'image', 'content')

admin.site.register(Answer, AnswerAdmin)

class CommentAdmin(admin.ModelAdmin):
    list_display = ()

admin.site.register(Comment, CommentAdmin)
