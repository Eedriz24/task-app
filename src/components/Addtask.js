const Addtask = () => {
    return (
        <form className = 'add-form'>
            <div className = 'form-control'>

                <label>Task</label>
                <input type ='text' placeholder ='Add'/>
            </div>

            <div className = 'form-control form-control-check'>

                <label>Day & Type</label>
                <input type ='text' placeholder ='Add Day & Time'/>
            </div>

            <div className = 'form-control'>

                <label>Set Reminder</label>
                <input type ='checkbox'/>
            </div>

            <input type ='submit' value='Save Task' className ="btn btn-block"/>
            
        </form>
    )
}

export default Addtask

