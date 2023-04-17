import React from "react";
import ChildComponent from "./Props";
import AddComponent from "./Split_Component";

class Form extends React.Component{
    state = {
        arrJobs : [
            {id: '1', title : 'Developer', salary : '500'},
            {id: '2', title : 'Tester', salary : '300'},
            {id: '3', title : 'Project Manager', salary : '1000'}
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState ({
            arrJobs :currentJob
        })
    }
    

    render(){
        console.log(this.state)
        return(
            <div>
                <AddComponent
                    addNewJob = {this.addNewJob}
                />
                <ChildComponent
                    arrJobs = {this.state.arrJobs}
                    deleteJob = {this.deleteJob}
                />
            </div>
        )
    }
}
export default Form