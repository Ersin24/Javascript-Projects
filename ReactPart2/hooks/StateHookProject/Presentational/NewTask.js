import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit}){
    return(
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="New Task"
                value={newTask.value}
                onChange={handleChange}
            />
            {!newTask.title ? null : (
                <>
                    <textarea
                        name="description"
                        placeholder="Details..."
                        value={newTask.description || ""}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Task</button>
                </>
            )}
        </form>
    )
}