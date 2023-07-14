from django import forms
from models import Answer
class AnswerForm(forms.ModelForm):
    class Meta:
        model = Answer
        fields = ['title', 'content', 'photo', 'category']
        
    def __init__(self, *args, **kwargs):
        super(AnswerForm, self).__init__(*args, **kwargs)
        self.fields['title'].widget.attrs = {
            'class': 'form-control', 
            #'placeholder': "제목 입력(4-100)",
            
        }
        self.fields['content'].widget.attrs = {
            'class': 'form-control', 
            #'placeholder': "내용 작성",
            'id': 'content',
            'rows':15,
        }
        self.fields['photo'].widget.attrs = {
            'class': 'form-control', 
            'placeholder': "사진 선택",
            'id': 'id_photo',
            'onchange' : 'loadFile(this)',
            'style': 'color:white;' # 알아서 색 맞춰 수정하기
        }
        self.fields['category'].widget.attrs = {
            'class': 'form-control', 
            'placeholder': "장르 선택",
            'id': 'id_genreName',
            # 'style': 'color:black;' # 알아서 색 맞춰 수정하기
        }
        