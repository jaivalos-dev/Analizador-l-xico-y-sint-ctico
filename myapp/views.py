import os
from django.shortcuts import render, redirect
from .forms import FileUploadForm
from django.http import HttpResponseBadRequest

def home(request):
    return render(request, 'home.html')


def code_file(request):
    return render(request, 'code_file.html')

def upload_file(request):
    file_text = ''
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            file = request.FILES['file']
            if not file.name.endswith('.zy'):
                return render(request, 'upload_file.html', {
                    'form': FileUploadForm(),
                    'error': 'File extension must be .zy'
                })
            else:
                file_path = os.path.join('media', 'uploads', file.name)
                if os.path.exists(file_path):
                    os.remove(file_path)
                with open(file_path, 'wb+') as destination:
                    for chunk in file.chunks():
                        destination.write(chunk)
                request.session['file_name'] = file.name  # Guardar el nombre del archivo en la sesión
                with open(file_path, 'r', encoding='utf-8') as f:
                    file_text = f.read()  # Obtener el contenido del archivo
                return render(request, 'upload_file.html', {
                    'form': FileUploadForm(),
                    'file': file,
                    'file_name': file.name,  # Pasar el nombre del archivo a la plantilla
                    'message': 'File uploaded successfully',
                    'file_text': file_text,
                })
        else:
            return render(request, 'upload_file.html', {
                'form': form,
                'error': 'File upload failed'
            })
    else:
        form = FileUploadForm()

    return render(request, 'upload_file.html', {
        'form': form,
        'file_text': file_text,
    })



def modify_file(request):
    if request.method == 'POST':
        file_name = request.POST.get('file_name', '')
        print("Nombre del archivo:", file_name)
        file_text = request.POST.get('codigo', '')
        print("Contenido del archivo:", file_text)

        # Verificar si el nombre del archivo está vacío
        if not file_name:
            return HttpResponseBadRequest("Nombre de archivo vacío")

        # Construir la ruta completa del archivo
        file_path = os.path.join('media', 'uploads', file_name)

        # Imprimir la ruta del archivo para verificar
        print("Ruta del archivo:", file_path)

        try:
            # Intentar abrir el archivo para escritura
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(file_text)
            return redirect('upload_file')
        except FileNotFoundError:
            return HttpResponseBadRequest("El archivo no existe")
    else:
        return HttpResponseBadRequest("Método de solicitud incorrecto")


