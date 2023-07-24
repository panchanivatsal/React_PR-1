import './Style.css'
import { Component } from "react";
class User extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <body>
            
              <center>
                <h2>Class</h2>
                <table border={1}>
                      <thead>
                          <tr>
                            <td className='col-1'>Grid</td>
                            <td className='col-1'>Name</td>
                            <td className='col-2'>Email</td>
                            <td className='col-1'>Password</td>
                            <td className='col-3'>Course</td>
                            <td className='col-2'>City</td>
                          </tr>
                      </thead>

                      {
                         this.props.record.map((val)=>{
                              return(
                                 <tbody>
                                    <tr>
                                        <td className='col-1'>{val.grid}</td>
                                        <td className='col-1'>{val.name}</td>
                                        <td className='col-2 email'>{val.email}</td>
                                        <td className='col-1'>{val.password}</td>
                                        <td className='col-3'>{val.course.join(',  ')}</td>
                                        <td className='col-2'>{val.city}</td>
                                    </tr>
                                 </tbody>
                              )
                         })
                      }
                </table>
            </center>
          </body>
        )
    }
}
export default User;