import React from 'react'
import './fee.css'
const Fee =()=> {
    return (
       <React.Fragment  >
           <div className="mb-3 text-center" style={{marginTop:"4rem"}}>
            <h3><u>Fee Detail</u></h3>
            <h4>Fee Sturture : 2020-21</h4>
            <h4>Registration Fee : ₹200</h4>
            <h4>Admission Fee : <del>₹3,500</del>&nbsp;  ₹1750</h4>
            <h4>Term Fee : ₹1,400</h4>
            <h4>Total : ₹5,100</h4>
            <div style={{overflowX:"auto"}}>
            <table className="table">
                <tr>
                <th>S.No.</th>
                <th>Class</th>
                <th>Amount</th>
                </tr>
                <tr>
                <td>1</td>
                <td>Nursery</td>
                <td>1000</td>
                </tr>
                <tr>
                <td>2</td>
                <td>L.K.G</td>
                <td>1100</td>
                </tr>
                <tr>
                <td>3</td>
                <td>U.K.G</td>
                <td>1200</td>
                </tr>
                <tr>
                <td>4</td>
                <td>I</td>
                <td>1000</td>
                </tr>
                <tr>
                <td>5</td>
                <td>II</td>
                <td>1050</td>
                </tr>
                <tr>
                <td>6</td>
                <td>III</td>
                <td>1100</td>
                </tr>
                <tr>
                <td>7</td>
                <td>IV</td>
                <td>1150</td>
                </tr>
                <tr>
                <td>8</td>
                <td>V</td>
                <td>1200</td>
                </tr>
                <tr>
                <td>9</td>
                <td>VI</td>
                <td>1250</td>
                </tr>
                <tr>
                <td>10</td>
                <td>VII</td>
                <td>1300</td>
                </tr>
                <tr>
                <td>11</td>
                <td>VIII</td>
                <td>1400</td>
                </tr>
                
            </table><br />
            <table>
                <tr>
                <th>KM.</th>
                <th>Conv. Charge</th>
                </tr>
                <tr>
                <td>0-2 KM</td>
                <td>650</td>
                </tr>
                <tr>
                <td>0-4 KM</td>
                <td>750</td>
                </tr>
                <tr>
                <td>0-6 KM</td>
                <td>800</td>
                </tr>
                <tr>
                <td>0-8 KM</td>
                <td>850</td>
                </tr>
                <tr>
                <td>0-10 KM</td>
                <td>950</td>
                </tr>
                <tr>
                <td>0-12 KM</td>
                <td>1050</td>
                </tr>
                </table>
            </div>
            </div>
       </React.Fragment>
    )
}

export default Fee
