import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs : false
    }
    handleOnHide = () =>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnDelete = (job) => {
        console.log(job)
        this.props.deleteJob(job)
    }
    render (){
        let { arrJobs } = this.props;
        let { showJobs } = this.state
        return(
            <div>
            {showJobs === false?
                <div>
                    <button
                        onClick={() => this.handleOnHide()}
                    >
                    Show
                    </button>
                </div>
            :    
                <div>
                    {arrJobs.map((item, index) => {
                    return(
                        <div key={item.id}>
                            {item.title} - {item.salary} <></> 
                            <span onClick={() => this.handleOnDelete(item)}>x</span>
                        </div>
                    )
                    })
                    }
                    <div>
                        <button
                            onClick={() => this.handleOnHide()}   
                        >
                            Hide
                            </button>
                    </div>
                </div>
            }</div>
        )
    }
}
export default ChildComponent