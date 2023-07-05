from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from lifeSeniorApp.views import index


urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls', namespace='accounts')),
    path('communication/', include('communicationApp.urls', namespace='communicationApp')),
    path('quiz/', include('quizApp.urls', namespace='quizApp')),
]
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_URL)