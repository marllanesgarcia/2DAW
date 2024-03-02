<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : View
    {
        //return view("index");
        $tasks = Task::latest()->paginate(3);
        return view("index", ['tasks' => $tasks]); 

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() : View
    {
       return view("create"); //devuelve la vistya create
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse 
    {
        $request->validate([
            "title" => "required",
            "description" => "required",
            ]);

        //dd($request->all()); 
        Task::create($request->all());
        return redirect()-> route("tasks.index")-> with("success","La tarea se ha creado exitosamente 👍");

    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
       // dd($task);
       return view("edit", ["task" => $task]); 
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task) : RedirectResponse
    {
        $request->validate([
            "title" => "required",
            "description" => "required",
            ]);
        $task->update($request->all());
        return redirect()->route("tasks.index")->with("success", "La tarea se ha editado exitosamente 😎"); 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task) : RedirectResponse
    {
        $task->delete();
        return redirect()->route("tasks.index")->with("success", "La tarea se ha eliminado exitosamente 🤢");
    }
}
