@extends('layouts.base')

@section('content')
<div class="row">
    <div class="col-12">
            </br>
        <div style="display: flex; justify-content:center;">
            <h2 class="text-white" style="font-size:xxx-large; font-family: 'Shine Coasty', sans-serif; color:#421412; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Crear Receta</h2>
        </div>
        <div>
            <a href="{{route('tasks.index')}}" class="btn btn-outline-dark">Volver</a>
        </div>
    </div>
    @if ($errors->any())
    <div class="alert alert-danger">
        <strong>OMG, ALGO HA FALLADO</strong> PFFF a corregirlo..<br><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif


    <form action="{{route('tasks.store')}}" method="POST">
    @csrf
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2">
                <div class="form-group">
                    <strong>Nombre Receta:</strong>
                    <input type="text" name="title" class="form-control" placeholder="Tarea" >
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2">
                <div class="form-group">
                    <strong>Pasos:</strong>
                    <textarea class="form-control" style="height:150px" name="description" placeholder="Descripción..."></textarea>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 mt-2">
                <div class="form-group">
                    <strong>Fecha de creación:</strong>
                    <input type="date" name="fecha" class="form-control" id="">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 mt-2">
                <div class="form-group">
                    <strong>Estado (inicial):</strong>
                    <select name="status" class="form-select" id="">
                        <option value="">-- Elige el status --</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="En progreso">En progreso</option>
                        <option value="Completada">Hecha</option>
                    </select>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-2">
                <button type="submit" class="btn btn-outline-success">Crear</button>
                              
            </div>
        </div>
    </form>
</div>
@endsection