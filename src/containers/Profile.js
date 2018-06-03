import React,{Component} from 'react'
class Profile extends Component{
    render(){
        return(
            <div>
                <header>
                    <h2>Profile!</h2>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Profile