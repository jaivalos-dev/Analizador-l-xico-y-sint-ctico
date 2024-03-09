import os
from django.shortcuts import render
from .forms import FileUploadForm

def home(request):
    return render(request, 'home.html')


def code_file(request):
    return render(request, 'code_file.html')


def upload_file(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            file = request.FILES['file']
            if not file.name.endswith('.umg'):
                return render(request, 'upload_file.html', {
                    'form': FileUploadForm(),
                    'error': 'File extension must be .umg'
                })
            else:
                # Verificar si el archivo ya existe y, si es así, sobrescribirlo
                file_path = os.path.join('media', 'uploads', file.name)
                if os.path.exists(file_path):
                    os.remove(file_path)
                # Guardar el archivo manipulando el archivo directamente antes de guardarlo
                with open(file_path, 'wb+') as destination:
                    for chunk in file.chunks():
                        destination.write(chunk)
                return render(request, 'upload_file.html', {
                    'form': FileUploadForm(),
                    'message': 'File uploaded successfully',
                })
        else:
            return render(request, 'upload_file.html', {
                'form': form,
                'error': 'File upload failed'
            })
    else:
        form = FileUploadForm()
    return render(request, 'upload_file.html', {
        'form': form
    })