@extends('layouts.base')

@section('content')
<div class="row">
    <div class="col-12">
        <div style="display: flex; justify-content:center; margin-top:10%;">
            <h2 class="text-white" style="font-size:xxx-large; font-family: 'Shine Coasty', sans-serif; color:#421412; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Recetas Cocinando con la máma</h2>
        </div>
        <div>
            <a href="{{route('tasks.create')}}" class="btn btn-outline-dark">Crear Receta</a>
        </div>
    </div>
    @if (Session::get("success"))
        <div class="alert alert-success mt-2">
            {{Session::get("success")}}
        </div>
    @endif
    <div class="col-12 mt-4" style="height: 100%; width: 100%; overflow: auto; display: flex; justify-content: center;">
        <div  class="gifs-container" style="width: 200px; height: 150px;display: flex; text-align:center;">
            <!-- Gif lateral izquierdo -->
            <img src="https://media.tenor.com/YeZ7mOrouGIAAAAi/tkthao219-cooking.gif" alt="Gif Lateral Izquierdo"style=" overflow:hidden; width: 550px; height:90px; margin-top:90%; margin-right:40%;">
        </div>
        <table class="text-bordered" style="border: 2px solid; color: black; background-color: #E6BAA3; text-align: center; width: auto; border-collapse: separate; border-spacing: 0 10px;">
            <tr class="text-secondary">
                <th style="color:#6C1300; font-family: 'Copperplate', 'Copperplate Gothic Light', 'fantasy';">Nombre de la Receta</th>
                <th style="color:#6C1300; font-family: 'Copperplate', 'Copperplate Gothic Light', 'fantasy';">Pasos o ingredientes</th>
                <th style="color:#6C1300; font-family: 'Copperplate', 'Copperplate Gothic Light', 'fantasy';">Fecha de Realización</th>
                <th style="color:#6C1300; font-family: 'Copperplate', 'Copperplate Gothic Light', 'fantasy';">Estado de la Receta</th>
                <th style="color:#6C1300; font-family: 'Copperplate', 'Copperplate Gothic Light', 'fantasy';">Acción a hacer</th>
            </tr>
            @foreach($tasks as $task)
            <tr>
                <td class="fw-bold">{{$task->title}}</td>
                <td>{{$task->description}}</td>
                <td>{{$task->fecha}}</td>
                <td><span class="badge bg-warning fs-6">{{$task->status}}</span></td>
                <td>
                    <a href="{{route('tasks.edit', $task)}}" class="btn btn-outline-secondary">Editar ✏️</a>
                    <form action="{{route('tasks.destroy', $task)}}" method="POST" class="d-inline"> 
                        @csrf
                        @method("DELETE") 
                        <button type="submit" class="btn btn-outline-danger">Eliminar</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </table>
        <div class="gifs-container" style="width: 200px; height: 150px;display: flex; text-align:center;">
            <!-- Gif lateral derecho -->
            <img src="https://media.tenor.com/r_Gf5d2leQQAAAAi/cooking.gif" alt="Gif Lateral Derecho" style=" overflow:hidden; width: 550px; height:90px; margin-top:90%; margin-left:40%;">
        </div>
    </div>
</div>
@endsection

@if ($errors->any())
    <div class="alert alert-danger">
        <strong>Por las chanclas de mi madre!</strong> Algo fue mal..<br><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif