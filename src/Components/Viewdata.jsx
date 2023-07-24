import './Style.css'
const Viewdata = ({ view }) => {
    return (
        <body>

            <center>
                <h2>Function</h2>
                <table>
                    <thead>
                        <tr>
                            <th className='col-1'>Grid</th>
                            <th className='col-1'>Name</th>
                            <th className='col-2'>Email</th>
                            <th className='col-1'>Password</th>
                            <th className='col-3'>Courses</th>
                            <th className='col-2'>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            view.map((val) => (
                                <tr key={val.grid}>
                                    <td className='col-1'>{val.grid}</td>
                                    <td className='col-1'>{val.name}</td>
                                    <td className='email col-2'>{val.email}</td>
                                    <td className='col-1'>{val.password}</td>
                                    <td className='col-3'>{val.course.join(', ')}</td>
                                    <td className='col-2'>{val.city}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </center>


        </body>
    );
};

export default Viewdata;
