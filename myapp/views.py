from django.shortcuts import render
from .forms import FileUploadForm

def home(request):
    return render(request, 'home.html')


# def wiki(request):
#     return render(request, 'wiki.html')


def upload_file(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            file = request.FILES['file']
            if not file.name.endswith('.umg'):
                return render(request, 'upload_file.html', {
                    'form': FileUploadForm(),
                    'message': 'File extension must be .umg'
                })
            else:
                form.save()
                return render(request, 'upload_file.html', {
                    'form': FileUploadForm(),
                    'message': 'File uploaded successfully',
                })
        else:
            return render(request, 'upload_file.html', {
                'form': form,
                'message': 'File upload failed'
            })
    else:
        form = FileUploadForm()
    return render(request, 'upload_file.html', {
        'form': form
    })
